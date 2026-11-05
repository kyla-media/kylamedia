import { SectionHead } from "@/components/section-head/SectionHead";
import { PLANS } from "@/content/plans";

import { PlanCard } from "./PlanCard";
import styles from "./packages.module.css";

export function Packages() {
  return (
    <section
      className="block"
      id="packages"
      aria-labelledby="h-plans"
      data-reveal
    >
      <div className="wrap">
        <SectionHead id="h-plans" kicker="Packages" title="Pick a batch size">
          No retainer and no minimum term. Buy one batch, see how it runs, then
          order the next.
        </SectionHead>
        <div className={styles.plans}>
          {PLANS.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
        <p className={styles.note}>
          Need more than Expert? Ask about bulk pricing on a call.
        </p>
      </div>
    </section>
  );
}
