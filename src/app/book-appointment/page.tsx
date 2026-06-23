"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import toast from "react-hot-toast";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", 
  "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
];

export default function BookAppointmentPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.email || !date || !time) {
      toast.error("Please fill in all required fields, including date and time.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          service_name: formData.service,
          appointment_date: format(date, "yyyy-MM-dd"),
          appointment_time: time,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message || "Appointment booked successfully!");
        setFormData({ name: "", mobile: "", email: "", service: "" });
        setDate(new Date());
        setTime("");
      } else {
        toast.error(data.message || "Failed to book appointment.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* RIGHT SIDE: 60% - Booking Form */}
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
          className="relative z-10 flex w-full max-w-4xl flex-col h-auto lg:h-[90vh] max-h-[900px] rounded-[2rem] border border-white/5 bg-[#121212] shadow-2xl overflow-y-auto custom-scrollbar"
        >
          {/* Top Section inside Right Panel */}
          <div className="flex shrink-0 flex-col items-center border-b border-white/5 p-6 text-center sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight !text-white sm:text-3xl">
              Booking Details
            </h2>
            <p className="mt-2 text-sm text-white/60 sm:text-base">
              Fill in your details and pick your preferred time to secure your session.
            </p>
          </div>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="flex-1 w-full p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Column: Personal Info */}
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-white/90 border-b border-white/10 pb-2">Your Details</h3>
                
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1">Service (Optional)</label>
                  <input 
                    type="text" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                    placeholder="Haircut, Facial, etc."
                  />
                </div>
              </div>

              {/* Right Column: Date & Time Picker */}
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-white/90 border-b border-white/10 pb-2">Date & Time</h3>
                
                <div className="bg-black/20 rounded-xl p-1">
                  <Calendar 
                    mode="single" 
                    defaultMonth={date} 
                    selected={date} 
                    onSelect={setDate} 
                    className="rounded-lg border-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-3 mt-4">Select Time</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={`py-2 px-1 text-xs sm:text-sm rounded-lg border transition-all ${
                          time === slot 
                            ? "bg-[#d4af37] border-[#d4af37] text-black font-semibold" 
                            : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10 border-t border-white/5 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-[#d4af37] px-8 py-4 text-base font-bold text-black transition-all hover:bg-[#b5952f] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"></span>
                    Booking...
                  </>
                ) : (
                  "Confirm Appointment"
                )}
              </button>
              <p className="text-center text-xs text-white/40 mt-4">
                By booking, you agree to our terms of service and cancellation policy.
              </p>
            </div>
          </form>
        </motion.div>
      </section>
      
      {/* Add some basic scrollbar styling for the form */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.5);
        }
      `}} />
    </main>
  );
}

