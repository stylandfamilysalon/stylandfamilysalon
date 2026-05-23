"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

const menServices = [
  {
    title: "Precision Haircut",
    price: "$85",
    description: "Tailored styling, straight razor neck shave, and hot towel finish.",
  },
  {
    title: "Beard Sculpting",
    price: "$55",
    description: "Expert shaping, essential oil treatment, and sharp line detailing.",
  },
  {
    title: "The Executive Package",
    price: "$130",
    description: "Haircut, beard sculpt, and a revitalizing scalp massage.",
  },
];

const womenServices = [
  {
    title: "Signature Styling",
    price: "From $120",
    description: "Bespoke cuts, blowouts, and elegant updos for any occasion.",
  },
  {
    title: "Color Mastery",
    price: "From $180",
    description: "Balayage, foil highlights, and rich, multidimensional full color.",
  },
  {
    title: "Bridal & Glamour",
    price: "POA",
    description: "Flawless makeup application and intricate hair design for your special day.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-[#111111] text-white py-16 md:py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto w-full max-w-[1450px] px-4 sm:px-6 lg:px-8 2xl:px-10 flex flex-col gap-24 md:gap-32">
        
        {/* MEN'S GROOMING SECTION */}
        <div className="flex flex-col gap-10">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                Gents
              </span>
              <h2 className="mt-2 text-4xl font-bold !text-white sm:text-5xl font-serif">
                Men&apos;s Grooming
              </h2>
            </div>
            <Link
              href="/men"
              className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#d4af37] transition hover:text-white"
            >
              View All Men Services
              <HiOutlineArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Content Columns */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-white/5 bg-black"
            >
              <img
                src="https://images.unsplash.com/photo-1593702284287-4161100431c3?auto=format&fit=crop&w=1200&q=80"
                alt="Men's Grooming"
                className="absolute inset-0 h-full w-full object-cover grayscale opacity-80 transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              {menServices.map((service, idx) => (
                <div key={idx} className="border-b border-white/10 py-6 last:border-0 group">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold !text-white font-serif transition-colors group-hover:text-[#d4af37]">
                      {service.title}
                    </h3>
                    <span className="text-lg font-semibold text-[#d4af37]">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 max-w-[85%]">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* WOMEN'S BEAUTY SECTION */}
        <div className="flex flex-col gap-10">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                Ladies
              </span>
              <h2 className="mt-2 text-4xl font-bold !text-white sm:text-5xl font-serif">
                Women&apos;s Beauty
              </h2>
            </div>
            <Link
              href="/women"
              className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#d4af37] transition hover:text-white"
            >
              View All Women Services
              <HiOutlineArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Content Columns */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Services (Left on Desktop, Top on Mobile by order) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-2 order-2 lg:order-1"
            >
              {womenServices.map((service, idx) => (
                <div key={idx} className="border-b border-white/10 py-6 last:border-0 group">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold !text-white font-serif transition-colors group-hover:text-[#d4af37]">
                      {service.title}
                    </h3>
                    <span className="text-lg font-semibold text-[#d4af37]">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 max-w-[85%]">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Image (Right on Desktop, Bottom on Mobile by order) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-white/5 bg-black order-1 lg:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80"
                alt="Women's Beauty"
                className="absolute inset-0 h-full w-full object-cover grayscale opacity-80 transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
