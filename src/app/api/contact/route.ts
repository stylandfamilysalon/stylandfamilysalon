import { NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";
import * as z from "zod";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Define validation schema for the backend to match the frontend
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  subject: z.string().min(2).max(100),
  message: z.string().min(10).max(1000),
  honeypot: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate the incoming data
    const validatedData = formSchema.parse(body);

    // If honeypot is filled out, quietly ignore the request to prevent spam
    if (validatedData.honeypot && validatedData.honeypot.length > 0) {
      return NextResponse.json({ success: true, message: "Spam detected but ignored" }, { status: 200 });
    }

    const { name, email, phone, subject, message } = validatedData;
    const timestamp = new Date().toISOString();

    // 1. Send Email via Resend
    // We send from 'onboarding@resend.dev' by default unless you have verified your domain
    try {
      await resend.emails.send({
        from: "Salon Contact Form <onboarding@resend.dev>", 
        to: process.env.CONTACT_EMAIL_TO || "nithinguggilla94@gmail.com",
        subject: `New Contact Request: ${subject}`,
        replyTo: email,
        html: `
          <h2>New Contact Request from ${name}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <h3>Message:</h3>
          <p>${message.replace(/\\n/g, "<br>")}</p>
          <hr />
          <p><small>Sent at: ${timestamp}</small></p>
        `,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // We don't fail the whole request if email fails, but we could.
    }

    // 2. Append to Google Sheets
    try {
      if (
        process.env.GOOGLE_SHEETS_CLIENT_EMAIL &&
        process.env.GOOGLE_SHEETS_PRIVATE_KEY &&
        process.env.GOOGLE_SHEETS_ID
      ) {
        // Handle newline characters in the private key from environment variables
        const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n");

        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            private_key: privateKey,
          },
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEETS_ID,
          range: "Sheet1!A:F", // Adjust if your sheet name is different
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [[timestamp, name, email, phone, subject, message]],
          },
        });
      } else {
        console.warn("Google Sheets credentials are not fully configured in environment variables.");
      }
    } catch (sheetsError) {
      console.error("Google Sheets append failed:", sheetsError);
      // Again, we log the error but still return success if the validation passed
      // In production, you might want to return an error depending on strictness
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact Form Error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data provided" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
