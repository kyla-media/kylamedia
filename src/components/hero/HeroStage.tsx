"use client";

import { useEffect, useRef, useState } from "react";

import { REDUCED_MOTION, useMedia } from "@/components/motion/use-media";
import type { ReelClip } from "@/content/hero";

import { ReelFigure } from "./ReelFigure";
import styles from "./hero.module.css";

const HANDOFF_MS = 4500;

type Props = { clips: ReelClip[] };

/**
 * Staging on wide screens: one video plays while the others dim, handing off in turn.
 * Hovering a video holds it. With reduced motion all three sit still.
 */
export function HeroStage({ clips }: Props) {
  const [lit, setLit] = useState(0);
  const staged = !useMedia(REDUCED_MOTION);
  const held = useRef(false);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!staged) return;
    const t = setInterval(() => {
      if (!held.current) setLit((n) => (n + 1) % clips.length);
    }, HANDOFF_MS);
    return () => clearInterval(t);
  }, [clips.length, staged]);

  useEffect(() => {
    if (!staged) return;
    videos.current.forEach((v, k) => {
      if (!v) return;
      if (k === lit) v.play().catch(() => {});
      else v.pause();
    });
  }, [lit, staged]);

  return (
    <div className={styles.reel} data-staged={staged} aria-label="Sample ads">
      {clips.map((c, k) => (
        <ReelFigure
          key={c.video}
          clip={c}
          autoPlay
          data-lit={k === lit}
          videoRef={(el) => {
            videos.current[k] = el;
          }}
          onMouseEnter={() => {
            held.current = true;
            setLit(k);
          }}
          onMouseLeave={() => (held.current = false)}
        />
      ))}
    </div>
  );
}
