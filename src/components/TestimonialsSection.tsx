"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  rating: number;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Parvathy K",
    rating: 5,
    text: "I got very good results after the medi facial. The treatment really helped improve my skin. Deepna was very professional and took great care.",
    image:
      "https://ui-avatars.com/api/?name=Parvathy+K&background=random&color=fff",
  },
  {
    name: "Dandge Joseph",
    rating: 5,
    text: "Service was good, ambience was special and I was fully satisfied with Deepna ji.",
    image:
      "https://ui-avatars.com/api/?name=Dandge+Joseph&background=random&color=fff",
  },
  {
    name: "Sai Teja",
    rating: 5,
    text: "Service is too good. Especially Naeem, his service was excellent.",
    image:
      "https://ui-avatars.com/api/?name=Sai+Teja&background=random&color=fff",
  },
  {
    name: "Deepshikha Saxena",
    rating: 5,
    text: "Thank you Deepna for wonderful highlights. Loved them!",
    image:
      "https://ui-avatars.com/api/?name=Deepshikha+Saxena&background=random&color=fff",
  },
  {
    name: "Mahendra Dhaker",
    rating: 5,
    text: "Professional salon and spa with skilled hairstylists and excellent service.",
    image:
      "https://ui-avatars.com/api/?name=Mahendra+Dhaker&background=random&color=fff",
  },
  {
    name: "Debjit Mullick",
    rating: 5,
    text: "Amazing experience. Pedicure was relaxing and beard grooming was done perfectly.",
    image:
      "https://ui-avatars.com/api/?name=Debjit+Mullick&background=random&color=fff",
  },
  {
    name: "Mungamuri Asha",
    rating: 5,
    text: "Very nice experience. Sai is doing a great job. Highly satisfied.",
    image:
      "https://ui-avatars.com/api/?name=Mungamuri+Asha&background=random&color=fff",
  },
  {
    name: "Sheethal Reddy",
    rating: 5,
    text: "Top-tier service at Styland. Naim is a true professional.",
    image:
      "https://ui-avatars.com/api/?name=Sheethal+Reddy&background=random&color=fff",
  },
  {
    name: "Ravi Shankar",
    rating: 5,
    text: "Affordable and nice salon. Fareed Ahmed has extraordinary haircutting skills.",
    image:
      "https://ui-avatars.com/api/?name=Ravi+Shankar&background=random&color=fff",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={`overflow-hidden h-full ${className}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration * 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 will-change-transform"
      >
        {[...new Array(4).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((testimonial, i) => (
              <div
                key={`${testimonial.name}-${index}-${i}`}
                className="p-8 rounded-3xl border border-black/10 bg-white shadow-xl shadow-black/5 max-w-sm w-full"
              >
                <p className="text-black/80 leading-relaxed text-sm sm:text-base">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <img
                    width={48}
                    height={48}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>
                    <div className="font-semibold text-black">
                      {testimonial.name}
                    </div>

                    <div className="flex items-center gap-0.5 text-[#d4af37] mt-1">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="bg-[#ede9e5] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-14">
        <span className="text-[#b7871e] font-semibold tracking-[0.3em] text-xs">
          TESTIMONIALS
        </span>

        <h2 className="mt-4 text-4xl md:text-6xl font-bold text-black font-serif">
          What Our Clients Say
        </h2>

        <p className="mt-5 text-black/70 max-w-2xl mx-auto">
          Discover why clients trust Styland Family Salon for beauty,
          grooming, skincare and wellness services.
        </p>
      </div>

      <div className="relative flex justify-center gap-6 h-[750px] max-w-7xl mx-auto px-4">
        {/* Top Gradient */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#ede9e5] to-transparent z-10" />

        {/* Bottom Gradient */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#ede9e5] to-transparent z-10" />

        <TestimonialsColumn
          testimonials={firstColumn}
          duration={8}
          className="flex-1"
        />

        <TestimonialsColumn
          testimonials={secondColumn}
          duration={10}
          className="hidden md:block flex-1"
        />

        <TestimonialsColumn
          testimonials={thirdColumn}
          duration={9}
          className="hidden lg:block flex-1"
        />
      </div>
    </section>
  );
}