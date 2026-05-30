import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Playfair_Display, Inter } from "next/font/google";
import { ChatbotWidget } from "@/components/chatbot/ChatbotWidget";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "STYLAND Family Salon | Premium Unisex Salon in Madhapur, Hyderabad",
  description: "Experience premium hair, beauty, and grooming services at STYLAND Family Salon, Madhapur, Hyderabad. Professional stylists, affordable pricing, and exceptional customer care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-black" suppressHydrationWarning>
        <Navbar />
        <main className="pt-24">{children}</main>
        <ChatbotWidget />
      </body>
    </html>
  );
}