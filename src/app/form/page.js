import RegistrationForm from "../components/RegistrationForm";

function Page() {
  return (
    <section className="mt-20 w-full">
      <div className=" flex flex-col items-center gap-2 py-4">
        <h1 className="text-white font-bold text-center">
          TRIAL WITH OUR ACADEMY <br /> AND STAND A CHANCE
        </h1>
        <p className="text-white font-bold text-xs">
          Take your first step <br /> towards your dream.
        </p>
      </div>
      <RegistrationForm />
    </section>
  );
}

export default Page;
