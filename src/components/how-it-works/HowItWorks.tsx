import { SectionHead } from "@/components/section-head/SectionHead";
import { STEPS } from "@/content/process";

import styles from "./how-it-works.module.css";

export function HowItWorks() {
  return (
    <section className="block" aria-labelledby="h-how" data-reveal>
      <div className="wrap">
        <SectionHead
          id="h-how"
          kicker="How it works"
          title="From product page to posted ad"
        >
          Tell us who you sell to. We do the rest.
        </SectionHead>
        <ol className={styles.steps}>
          {STEPS.map((s) => (
            <li key={s.title} data-rv="">
              <h3>{s.title}</h3>
              <p>
                {s.text}
                {s.tbc && (
                  <>
                    {" "}
                    <span className="tbc">{s.tbc}</span>.
                  </>
                )}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
