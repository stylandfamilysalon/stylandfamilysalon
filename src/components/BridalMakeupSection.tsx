"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

const bridalServices = [
  {
    title: "Pre-Bridal Skincare",
    description:
      "Rejuvenating facials and treatments to ensure a flawless canvas for your big day.",
  },
  {
    title: "Airbrush Makeup",
    description:
      "Long-lasting, HD airbrush makeup for a seamless and photogenic finish.",
  },
  {
    title: "Traditional Bridal Styling",
    description:
      "Classic makeup, intricate hair styling, and professional dupatta draping.",
  },
  {
    title: "Reception Glamour",
    description:
      "Bold and elegant evening looks designed to make you the center of attention.",
  },
];

export default function BridalMakeupSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#ede9e5] py-16 text-white lg:py-20">
      {/* Background Decor */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px]" />

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1fr] lg:gap-12">

          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1rem] border border-white/10 shadow-2xl lg:max-w-lg"
          >
            <img
              src="/bridal-makeup.png"
              alt="Beautiful Bridal Makeup"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Quote */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/30 p-5 text-center backdrop-blur-md">
              <p className="font-serif text-lg italic text-[#d4af37] md:text-xl">
                "Your perfect day deserves a flawless look."
              </p>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 max-w-xl"
          >
            {/* Badge */}
            <span className="mb-4 inline-block rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              Bridal Exclusives
            </span>

            {/* Heading */}
            <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
              Flawless
              <span className="italic text-[#d4af37]">
                Bridal Makeup
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-lg text-base leading-relaxed text-black/70">
              We specialize in creating breathtaking bridal transformations
              that reflect your unique beauty and style.
            </p>

            {/* Services */}
            <ul className="mt-8 flex flex-col gap-4">
              {bridalServices.map((service, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  {/* Golden Bullet */}
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d4af37]" />

                  <div>
                    <h4 className="mb-1 font-serif text-md font-semibold text-[#d4af37]">
                      {service.title}
                    </h4>

                    <p className="max-w-md text-sm leading-relaxed text-black/60">
                      {service.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                Book Your Trial Now
                <HiOutlineArrowRight className="text-lg" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}