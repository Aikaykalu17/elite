"use client";

function Hero() {
  return (
    <section
      className="relative w-full h-100 bg-cover bg-center flex flex-col justify-end gap-4 px-4 mt-4"
      style={{ backgroundImage: "url('/images/EliteFootballer.webp')" }}
    >
      <div className="w-full">
        <h1 className="text-2xl font-bold text-white leading-14">
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
      <div className="flex gap-4">
        <button className="bg-[#F5B800] text-black text-xs font-semibold h-12 w-40 rounded-md">
          JOIN US NOW
        </button>
        <button className="border border-[#F5B800] text-xs text-white font-semibold h-12 w-40 rounded-md">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}

export default Hero;
