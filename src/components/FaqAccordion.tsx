"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

export const defaultFaqs: FAQItem[] = [
  {
    question: "What services does Salon offer?",
    answer: "We offer a wide range of services including haircuts, styling, coloring, facials, beard grooming, and specialized hair treatments for men, women, and children.",
  },
  {
    question: "How can I book a service at Salon?",
    answer: "You can book an appointment easily through our website by clicking the 'Book Appointment' button, or you can call us directly at +91 77023 97311.",
  },
  {
    question: "What are your opening hours?",
    answer: "We are open Monday through Sunday from 10:00 AM to 9:00 PM to accommodate your busy schedule.",
  },
  {
    question: "Which payment methods do you accept?",
    answer: "We accept all major credit and debit cards, UPI, digital wallets, and cash.",
  },
  {
    question: "Are the services customizable?",
    answer: "Yes, our expert stylists and technicians provide personalized consultations to tailor our services specifically to your needs and preferences.",
  },
  {
    question: "Are the products used safe?",
    answer: "Absolutely. We use only premium, salon-grade products that are thoroughly tested for safety and efficacy to ensure the best care for your hair and skin.",
  },
];

interface FaqAccordionProps {
  items?: FAQItem[];
}

export default function FaqAccordion({ items = defaultFaqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border-b border-gray-200 py-2 last:border-0"
          >
            <button
              onClick={() => toggleAccordion(index)}
              suppressHydrationWarning
              className="flex w-full items-center justify-between bg-white py-4 px-2 text-left transition-colors hover:bg-gray-50 rounded-lg"
            >
              <span className="text-sm font-semibold text-[#1f232c] sm:text-base">
                {faq.question}
              </span>
              <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-[#d4af37] font-bold text-xl">
                |
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-2 pb-4 pt-2 text-sm text-[#4b5563] leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
