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

const categoryNames = [
  "Hair Styling",
  "Hair Coloring",
  "Facials",
  "Manicure",
  "Pedicure",
  "Waxing",
  "Threading",
  "Makeup",
  "Bridal Services",
  "Spa Therapies",
];

const serviceTemplates = [
  { label: "Classic", amount: 45 },
  { label: "Premium", amount: 60 },
  { label: "Luxury", amount: 75 },
  { label: "Express", amount: 35 },
  { label: "Deluxe", amount: 85 },
  { label: "Advanced", amount: 95 },
  { label: "Signature", amount: 110 },
  { label: "Glow", amount: 70 },
  { label: "Revive", amount: 80 },
  { label: "Ultimate", amount: 125 },
];

const categories: ServiceCategory[] = categoryNames.map((name, categoryIndex) => ({
  id: name.toLowerCase().replace(/\s+/g, "-"),
  title: name,
  services: serviceTemplates.map((template, serviceIndex) => ({
    name: `${template.label} ${name} ${serviceIndex + 1}`,
    price: `$${template.amount + categoryIndex * 5}`,
  })),
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
          <div className="sticky top-24 z-10 mb-10 overflow-x-auto rounded-full border border-[#d4af37]/30 bg-black/80 p-2 backdrop-blur">
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
              <a href="tel:+12124567899" className="cta-btn cta-btn-primary">
                Book Your Slot
              </a>
              <a href="mailto:info@saloni.com" className="cta-btn cta-btn-secondary">
                Info@Saloni.Com
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
