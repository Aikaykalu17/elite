"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Hamburger from "./Hamburger";
import navItems from "@/data/navItems";

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/graduates", label: "GRADUATES" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/programs", label: "PROGRAMS" },
    { href: "/news", label: "NEWS & UPDATES" },
    { href: "/about-us", label: "WHO WE ARE" },
    { href: "/fixtures", label: "FIXTURES" },
    { href: "/coaches", label: "COACHES" },
    { href: "/contact", label: "CONTACT" },
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
    <nav className="bg-[#0D2038] flex justify-between items-center h-18 w-full fixed left-0 top-0 z-50">
      <div className="px-6 flex justify-between items-center w-full">
        <div className="z-50   flex justify-between items-center">
          <Image
            src="/eliteBgTrns.webp"
            alt="Elite Football Club All Stars logo"
            width={100}
            height={150}
            priority
            loading="eager"
            sizes="(max-width: 768px) 100px, 120px"
            style={{ objectFit: "contain" }}
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
  px-4 py-3 text-xs font-bold border-b-2 transition-all duration-300 ease-out hover:translate-y-1 cursor-pointer
  ${
    isActive
      ? "text-[#F5B800] border-b-[#F5B800]"
      : "text-white border-b-transparent hover:border-b-[#F5B800] hover:text-[#F5B800]"
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
    hover:translate-y-1"
          >
            APPLY FOR A TRIAL
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
            aria-haspopup="true"
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
          aria-label="Mobile navigation menu"
        >
          <Hamburger navItems={navItems} onClose={handleClick} isOpen={open} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
