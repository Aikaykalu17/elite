import { LeaderCard, StaffCard } from "@/components/team/PersonCard";
import PageHeader from "@/components/ui/PageHeader";
import coaches from "@/data/coaches";

export const metadata = {
  title: "Our team",
  description:
    "The leadership and coaching staff behind Elite Football Club All Stars.",
};

// Leadership roles, in the order they are shown. Everyone else is coaching staff.
const leadershipRoles = [
  "President / Founder",
  "Vice President",
  "Director of Football",
  "Head of Security",
  "Welfare Officer",
  "Team Nurse",
  "Partnerships & Sponsorships Manager",
  "Head of Scouting",
];

export default function TeamPage() {
  const leaders = leadershipRoles.flatMap((role) =>
    coaches.filter((person) => person.role === role),
  );
  const staff = coaches.filter((person) => !leadershipRoles.includes(person.role));

  return (
    <>
      <PageHeader
        title="Our leaders and coaches"
        intro="Experienced, passionate and committed to building the future."
      />

      <section aria-labelledby="leadership-title" className="pb-20 md:pb-28">
        <div className="page-wrap">
          <h2 id="leadership-title" className="font-display text-h2 text-fg">
            Leadership
          </h2>
          <ul className="mt-8 grid gap-x-10 gap-y-12 lg:grid-cols-2">
            {leaders.map((person) => (
              <LeaderCard key={person.id} person={person} />
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="staff-title">
        <div className="page-wrap">
          <h2 id="staff-title" className="font-display text-h2 text-fg">
            Coaching staff
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
            {staff.map((person) => (
              <StaffCard key={person.id} person={person} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
