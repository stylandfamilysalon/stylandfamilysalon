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

const womensMenuData = {
  "Threading": [
    { "service": "Eyebrow", "price": 70 },
    { "service": "Upperlip", "price": 50 },
    { "service": "Forehead", "price": 50 },
    { "service": "Chin", "price": 50 },
    { "service": "Full Face", "price": 300 }
  ],
  "Haircut's": [
    { "service": "Basic Haircut & Hairwash", "price": 500 },
    { "service": "Advance Haircut & Hairwash", "price": 850 },
    { "service": "Hairwash & Blowdry", "price": "600 onwards" },
    { "service": "Hairwash & Ironing", "price": 1200 },
    { "service": "Formal Hairstyling", "price": 1000 },
    { "service": "Fashion Advance Haircut", "price": "1000 onwards" },
    { "service": "Ironing & Hairwash", "price": "1200 onwards" },
    { "service": "Tonging & Hairwash", "price": "1000 onwards" },
    { "service": "Wash, Condition & Quick Dry", "price": 400 }
  ],
  "Hair Treatments": [
    { "service": "Straightening", "price": "4000 onwards" },
    { "service": "Smoothening", "price": "5500 onwards" },
    { "service": "Rebounding", "price": 4500 },
    { "service": "Keratin", "price": "4000 onwards" },
    { "service": "Qod", "price": "6000 onwards" },
    { "service": "Botox", "price": "7000 onwards" },
    { "service": "Nanoplastic", "price": "6000 onwards" }
  ],
  "Hair Coloring": [
    { "service": "Root Touchup (Majirel)", "price": 1200 },
    { "service": "Root Touchup (Inoa)", "price": 1500 },
    { "service": "Global Base Colour", "price": "3000 onwards" },
    { "service": "Global Fashion Colour", "price": "4000 onwards" },
    { "service": "3D Fantasy Colour", "price": 3000 },
    { "service": "Per Steak", "price": 500 },
    { "service": "One Section", "price": 800 }
  ],
  "Hair Care": [
    { "service": "Basic Hair Spa", "price": 1500 },
    { "service": "Silk Therapy", "price": 2500 },
    { "service": "Elite Hair Repair", "price": 1800 },
    { "service": "Dandruff Treatment (Basic)", "price": 1500 },
    { "service": "Crown Restore Spa", "price": 2600 },
    { "service": "Keratin Bliss", "price": 3000 },
    { "service": "Deep Nourish Spa", "price": 1800 },
    { "service": "Pure Roots Spa", "price": 2000 },
    { "service": "Diamond Shine Spa", "price": "3000 onwards" }
  ],
  "Cleanup": [
    { "service": "Fruit Cleanup", "price": 800 },
    { "service": "Gold Cleanup", "price": 1200 },
    { "service": "Silver Cleanup", "price": 1000 },
    { "service": "Insta Cleanup", "price": 850 },
    { "service": "Deep Cleansing", "price": 1110 },
    { "service": "Korean Cleanup", "price": 1500 }
  ],
  "D-Tan & Skin Treatment": [
    { "service": "Glow Treatment", "price": 500 },
    { "service": "Tan Erase Luxe", "price": 700 },
    { "service": "Golden Glow D-Tan", "price": 1000 },
    { "service": "Sunkiss Repair", "price": 1200 },
    { "service": "Aura Bright", "price": 1000 },
    { "service": "Skin Polish Ritual", "price": 1500 },
    { "service": "Crystal Bright D-Tan", "price": 999 },
    { "service": "Full Body Skin Polish", "price": 3000 }
  ],
  "Pedicure & Manicure": [
    { "service": "Classic", "pedicure_price": 600, "manicure_price": 550 },
    { "service": "Premium", "pedicure_price": 1000, "manicure_price": 850 },
    { "service": "Spa", "pedicure_price": 850, "manicure_price": 750 },
    { "service": "Deep Clean", "pedicure_price": 1500, "manicure_price": 1000 },
    { "service": "Hydra Foot Spa", "pedicure_price": 1800, "manicure_price": 1200 },
    { "service": "Signature Manicure", "price": 1100 },
    { "service": "Hand Polish Manicure", "price": 1500 },
    { "service": "Candle", "pedicure_price": 1800, "manicure_price": 1200 },
    { "service": "Ice Cream", "pedicure_price": 2000, "manicure_price": 1300 },
    { "service": "Bubble", "pedicure_price": 1200, "manicure_price": 900 },
    { "service": "Pedi & Medi Combo (Basic)", "price": 1000 },
    { "service": "Premium Pedi & Mani Combo", "price": 1600 }
  ],
  "Facial": [
    { "service": "Fruit (Mixed)", "price": 1200 },
    { "service": "Wine Facial", "price": 1800 },
    { "service": "Shahnaz (Herbal)", "price": 3500 },
    { "service": "Gold Facial (Premium)", "price": 3500 },
    { "service": "Gold Facial (Basic)", "price": 2000 },
    { "service": "O3+ Bridal (DtanFree)", "price": 3800 },
    { "service": "Antiaging Facial", "price": 2500 },
    { "service": "O3+ Shine & Glow", "price": 2500 },
    { "service": "Anti Tan Facial", "price": 2000 },
    { "service": "Banana Facial", "price": 2000 },
    { "service": "Whitening Facial", "price": 1800 },
    { "service": "Silver Tone", "price": 2000 },
    { "service": "Charcoal", "price": 1800 },
    { "service": "Insta Glow", "price": 2000 },
    { "service": "Acne Healing Facial (Ozone)", "price": 2300 },
    { "service": "Galvanic Facial (Fruit)", "price": 2500 },
    { "service": "Natural Fruit Facial", "price": 2000 },
    { "service": "Hydra Facial (Basic)", "price": 2500 },
    { "service": "Korean Facial", "price": 3600 },
    { "service": "Korean & Hydra Facial", "price": 4000 },
    { "service": "Complexion Brightener", "price": 2200 },
    { "service": "Xpress Facial", "price": 1700 }
  ],
  "Medi Facial's & Treatment": [
    { "service": "Oxgeneo Treatment", "price": 4000 },
    { "service": "Korean Whitening", "price": 4500 },
    { "service": "Lacto Peel Treatment", "price": 2000 },
    { "service": "Yellow Peel", "price": 6000 },
    { "service": "Pimple Treatment", "price": 2000 },
    { "service": "Acne Treatment", "price": 4000 },
    { "service": "Bridalglow Therapy", "price": 5600 },
    { "service": "Carbon with Toning (Package)", "price": "25000 onwards" }
  ],
  "Waxing": [
    { "service": "Full Arms", "price": 550 },
    { "service": "Full Legs", "price": "750 onwards" },
    { "service": "Half Legs", "price": 500 },
    { "service": "Under Arms", "price": 200 },
    { "service": "Upper Lip (Peel)", "price": 100 },
    { "service": "Full Face (Peel)", "price": 550 },
    { "service": "Haldi Wax Full Body", "price": 3500 },
    { "service": "White Chocolate (Rica)", "price": 3000 }
  ],
  "Massage Therapy": [
    { "service": "Amora Spa (60 min)", "price": 1600 },
    { "service": "Swedish Spa (60 min)", "price": 2000 },
    { "service": "Head Massage", "price": 500 },
    { "service": "Head Massage with Hair Wash + Blast Dry", "price": 800 },
    { "service": "Herbal Natural Head Massage", "price": 700 },
    { "service": "Head & Shoulder (60 min)", "price": 1500 },
    { "service": "Body Scrub", "price": 1500 },
    { "service": "Body Polishing", "price": 7000 },
    { "service": "Foot Massage (30 min)", "price": 650 },
    { "service": "Foot and Head Massage", "price": 1100 },
    { "service": "Body Steam (20 min)", "price": 1000 }
  ],
  "Bridal & Makeup": [
    { "service": "Saree Dropping", "price": "600 onwards" },
    { "service": "Party Makeup", "price": 3000 },
    { "service": "Bridal Makeup", "price": 20000 },
    { "service": "HD Makeup", "price": 25000 },
    { "service": "Air Brush", "price": 30000 }
  ]
};

const formatPrice = (price: string | number) => {
  if (typeof price === "string" && price.includes("onwards")) {
    return `₹${price.replace(" onwards", "")} onward`;
  }
  return `₹${price}`;
};

const categories: ServiceCategory[] = Object.entries(womensMenuData).map(([title, services]) => ({
  id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  title,
  services: services.map((s: any) => {
    let priceStr = "";
    if (s.pedicure_price !== undefined && s.manicure_price !== undefined) {
      priceStr = `Pedi: ₹${s.pedicure_price} / Mani: ₹${s.manicure_price}`;
    } else {
      priceStr = formatPrice(s.price);
    }
    return {
      name: s.service,
      price: priceStr,
    };
  }),
}));

export default function WomensServicesPage() {
  const [visibleBlocks, setVisibleBlocks] = useState<Record<string, boolean>>({});
  const firstCategory = categories[0];

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
              <span className="mt-2 block italic text-[#d4af37]">speak your style</span>
            </h1>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="text-xl leading-relaxed text-white/80 sm:text-2xl">
              Style that fits your schedule, your energy, and your aesthetic.
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
              {categories.map((category) => (
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
            {categories.map((category) => (
              <section
                id={category.id}
                key={category.id}
                data-reveal
                data-reveal-id={category.id}
                className={`scroll-mt-36 transition-all duration-700  ${
                  visibleBlocks[category.id] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
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

      <section className="cta-shell px-4 pb-16 sm:px-6 md:pb-20 lg:px-8 2xl:px-10 pt-20">
        <div className="cta-card mx-auto w-full max-w-[1450px]">
          <div className="cta-noise" aria-hidden />
          <div className="cta-content">
            <span className="cta-kicker">
              <span className="cta-dot" aria-hidden />
              Call To Action
            </span>

            <h2 className="cta-title">Book your spot today &amp; step out looking your best.</h2>

            <div className="cta-actions">
              <a href="tel:+917702397311" className="cta-btn cta-btn-primary">
                Book Your Slot
              </a>
              <a href="tel:+917702397311" className="cta-btn cta-btn-secondary">
                Call Now
              </a>
            </div>

            <p className="cta-meta">
              Book your slot through{" "}
              <a href="#" className="cta-inline-link">
                Google Calendar
              </a>{" "}
              or{" "}
              <a href="#" className="cta-inline-link">
                Apple Calendar
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
