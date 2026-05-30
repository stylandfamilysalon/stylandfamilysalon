"use client";

import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactDetails = [
  {
    title: "Address",
    detail: "Doctor's Colony, Madhapur, Hyderabad, Telangana 500081, India",
    icon: FaMapMarkerAlt,
  },
  {
    title: "Phone Number",
    detail: "+91 77023 97311",
    icon: FaPhoneAlt,
  },
  {
    title: "Appointments",
    detail: "Online Booking Available",
    icon: FaClock, // keeping clock icon or changing to a calendar icon? FaClock is imported. Let's stick with what we have.
  },
  {
    title: "Business Hours",
    detail: "Monday – Sunday: 10:00 AM – 9:00 PM",
    icon: FaClock,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Toaster position="bottom-right" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/p/AF1QipOMs-TFasCxcO_IfWOA0bv1bt09CcVR8SELcX1_=s1360-w1360-h1020-rw')] bg-cover bg-center opacity-30" />


        <div className="relative mx-auto max-w-[1450px] px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full bg-[#d4af37]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              Get In Touch
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight !text-[#d4af37] sm:text-6xl lg:text-7xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
              We&apos;d love to hear from you. Reach out anytime to book an appointment or ask a question.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto w-full max-w-[1450px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left Column: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold !text-white sm:text-4xl">
                Let&apos;s start a conversation
              </h2>
              <p className="mt-4 text-white/70">
                Whether you want to book a luxury grooming session, have a question about our services, or simply want to say hello, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold !text-white">{item.title}</h3>
                    <p className="mt-1 text-white/70">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.44182572219!2d78.38996039999999!3d17.4385547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915be03a5de3%3A0xeff5854b222237df!2sStyland%20family%20salon!5e0!3m2!1sen!2sin!4v1779528834488!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon Location"
              />
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:pt-4"
          >
            <ContactForm />
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
