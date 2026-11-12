import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import SocialLinks from "@/components/ui/SocialLinks";
import { applyLink, navLinks, site } from "@/lib/site";

const footerLinks = [{ href: "/", label: "Home" }, ...navLinks, applyLink];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-tone="dark">
      <div className="page-wrap grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Image
            src="/logo.webp"
            alt="Elite Football Club All Stars"
            width={704}
            height={254}
            className="h-16 w-auto"
          />
          <p className="mt-6 max-w-sm text-muted">
            A football academy in Abuja, discovering, developing and nurturing
            young talents for greatness on and off the pitch.
          </p>
          <SocialLinks className="mt-7" />
        </div>

        <nav aria-label="Footer navigation" className="lg:col-span-4">
          <h2 className="font-display text-h3">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-fg"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="font-display text-h3">Contact</h2>
          <address className="mt-4 grid gap-1 not-italic">
            <a
              href={`tel:${site.phone.tel}`}
              className="flex min-h-11 items-center gap-3 text-muted transition-colors hover:text-fg"
            >
              <Phone className="size-5 shrink-0 text-accent" aria-hidden="true" />
              {site.phone.display}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex min-h-11 items-center gap-3 text-muted transition-colors hover:text-fg"
            >
              <Mail className="size-5 shrink-0 text-accent" aria-hidden="true" />
              {site.email}
            </a>
            <p className="flex items-start gap-3 py-2.5 text-muted">
              <MapPin
                className="mt-0.5 size-5 shrink-0 text-accent"
                aria-hidden="true"
              />
              <span>
                {site.address.venue}, {site.address.street}
                <br />
                {site.address.area}, {site.address.country}
              </span>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="page-wrap py-5 text-sm text-muted">
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
