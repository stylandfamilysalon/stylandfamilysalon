import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import { Scissors, BadgeCheck, Sparkles, Droplets, Armchair } from "lucide-react";

export const metadata = {
  title: "About STYLAND Family Salon | Est. 2000 in Hyderabad",
  description: "Est. in 2021, STYLAND Family Salon has served Hyderabad for 25+ years. Meet our expert stylists, learn our story, and discover why thousands choose us every month.",
  alternates: {
    canonical: "https://www.stylandfamilysalon.in/about",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About STYLAND Family Salon",
    "url": "https://www.stylandfamilysalon.in/about",
    "description": "Learn about STYLAND Family Salon's 25-year journey, our skilled team of stylists, and our commitment to premium beauty and grooming in Madhapur, Hyderabad.",
    "mainEntity": {
      "@type": "HairSalon",
      "name": "STYLAND Family Salon",
      "foundingDate": "2000",
      "url": "https://www.stylandfamilysalon.in/"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.stylandfamilysalon.in/" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.stylandfamilysalon.in/about" }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does STYLAND Family Salon offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer men's grooming (haircuts, beard trims, facials), women's beauty (hair treatments, keratin, waxing, facials), bridal makeup packages, and body spa services for the whole family."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book an appointment at STYLAND Family Salon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book an appointment online at stylandfamilysalon.in/book-appointment or call us at +91 77023 97311. Walk-ins are also welcome during our working hours."
        }
      },
      {
        "@type": "Question",
        "name": "What are the opening hours of STYLAND Family Salon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are open 7 days a week, Monday to Sunday, from 10:00 AM to 9:00 PM."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept cash, UPI (GPay, PhonePe, Paytm), and major credit/debit cards."
        }
      },
      {
        "@type": "Question",
        "name": "Are salon services customizable at STYLAND?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every visit is personalized to your style, hair type, and preferences. Our stylists consult with you before any service to ensure the best results."
        }
      }
    ]
  }
];

const workingHours = [
  { day: "Mon", hours: "10:00 AM - 9:00 PM" },
  { day: "Tue", hours: "10:00 AM - 9:00 PM" },
  { day: "Wed", hours: "10:00 AM - 9:00 PM" },
  { day: "Thu", hours: "10:00 AM - 9:00 PM" },
  { day: "Fri", hours: "10:00 AM - 9:00 PM" },
  { day: "Sat", hours: "10:00 AM - 9:00 PM" },
  { day: "Sun", hours: "10:00 AM - 9:00 PM" },
  
];


const milestones = [
  {
    year: "2000",
    title: "The Beginning",
    description: "Started our journey with a small shop and a big dream to redefine grooming.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2013",
    title: "Growing Roots",
    description: "Expanded our facilities and built a loyal community of style enthusiasts.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2019",
    title: "Recognition",
    description: "Won several local awards for exceptional customer service and styling.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2023",
    title: "New Chapter",
    description: "Introduced advanced beauty treatments and a fully revamped salon interior.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2024",
    title: "Today",
    description: "Proud to serve thousands of happy clients with our premium unisex services.",
    image: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=600&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-white text-black font-body w-full overflow-hidden">
        {/* Hero Section */}
      <section className="relative flex h-[350px] w-full items-center justify-center overflow-hidden bg-black md:h-[450px]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <h1 className="relative z-10 text-4xl font-extrabold tracking-tight !text-[#f0eded] sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
          About salon
        </h1>
      </section>

      {/* Intro Section - More than a cut */}
      <section className="mx-auto flex max-w-[1450px] flex-col items-center gap-12 px-4 py-16 sm:px-6 md:flex-row md:items-start md:gap-16 md:py-24 lg:px-8">
        <div className="relative w-full max-w-lg md:w-1/2 shrink-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80"
              alt="Barber styling hair"
              fill
              className="object-cover"
            />
          </div>
          {/* Circular Badge Overlap */}
          <div className="absolute -bottom-8 right-8 flex h-32 w-32 items-center justify-center rounded-full bg-white p-2 shadow-2xl">
            <div className="flex h-full w-full items-center justify-center rounded-full border border-dashed border-[#c89f5c] p-2 text-center text-[10px] font-bold uppercase tracking-widest text-black">
              {/* Fake circular text effect */}
              <div className="flex flex-col items-center justify-center">
                <Scissors className="text-[#c89f5c] h-8 w-8 mb-1" strokeWidth={1.5} />
                <span>Est 2000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 pt-4">
          <span className="inline-block rounded-full bg-[#c89f5c]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#c89f5c] mb-4">
            About Us
          </span>
          <h2 className="mb-6 text-3xl font-extrabold leading-tight text-[#1f232c] sm:text-4xl md:text-5xl">
            More than a cut, it&apos;s an experience
          </h2>
          <p className="mb-8 text-base text-gray-600 leading-relaxed max-w-xl">
            We believe that grooming is an art form. Our dedicated team of professionals
            ensures you receive not just a haircut, but a revitalizing experience designed
            to boost your confidence and elevate your style.
          </p>

          <div className="mb-10 border-l-4 border-[#c89f5c] pl-6 py-2">
            <p className="text-xl italic font-serif text-gray-800 leading-relaxed">
              "A clean cut is the best way to start a new day, we bring your vision to life."
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block rounded-full bg-[#c89f5c] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black transition-transform hover:scale-105 shadow-md"
          >
            Contact us
          </Link>
        </div>
      </section>

      {/* Art of grooming grid */}
      <section className="bg-[#ede9e5] py-20">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-[#c89f5c]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#c89f5c] mb-4">
              What we offer
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-[#1f232c] sm:text-4xl md:text-5xl max-w-2xl mx-auto">
              Experience the art of grooming
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column Stack */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 rounded-2xl bg-white p-8 shadow-sm flex flex-col justify-center">
                <div className="h-12 w-12 mb-6 rounded-full bg-[#c89f5c]/20 flex items-center justify-center text-[#c89f5c]">
                  <BadgeCheck size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Skilled Professionals</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Our team features masters of their craft, bringing years of dedicated experience.</p>
              </div>
              <div className="flex-1 rounded-2xl bg-[#c89f5c] p-8 shadow-sm flex flex-col justify-center text-white">
                <div className="h-12 w-12 mb-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Sparkles size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
                <p className="text-white/90 text-sm leading-relaxed">Every visit is customized to your unique style and personal preference.</p>
              </div>
            </div>

            {/* Center Image */}
            <div className="h-full rounded-2xl overflow-hidden shadow-lg md:row-span-1 md:h-[524px]">
              <Image
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80"
                alt="Stylist working on a client"
                width={600}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right Column Stack */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 rounded-2xl bg-black p-8 shadow-sm flex flex-col justify-center text-white">
                <div className="h-12 w-12 mb-6 rounded-full bg-white/10 flex items-center justify-center text-[#c89f5c]">
                  <Droplets size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 !text-white">Premium Products</h3>
                <p className="text-gray-400 text-sm leading-relaxed">We use only top-tier, salon-grade products for ultimate care and styling.</p>
              </div>
              <div className="flex-1 rounded-2xl bg-white p-8 shadow-sm flex flex-col justify-center">
                <div className="h-12 w-12 mb-6 rounded-full bg-[#c89f5c]/20 flex items-center justify-center text-[#c89f5c]">
                  <Armchair size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Comfortable</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Relax in a luxurious, hygienic environment designed for your comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block rounded-full bg-[#c89f5c]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#c89f5c] mb-4">
                History
              </span>
              <h2 className="text-3xl font-extrabold leading-tight text-[#1f232c] sm:text-4xl md:text-5xl max-w-md">
                Meet with our dope & cool journey
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-block rounded-full bg-[#c89f5c] px-8 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 shadow-sm whitespace-nowrap"
            >
              Read More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="relative h-48 w-full overflow-hidden rounded-2xl shadow-sm group">
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-1 flex items-center gap-2">
                    {milestone.year} - {milestone.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours Section */}
      <section className="bg-[#1a1a1a] text-white py-24">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-[#c89f5c]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#c89f5c] mb-4">
            Working Hours
          </span>
          <h2 className="text-3xl font-extrabold leading-tight !text-white sm:text-4xl md:text-5xl max-w-xl mx-auto mb-16 drop-shadow-sm">
            Look sharp, anytime working hours
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
            {workingHours.map((wh) => (
              <div key={wh.day} className="flex flex-col items-center justify-center p-4 rounded-xl bg-black/40 border border-white/5 hover:border-[#c89f5c]/50 transition-colors">
                <span className="font-bold text-lg mb-1">{wh.day}</span>
                <span className="text-xs text-gray-400 whitespace-nowrap">{wh.hours}</span>
              </div>
            ))}
          </div>

          <div className="relative aspect-[21/9] w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl mb-12">
            <Image
              src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1600&q=80"
              alt="Client getting hair washed"
              fill
              className="object-cover"
            />
          </div>

          <Link
            href="/book-appointment"
            className="inline-block rounded-full bg-[#c89f5c] px-10 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105 shadow-[0_0_20px_rgba(200,159,92,0.3)]"
          >
            Book a slot
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-[#c89f5c]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#c89f5c] mb-4">
              FAQs
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-[#1f232c] sm:text-4xl md:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="w-full lg:w-5/12">
              <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=800&q=80"
                  alt="Barber grooming a client"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-20">
                  <h3 className="text-white text-xl font-bold mb-2">Our focus & goals</h3>
                  <p className="text-white/80 text-sm leading-relaxed">Delivering exceptional grooming experiences tailored precisely to your individual style and comfort.</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12 flex items-center">
              <div className="w-full">
                <FaqAccordion />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}
