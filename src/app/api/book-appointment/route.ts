import { NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const { 
      customer_name, 
      mobile, 
      email, 
      service_name, 
      appointment_date, 
      appointment_time 
    } = data;

    console.log('BOOKING DATA:', data);

    if (!customer_name || !mobile || !appointment_date || !appointment_time) {
      return NextResponse.json({ error: 'Missing required booking fields.' }, { status: 400 });
    }

    const adminSupabase = getServiceSupabase();

    // 1. Look up the service_id from the services table using the service_name
    let service_id = null;
    if (service_name) {
      const { data: serviceData, error: serviceError } = await adminSupabase
        .from('services')
        .select('id')
        .ilike('name', `%${service_name}%`)
        .limit(1)
        .single();
      
      if (!serviceError && serviceData) {
        service_id = serviceData.id;
      }
    }

    // 2. Check for existing slot
    // We do a basic string match. Note: Postgres dates expect YYYY-MM-DD. If user inputs "Tomorrow", this might fail Postgres validation entirely.
    // For now, we will attempt the match using the raw input.
    const { data: existingSlot, error: checkError } = await adminSupabase
      .from('appointments')
      .select('id')
      .eq('appointment_date', appointment_date)
      .eq('appointment_time', appointment_time)
      .limit(1)
      .maybeSingle();

    if (existingSlot) {
      return NextResponse.json({ 
        success: false, 
        message: 'This slot is already booked. Please choose another time or date.' 
      });
    }

    // 3. Insert into appointments
    const { error } = await adminSupabase
      .from('appointments')
      .insert([
        {
          customer_name,
          mobile,
          email,
          service_id, // now sending the actual UUID, or null if not found
          appointment_date,
          appointment_time,
          status: 'pending'
        }
      ]);

    if (error) {
      console.error('SUPABASE BOOKING ERROR:', error);
      return NextResponse.json({ 
        success: false, 
        message: error.message 
      }, { status: 400 });
    }

    // 4. Append to Google Sheets
    try {
      if (
        process.env.GOOGLE_SHEETS_CLIENT_EMAIL &&
        process.env.GOOGLE_SHEETS_PRIVATE_KEY &&
        process.env.GOOGLE_SHEETS_ID
      ) {
        const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n");
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            private_key: privateKey,
          },
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });
        const timestamp = new Date().toISOString();

        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEETS_ID,
          range: "Sheet1!A:G", // Assuming columns: Timestamp, Name, Mobile, Email, Service, Date, Time
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [[timestamp, customer_name, mobile, email, service_name || 'N/A', appointment_date, appointment_time]],
          },
        });
      } else {
        console.warn("Google Sheets credentials are not fully configured in environment variables.");
      }
    } catch (sheetsError) {
      console.error("Google Sheets append failed:", sheetsError);
    }

    return NextResponse.json({ 
      success: true, 
      message: `Your appointment for ${service_name || 'your selected service'} on ${appointment_date} at ${appointment_time} has been booked successfully.`
    });

  } catch (error: unknown) {
    console.error('Booking API Error:', error);
    return NextResponse.json({ error: 'Failed to process booking request' }, { status: 500 });
  }
}
