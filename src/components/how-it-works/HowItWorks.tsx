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
          title="An ad plan built around your brand"
        >
          You tell us what you need. We plan, make and improve the ads.
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
