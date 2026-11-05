"use client";

import { useEffect, useState } from "react";

import type { NavLink } from "@/content/nav";

import styles from "./site-header.module.css";

type Props = { links: NavLink[] };

/**
 * Phone menu. The button keeps one size (icon morphs, no text swap), and the
 * drawer opens by animating its height so the header never jumps.
 */
export function MobileMenu({ links }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        className={styles.menu}
        type="button"
        data-open={open}
        aria-expanded={open}
        aria-controls="drawer"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.bars} aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
      <div className={styles.drawer} data-open={open}>
        <nav
          id="drawer"
          className={styles.drawerInner}
          aria-label="Mobile"
          inert={!open}
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              style={{ "--i": i } as React.CSSProperties}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
