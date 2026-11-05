import { SectionHead } from "@/components/section-head/SectionHead";
import { FAQ } from "@/content/faq";

import styles from "./faq.module.css";

export function Faq() {
  return (
    <section className="block" id="faq" aria-labelledby="h-faq" data-reveal>
      <div className="wrap">
        <SectionHead id="h-faq" kicker="FAQ" title="Questions brands ask first">
          Anything else, ask on the call.
        </SectionHead>
        <div className={styles.list} data-rv="">
          {FAQ.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>{item.q}</summary>
              <p>
                {item.a}
                {item.tbc && (
                  <>
                    {" "}
                    <span className="tbc">{item.tbc}</span>
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
