import MensServicesPage from "../mens-services/page";

export const metadata = {
  title: "Men's Grooming & Haircut Services in Madhapur, Hyderabad",
  description: "Haircuts from ₹300, beard trims, keratin treatments, facials & body spa for men at STYLAND Salon, Madhapur. Expert male groomers. Walk-in or book online.",
  alternates: {
    canonical: "https://www.stylandfamilysalon.in/men",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Men's Grooming & Salon Services in Hyderabad",
    "description": "Comprehensive men's grooming services including haircuts, beard trims, facials, keratin treatments, hair colouring, manicure, pedicure and body spa at Madhapur, Hyderabad.",
    "url": "https://www.stylandfamilysalon.in/men",
    "provider": {
      "@type": "HairSalon",
      "name": "STYLAND Family Salon",
      "url": "https://www.stylandfamilysalon.in/"
    },
    "areaServed": {
      "@type": "City",
      "name": "Hyderabad"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.stylandfamilysalon.in/" },
        { "@type": "ListItem", "position": 2, "name": "Men's Services", "item": "https://www.stylandfamilysalon.in/men" }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Men's Grooming Services Price List",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Regular Basic Haircut",
          "offers": { "@type": "Offer", "price": "300", "priceCurrency": "INR" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Keratin Treatment",
          "offers": { "@type": "Offer", "price": "3000", "priceCurrency": "INR" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Hydra Premium Facial",
          "offers": { "@type": "Offer", "price": "4000", "priceCurrency": "INR" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Beard Trim",
          "offers": { "@type": "Offer", "price": "150", "priceCurrency": "INR" }
        }
      }
    ]
  }
];

export default function MenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MensServicesPage />
    </>
  );
}
