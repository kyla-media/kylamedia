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
        <SectionHead
          id="h-plans"
          kicker="Packages"
          title="Custom pricing for every brand"
        >
          Every brand is different. Pick the package closest to what you need
          and we&apos;ll send you a custom quote.
        </SectionHead>
        <div className={styles.plans}>
          {PLANS.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
        <p className={styles.note}>
          Need something different? Tell us in the form and we&apos;ll build a
          package around it.
        </p>
      </div>
    </section>
  );
}
