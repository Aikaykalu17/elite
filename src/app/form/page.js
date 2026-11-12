import { Check } from "lucide-react";

import FaqAccordion from "@/components/form/FaqAccordion";
import RegistrationForm from "@/components/form/RegistrationForm";
import PageHeader from "@/components/ui/PageHeader";
import faqs from "@/data/faqs";

export const metadata = {
  title: "Apply for a trial",
  description:
    "Apply for a trial at Elite Football Club All Stars. Requirements, trial fees by age group and answers to common questions.",
};

const requirements = [
  "Age 7 to 25",
  "Birth certificate",
  "Training kit and boots",
  "Water bottle",
  "Medical fitness certificate",
];

const fees = [
  { group: "U-13", amount: "\u20A660,000" },
  { group: "U-15", amount: "\u20A670,000" },
  { group: "U-17", amount: "\u20A6100,000" },
  { group: "Senior", amount: "\u20A6150,000" },
];

export default function FormPage() {
  return (
    <>
      <PageHeader
        title="Trial with our academy and stand a chance"
        intro="Take your first step towards your dream."
      />

      <div className="page-wrap grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <RegistrationForm />
        </div>

        <aside
          aria-label="Trial requirements and fees"
          className="grid gap-12 lg:col-span-5 lg:pt-2"
        >
          <section aria-labelledby="requirements-title">
            <h2 id="requirements-title" className="font-display text-h3 text-fg">
              Requirements
            </h2>
            <ul className="mt-4 grid gap-3">
              {requirements.map((item) => (
                <li key={item} className="flex items-center gap-3 text-fg">
                  <Check className="size-5 shrink-0 text-ok" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="fees-title">
            <h2 id="fees-title" className="font-display text-h3 text-fg">
              Trial fees
            </h2>
            <p className="mt-2 text-muted">Fees vary by age category.</p>
            <dl className="mt-4 border-t border-line">
              {fees.map(({ group, amount }) => (
                <div
                  key={group}
                  className="flex items-baseline justify-between border-b border-line py-3"
                >
                  <dt className="text-fg">{group}</dt>
                  <dd className="font-display text-2xl font-bold text-fg tabular-nums">
                    {amount}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </aside>
      </div>

      <section aria-labelledby="faq-title" className="mt-20 md:mt-28">
        <div className="page-wrap">
          <h2 id="faq-title" className="font-display text-h2 text-fg">
            Frequently asked questions
          </h2>
          <div className="mt-8 max-w-3xl">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
