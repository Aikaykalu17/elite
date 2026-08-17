import Image from "next/image";
import Link from "next/link";

function AboutPreview() {
  return (
    <section className="bg-white  w-full py-4">
      <div className="w-[90%] mx-auto flex flex-col gap-4">
        <div className="w-full flex flex-col gap-4">
          <p className="text-[#061426] font-bold">ABOUT ELITE</p>
          <h1 className="text-[#061426] font-bold">
            FOOTBALL CLUB <br /> ALL STARS
          </h1>
          <p className="text-[#0D2038] text-xs">
            We are a leading football academy in Nigeria, committed to
            discovering, nurturing and developing young talents for greatness on
            ad off the pitch.
          </p>
          <Link href="/about-us">
            <button
              type="button"
              className="bg-[#F5B800] text-xs text-black font-semibold px-8 py-3 rounded-md"
            >
              {" "}
              ABOUT US
            </button>
          </Link>
        </div>
        <div className="w-full">
          <Image
            src="/images/playersBackingCameraNaija.webp"
            width={1536}
            height={1024}
            alt="Six Nigerian footballers proudly standing with their backs to the camera, wearing the same blue-and-yellow “ELITE FC” kit."
            className="rounded-[10px] object-cover"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
export default AboutPreview;
