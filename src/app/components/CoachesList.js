import Image from "next/image";

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
          <article className="flex flex-col bg-gray-100 p-6 gap-6 rounded-lg md:flex md:flex-row">
            <Image
              src={president.image}
              alt={president.name}
              width={200}
              height={20}
              className="object-contain object-top rounded-lg w-32 h-32 self-start"
            />
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-[#061426] font-bold">{president.name}</h3>
              </div>
              <div>
                {president.role && (
                  <p className="text-[#D99A00] text-xs">{president.role}</p>
                )}
              </div>
              {president.bio && (
                <div>
                  <p className="text-gray-500 text-xs">{president.bio}</p>
                </div>
              )}
            </div>
          </article>
        )}
      </div>
      <h2 className="font-bold text-[#061426]">COACHING STAFF</h2>

      <div className="md:grid md:grid-cols-3 gap-4">
        {staff.map((coach) => (
          <article
            key={coach.id}
            className="flex flex-col bg-gray-100 p-6 gap-6 rounded-lg"
          >
            <Image
              src={coach.image}
              alt={coach.name}
              width={200}
              height={200}
              className="object-contain object-top rounded-lg w-32 h-32 self-start"
            />
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-[#061426] font-bold">{coach.name}</h3>
              </div>
              <div>
                {coach.role && (
                  <p className="text-[#D99A00] text-xs">{coach.role}</p>
                )}
                {coach.license && (
                  <p className="text-gray-500 text-xs">{coach.license}</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default CoachesList;
