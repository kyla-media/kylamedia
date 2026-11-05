"use client";

import { useEffect, useState } from "react";

/**
 * Only the active slide's video plays, and only while the slider is on screen.
 * With reduced motion nothing autoplays.
 */
export function useSlideVideos(
  root: React.RefObject<HTMLElement | null>,
  active: number,
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.4,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [root]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.querySelectorAll<HTMLElement>("[data-slide]").forEach((slide) => {
      const on = inView && !calm && Number(slide.dataset.slide) === active;
      slide
        .querySelectorAll("video")
        .forEach((v) => (on ? v.play().catch(() => {}) : v.pause()));
    });
  }, [root, active, inView]);
}
