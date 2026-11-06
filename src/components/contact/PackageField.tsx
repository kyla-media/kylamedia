"use client";

import { PACKAGE_CHOICES } from "@/content/plans";
import { choosePackage, useChosenPackage } from "@/lib/quote/chosen-package";

import styles from "./contact.module.css";

/** Filled by the package card they clicked; they can still change it here. */
export function PackageField() {
  const chosen = useChosenPackage();
  const value = PACKAGE_CHOICES.some((c) => c.id === chosen)
    ? chosen!
    : "unsure";

  return (
    <div className={`${styles.field} ${styles.wide}`}>
      <label htmlFor="c-package">Package you&apos;re asking about</label>
      <select
        id="c-package"
        name="package"
        value={value}
        onChange={(e) => choosePackage(e.target.value)}
      >
        {PACKAGE_CHOICES.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
