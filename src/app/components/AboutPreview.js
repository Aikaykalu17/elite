import Image from "next/image";
import Link from "next/link";

function AboutPreview() {
  return (
    <section className="bg-white  w-full py-4">
      <div className="w-[90%] mx-auto flex flex-col gap-4 md:flex md:flex-row md:justify-between  [@media(orientation:landscape)_and_(max-height:500px)]:flex-row">
        <div className="w-full flex flex-col gap-4 md:flex md:flex-col md:justify-center">
          <p className="text-[#061426] font-bold">ABOUT ELITE</p>
          <h2 className="text-[#061426] md:text-2xl font-bold">
            FOOTBALL CLUB <br className="md:hidden" /> ALL STARS
          </h2>
          <p className="text-gray-600 font-bold text-xs">
            We are a leading football academy in Nigeria,{" "}
            <br className="hidden md:block" /> committed to discovering,
            nurturing and <br className="hidden md:block" /> developing young
            talents for greatness on and <br className="hidden md:block" /> off
            the pitch.
          </p>
          <Link
            href="/about-us"
            className="bg-[#F5B800] w-max  text-xs text-black font-semibold px-8 py-3 rounded-md border border-transparent hover:bg-transparent hover:border-[#F5B800] hover:text-[#061426] transition-all duration-300 ease-out hover:translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)] cursor-pointer inline-flex items-center justify-center"
          >
            ABOUT ELITE FC
          </Link>
        </div>
        <div className="w-full md:flex md:justify-end h-full ">
          <Image
            src="/images/newplayers.webp"
            width={1036}
            height={1024}
            alt="Six Nigerian footballers proudly standing with their backs to the camera, wearing the same blue-and-yellow “ELITE FC” kit."
            sizes="(max-width: 768px) 90vw, 400px"
            className="rounded-lg object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
export default AboutPreview;
