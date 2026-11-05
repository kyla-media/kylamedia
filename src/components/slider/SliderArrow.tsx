import styles from "./slider.module.css";

type Props = { dir: "back" | "next"; onClick: () => void };

export function SliderArrow({ dir, onClick }: Props) {
  const back = dir === "back";
  return (
    <button
      type="button"
      className={styles.arrow}
      data-dir={dir}
      aria-label={back ? "Previous slide" : "Next slide"}
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d={back ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
