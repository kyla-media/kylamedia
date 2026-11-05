import { SectionHead } from "@/components/section-head/SectionHead";
import { BUYER_TYPE_TOTAL, BUYER_TYPES } from "@/content/process";

import styles from "./creators.module.css";

export function Creators() {
  return (
    <section className="block" aria-labelledby="h-icp" data-reveal>
      <div className="wrap">
        <SectionHead
          id="h-icp"
          kicker="Your creators"
          title="A face built for your buyer"
        >
          We design each AI creator around the exact customer you sell to. Your
          faces are yours alone: they appear in your ads across every stage and
          nowhere else.
        </SectionHead>
        <div className={styles.chips}>
          {BUYER_TYPES.map((b) => (
            <span key={b} className={styles.chip} data-rv="">
              {b}
            </span>
          ))}
          <span className={`${styles.chip} ${styles.more}`} data-rv="">
            {BUYER_TYPE_TOTAL}
          </span>
        </div>
      </div>
    </section>
  );
}
