import { SectionHead } from "@/components/section-head/SectionHead";
import { COMPARISON } from "@/content/process";

import styles from "./comparison.module.css";

export function Comparison() {
  return (
    <section className="block" aria-labelledby="h-vs" data-reveal>
      <div className="wrap">
        <SectionHead
          id="h-vs"
          kicker="AI or filmed creators"
          title="What changes when the creator is AI"
        >
          Filmed creators are real people, and that is their strength. Here is
          the honest trade.
        </SectionHead>
        <div data-rv="">
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">
                  <span className={styles.hidden}>Topic</span>
                </th>
                <th scope="col" className={styles.us}>
                  Kyla Media
                </th>
                <th scope="col">Filmed UGC creator</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map(([topic, us, them]) => (
                <tr key={topic}>
                  <th scope="row">{topic}</th>
                  <td className={styles.us} data-label="Kyla Media">
                    {us}
                  </td>
                  <td data-label="Filmed UGC creator">{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
