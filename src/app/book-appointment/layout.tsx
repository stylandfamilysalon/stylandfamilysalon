export const metadata = {
  title: "Book Salon Appointment Online | STYLAND Madhapur",
  description: "Schedule your haircut, bridal makeup, or spa session at STYLAND Family Salon, Madhapur. Easy online booking, flexible slots, and premium service guaranteed.",
  alternates: {
    canonical: "https://www.stylandfamilysalon.in/book-appointment",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Book an Appointment at STYLAND Family Salon",
  "url": "https://www.stylandfamilysalon.in/book-appointment",
  "description": "Book your appointment online for haircuts, styling, beauty, and grooming services at STYLAND Family Salon in Madhapur, Hyderabad.",
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.stylandfamilysalon.in/book-appointment",
      "inLanguage": "en-US",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Salon Appointment"
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.stylandfamilysalon.in/" },
      { "@type": "ListItem", "position": 2, "name": "Book Appointment", "item": "https://www.stylandfamilysalon.in/book-appointment" }
    ]
  }
};

export default function BookAppointmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
