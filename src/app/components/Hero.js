"use client";

import Link from "next/link";

function Hero() {
  return (
    <section
      className="relative w-full aspect-4/5 md:aspect-video [@media(orientation:landscape)_and_(max-height:750px)]:h-[80vh] [@media(orientation:landscape)_and_(max-height:500px)]:gap-3 md:h-[40vh] lg:h-[90vh] bg-cover bg-center flex flex-col justify-end gap-2 py-4 px-4 mt-4 md:mt-0 md:justify-center-safe md:px-10 md:gap-6 md:pt-20"
      style={{
        backgroundImage: "url('/images/osidark.webp')",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      {/*lg:aspect-21/9  */}
      <div className="w-full">
        <h1 className="text-2xl font-bold text-white leading-12 lg:text-5xl [@media(orientation:landscape)_and_(max-height:500px)]:leading-8">
          BUILDING CHAMPIONS <br />
          <span className="text-[#F5B800]">
            ON AND OFF{" "}
            <br className="[@media(orientation:landscape)_and_(max-height:500px)]:hidden" />
            THE PITCH
          </span>
        </h1>
      </div>
      <div>
        <p className="text-white text-xs font-semibold">
          Developing Talents. <br /> Building Character. <br /> Raising
          Champions.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-max [@media(orientation:landscape)_and_(max-height:500px)]:flex-row">
        <Link
          href="/form"
          className="bg-[#F5B800] text-black text-xs font-semibold py-3 px-8 rounded-md  hover:border-[#F5B800] hover:bg-[#061426] hover:text-white transition-all duration-300 ease-out hover:translate-y-1 cursor-pointer inline-flex items-center justify-center"
          aria-label="Join us now"
        >
          APPLY FOR A TRIAL
        </Link>

        <Link
          href="/about-us"
          className="bg-[#061426] border border-[#F5B800] transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer text-xs text-white font-semibold py-3 px-8 rounded-md md:hover:bg-[#F5B800] hover:text-[#061426] inline-flex items-center justify-center"
          aria-label="Learn more"
        >
          ABOUT ELITE FC
        </Link>
      </div>
    </section>
  );
}

export default Hero;
