"use client";

import { Children, useRef } from "react";

import { SliderArrow } from "./SliderArrow";
import { SliderDots } from "./SliderDots";
import { jumps, place } from "./slider-math";
import styles from "./slider.module.css";
import { useSlideVideos } from "./use-slide-videos";
import { useSlider } from "./use-slider";

const SWIPE_PX = 40;

type Props = {
  /** Read out as the carousel's name. */
  label: string;
  /** Slide width as a CSS length, such as "200px" or "64%". */
  width?: string;
  /** One name per slide, read out as "3 of 8: name". */
  names?: string[];
  children: React.ReactNode;
};

/**
 * Looping slider with the active slide centred and the others greyed.
 * Moves only when asked: arrows, dots, swipe, arrow keys, or a tap on a greyed slide.
 */
export function Slider({ label, width = "200px", names, children }: Props) {
  const slides = Children.toArray(children);
  const n = slides.length;
  const { active, prev, go, next, back } = useSlider(n);
  const root = useRef<HTMLElement>(null);
  const startX = useRef<number | null>(null);
  useSlideVideos(root, active);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") back();
  };

  const onUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > SWIPE_PX) (dx < 0 ? next : back)();
  };

  const name = (i: number) =>
    `${i + 1} of ${n}${names?.[i] ? `: ${names[i]}` : ""}`;

  return (
    <section
      ref={root}
      className={styles.slider}
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={onKey}
      style={{ "--w": width } as React.CSSProperties}
    >
      <div
        className={styles.viewport}
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={onUp}
        onPointerCancel={() => (startX.current = null)}
      >
        <div className={styles.track}>
          {slides.map((slide, i) => {
            const { shown, pos } = place(i, active, n);
            const hidden = pos === "out";
            return (
              <div
                key={i}
                className={styles.slide}
                data-slide={i}
                data-pos={pos}
                data-jump={jumps(i, prev, active, n)}
                style={{ "--d": shown } as React.CSSProperties}
                role="group"
                aria-roledescription="slide"
                aria-label={name(i)}
                aria-hidden={hidden || undefined}
                inert={hidden}
                onClickCapture={(e) => {
                  if (pos === "active") return;
                  e.preventDefault();
                  e.stopPropagation();
                  go(i);
                }}
              >
                {slide}
              </div>
            );
          })}
        </div>
        <SliderArrow dir="back" onClick={back} />
        <SliderArrow dir="next" onClick={next} />
      </div>
      <SliderDots count={n} active={active} prev={prev} onGo={go} />
      <p className="sr-only" aria-live="polite">
        Slide {name(active)}
      </p>
    </section>
  );
}
