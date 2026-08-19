import Link from "next/link";

function CTABanner() {
  return (
    <section className="h-full w-full flex justify-center bg-[#0D2038]">
      <div className="w-[90%] mx-auto flex flex-col items-center py-6 gap-4 md:flex md:flex-row md:justify-evenly">
        <div className="md:text-center">
          <h1 className="text-[#F5B800] text-2xl font-bold">
            READY TO START <br className="md:hidden" /> YOUR JOURNEY?
          </h1>
          <p className="text-white text-center text-xs">
            Join Elite Stars Football Club All Stars today{" "}
            <br className="md:hidden" /> and take the first step towards your{" "}
            <br className="md:hidden" /> dream.
          </p>
        </div>
        <Link href="/form">
          <button
            className="bg-[#F5B800] border text-black font-semibold px-8 py-3  text-xs rounded-md transition-all duration-300 ease-out hover:bg-transparent hover:text-white
  hover:-translate-y-1  cursor-pointer"
            aria-label="Enroll Now"
          >
            ENROLL NOW
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CTABanner;
