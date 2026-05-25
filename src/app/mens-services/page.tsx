"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

type ServiceItem = {
  name: string;
  price: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  services: ServiceItem[];
};

const mensMenuData = {
  "Hair Care": [
    { "service": "Royal Hair Spa", "price": "1000 onwards" },
    { "service": "Signature Men Spa", "price": "1200 onwards" },
    { "service": "Luxury Hair Therapy", "price": 2500 },
    { "service": "Premium Scalp Therapy", "price": 2300 },
    { "service": "Crown Care Spa", "price": 2000 },
    { "service": "Dandruff Treatment", "price": 1200 },
    { "service": "Dandruff Therapy", "price": 2500 },
    { "service": "Moisturize Spa", "price": 2200 },
    { "service": "Colour Protect Spa", "price": 2500 }
  ],
  "Hair Treatment": [
    { "service": "Straightening", "price": "2500 onwards" },
    { "service": "Smoothing", "price": 3000 },
    { "service": "Rebounding", "price": 3000 },
    { "service": "Perming", "price": 3500 },
    { "service": "Botox Fiber", "price": 4000 },
    { "service": "Keratin", "price": 3000 },
    { "service": "QOD Treatment", "price": 3500 }
  ],
  "Skin - D-Tan": [
    { "service": "Classic D-Tan", "price": 500 },
    { "service": "Ice Cool D-Tan", "price": 700 },
    { "service": "Sun Damage Repair", "price": 1200 },
    { "service": "Men Skin Revival", "price": 1500 },
    { "service": "Signature D-Tan Care", "price": 850 },
    { "service": "Royal D-Tan Therapy", "price": 800 },
    { "service": "Gold Glow D-Tan", "price": 1600 }
  ],
  "Skin Care": [
    { "service": "Bright & Clear Facial", "price": 1250 },
    { "service": "Fresh Face Treatment", "price": 1100 },
    { "service": "Fruit (Mixed) Facial", "price": 1000 },
    { "service": "Coffee Detox Facial", "price": 1500 },
    { "service": "Skin Recharge Therapy", "price": 2000 },
    { "service": "Diamond Bright Facial", "price": 3000 },
    { "service": "Instant Brightening Treatment", "price": 2500 },
    { "service": "Photo Facial", "price": 4000 },
    { "service": "Party Ready Facial", "price": 1800 }
  ],
  "Facial": [
    { "service": "O3+ Brightening", "price": 3800 },
    { "service": "O3+ Power Brighter", "price": 4000 },
    { "service": "O3+ Shine & Glow", "price": 2500 },
    { "service": "Peel Off Mask O3+", "price": 1500 },
    { "service": "Hydra Facial (Basic)", "price": 2500 },
    { "service": "Hydra Premium", "price": 4000 },
    { "service": "Galvanic (with) Natural Fruit", "price": 3000 },
    { "service": "Anti Aging Treatment", "price": 3500 },
    { "service": "Anti Tan Treatment", "price": 2500 },
    { "service": "Oxygeno Facial", "price": 4000 },
    { "service": "Skin Therapy", "price": "3000 onwards" },
    { "service": "Skin Boosting Therapy", "price": "3500 onwards" }
  ],
  "Skin Care - Wax Rica": [
    { "service": "Full Arms", "price": 650 },
    { "service": "Half Legs", "price": 700 },
    { "service": "Chest", "price": 650 },
    { "service": "Back", "price": "750 onwards" },
    { "service": "Face (Side Face & Neck)", "price": "500 onwards" },
    { "service": "Side Lock", "price": 250 },
    { "service": "Full Body", "price": "4000 onwards" }
  ],
  "Manicure & Pedicure": [
    { "service": "Classic Manicure", "price": 600 },
    { "service": "Signature Nail Care", "price": 500 },
    { "service": "Luxury Hand Spa", "price": 1200 },
    { "service": "Executive Care Treatment", "price": 1000 },
    { "service": "Hand Polish", "price": 1500 },
    { "service": "Candle Spa", "price": 1200 },
    { "service": "Aroma Therapy", "price": 1000 },
    { "service": "Classic Pedicure", "price": "500 onwards" },
    { "service": "Spa Pedicure", "price": 800 },
    { "service": "Bomb Pedicure", "price": 1500 },
    { "service": "Detox Foot Spa", "price": 2000 },
    { "service": "Ice Cool Pedicure", "price": 1800 },
    { "service": "Deep Clean Pedicure", "price": 2000 },
    { "service": "Stress Relief Foot Spa", "price": 1700 },
    { "service": "Candle Foot Spa", "price": 1800 },
    { "service": "Charcoal Foot Detox", "price": 1800 },
    { "service": "Aroma Pedicure", "price": 1200 }
  ],
  "Body Spa": [
    { "service": "Head Massage (30 min)", "price": 400 },
    { "service": "Head Massage + Hair Wash", "price": 500 },
    { "service": "Head Massage + Steam + Hair Wash", "price": 600 },
    { "service": "Head & Foot Massage (40 min)", "price": 1500 },
    { "service": "Back, Neck and Shoulder Massage (60 min)", "price": 1300 },
    { "service": "Candle Spa (60 min)", "price": 2500 },
    { "service": "Body Scrub (60 min)", "price": 1600 },
    { "service": "Body Polishing", "price": 6000 }
  ],
  "Hair Styling": [
    { "service": "Regular Basic Haircut", "price": 300 },
    { "service": "Classic Gentleman Cut", "price": 500 },
    { "service": "Smart Cut", "price": 400 },
    { "service": "Simple Trim", "price": 350 },
    { "service": "Clean Cut", "price": 400 },
    { "service": "Beard Trim", "price": 150 },
    { "service": "Gentleman Grooming", "price": 250 },
    { "service": "Fashion Haircut", "price": 600 },
    { "service": "Stylish Beard", "price": 200 },
    { "service": "Clean Shave", "price": 120 },
    { "service": "Deep Conditioning", "price": 400 }
  ],
  "Hair Colours": [
    { "service": "Global (with Ammonia)", "price": "1000 onwards" },
    { "service": "Global (Ammonia Free)", "price": "1200 onwards" },
    { "service": "Moustache Colour", "price": 200 },
    { "service": "Beard Colour", "price": 400 },
    { "service": "Global Highlights", "price": "1500 onwards" },
    { "service": "One Streak", "price": 250 },
    { "service": "Fashion Colours", "price": 1800 }
  ]
};

const formatPrice = (price: string | number) => {
  if (typeof price === "string" && price.includes("onwards")) {
    return `₹${price.replace(" onwards", "")} onwards`;
  }
  return `₹${price}`;
};

const mensCategories: ServiceCategory[] = Object.entries(mensMenuData).map(([title, services]) => ({
  id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  title,
  services: services.map((s: any) => ({
    name: s.service,
    price: formatPrice(s.price),
  })),
}));

export default function MensServicesPage() {
  const [visibleBlocks, setVisibleBlocks] = useState<Record<string, boolean>>({});
  const firstCategory = mensCategories[0];

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("data-reveal-id");
          if (!id) return;

          setVisibleBlocks((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-black text-white">
      <section className="mx-auto w-full max-w-[1450px] px-4 pb-10 pt-28 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h1 className="text-5xl leading-[0.95] !text-white sm:text-6xl lg:text-7xl">
              Services that
              <span className="mt-2 block italic text-[#d4af37]">define your look</span>
            </h1>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="text-xl leading-relaxed text-white/80 sm:text-2xl">
              Sharp grooming built around your routine, personality, and style.
            </p>
            <a
              href={`#${firstCategory.id}`}
              className="mt-6 inline-flex rounded-full border border-[#d4af37] bg-[#d4af37] px-6 py-3 text-lg font-semibold text-black transition hover:bg-black hover:text-[#d4af37]"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1450px]">
          <div className="sticky top-24 z-10 mb-10 overflow-x-auto scrollbar-hide rounded-full border border-[#d4af37]/30 bg-black/80 p-2 backdrop-blur">
            <div className="flex w-max gap-2">
              {mensCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="rounded-full border border-[#d4af37]/40 px-4 py-2 text-sm font-medium whitespace-nowrap !text-white transition hover:bg-[#d4af37] hover:text-black"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {mensCategories.map((category) => (
              <section
                id={category.id}
                key={category.id}
                data-reveal
                data-reveal-id={category.id}
                className={`scroll-mt-36 transition-all duration-700 ${visibleBlocks[category.id] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
              >
                <h2 className="mb-5 text-3xl font-bold !text-white sm:text-4xl">{category.title}</h2>

                <div className="grid grid-cols-1 items-stretch gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-5">
                  {category.services.map((service) => (
                    <article
                      key={service.name}
                      className="group flex min-h-[84px] items-center justify-between border-t border-white/20 py-4 transition duration-500 hover:translate-x-1"
                    >
                      <p className="mb-0 flex-1 pr-4 text-base !text-white sm:text-lg">
                        {service.name}
                      </p>
                      <span className="ml-4 text-base font-semibold tabular-nums text-[#d4af37] sm:text-lg">
                        {service.price}
                      </span>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
