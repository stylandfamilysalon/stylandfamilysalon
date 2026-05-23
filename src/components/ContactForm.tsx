"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  subject: z.string().min(2, "Subject is required").max(100, "Subject is too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
  honeypot: z.string().max(0, "Spam detected").optional(), // Must remain empty
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data.honeypot && data.honeypot.length > 0) {
      toast.success("Message sent successfully!"); // Fake success for bots
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast.success("Message sent successfully! We'll get back to you soon.", { id: toastId });
      reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md sm:p-8">
      <h3 className="mb-6 text-2xl font-bold !text-white">Send us a Message</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* HONEYPOT - Hidden from real users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="honeypot">Don&apos;t fill this out if you&apos;re human:</label>
          <input type="text" id="honeypot" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-white">Full Name *</label>
            <input
              id="name"
              type="text"
              {...register("name")}
              disabled={isSubmitting}
              className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-white/10'} bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-[#d4af37] focus:bg-white/10 disabled:opacity-50`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-white">Email Address *</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              disabled={isSubmitting}
              className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-white/10'} bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-[#d4af37] focus:bg-white/10 disabled:opacity-50`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="phone" className="text-sm font-medium text-white">Phone Number *</label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              disabled={isSubmitting}
              className={`w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-white/10'} bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-[#d4af37] focus:bg-white/10 disabled:opacity-50`}
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
          </div>

          <div className="space-y-1">
            <label htmlFor="subject" className="text-sm font-medium text-white">Subject *</label>
            <input
              id="subject"
              type="text"
              {...register("subject")}
              disabled={isSubmitting}
              className={`w-full rounded-lg border ${errors.subject ? 'border-red-500' : 'border-white/10'} bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-[#d4af37] focus:bg-white/10 disabled:opacity-50`}
              placeholder="How can we help?"
            />
            {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-medium text-white">Message *</label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            disabled={isSubmitting}
            className={`w-full resize-none rounded-lg border ${errors.message ? 'border-red-500' : 'border-white/10'} bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-[#d4af37] focus:bg-white/10 disabled:opacity-50`}
            placeholder="Tell us more about your inquiry..."
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative flex w-full items-center justify-center gap-2 rounded-lg bg-[#d4af37] px-6 py-4 font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <svg className="h-5 w-5 animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </form>
    </div>
  );
}
