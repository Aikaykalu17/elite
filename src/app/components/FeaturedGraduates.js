"use client";

import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

function FeaturedGraduates() {
  return (
    <section aria-label="Player Profiles" className="w-full bg-white py-4">
      <div className="w-[90%] mx-auto flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold">OUR GRADUATES</h1>
          <Link
            href="/graduates"
            className="text-xs font-bold flex flex-row justify-between items-center"
          >
            VIEW ALL <HiArrowRight />
          </Link>
        </div>

        <div className="flex flex-row gap-6 ">
          <article className="border border-slate-200 w-max p-2 rounded-lg flex flex-col gap-1">
            <Image
              src="/images/alukwu.webp"
              width={100}
              height={50}
              alt="Alukwu Jonathan"
              className="object-cover object-top rounded-lg w-28 h-28 "
            />
            <h2 className="text-xs">
              {" "}
              <strong>Name:</strong> Alukwu Jonathan
            </h2>
            <p className="text-xs">
              <strong>Club:</strong> Asko Oedt (Austria)
            </p>
            <p className="text-xs">
              <strong>League:</strong> Regionalliga Mitte
            </p>
          </article>
          <article className="border border-slate-200 w-max p-2 rounded-lg flex flex-col gap-1">
            <Image
              src="/images/tested.webp"
              width={100}
              height={100}
              alt="Okoronkwo Chukwuebuka"
              className="object-cover object-top rounded-lg w-28 h-28"
            />
            <h2 className="text-xs">
              {" "}
              <strong>Name:</strong> Okoronkwo Chukwuebuka
            </h2>
            <p className="text-xs">
              <strong>Club:</strong> FC Rashvan (Tajikistan)
            </p>
            <p className="text-xs">
              <strong>League:</strong> Ligai Olii Tojikiston
            </p>
          </article>
          <article className="border border-slate-200 w-max p-2 rounded-lg gap-1 hidden  md:flex md:flex-col">
            <Image
              src="/images/blackHeadshot.webp"
              width={100}
              height={50}
              alt="Headshot of a Nigerian footballer wearing a footbball kit, captured with a confident, focused expression."
              className="object-cover object-top rounded-lg w-28 h-28 "
            />
            <h2 className="text-xs">
              <strong>Name:</strong> Chinedu Okeke
            </h2>
            <p className="text-xs">
              <strong>Club:</strong> Enyimba FC (Aba)
            </p>
            <p className="text-xs">
              <strong>League:</strong> NPFL
            </p>
          </article>
          <article className="border border-slate-200 w-max p-2 rounded-lg gap-1 hidden md:flex md:flex-col">
            <Image
              src="/images/secondHeadshot.webp"
              width={100}
              height={50}
              alt="Ayodele Balogun."
              className="object-cover object-top rounded-lg w-28 h-28 "
            />
            <h2 className="text-xs">
              <strong>Name:</strong> Ayodele Balogun
            </h2>
            <p className="text-xs">
              <strong>Club:</strong> Rangers International (Enugu)
            </p>
            <p className="text-xs">
              <strong>League:</strong> NPFL
            </p>
          </article>
          <article className="border border-slate-200 w-max p-2 rounded-lg gap-1 hidden md:flex md:flex-col">
            <Image
              src="/images/ifeanyi.webp"
              width={100}
              height={50}
              alt="Ifeanyi Iheonye"
              className="object-cover object-top rounded-lg w-28 h-28 "
            />
            <h2 className="text-xs">
              <strong>Name:</strong> Ifeanyi Iheonye
            </h2>
            <p className="text-xs">
              <strong>Club:</strong> Getafe (Spain)
            </p>
            <p className="text-xs">
              <strong>League:</strong> La Liga
            </p>
          </article>
          <article className="border border-slate-200 w-max p-2 rounded-lg gap-1 hidden md:flex md:flex-col">
            <Image
              src="/images/neto.webp"
              width={100}
              height={50}
              alt="Netochukwu Chisom"
              className="object-cover object-top rounded-lg w-28 h-28 "
            />
            <h2 className="text-xs">
              <strong>Name:</strong> Netochukwu Chisom
            </h2>
            <p className="text-xs">
              <strong>Club:</strong> Avaí FC (Brazil)
            </p>
            <p className="text-xs">
              <strong>League:</strong> Brazil Serie B
            </p>
          </article>
          <article className="border border-slate-200 w-max p-2 rounded-lg gap-1 hidden md:flex md:flex-col">
            <Image
              src="/images/casper.webp"
              width={100}
              height={50}
              alt="Ndubuaku Casper"
              className="object-cover object-top rounded-lg w-28 h-28 "
            />
            <h2 className="text-xs">
              <strong>Name:</strong> Ndubuaku Casper
            </h2>
            <p className="text-xs">
              <strong>Club:</strong> AFC Coventry (UK)
            </p>
            <p className="text-xs">
              <strong>League:</strong> Peter Bromwich Premier Division
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGraduates;
