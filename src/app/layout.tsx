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
  title: "STYLAND Family Salon | Unisex Salon in Madhapur, Hyderabad",
  description: "Visit STYLAND Family Salon in Madhapur, Hyderabad — premium unisex salon offering haircuts, bridal makeup, keratin treatments, facials & more. Book your appointment today.",
  alternates: {
    canonical: "https://www.stylandfamilysalon.in/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "STYLAND Family Salon",
    "url": "https://www.stylandfamilysalon.in/",
    "logo": "https://www.stylandfamilysalon.in/logo.png",
    "image": "https://www.stylandfamilysalon.in/bridal-makeup.png",
    "description": "Premium unisex salon in Madhapur, Hyderabad offering haircuts, bridal makeup, keratin treatments, facials, and grooming services for men, women, and families.",
    "telephone": "+917702397311",
    "email": "info@stylandfamilysalon.in",
    "foundingDate": "2000",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Doctor's Colony, Madhapur",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4401,
      "longitude": 78.3489
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "487",
      "bestRating": "5"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Salon Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Men's Grooming & Haircut" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Women's Beauty & Hair Treatments" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Makeup & Pre-Bridal Packages" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Keratin Treatment" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hydra Facial" } }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/stylandfamilysalon",
      "https://www.instagram.com/stylandfamilysalon"
    ]
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2YTQ5F5PVH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2YTQ5F5PVH');
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-black" suppressHydrationWarning>
        <Navbar />
        <main className="pt-24">{children}</main>
        <ChatbotWidget />
      </body>
    </html>
  );
}