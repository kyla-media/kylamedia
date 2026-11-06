import type { Plan } from "@/content/plans";

import { QuoteLink } from "./QuoteLink";
import styles from "./packages.module.css";

type Props = { plan: Plan };

/** No price on the card: every package is quoted to the brand. */
export function PlanCard({ plan }: Props) {
  return (
    <div className={styles.plan} data-rv="">
      <h3>{plan.name}</h3>
      <ul>
        {plan.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <QuoteLink className="btn ghost" packageId={plan.id} />
    </div>
  );
}
