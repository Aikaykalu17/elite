import { MapPin, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import PageHeader from "@/components/ui/PageHeader";
import SocialLinks from "@/components/ui/SocialLinks";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact us",
  description:
    "Phone, WhatsApp, email and directions to Turf Arena, Wuse, Abuja.",
};

const linkClass =
  "flex min-h-11 items-center gap-4 text-lg font-semibold text-fg underline decoration-line decoration-2 underline-offset-8 transition-colors hover:decoration-accent";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact us" intro="We'd love to hear from you." />

      <div className="page-wrap grid gap-12 lg:grid-cols-2 lg:gap-14">
        <section aria-labelledby="details-title">
          <h2 id="details-title" className="font-display text-h2 text-fg">
            Get in touch
          </h2>
          <address className="mt-7 grid gap-2 not-italic">
            <p className="flex items-start gap-4 py-2 text-lg text-fg">
              <MapPin className="mt-1 size-6 shrink-0" aria-hidden="true" />
              <span>
                {site.address.venue}, {site.address.street}
                <br />
                {site.address.area}, {site.address.country}
              </span>
            </p>
            <a href={`tel:${site.phone.tel}`} className={linkClass}>
              <Phone className="size-6 shrink-0" aria-hidden="true" />
              {site.phone.display}
            </a>
            <a
              href={`https://wa.me/${site.phone.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <FaWhatsapp className="size-6 shrink-0" aria-hidden="true" />
              <span>
                WhatsApp {site.phone.display}
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
            <a href={`mailto:${site.email}`} className={linkClass}>
              <Mail className="size-6 shrink-0" aria-hidden="true" />
              {site.email}
            </a>
          </address>

          <h2 className="mt-14 font-display text-h3 text-fg">Follow us</h2>
          <SocialLinks variant="labelled" className="mt-5" />
        </section>

        <section aria-label="Map" className="lg:pt-1">
          <iframe
            title="Map showing Turf Arena in Wuse, Abuja"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9866651299026!2d7.487141474588101!3d9.064978590997839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0badb48c0829%3A0x77ca8411fb8a5c78!2sTurf%20Arena%20Sports%20Center!5e0!3m2!1sen!2sng!4v1786909443466!5m2!1sen!2sng"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full rounded-[1.75rem] border border-line bg-surface-2 lg:aspect-auto lg:h-full lg:min-h-[28rem]"
          />
        </section>
      </div>
    </>
  );
}
