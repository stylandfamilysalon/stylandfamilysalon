import { useState, useRef, useEffect } from 'react';

export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

type BookingState = {
  active: boolean;
  step: 'none' | 'name' | 'mobile' | 'email' | 'service' | 'date' | 'time' | 'confirming';
  data: {
    customer_name?: string;
    mobile?: string;
    email?: string;
    service_id?: string;
    service_name?: string;
    appointment_date?: string;
    appointment_time?: string;
  };
};

export function useChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Hello! Welcome to Styland Family Salon. How can I help you today? You can ask about our services, pricing, or book an appointment.',
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [booking, setBooking] = useState<BookingState>({
    active: false,
    step: 'none',
    data: {},
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString() + '-' + Math.random().toString(36).substring(2, 9), role, content },
    ]);
  };

  const startBooking = () => {
    setBooking({ active: true, step: 'name', data: {} });
    addMessage('assistant', "Great! Let's book your appointment. May I have your full name?");
  };

  const handleBookingStep = async (content: string) => {
    const { step, data } = booking;
    
    if (step === 'name') {
      setBooking({ ...booking, step: 'mobile', data: { ...data, customer_name: content } });
      addMessage('assistant', `Thank you, ${content}. Could you please provide your mobile number?`);
    } else if (step === 'mobile') {
      // Basic validation
      if (!/^[0-9]{10}$/.test(content.replace(/[^0-9]/g, ''))) {
        addMessage('assistant', "That doesn't look like a valid 10-digit Indian mobile number. Please try again.");
        return;
      }
      setBooking({ ...booking, step: 'email', data: { ...data, mobile: content } });
      addMessage('assistant', "Got it! What is your email address?");
    } else if (step === 'email') {
      if (!/^\S+@\S+\.\S+$/.test(content)) {
        addMessage('assistant', "That doesn't look like a valid email. Please try again.");
        return;
      }
      setBooking({ ...booking, step: 'service', data: { ...data, email: content } });
      addMessage('assistant', "Which service would you like to book? (e.g., Haircut, Hair Spa)");
    } else if (step === 'service') {
      setBooking({ ...booking, step: 'date', data: { ...data, service_name: content } });
      addMessage('assistant', "And what date would you prefer? (Please use YYYY-MM-DD format, e.g., 2026-05-30)");
    } else if (step === 'date') {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(content.trim())) {
        addMessage('assistant', "That doesn't look like a valid date format. Please use YYYY-MM-DD (e.g., 2026-05-30).");
        return;
      }
      setBooking({ ...booking, step: 'time', data: { ...data, appointment_date: content.trim() } });
      addMessage('assistant', "Almost done! What time would you prefer? (Please use 24-hour format HH:MM, e.g., 17:00)");
    } else if (step === 'time') {
      if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(content.trim())) {
        addMessage('assistant', "That doesn't look like a valid time format. Please use 24-hour HH:MM (e.g., 17:00 for 5 PM).");
        return;
      }
      const finalData = { ...data, appointment_time: content.trim() };
      setBooking({ ...booking, step: 'confirming', data: finalData });
      
      setIsLoading(true);
      try {
        const response = await fetch('/api/book-appointment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalData),
        });
        
        const result = await response.json();
        
        if (response.ok) {
          addMessage('assistant', result.message || `Your appointment for ${finalData.service_name} on ${finalData.appointment_date} at ${finalData.appointment_time} has been booked successfully!`);
        } else {
          addMessage('assistant', `Sorry, there was an error: ${result.error}`);
        }
      } catch {
        addMessage('assistant', "Sorry, I couldn't complete the booking right now due to a network error. Please try again later.");
      } finally {
        setIsLoading(false);
        setBooking({ active: false, step: 'none', data: {} });
      }
    }
  };

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    addMessage('user', content);

    // If user is trying to book or is in booking flow
    if (booking.active) {
      if (content.toLowerCase() === 'cancel' || content.toLowerCase() === 'stop') {
        setBooking({ active: false, step: 'none', data: {} });
        addMessage('assistant', "Booking cancelled. How else can I help you?");
        return;
      }
      await handleBookingStep(content);
      return;
    }

    if (content.toLowerCase().includes('book appointment') || content.toLowerCase().includes('book an appointment')) {
      startBooking();
      return;
    }

    // General chat flow via Groq
    setIsLoading(true);
    try {
      // Send message history to our backend
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages.map(m => ({ role: m.role, content: m.content })), { role: 'user', content }]
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        addMessage('assistant', data.message);
      } else {
        addMessage('assistant', data.error || "I'm having trouble connecting to my brain right now. Please try again later.");
      }
    } catch {
      addMessage('assistant', "Something went wrong. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isOpen,
    setIsOpen,
    isLoading,
    sendMessage,
    messagesEndRef,
    startBooking
  };
}
