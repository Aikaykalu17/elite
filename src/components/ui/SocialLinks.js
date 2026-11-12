import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { socials } from "@/lib/site";

const icons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
};

/**
 * Social links. "icons" is a compact row of round buttons (footer);
 * "labelled" shows the network name too (contact page).
 */
export default function SocialLinks({ variant = "icons", className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {socials.map(({ id, label, href }) => {
        const Icon = icons[id];
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                variant === "icons" ? `${label} (opens in a new tab)` : undefined
              }
              className={
                variant === "icons"
                  ? "grid size-11 place-items-center rounded-full border border-line text-fg transition-colors hover:bg-fg/10"
                  : "inline-flex min-h-11 items-center gap-2.5 rounded-full border border-line px-5 font-semibold text-fg transition-colors hover:bg-fg/5"
              }
            >
              <Icon className="size-[1.125rem]" aria-hidden="true" />
              {variant === "labelled" ? (
                <>
                  <span>{label}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </>
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
