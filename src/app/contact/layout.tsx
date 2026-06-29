export const metadata = {
  title: "Contact STYLAND Family Salon | Madhapur, Hyderabad",
  description: "Get in touch with STYLAND Family Salon in Madhapur. Find our location, phone number, email, and working hours. Call +91 77023 97311 for bookings.",
  alternates: {
    canonical: "https://www.stylandfamilysalon.in/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact STYLAND Family Salon",
  "url": "https://www.stylandfamilysalon.in/contact",
  "description": "Contact STYLAND Family Salon in Madhapur, Hyderabad. Call +91 77023 97311 or visit our salon for premium grooming services.",
  "mainEntity": {
    "@type": "HairSalon",
    "name": "STYLAND Family Salon",
    "telephone": "+917702397311",
    "email": "info@stylandfamilysalon.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Doctor's Colony, Madhapur",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "10:00",
        "closes": "21:00"
      }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.stylandfamilysalon.in/" },
      { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.stylandfamilysalon.in/contact" }
    ]
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
