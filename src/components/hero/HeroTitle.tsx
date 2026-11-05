import styles from "./hero.module.css";

type Props = { id: string; before: string; highlight: string; after: string };

/**
 * Each word is its own span so the headline can type in like an on-video caption.
 * Pure CSS: no JavaScript needed, and reduced motion shows it still.
 */
export function HeroTitle({ id, before, highlight, after }: Props) {
  const lead = before.split(" ");
  const tail = after.split(" ");
  const capIndex = lead.length;

  const word = (text: string, i: number) => (
    <span
      key={i}
      className={styles.w}
      style={{ "--i": i } as React.CSSProperties}
    >
      {text}
    </span>
  );

  return (
    <h1 id={id} className={styles.title}>
      {lead.map((t, i) => [word(t, i), " "])}
      <span
        className={styles.w}
        style={{ "--i": capIndex } as React.CSSProperties}
      >
        <span
          className={styles.cap}
          style={
            {
              "--after": `${(lead.length + tail.length) * 70 + 500}ms`,
            } as React.CSSProperties
          }
        >
          {highlight}
        </span>
      </span>{" "}
      {tail.map((t, i) => [word(t, capIndex + 1 + i), " "])}
    </h1>
  );
}
