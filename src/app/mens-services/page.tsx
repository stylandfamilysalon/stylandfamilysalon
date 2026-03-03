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

const mensCategories: ServiceCategory[] = [
  {
    id: "haircuts-styling",
    title: "Haircuts & Styling",
    services: [
      { name: "Classic Gent Cut", price: "$25" },
      { name: "Skin Fade", price: "$35" },
      { name: "Scissor Cut", price: "$30" },
      { name: "Textured Crop", price: "$34" },
      { name: "Pompadour Style", price: "$38" },
      { name: "Crew Cut", price: "$24" },
      { name: "Buzz Cut", price: "$20" },
      { name: "Long Hair Layering", price: "$42" },
      { name: "Hair Wash & Blow Dry", price: "$18" },
      { name: "Premium Styling Finish", price: "$16" },
    ],
  },
  {
    id: "beard-grooming",
    title: "Beard Grooming",
    services: [
      { name: "Beard Trim", price: "$18" },
      { name: "Beard Shape-Up", price: "$20" },
      { name: "Royal Beard Sculpt", price: "$28" },
      { name: "Beard Line Definition", price: "$16" },
      { name: "Hot Towel Beard Service", price: "$24" },
      { name: "Beard Conditioning", price: "$15" },
      { name: "Gray Beard Blending", price: "$22" },
      { name: "Full Beard Detailing", price: "$27" },
      { name: "Mustache Grooming", price: "$12" },
      { name: "Beard Spa Ritual", price: "$32" },
    ],
  },
  {
    id: "shaving-services",
    title: "Shaving Services",
    services: [
      { name: "Classic Clean Shave", price: "$22" },
      { name: "Hot Towel Shave", price: "$28" },
      { name: "Luxury Razor Shave", price: "$35" },
      { name: "Express Shave", price: "$16" },
      { name: "Head Shave", price: "$30" },
      { name: "Shave with Steam", price: "$26" },
      { name: "Sensitive Skin Shave", price: "$24" },
      { name: "Contour Shave", price: "$20" },
      { name: "Aftershave Cooling Therapy", price: "$14" },
      { name: "Deluxe Shave Package", price: "$40" },
    ],
  },
  {
    id: "hair-color",
    title: "Hair Color",
    services: [
      { name: "Root Touch-Up", price: "$40" },
      { name: "Natural Tone Color", price: "$48" },
      { name: "Gray Coverage", price: "$45" },
      { name: "Fashion Color", price: "$60" },
      { name: "Highlights", price: "$65" },
      { name: "Global Color", price: "$75" },
      { name: "Beard Color", price: "$30" },
      { name: "Color + Haircut Combo", price: "$88" },
      { name: "Ammonia-Free Color", price: "$58" },
      { name: "Premium Gloss Finish", price: "$20" },
    ],
  },
  {
    id: "facial-care",
    title: "Facial Care",
    services: [
      { name: "Deep Clean Facial", price: "$45" },
      { name: "Anti-Acne Facial", price: "$50" },
      { name: "Hydration Facial", price: "$52" },
      { name: "Instant Glow Facial", price: "$55" },
      { name: "Charcoal Detox Facial", price: "$58" },
      { name: "Anti-Aging Facial", price: "$65" },
      { name: "Brightening Facial", price: "$60" },
      { name: "Express Facial", price: "$30" },
      { name: "D-Tan Facial", price: "$48" },
      { name: "Luxury Gold Facial", price: "$75" },
    ],
  },
  {
    id: "skin-treatments",
    title: "Skin Treatments",
    services: [
      { name: "D-Tan Cleanup", price: "$25" },
      { name: "Blackhead Removal", price: "$20" },
      { name: "Under-Eye Refresh", price: "$18" },
      { name: "Face Cleanup", price: "$28" },
      { name: "Pigmentation Control", price: "$42" },
      { name: "Hydra Skin Boost", price: "$55" },
      { name: "Pore Tightening Therapy", price: "$38" },
      { name: "Oil Control Treatment", price: "$35" },
      { name: "Calming Skin Repair", price: "$40" },
      { name: "Advanced Skin Revive", price: "$62" },
    ],
  },
  {
    id: "manicure-pedicure",
    title: "Manicure & Pedicure",
    services: [
      { name: "Classic Manicure", price: "$22" },
      { name: "Classic Pedicure", price: "$28" },
      { name: "Spa Manicure", price: "$30" },
      { name: "Spa Pedicure", price: "$36" },
      { name: "Nail Buff & Shape", price: "$12" },
      { name: "Cuticle Care", price: "$14" },
      { name: "Foot Relax Therapy", price: "$20" },
      { name: "Hand Rejuvenation", price: "$18" },
      { name: "Men's Grooming Combo", price: "$48" },
      { name: "Luxury Nail Care", price: "$42" },
    ],
  },
  {
    id: "waxing-threading",
    title: "Waxing & Threading",
    services: [
      { name: "Eyebrow Threading", price: "$8" },
      { name: "Forehead Threading", price: "$6" },
      { name: "Ear Wax", price: "$10" },
      { name: "Nose Wax", price: "$10" },
      { name: "Cheek Wax", price: "$12" },
      { name: "Full Face Wax", price: "$30" },
      { name: "Underarm Wax", price: "$14" },
      { name: "Half Arm Wax", price: "$18" },
      { name: "Full Arm Wax", price: "$28" },
      { name: "Chest + Back Wax", price: "$55" },
    ],
  },
  {
    id: "head-spa",
    title: "Head Spa",
    services: [
      { name: "Oil Massage", price: "$20" },
      { name: "Head & Neck Massage", price: "$24" },
      { name: "Stress Relief Head Spa", price: "$35" },
      { name: "Anti-Dandruff Therapy", price: "$38" },
      { name: "Scalp Detox", price: "$42" },
      { name: "Hair Fall Control Spa", price: "$45" },
      { name: "Cooling Scalp Session", price: "$30" },
      { name: "Premium Cream Bath", price: "$40" },
      { name: "Herbal Nourish Spa", price: "$36" },
      { name: "Luxury Head Spa Ritual", price: "$55" },
    ],
  },
  {
    id: "mens-packages",
    title: "Men's Packages",
    services: [
      { name: "Basic Grooming Package", price: "$49" },
      { name: "Weekly Refresh Package", price: "$79" },
      { name: "Executive Grooming Package", price: "$99" },
      { name: "Date Night Package", price: "$89" },
      { name: "Wedding Groom Package", price: "$149" },
      { name: "Hair + Beard + Facial", price: "$85" },
      { name: "Haircut + Color Combo", price: "$95" },
      { name: "Shave + Facial Combo", price: "$70" },
      { name: "Head Spa + Pedicure", price: "$78" },
      { name: "Complete Luxury Package", price: "$189" },
    ],
  },
];

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
          <div className="sticky top-24 z-10 mb-10 overflow-x-auto rounded-full border border-[#d4af37]/30 bg-black/80 p-2 backdrop-blur">
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
                className={`scroll-mt-36 transition-all duration-700 ${
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

      <Footer />
    </main>
  );
}
