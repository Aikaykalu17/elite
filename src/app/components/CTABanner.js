import Link from "next/link";

function CTABanner() {
  return (
    <section className="h-full w-full flex justify-center bg-[#0D2038]">
      <div className="w-[90%] mx-auto flex flex-col items-center py-6 gap-4 md:flex md:flex-row md:justify-evenly">
        <div className="text-center">
          <h2 className="text-[#F5B800] text-2xl font-bold">
            READY TO START YOUR JOURNEY?
          </h2>
          <p className="text-white text-center text-xs">
            Join Elite Football Club All Stars today
            <br className="md:hidden [@media(orientation:landscape)_and_(max-height:500px)]:hidden" />{" "}
            and take the first step towards your
            <br className="md:hidden [@media(orientation:landscape)_and_(max-height:500px)]:hidden" />{" "}
            dream.
          </p>
        </div>
        <Link
          href="/form"
          className="bg-[#F5B800] border text-black font-semibold px-8 py-3 text-xs rounded-md transition-all duration-300 ease-out hover:bg-transparent hover:text-white hover:-translate-y-1 cursor-pointer inline-flex items-center justify-center"
          aria-label="Enroll Now"
        >
          APPLY FOR A TRIAL
        </Link>
      </div>
    </section>
  );
}

export default CTABanner;
