"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import Link from "next/link";
import { PiMaskHappyFill } from "react-icons/pi";
import { HiArrowLeft } from "react-icons/hi";

export default function BookAppointmentPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-black lg:h-screen lg:flex-row lg:overflow-hidden">
      {/* LEFT SIDE: 40% - Image & Branding */}
      <section className="relative flex min-h-[30vh] w-full flex-col justify-between overflow-hidden lg:h-screen lg:w-[40%]">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-[#d4af37]/5" />

        {/* Top Header / Back Link */}
        <div className="relative z-10 flex items-center justify-between p-6 sm:p-8 lg:p-12">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-transform group-hover:-translate-x-1">
              <HiArrowLeft />
            </span>
            Back to Home
          </Link>
        </div>

        {/* Floating Content */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md sm:p-8"
          >
            <span className="inline-block rounded-full bg-[#d4af37]/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              Reserve Your Spot
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight !text-white sm:text-5xl lg:text-6xl">
              Book Your <br className="hidden lg:block" />
              <span className="italic !text-[#d4af37]">Appointment</span>
            </h1>
            <p className="mt-4 max-w-sm text-lg text-white/80">
              Luxury grooming & beauty experience tailored exclusively for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RIGHT SIDE: 60% - Booking Widget */}
      <section className="relative flex w-full flex-col items-center justify-center bg-[#0a0a0a] p-4 py-8 sm:p-8 lg:w-[60%] lg:h-screen lg:p-8">

        {/* Subtle Background Elements */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[#d4af37] opacity-[0.03] blur-[100px]" />
          <div className="absolute -bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-white opacity-[0.02] blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 flex w-full max-w-4xl flex-col h-[85vh] lg:h-full max-h-[800px] rounded-[2rem] border border-white/5 bg-[#121212] shadow-2xl"
        >
          {/* Top Section inside Right Panel */}
          <div className="flex shrink-0 flex-col items-center border-b border-white/5 p-6 text-center sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight !text-white sm:text-3xl">
              Select Date & Time
            </h2>
            <p className="mt-2 text-sm text-white/60 sm:text-base">
              Choose your preferred date and time to secure your luxury session.
            </p>
          </div>

          {/* Cal.com Embed Container */}
          <div className="flex-1 w-full overflow-hidden p-2 sm:p-6 lg:p-8">
            <Cal
              namespace="30min"
              calLink="nithin-guggilla2002-8ya667/30min"
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              config={{
                layout: "month_view",
                useSlotsViewOnSmallScreen: "true",
                theme: "dark",
              }}
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
