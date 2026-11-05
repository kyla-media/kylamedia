import { dotScale } from "./slider-math";
import styles from "./dots.module.css";

type Props = {
  count: number;
  active: number;
  prev: number;
  onGo: (i: number) => void;
};

/**
 * Worm dots: the pink leads to the new dot and its tail follows (overlap).
 * Sets over 7 shrink the dots far from the active one.
 */
export function SliderDots({ count, active, prev, onGo }: Props) {
  const dir = active >= prev ? "next" : "back";
  const worm = {
    "--lo": active,
    "--hi": count - 1 - active,
  } as React.CSSProperties;

  return (
    <div className={styles.dots}>
      <div className={styles.row}>
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            className={styles.dot}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => onGo(i)}
          >
            <span
              style={
                { "--k": dotScale(i, active, count) } as React.CSSProperties
              }
            />
          </button>
        ))}
        <span
          className={styles.worm}
          data-dir={dir}
          style={worm}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
