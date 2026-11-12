import { ButtonLink } from "@/components/ui/Button";
import { navLinks } from "@/lib/site";
import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="page-wrap pt-36 pb-8 sm:pt-44">
      <p className="font-display text-display leading-none font-bold text-accent-ink">
        404
      </p>
      <h1 className="mt-4 font-display text-h1 text-fg">Page not found</h1>
      <p className="mt-4 max-w-lg text-lg text-muted">
        That page doesn&rsquo;t exist or has moved. Head back to the home page
        or pick one of the sections below.
      </p>
      <div className="mt-8">
        <ButtonLink href="/" size="lg">
          Back to home
        </ButtonLink>
      </div>
      <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-1">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="inline-flex min-h-11 items-center font-semibold text-fg underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent-ink"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
