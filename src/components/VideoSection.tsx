"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const update = () => setIsDesktop(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

function MobileVideo() {
  return (
    <section className="relative w-full bg-[#ede9e5] px-4 py-12 sm:px-6 md:py-16 lg:px-8 2xl:px-10">
      <div className="mx-auto w-full max-w-[1450px]">
        <div className="aspect-video w-full overflow-hidden rounded-xl">
          <video
            className="h-full w-full object-cover"
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}

function DesktopAnimatedVideo() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const easedProgress = useTransform(scrollYProgress, (value) => {
    const clamped = Math.min(Math.max(value, 0), 1);
    return 1 - Math.pow(1 - clamped, 3);
  });

  const scale = useTransform(easedProgress, [0, 1], [0.85, 1]);
  const y = useTransform(easedProgress, [0, 1], [60, 0]);
  const opacity = useTransform(easedProgress, [0, 1], [0.8, 1]);
  const borderRadius = useTransform(easedProgress, [0, 1], [20, 0]);
  const blur = useTransform(easedProgress, [0, 1], [8, 0]);
  const backdropFilter = useMotionTemplate`blur(${blur}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[150vh] w-full overflow-x-clip bg-[#ede9e5]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8 2xl:px-10">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-black/20"
          style={{ backdropFilter, WebkitBackdropFilter: backdropFilter }}
        />

        <div className="w-full max-w-[1450px] overflow-hidden">
      <motion.div
        className="relative aspect-video w-full shadow-2xl will-change-transform"
        style={{
        scale,
        y,
        opacity,
        borderRadius,
        transformOrigin: "center center",
      }}
        >
          <video
            className="h-full w-full object-cover"
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function VideoSection() {
  const isDesktop = useIsDesktop();
  const prefersReducedMotion = useReducedMotion();

  if (!isDesktop || prefersReducedMotion) {
    return <MobileVideo />;
  }

  return <DesktopAnimatedVideo />;
}
