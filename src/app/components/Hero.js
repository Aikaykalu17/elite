"use client";

import Link from "next/link";

function Hero() {
  return (
    <section
      className="relative w-full aspect-4/5 md:aspect-video  md:h-[40vh] lg:h-[90vh] bg-cover bg-center flex flex-col justify-end gap-4 py-4 px-4 mt-4 md:mt-0 md:justify-center-safe md:px-10 md:gap-6 md:pt-20"
      style={{
        backgroundImage: "url('/images/EliteFootballer.webp')",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      {/*lg:aspect-21/9  */}
      <div className="w-full">
        <h1 className="text-2xl font-bold text-white leading-14 lg:text-5xl">
          BUILDING CHAMPIONS <br />
          <span className="text-[#F5B800]">
            ON AND OFF <br />
            THE PITCH
          </span>
        </h1>
      </div>
      <div>
        <p className="text-white text-xs font-semibold">Developing Talents.</p>
        <p className="text-white text-xs font-semibold">Building Character.</p>
        <p className="text-white text-xs font-semibold">Raising Champions.</p>
      </div>
      <div className="flex gap-6">
        <Link href="/form">
          <button
            className="bg-[#F5B800] border border-transparent text-black text-xs font-semibold py-3 px-8  rounded-md hover:bg-transparent hover:border-[#F5B800] hover:text-white transition-all duration-300 ease-out
    hover:translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)] cursor-pointer"
            type="button"
            aria-label="Join us now"
          >
            JOIN US NOW
          </button>
        </Link>
        <Link href="/about-us">
          <button
            className="border border-[#F5B800] text-xs text-white font-semibold py-3 px-8 rounded-md md:hover:bg-[#F5B800] hover:text-[#061426] transition-all duration-300 ease-out
  hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(245,184,0,0.4)] cursor-pointer"
            type="button"
            aria-label="Learn more"
          >
            LEARN MORE
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
