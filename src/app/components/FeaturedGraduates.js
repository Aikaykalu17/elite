"use client";

import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

function FeaturedGraduates() {
  return (
    <section aria-label="Player Profiles" className="w-full bg-white py-4">
      <div className="w-[90%] mx-auto flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold">FEATURED GRADUATES</h1>
          <Link
            href=""
            className="text-xs font-bold flex flex-row justify-between items-center"
          >
            VIEW ALL <HiArrowRight />
          </Link>
        </div>

        <div className="flex flex-row gap-6">
          <article className="border border-slate-400 w-max p-4 rounded-2xl gap-1 hidden md:flex">
            <Image
              src="/images/blackHeadshot.webp"
              width={100}
              height={50}
              alt="Headshot of a Nigerian footballer wearing a footbball kit, captured with a confident, focused expression."
              className="object-cover"
            />
            <h2>Chinedu Okeke</h2>
            <p>
              <strong>Club:</strong> Enyimba FC (Aba)
            </p>
            <p>
              <strong>League:</strong> NPFL
            </p>
          </article>
          <article className="border border-slate-400 w-max p-4 rounded-2xl gap-1 hidden md:flex">
            <Image
              src="/images/secondHeadshot.webp"
              width={100}
              height={50}
              alt="Headshot of a Nigerian footballer smiling confidently in a blue-and-yellow kit."
              className="object-cover"
            />
            <h2>Ayodele Balogun</h2>
            <p>
              <strong>Club:</strong> Rangers International (Enugu)
            </p>
            <p>
              <strong>League:</strong> NPFL
            </p>
          </article>
          <article className="border border-slate-400 w-max p-4 rounded-2xl flex flex-col gap-1">
            <Image
              src="/images/thirdHeadshot.webp"
              width={100}
              height={50}
              alt="Headshot of a teenage Nigerian footballer wearing a blue-and-yellow kit with a serious expression."
              className="object-cover rounded-2xl"
            />
            <h2 className="text-xs">
              {" "}
              <strong>Name:</strong> Ifeanyi Umeh
            </h2>
            <p className="text-xs">
              <strong>Club:</strong> Club Brugge (Belgium)
            </p>
            <p className="text-xs">
              <strong>League:</strong> Jupiler <br /> Pro League
            </p>
          </article>
          <article className="border border-slate-400 w-max p-4 rounded-2xl flex flex-col gap-1">
            <Image
              src="/images/fourthHeadshot.webp"
              width={100}
              height={50}
              alt="Headshot of a teenage Nigerian footballer shouting in celebration."
              className="object-cover rounded-2xl"
            />
            <h2 className="text-xs">
              {" "}
              <strong>Name:</strong> Temitope Adeyemi
            </h2>
            <p className="text-xs">
              <strong>Club:</strong> Galatasaray (Turkey)
            </p>
            <p className="text-xs">
              <strong>League:</strong> Turkish Süper Lig
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGraduates;
