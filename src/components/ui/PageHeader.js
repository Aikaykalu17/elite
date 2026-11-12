/**
 * Title block shared by every inner page. The top padding clears the fixed
 * header pill, so pages never need their own spacing hacks.
 */
export default function PageHeader({ title, intro }) {
  return (
    <header className="pt-28 pb-10 sm:pt-32 md:pb-14">
      <div className="page-wrap">
        <h1 className="font-display text-h1 text-fg">{title}</h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-lg text-muted">{intro}</p>
        ) : null}
      </div>
    </header>
  );
}
