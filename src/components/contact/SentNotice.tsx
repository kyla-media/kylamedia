import styles from "./contact.module.css";

/** Shown after a valid submit. The tick swings in on an arc (see contact.module.css). */
export function SentNotice() {
  return (
    <div className={styles.sent} role="status">
      <h3>
        <svg className={styles.tick} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 12.5l5 5L20 6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Thanks, we have your details
      </h3>
      <p>We&apos;ll be in touch soon with a time for a short call.</p>
    </div>
  );
}
