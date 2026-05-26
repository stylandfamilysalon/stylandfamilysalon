-- Create services table
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    category TEXT,
    gender_category TEXT,
    price NUMERIC,
    duration TEXT,
    description TEXT,
    image_url TEXT,
    is_popular BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_name TEXT NOT NULL,
    mobile TEXT NOT NULL,
    email TEXT,
    service_id UUID REFERENCES services(id),
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Create chatbot_logs table
CREATE TABLE IF NOT EXISTS chatbot_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_message TEXT NOT NULL,
    bot_response TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Optional: Add some basic RLS policies (adjust according to your security needs)
-- For example, allowing public read access to services:
-- ALTER TABLE services ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow public read access to services" ON services FOR SELECT USING (true);
