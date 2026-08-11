import { FaRegCalendarAlt, FaQuoteLeft } from "react-icons/fa";

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

          <article className="flex flex-col gap-4">
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
        <h2 className="testimonials">PARENT TESTIMONIAL</h2>
        <article>
          <blockquote className="text-gray-600 flex">
            <FaQuoteLeft size={50} color="#F5B800" />
            &quot; Elite Football Club All Stars didn&apos;t just improve my
            son&apos;s game; it shaped his character and discipline.&quot;
          </blockquote>
        </article>
      </div>
    </section>
  );
}

export default UpcomingTrial;
