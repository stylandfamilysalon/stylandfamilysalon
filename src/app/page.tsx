"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const heroSlides = [
  "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1800&q=80",
];

const luxuryServices = [
  {
    title: "Hair Wash & Treatment",
    description: "Refreshing wash and care for stronger, healthy hair.",
  },
  {
    title: "Modern Styling",
    description: "Trendy cuts tailored perfectly to match your style.",
  },
  {
    title: "Hot Towel Shaves",
    description: "Relax with smooth, classic shaves every single time.",
  },
  {
    title: "Beard Trimming",
    description: "Sharp, clean trims for a polished, bold look.",
  },
  {
    title: "Classic Haircuts",
    description: "Classic barbering redefined with precision and confidence.",
  },
  {
    title: "Kids Haircuts",
    description: "Comfortable and stylish haircuts for younger clients.",
  },
  {
    title: "Hair Coloring",
    description: "Tone, highlights, and color services with premium products.",
  },
  {
    title: "Scalp Detox",
    description: "Deep cleansing treatment that restores scalp freshness.",
  },
];

const initialVisibleServices = luxuryServices.reduce<Record<number, boolean>>(
  (acc, _service, index) => {
    acc[index] = index < 4;
    return acc;
  },
  {}
);

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [visibleServiceItems, setVisibleServiceItems] =
    useState<Record<number, boolean>>(initialVisibleServices);
  const [isTestimonialVisible, setIsTestimonialVisible] = useState(false);
  const [isCollageActive, setIsCollageActive] = useState(false);
  const galleryRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const testimonialRef = useRef<HTMLElement | null>(null);
  const collageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  useEffect(() => {
    if (!galleryRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGalleryVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!servicesRef.current) return;

    const serviceNodes = servicesRef.current.querySelectorAll<HTMLElement>("[data-service-item]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const itemIndex = Number(entry.target.getAttribute("data-service-index"));
          if (Number.isNaN(itemIndex)) return;

          setVisibleServiceItems((prev) => {
            if (prev[itemIndex]) return prev;
            return { ...prev, [itemIndex]: true };
          });
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    serviceNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!testimonialRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTestimonialVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(testimonialRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!collageRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCollageActive(entry.isIntersecting);
      },
      { threshold: 0.25, rootMargin: "-10% 0px -10% 0px" }
    );

    observer.observe(collageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1450px] flex-col justify-between px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-14 lg:pt-17 2xl:px-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-2 py-1 text-xs font-medium text-white sm:text-sm">
              <span className="rounded-full bg-[#d4af37] px-2 py-1 text-black">-5% off</span>
              <span>For your very first visit</span>
            </div>

            <h1 className="mt-6 text-xl font-extrabold leading-tight sm:text-5xl lg:text-7xl text-white">
              <span className="text-[#ffffff]">Look Good,</span>
              <br />
              <span className="text-[#d4af37]">Feel Confident,</span>
              <br />
              <span className="text-[#ffffff]">Shine Everyday,</span>
            </h1>
            <p>Feeling so good</p>

            <div className="mt-7 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-[#d4af37] text-sm font-bold text-black">
                  A
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white text-sm font-bold text-black">
                  R
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-zinc-500 text-sm font-bold text-white">
                  S
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#d4af37]">***** 4.9</p>
                <p className="text-sm text-white/80">Loved by 10k+ trusted clients</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/20 pt-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-xl text-sm text-white/90 sm:text-base">
                Step into our barbershop for expert grooming, modern styles, and classic
                techniques that keep you looking your best every day.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+12124567899"
                  className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-semibold transition hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  +1 (212) 456-7899
                </a>
                <Link
                  href="/services"
                  className="rounded-full bg-[#d4af37] px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-white"
                >
                  See Our Services
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeSlide === index ? "w-8 bg-[#d4af37]" : "w-2.5 bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        ref={galleryRef}
        className="bg-zinc-100 py-12 text-black md:py-20"
      >
        <div className="w-full">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-flex items-center rounded-full bg-[#d4af37]/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a6b09]">
              Our Gallery
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Barbershop, grooming
              <br className="hidden sm:block" />
              is more than just a service - it&apos;s an experience.
            </h2>
          </div>

          <div className="mx-auto mt-12 flex w-full max-w-[1450px] flex-col gap-6 px-4 sm:px-6 md:flex-row md:justify-center md:gap-6 lg:px-8 2xl:px-10">
            <article
              className={`relative h-[280px] w-full max-w-[350px] overflow-hidden rounded-xl bg-zinc-200 shadow-lg transition-all duration-700 ease-out ${
                isGalleryVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80"
                alt="Professional barber tools on a table"
                className="h-full w-full object-cover"
              />
              <div className="absolute -bottom-3 right-4 rounded-md bg-white p-2 text-black shadow-md">
                <span className="text-xs font-semibold">tools</span>
              </div>
            </article>

            <article
              className={`relative mt-6 md:mt-12 h-[330px] w-full md:w-[420px] overflow-hidden rounded-xl bg-zinc-200 shadow-lg transition-all duration-700 delay-150 ease-out sm:h-[380px] ${
              isGalleryVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            >
              <img
                src="https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=900&q=80"
                alt="Close-up of beard grooming session"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-b-xl">
                  <p className="text-sm font-semibold text-white">
                    Our focus & goals
                  </p>
                  <p className="mt-2 max-w-[280px] text-xs text-white/90">
                    Deliver exceptional grooming through skill, comfort, and style.
                  </p>
                </div>
              </div>
            </article>

            <article
              className={`relative h-[280px] w-full max-w-[350px] overflow-hidden rounded-xl bg-zinc-200 shadow-lg transition-all duration-700 delay-300 ease-out ${
                isGalleryVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=700&q=80"
                alt="Client enjoying a haircut in the barbershop"
                className="h-full w-full object-cover"
              />
              <div className="absolute -top-3 right-4 rounded-md bg-[#d4af37] p-2 text-black shadow-md">
                <span className="text-xs font-semibold">style</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
          ref={servicesRef}
            className="bg-[#ede9e5] px-4 py-20 text-black sm:px-6 md:py-28 lg:px-8 2xl:px-10"
          >
        <div className="mx-auto w-full max-w-[1450px] lg:grid lg:grid-cols-[minmax(280px,460px)_1fr] lg:gap-18">
          <div className="self-start lg:sticky lg:top-24">
            <span className="inline-flex items-center rounded-full bg-[#d4af37]/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6b09]">
              Our Expertise
            </span>

            <div className="mt-6 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=1200&q=80"
                alt="Barber trimming a client's beard"
                className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[420px]"
              />
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <h3 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
              A pure range of luxury
              <br />
              salon services
            </h3>

            <div className="mt-8 divide-y divide-black/15 border-y border-black/15">
              {luxuryServices.map((service, index) => (
                <article
                  key={service.title}
                  data-service-item
                  data-service-index={index}
                  className={`py-5 transition-all duration-700 ease-out will-change-transform sm:py-6 ${
                    visibleServiceItems[index]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <h4 className="text-2xl font-bold leading-tight sm:text-4xl">{service.title}</h4>
                  <p className="mt-2 text-sm text-black/70 sm:text-base">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={testimonialRef}
        className="relative bg-[#ede9e5] px-4 pb-20 pt-8 text-black sm:px-6 md:pb-24 lg:px-8 2xl:px-10"
      >
        <div className="mx-auto w-full max-w-[1450px]">
          <div className="relative lg:min-h-[185vh]">
            <div
              className={`mx-auto max-w-3xl rounded-2xl px-4 py-6 text-center transition-all duration-700 ease-out lg:sticky lg:top-14 lg:z-10 lg:py-10 ${
                isTestimonialVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } ${
                isCollageActive
                  ? "bg-white/45 shadow-lg backdrop-blur-sm blur-[1px]"
                  : "bg-transparent blur-0"
              }`}
            >
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-[#b7871e]">
                *****
              </span>

              <h3 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
                Exceptional service, clean cuts, and
                <br className="hidden sm:block" />
                a welcoming barbershop atmosphere
                <br className="hidden sm:block" />
                always.
              </h3>

              <div className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                  alt="Guest avatar"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-bold leading-none">Michael</p>
                  <p className="mt-1 text-xs font-medium text-[#b7871e]">VIP Guest</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80"
                  alt="Guest avatar"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Guest avatar"
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
            </div>

            <div
              ref={collageRef}
              className="relative z-20 mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[-120px] lg:grid-cols-3 lg:gap-6"
            >
              <article className="overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-1">
                <img
                  src="/salon2.jpg"
                  alt="Barber grooming client"
                  className="h-[520px] w-full object-cover sm:h-[320px]"
                />
              </article>

              <article className="overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-1 lg:mt-16">
                <img
                  src="/salon2.jpg"
                  alt="Barber using dryer on client"
                  className="h-[320px] w-full object-cover sm:h-[360px]"
                />
              </article>

              <article className="overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-1 lg:mt-10">
                <img
                  src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=900&q=80"
                  alt="Barber styling customer hair"
                  className="h-[220px] w-full object-cover sm:h-[260px]"
                />
              </article>

              <article className="overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80"
                  alt="Beard trimming in barbershop"
                  className="h-[280px] w-full object-cover sm:h-[320px]"
                />
              </article>

              <article className="overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-1 lg:mt-12">
                <img
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80"
                  alt="Barber preparing tools"
                  className="h-[180px] w-full object-cover sm:h-[220px]"
                />
              </article>

              <article className="overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-1 lg:mt-4">
                <img
                  src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80"
                  alt="Hair clipper close-up during haircut"
                  className="h-[280px] w-full object-cover sm:h-[330px]"
                />
              </article>
            </div>
          </div>
        </div>
      </section>

      <VideoSection />

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
