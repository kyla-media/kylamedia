"use client";

import { useEffect } from "react";

const SETTLE_MS = 600;
const MAX_STAGGER = 8;

/**
 * Reveals [data-rv] items section by section as each enters view.
 * Without JavaScript, or with reduced motion, nothing is hidden.
 */
export function MotionLayer() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("motion");

    const settle = (section: Element) => {
      const items = [...section.querySelectorAll<HTMLElement>("[data-rv]")];
      items.forEach((el) => (el.dataset.rv = "in"));
      // Drop the stagger once settled, so hovers respond at once.
      const done = SETTLE_MS + items.length * 60;
      setTimeout(
        () => items.forEach((el) => el.removeAttribute("data-rv")),
        done,
      );
    };

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          settle(e.target);
        }),
      { threshold: 0.12 },
    );

    document.querySelectorAll("[data-reveal]").forEach((section) => {
      const items = section.querySelectorAll<HTMLElement>("[data-rv]");
      items.forEach((el, i) =>
        el.style.setProperty("--i", String(Math.min(i, MAX_STAGGER))),
      );
      io.observe(section);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
