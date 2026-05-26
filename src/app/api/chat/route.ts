import { NextResponse } from 'next/server';
import { groq } from '@/lib/groq';
import { getServiceSupabase, supabase } from '@/lib/supabase';

const SYSTEM_PROMPT = `You are a professional salon assistant chatbot for Styland Family Salon.

Available salon services:
{SERVICES_CONTEXT}

Rules:
* ONLY answer salon-related questions
* NEVER say you don't know services if services exist in context
* ALWAYS use the provided services data
* Include prices in responses
* Format services clearly (e.g. as a numbered or bulleted list)
* Keep responses short and professional
* Do NOT invent or hallucinate any services or prices.
`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
    }

    const searchQuery = messages[messages.length - 1].content.toLowerCase();
    
    // Use admin client to bypass any RLS issues
    const adminSupabase = getServiceSupabase();

    // 1. Fetch relevant services from Supabase
    let query = adminSupabase.from('services').select('*');
    
    if (searchQuery.includes('women')) {
      query = query.eq('gender_category', 'Women').limit(15);
    } else if (searchQuery.match(/\b(men|man)\b/)) {
      query = query.eq('gender_category', 'Men').limit(15);
    } else if (searchQuery.includes('spa') || searchQuery.includes('facial') || searchQuery.includes('hair') || searchQuery.includes('makeup')) {
      const keyword = searchQuery.includes('spa') ? 'spa' : 
                      searchQuery.includes('facial') ? 'facial' : 
                      searchQuery.includes('makeup') ? 'makeup' : 'hair';
      query = query.ilike('name', `%${keyword}%`).limit(15);
    } else {
      // General fallback if asked "what services do you offer?"
      query = query.limit(15);
    }

    const { data: matchedServices, error: fetchError } = await query;
    
    // 2. Build Context String
    let servicesContext = "";
    if (!fetchError && matchedServices && matchedServices.length > 0) {
      servicesContext = matchedServices.map((service, index) => 
        `${index + 1}. ${service.name} — ₹${service.price}${service.duration ? ` — ${service.duration} mins` : ''}`
      ).join('\n');
    } else {
      servicesContext = "No specific services matched in the database.";
      if (fetchError) console.error("Supabase fetch error:", fetchError);
    }

    // 3. Inject into Groq Prompt
    const injectedSystemPrompt = SYSTEM_PROMPT.replace('{SERVICES_CONTEXT}', servicesContext);

    // 2. Call Groq
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: injectedSystemPrompt },
        // filter out system/welcome messages from client if needed, or pass them
        ...messages.filter((m: {id?: string, role: string, content: string}) => m.id !== 'welcome').map((m: {role: string, content: string}) => ({ role: m.role, content: m.content }))
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.2,
      max_tokens: 500,
    });

    const aiMessage = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

    // 3. Log to Supabase (non-blocking)
    const userMessage = messages[messages.length - 1].content;
    
    adminSupabase.from('chatbot_logs').insert([
      { user_message: userMessage, bot_response: aiMessage }
    ]).then(({ error }) => {
      if (error) console.error("Error logging chat:", error);
    });

    return NextResponse.json({ message: aiMessage });

  } catch (error: unknown) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Failed to process chat request' }, { status: 500 });
  }
}
