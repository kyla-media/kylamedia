import { SectionHead } from "@/components/section-head/SectionHead";
import { FRAMEWORKS, SCRIPT_POINTS } from "@/content/scripting";

import styles from "./scripting.module.css";

/** Why our ads sell: the script engine behind every video. */
export function Scripting() {
  return (
    <section className="block" aria-labelledby="h-scripts" data-reveal>
      <div className="wrap">
        <SectionHead
          id="h-scripts"
          kicker="Our scripts"
          title="Scripts written to sell"
        >
          Most AI ads describe a product. Ours persuade. Every script is written
          like a direct-response copywriter would write it.
        </SectionHead>
        <ol className={styles.points}>
          {SCRIPT_POINTS.map((p, i) => (
            <li key={p.title} className={styles.point} data-rv="">
              <span className={styles.num}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>
        <p className={styles.label} data-rv="">
          Selling structures we write in
        </p>
        <div className={styles.chips}>
          {FRAMEWORKS.map((f) => (
            <span key={f} className={styles.chip} data-rv="">
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
