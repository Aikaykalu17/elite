import { Plus } from "lucide-react";

/**
 * FAQ built on native <details>: keyboard and screen-reader support come for
 * free, no JavaScript needed. Sharing `name` makes it a one-open-at-a-time group.
 */
export default function FaqAccordion({ faqs }) {
  return (
    <div className="border-t border-line">
      {faqs.map((faq) => (
        <details key={faq.id} name="faq" className="group border-b border-line">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold text-fg [&::-webkit-details-marker]:hidden">
            {faq.question}
            <Plus
              className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="pb-5 text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
