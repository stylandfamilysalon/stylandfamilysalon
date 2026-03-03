"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";
import { BsGrid3X3GapFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [desktopServiceOpen, setDesktopServiceOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setServiceOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[1000] bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex w-full max-w-[1450px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8 2xl:px-10">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Styland Family Salon"
            width={160}
            height={70}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-10 font-medium">

          <Link href="/" className="text-white hover:text-[#d4af37] transition">
            Home
          </Link>

          {/* SERVICES DROPDOWN DESKTOP */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopServiceOpen(true)}
            onMouseLeave={() => setDesktopServiceOpen(false)}
          >
            <button className="text-white hover:text-[#d4af37] transition">
              Services
            </button>

            <AnimatePresence>
              {desktopServiceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-8 bg-black border border-white/10 rounded-lg shadow-lg py-3 w-40"
                >
                  <Link
                    href="/men"
                    className="block px-4 py-2 text-white hover:text-[#d4af37] transition"
                  >
                    Men
                  </Link>
                  <Link
                    href="/women"
                    className="block px-4 py-2 text-white hover:text-[#d4af37] transition"
                  >
                    Women
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className="text-white hover:text-[#d4af37] transition">
            Contact Us
          </Link>
        </nav>

        {/* DESKTOP BUTTON */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="border border-white text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37]"
          >
            Book Appointment
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <BsGrid3X3GapFill />
        </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 z-[1200]"
              onClick={closeMenu}
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 w-72 h-full bg-black z-[1300] shadow-lg p-6 flex flex-col gap-6"
            >
              <div className="flex justify-end">
                <button onClick={closeMenu} className="text-white text-3xl">
                  <HiOutlineX />
                </button>
              </div>

              <Link
                href="/"
                onClick={closeMenu}
                className="text-white text-lg hover:text-[#d4af37] transition"
              >
                Home
              </Link>

              {/* MOBILE SERVICES DROPDOWN */}
              <div>
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="text-white text-lg w-full text-left hover:text-[#d4af37] transition"
                >
                  Services
                </button>

                <AnimatePresence>
                  {serviceOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden ml-4 mt-2 flex flex-col gap-2"
                    >
                      <Link
                        href="/men"
                        onClick={closeMenu}
                        className="text-gray-300 hover:text-[#d4af37] transition"
                      >
                        Men
                      </Link>
                      <Link
                        href="/women"
                        onClick={closeMenu}
                        className="text-gray-300 hover:text-[#d4af37] transition"
                      >
                        Women
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-white text-lg hover:text-[#d4af37] transition"
              >
                Contact Us
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="bg-[#d4af37] text-black px-5 py-2 rounded-full font-semibold text-center mt-4 transition-all duration-300 hover:bg-white"
              >
                Book Appointment
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
