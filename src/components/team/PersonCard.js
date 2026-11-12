import Image from "next/image";

/** Leadership card: photo beside a short bio (stacks on phones). */
export function LeaderCard({ person }) {
  return (
    <li className="flex flex-col gap-5 sm:flex-row">
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-2xl bg-surface-2 sm:w-40">
        <Image
          src={person.image}
          alt={`Portrait of ${person.name}`}
          fill
          sizes="(min-width: 640px) 10rem, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div>
        <h3 className="font-display text-h3 text-fg">{person.name}</h3>
        <p className="mt-1 font-semibold text-accent-ink">{person.role}</p>
        {person.bio ? <p className="mt-3 text-muted">{person.bio}</p> : null}
      </div>
    </li>
  );
}

/** Compact card for the coaching staff. */
export function StaffCard({ person }) {
  return (
    <li>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-2">
        <Image
          src={person.image}
          alt={`Portrait of ${person.name}`}
          fill
          sizes="(min-width: 1024px) 13rem, (min-width: 640px) 30vw, 50vw"
          className="object-cover object-top"
        />
      </div>
      <h3 className="mt-4 font-display text-[1.375rem] leading-tight font-bold text-fg">
        {person.name}
      </h3>
      <p className="mt-1 text-sm font-semibold text-accent-ink">{person.role}</p>
      {person.license ? (
        <p className="text-sm text-muted">{person.license}</p>
      ) : null}
    </li>
  );
}
