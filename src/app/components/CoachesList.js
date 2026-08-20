import Image from "next/image";
import Reveal from "./Reveal";

function CoachesList({ coaches }) {
  const president = coaches.find(
    (coach) => coach.role === "President / Founder",
  );
  const staff = coaches.filter((coach) => coach.role !== "President / Founder");

  return (
    <div className="bg-white w-full h-full py-6">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-[#061426]">LEADERSHIP</h2>

        {president && (
          <Reveal>
            <article className="flex flex-col md:flex-row bg-gray-100 p-6 gap-6 rounded-lg">
              <div className="relative w-32 h-32 shrink-0">
                <Image
                  src={president.image}
                  alt={president.name}
                  fill
                  sizes="128px"
                  className="object-cover object-top rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[#061426] font-bold">{president.name}</h3>
                {president.role && (
                  <p className="text-[#D99A00] text-xs">{president.role}</p>
                )}
                {president.bio && (
                  <p className="text-gray-500 text-xs">{president.bio}</p>
                )}
              </div>
            </article>
          </Reveal>
        )}
      </div>

      <Reveal>
        <h2 className="font-bold text-[#061426] mt-6">COACHING STAFF</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {staff.map((coach) => (
            <article
              key={coach.id}
              className="flex flex-row items-center bg-gray-100 p-6 gap-6 rounded-lg"
            >
              <div className="relative w-24 h-24 shrink-0">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  sizes="96px"
                  className="object-cover object-top rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#061426] font-bold">{coach.name}</h3>
                {coach.role && (
                  <p className="text-[#D99A00] text-xs">{coach.role}</p>
                )}
                {coach.license && (
                  <p className="text-gray-500 text-xs">{coach.license}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export default CoachesList;
