import WomensServicesPage from "../womens-services/page";

export const metadata = {
  title: "Women's Beauty & Hair Services in Madhapur, Hyderabad",
  description: "Haircuts, keratin, waxing, hydra facials, Korean facials, threading & more for women at STYLAND Salon, Madhapur. Experienced stylists. Book an appointment today.",
  alternates: {
    canonical: "https://www.stylandfamilysalon.in/women",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Women's Beauty & Hair Services in Hyderabad",
  "description": "Complete women's beauty services including haircuts, keratin, smoothening, rebounding, waxing, facials (Hydra, Korean, Gold), medi facials, threading, manicure, pedicure, and bridal makeup at STYLAND Family Salon, Madhapur.",
  "url": "https://www.stylandfamilysalon.in/women",
  "provider": {
    "@type": "HairSalon",
    "name": "STYLAND Family Salon",
    "telephone": "+917702397311",
    "url": "https://www.stylandfamilysalon.in/"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Women's Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Women's Haircut & Hair Wash" }, "price": "500", "priceCurrency": "INR" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Keratin Treatment" }, "price": "4000", "priceCurrency": "INR" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hydra Facial" }, "price": "2500", "priceCurrency": "INR" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Threading – Full Face" }, "price": "300", "priceCurrency": "INR" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Korean Facial" }, "price": "3600", "priceCurrency": "INR" }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.stylandfamilysalon.in/" },
      { "@type": "ListItem", "position": 2, "name": "Women's Services", "item": "https://www.stylandfamilysalon.in/women" }
    ]
  }
};

export default function WomenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WomensServicesPage />
    </>
  );
}
