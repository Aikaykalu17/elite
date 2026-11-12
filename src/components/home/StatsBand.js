const stats = [
  { value: "8+", label: "Seasons of excellence" },
  { value: "70+", label: "Talents developed" },
  { value: "25+", label: "Titles won" },
  { value: "100+", label: "Rising stars" },
];

// Plain numbers. A count-up animation added nothing for a figure like "8+",
// slowed the read, and announced intermediate values to screen readers.
export default function StatsBand() {
  return (
    <section data-tone="dark" aria-labelledby="stats-title">
      <div className="page-wrap py-12 sm:py-14">
        <h2 id="stats-title" className="sr-only">
          Elite FC in numbers
        </h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col-reverse justify-end border-t border-line pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="mt-1 text-sm text-muted sm:text-base">{label}</dt>
              <dd className="font-display text-5xl leading-none font-bold text-fg sm:text-6xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
