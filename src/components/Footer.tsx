import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { PiMaskHappyFill } from "react-icons/pi";

const essentialPages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expert Barbers", href: "/men" },
  { label: "Gallery", href: "/gallery" },
  { label: "Faq", href: "/faq" },
];

const otherPages = [
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "404", href: "/404" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Twitter", href: "#", icon: FaTwitter },
  { label: "Youtube", href: "#", icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className="bg-[#ede9e5] text-[#222]">
      <div className="mx-auto w-full max-w-[1450px] px-4 pb-8 pt-14 sm:px-6 lg:px-8 2xl:px-10">
        <div className="grid gap-8 border-b border-black/10 pb-10 md:grid-cols-2 md:items-center md:gap-14">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#c89f5c] text-white">
              <PiMaskHappyFill className="h-8 w-8" />
            </span>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Styland Family Salon"
                width={160}
                height={70}
                priority
              />
            </Link>
          </div>

          <div>
            <p className="mb-4 text-xl font-semibold text-[#1f232c] sm:text-2xl">
              Get 5% off through subscribe
            </p>
            <form className="flex w-full flex-col gap-3 rounded-full bg-white p-1 sm:flex-row">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="h-12 w-full rounded-full bg-transparent px-4 text-base text-[#1f232c] outline-none placeholder:text-[#6b7280]"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-[#c89f5c] px-8 text-base font-semibold text-[#1f232c] transition hover:brightness-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-10 border-b border-black/10 py-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h4 className="mb-6 max-w-xl text-4xl font-extrabold leading-tight text-[#1f232c] sm:text-5xl">
              Stay sharp, stay confident
              <br />- classic cuts &amp; modern
              <br />
              grooming.
            </h4>

            <div className="mb-2 flex flex-wrap items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-medium text-[#1f232c] transition hover:bg-[#c89f5c] hover:text-black"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-5 text-lg font-semibold text-[#4b5563]">Essential Pages</p>
              <ul className="space-y-3">
                {essentialPages.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-lg text-[#1f232c] transition hover:text-[#9a6b09]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-5 text-lg font-semibold text-[#4b5563]">Other Pages</p>
              <ul className="space-y-3">
                {otherPages.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-lg text-[#1f232c] transition hover:text-[#9a6b09]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-5 text-lg font-semibold text-[#4b5563]">Contact Us</p>
              <div className="space-y-3 text-lg text-[#1f232c]">
                <p className="mb-0">+123 456 789 00</p>
                <p className="mb-0">Info@saloni.com</p>
                <p className="mb-0">
                  12/A, New Bustin
                  <br />
                  Tower Nyc, Us
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-base text-[#1f232c]/90 sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-0">© 2026 Salona All Rights Reserved</p>
          <p className="mb-0">Made by Tempbix, Built with Framer.</p>
        </div>
      </div>
    </footer>
  );
}
