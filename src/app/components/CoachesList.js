import Image from "next/image";
import Reveal from "./Reveal";

function CoachesList({ coaches }) {
  const president = coaches.find(
    (coach) => coach.role === "President / Founder",
  );

  const vicePresident = coaches.find(
    (coach) => coach.role === "Vice President",
  );

  const directorOfFootball = coaches.find(
    (coach) => coach.role === "Director of Football",
  );

  const headOfSecurity = coaches.find(
    (coach) => coach.role === "Head of Security",
  );

  const welfareOfficer = coaches.find(
    (coach) => coach.role === "Welfare Officer",
  );

  const teamNurse = coaches.find((coach) => coach.role === "Team Nurse");

  const partnershipOfficer = coaches.find(
    (coach) => coach.role === "Partnerships & Sponsorships Manager",
  );

  const headOfScouting = coaches.find(
    (coach) => coach.role === "Head of Scouting",
  );

  const staff = coaches.filter(
    (coach) =>
      coach.role !== "President / Founder" &&
      coach.role !== "Vice President" &&
      coach.role !== "Director of Football" &&
      coach.role !== "Head of Security" &&
      coach.role !== "Welfare Officer" &&
      coach.role !== "Team Nurse" &&
      coach.role !== "Partnerships & Sponsorships Manager" &&
      coach.role !== "Head of Scouting",
  );

  return (
    <div className="bg-white w-full h-full py-6">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-[#061426]">LEADERSHIP</h2>

        <Reveal>
          <div className="flex flex-col md:grid md:grid-cols-3 xl:grid xl:grid-cols-4 gap-4 mt-4 max-lg:landscape:grid max-lg:landscape:grid-cols-2 place-items-center">
            {president && (
              <article className="flex flex-col w-full h-full max-w-80 bg-gray-100 p-6 gap-6 rounded-lg">
                {/* Image wrapper */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={president.image}
                    alt={president.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-top rounded-lg"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#061426] font-bold text-lg">
                    {president.name}
                  </h3>
                  {president.role && (
                    <p className="text-[#D99A00] text-xs">{president.role}</p>
                  )}
                  {president.bio && (
                    <p className="text-gray-500 text-sm">{president.bio}</p>
                  )}
                </div>
              </article>
            )}
            {vicePresident && (
              <article className="flex flex-col w-full h-full max-w-80 bg-gray-100 p-6 gap-6 rounded-lg">
                {/* Image wrapper */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={vicePresident.image}
                    alt={vicePresident.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-top rounded-lg"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#061426] font-bold text-lg">
                    {vicePresident.name}
                  </h3>
                  {vicePresident.role && (
                    <p className="text-[#D99A00] text-xs">
                      {vicePresident.role}
                    </p>
                  )}
                  {vicePresident.bio && (
                    <p className="text-gray-500 text-sm">{vicePresident.bio}</p>
                  )}
                </div>
              </article>
            )}
            {directorOfFootball && (
              <article className="flex flex-col w-full h-full max-w-80 bg-gray-100 p-6 gap-6 rounded-lg">
                {/* Image wrapper */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={directorOfFootball.image}
                    alt={directorOfFootball.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-top rounded-lg"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#061426] font-bold text-lg">
                    {directorOfFootball.name}
                  </h3>
                  {directorOfFootball.role && (
                    <p className="text-[#D99A00] text-xs">
                      {directorOfFootball.role}
                    </p>
                  )}
                  {directorOfFootball.bio && (
                    <p className="text-gray-500 text-sm">
                      {directorOfFootball.bio}
                    </p>
                  )}
                </div>
              </article>
            )}

            {headOfSecurity && (
              <article className="flex flex-col w-full h-full max-w-80 bg-gray-100 p-6 gap-6 rounded-lg">
                {/* Image wrapper */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={headOfSecurity.image}
                    alt={headOfSecurity.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-top rounded-lg"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#061426] font-bold text-lg">
                    {headOfSecurity.name}
                  </h3>
                  {headOfSecurity.role && (
                    <p className="text-[#D99A00] text-xs">
                      {headOfSecurity.role}
                    </p>
                  )}
                  {headOfSecurity.bio && (
                    <p className="text-gray-500 text-sm">
                      {headOfSecurity.bio}
                    </p>
                  )}
                </div>
              </article>
            )}
            {welfareOfficer && (
              <article className="flex flex-col w-full h-full max-w-80 bg-gray-100 p-6 gap-6 rounded-lg">
                {/* Image wrapper */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={welfareOfficer.image}
                    alt={welfareOfficer.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-top rounded-lg"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#061426] font-bold text-lg">
                    {welfareOfficer.name}
                  </h3>
                  {welfareOfficer.role && (
                    <p className="text-[#D99A00] text-xs">
                      {welfareOfficer.role}
                    </p>
                  )}
                  {welfareOfficer.bio && (
                    <p className="text-gray-500 text-sm">
                      {welfareOfficer.bio}
                    </p>
                  )}
                </div>
              </article>
            )}
            {teamNurse && (
              <article className="flex flex-col w-full h-full max-w-80 bg-gray-100 p-6 gap-6 rounded-lg">
                {/* Image wrapper */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={teamNurse.image}
                    alt={teamNurse.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-top rounded-lg"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#061426] font-bold text-lg">
                    {teamNurse.name}
                  </h3>
                  {teamNurse.role && (
                    <p className="text-[#D99A00] text-xs">{teamNurse.role}</p>
                  )}
                  {teamNurse.bio && (
                    <p className="text-gray-500 text-sm">{teamNurse.bio}</p>
                  )}
                </div>
              </article>
            )}
            {partnershipOfficer && (
              <article className="flex flex-col w-full h-full max-w-80 bg-gray-100 p-6 gap-6 rounded-lg">
                {/* Image wrapper */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={partnershipOfficer.image}
                    alt={partnershipOfficer.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-top rounded-lg"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#061426] font-bold text-lg">
                    {partnershipOfficer.name}
                  </h3>
                  {partnershipOfficer.role && (
                    <p className="text-[#D99A00] text-xs">
                      {partnershipOfficer.role}
                    </p>
                  )}
                  {partnershipOfficer.bio && (
                    <p className="text-gray-500 text-sm">
                      {partnershipOfficer.bio}
                    </p>
                  )}
                </div>
              </article>
            )}
            {headOfScouting && (
              <article className="flex flex-col w-full h-full max-w-80 bg-gray-100 p-6 gap-6 rounded-lg">
                {/* Image wrapper */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={headOfScouting.image}
                    alt={headOfScouting.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-top rounded-lg"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#061426] font-bold text-lg">
                    {headOfScouting.name}
                  </h3>
                  {headOfScouting.role && (
                    <p className="text-[#D99A00] text-xs">
                      {headOfScouting.role}
                    </p>
                  )}
                  {headOfScouting.bio && (
                    <p className="text-gray-500 text-sm">
                      {headOfScouting.bio}
                    </p>
                  )}
                </div>
              </article>
            )}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <h2 className="font-bold text-[#061426] mt-6">COACHING STAFF</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4 max-lg:landscape:grid-cols-3 place-items-center">
          {staff.map((coach) => (
            <article
              key={coach.id}
              className="flex flex-col w-full h-full max-w-80 bg-gray-100 p-6 gap-6 rounded-lg"
            >
              {/* Image wrapper - full width */}
              <div className="relative w-full aspect-square">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-top rounded-lg"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#061426] font-bold text-lg">
                  {coach.name}
                </h3>
                {coach.role && (
                  <p className="text-[#D99A00] text-xs">{coach.role}</p>
                )}
                {coach.license && (
                  <p className="text-gray-500 text-sm">{coach.license}</p>
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
