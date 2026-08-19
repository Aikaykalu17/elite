import { FaRegCalendarAlt, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function UpcomingTrial() {
  const year = new Date().getFullYear();

  return (
    <section className="bg-white w-full h-full md:grid md:grid-cols-2">
      <div className="bg-slate-100 w-[90%] mx-auto h-auto flex flex-col gap-4 p-6 my-4 rounded-lg ">
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

          <article className="flex flex-col gap-4 text-xs font-bold">
            <p className="text-gray-700">
              <time dateTime="2026-12-24T09:00">
                Saturday, 24th October {year}, <br /> 9:00 AM
              </time>
            </p>

            <address className="not-italic text-gray-600">
              Turf Arena, Wuse, Abuja
            </address>
            <Link href="/form">
              <button
                className="bg-[#F5B800] border border-[#F5B800] text-xs text-black font-semibold px-10 py-3 rounded-md hover:text-[#061426] transition-all duration-300 ease-out
    hover:translate-y-1 cursor-pointer hover:bg-transparent"
                type="button"
                aria-label="Register"
              >
                {" "}
                REGISTER
              </button>
            </Link>
          </article>
        </div>
      </div>
      <div
        className="bg-slate-100 w-[90%] mx-auto h-auto flex flex-col gap-4 p-6 my-4 rounded-lg"
        aria-labelledby="testimonials"
      >
        <h2 id="testimonials" className="font-bold">
          PARENT TESTIMONIAL
        </h2>
        <article className="flex flex-col gap-6">
          <blockquote className="text-gray-600 flex gap-4 text-xs font-bold">
            <FaQuoteLeft size={50} color="#F5B800" />
            Elite Football Club All Stars didn&apos;t just{" "}
            <br className="hidden md:block" />
            improve my son&apos;s game; it shaped his{" "}
            <br className="hidden md:block" /> character and discipline.
          </blockquote>
          <footer className="flex  items-center gap-4">
            <Image
              src="/images/nigerianMother.webp"
              alt="Mrs. Adewale"
              width={50}
              height={50}
              className="rounded-full object-cover w-20 h-20"
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
