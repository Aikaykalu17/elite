import { FaRegCalendarAlt, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

function UpcomingTrial() {
  const year = new Date().getFullYear();

  return (
    <section className="bg-white w-full h-full">
      <div className="bg-slate-200 w-[90%] mx-auto h-auto flex flex-col gap-4 p-4 my-4 rounded-2xl">
        <div>
          <h1 className="font-bold">UPCOMING TRIAL</h1>
        </div>

        <div className="flex flex-row gap-4 ">
          <div>
            <FaRegCalendarAlt
              size={50}
              color="#061426"
              title="A calnder icon"
            />
          </div>

          <article className="flex flex-col gap-4 text-xs">
            <p className="text-gray-700">
              <time dateTime="2026-12-24T09:00">
                Saturday, 24th October {year}, <br /> 9:00 AM
              </time>
            </p>

            <address className="not-italic text-gray-600">
              Legacy Pitch, Abuja
            </address>
            <button className="bg-[#F5B800] text-xs text-black font-semibold h-10 w-36 rounded-md">
              {" "}
              REGISTER
            </button>
          </article>
        </div>
      </div>
      <div
        className="bg-slate-200 w-[90%] mx-auto h-auto flex flex-col gap-4 p-4 my-4 rounded-2xl"
        aria-labelledby="testimonials"
      >
        <h2 id="testimonials" className="font-bold">
          PARENT TESTIMONIAL
        </h2>
        <article className="flex flex-col gap-6">
          <blockquote className="text-gray-600 flex gap-4 text-xs">
            <FaQuoteLeft size={50} color="#F5B800" />
            Elite Football Club All Stars didn&apos;t just improve my son&apos;s
            game; it shaped his character and discipline.
          </blockquote>
          <footer className="flex  items-center gap-4">
            <Image
              src="/images/nigerianMother.webp"
              alt="Portriat of Mrs. Adewale"
              width={50}
              height={50}
              className="rounded-full object-cover"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="flex flex-col items-center">
              <cite className="text-sm font-bold text-[#061426]">
                - Mrs. Adewale
              </cite>
              <p className="text-xs text-gray-600 font-bold">Parent</p>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
}

export default UpcomingTrial;
