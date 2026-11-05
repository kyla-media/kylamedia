import type { Plan } from "@/content/plans";

import styles from "./packages.module.css";

type Props = { plan: Plan };

/** Prices and video counts are placeholders until pricing is agreed. */
export function PlanCard({ plan }: Props) {
  return (
    <div
      className={`${styles.plan} ${plan.pick ? styles.pick : ""}`}
      data-rv=""
    >
      <h3>
        {plan.name} {plan.pick && <small>Recommended</small>}
      </h3>
      <div className={styles.price}>
        <span className="tbc">$—</span> <span>per batch</span>
      </div>
      <ul>
        <li>
          <span className="tbc">[x]</span> {plan.videos}
        </li>
        {plan.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a className={`btn ${plan.pick ? "" : "ghost"}`} href="#contact">
        Book a call
      </a>
    </div>
  );
}
