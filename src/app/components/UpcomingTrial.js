import { FaRegCalendarAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function UpcomingTrial() {
  const year = new Date().getFullYear();

  return (
    <section className="bg-white w-full h-full">
      <div className="w-[90%] mx-auto flex flex-col justify-between  md:grid md:grid-cols-2 gap-4">
        <div className="bg-slate-100  h-auto flex flex-col gap-4 p-6 my-4 rounded-lg">
          <div>
            <h1 className="font-bold">UPCOMING TRIAL</h1>
          </div>

          <div className="flex flex-row gap-4">
            <div>
              <FaRegCalendarAlt
                size={50}
                color="#061426"
                title="A calendar icon"
                aria-hidden="true"
              />
            </div>

            <article className="flex flex-col gap-4 text-xs font-bold">
              <p className="text-gray-700">
                <time dateTime="2026-10-24T09:00">
                  Saturday, 24th October {year}, <br /> 9:00 AM
                </time>
              </p>

              <address className="not-italic text-gray-600">
                Turf Arena, Wuse, Abuja
              </address>

              <p className="text-gray-500 font-normal">
                Open to ages 7–25. Limited slots available.
              </p>

              <Link href="/form">
                <button
                  className="bg-[#F5B800] border border-[#F5B800] text-xs text-black font-semibold px-10 py-3 rounded-md hover:text-[#061426] transition-all duration-300 ease-out hover:translate-y-1 cursor-pointer hover:bg-transparent w-fit"
                  type="button"
                  aria-label="Register"
                >
                  REGISTER
                </button>
              </Link>
            </article>
          </div>
        </div>

        <div
          className="bg-slate-100  h-auto flex flex-col gap-4 p-6 my-4 rounded-lg"
          aria-labelledby="testimonials"
        >
          <h2 id="testimonials" className="font-bold">
            PARENT TESTIMONIAL
          </h2>
          <article className="flex flex-col gap-6">
            <blockquote className="text-gray-600 flex flex-col gap-2 text-xs font-bold">
              <p>
                <FaQuoteLeft
                  size={14}
                  color="#F5B800"
                  aria-hidden="true"
                  className="inline-block ml-1 align-text-bottom mr-1"
                />
                Elite Football Club All Stars didn&apos;t just{" "}
                <br className="hidden md:block" />
                improve my son&apos;s game; it shaped his{" "}
                <br className="hidden md:block" /> character and discipline.
                <FaQuoteRight
                  size={14}
                  color="#F5B800"
                  aria-hidden="true"
                  className="inline-block ml-1 align-text-bottom"
                />
              </p>
            </blockquote>
            <footer className="flex items-center gap-4">
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
      </div>
    </section>
  );
}

export default UpcomingTrial;
