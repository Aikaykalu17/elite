"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Hamburger from "./Hamburger";
import navItems from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT" },
    { href: "/coaches", label: "COACHES" },
    { href: "/programs", label: "PROGRAMS" },
    { href: "/news", label: "NEWS & UPDATES" },
    { href: "/graduates", label: "GRADUATES" },
    { href: "/fixtures", label: "FIXTURES" },
    { href: "/contact", label: "CONTACT" },
    { href: "/gallery", label: "GALLERY" },
  ];

  // Disables homepage scrolling whenever open is true.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  function handleClick() {
    setOpen((open) => !open);
  }

  const mobileMenuId = "mobile-navigation";

  return (
    <nav className="bg-[#061426] flex justify-between items-center h-20 w-full  fixed left-0 top-0 z-50">
      <div className="px-4 flex justify-between items-center w-full">
        <div className="z-50   flex justify-between items-center">
          {/* <Image
            src="/eliteBgTrns.webp"
            alt="Elite Football Club All Stars logo"
            width={100}
            height={150}
            priority
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          /> */}
          <Image
            src={open ? "/eliteBgTrns.webp" : "/eliteBgTrns.webp"}
            alt="Elite Football Club All Stars logo"
            width={100}
            height={150}
            priority
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>
        {/* Nav links for desktop view */}
        <nav className="hidden md:flex gap-2 lg:flex landscape:flex">
          {navLinks.slice(0, 4).map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined} // screen reader support
                className={`
              px-4 py-3  text-xs font-bold  transition-all duration-300 ease-out
    hover:translate-y-1 cursor-pointer
              ${
                isActive
                  ? " text-[#F5B800] border-b-2 border-b-[#F5B800] pb-px "
                  : "text-white hover:border-b-2 hover:border-b-[#F5B800] hover:pb-px hover:text-[#F5B800]"
              }
            `}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <Link href="/form" className="hidden md:block landscape:flex">
          <button
            className="py-4 px-8 rounded-lg bg-[#F5B800] text-xs text-[#061426] font-bold cursor-pointer border md:hover:bg-transparent md:hover:text-white transition-all duration-300 ease-out
    hover:translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)]"
          >
            JOIN NOW
          </button>
        </Link>
        {/* Hamburger biutton */}
        <div className="md:hidden landscape:hidden">
          <button
            type="button"
            className={open ? "hamburger open" : "hamburger"}
            onClick={handleClick}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls={mobileMenuId}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          id={mobileMenuId}
          className={open ? "overlay active" : "overlay"}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <Hamburger navItems={navItems} onClose={handleClick} isOpen={open} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
