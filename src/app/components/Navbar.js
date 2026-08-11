"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

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
    <nav className="bg-[#061426] rounded-4xl shadow-2xs mt-4 flex justify-between items-center h-20 w-full">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div>
          <Image
            src="/EliteNavBar.svg"
            alt="Elite Football Club All Stars logo"
            width={100}
            height={100}
            priority
            // className="w-24 h-24"
          />
        </div>

        {/* Hamburger biutton */}
        <div className="md:hidden">
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
      </div>
    </nav>
  );
}

export default Navbar;
