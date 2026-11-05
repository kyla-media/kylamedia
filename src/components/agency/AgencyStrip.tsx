import styles from "./agency.module.css";

export function AgencyStrip() {
  return (
    <section
      className={`wrap ${styles.section}`}
      id="agencies"
      aria-labelledby="h-ag"
      data-reveal
    >
      <div className={styles.strip} data-rv="">
        <div>
          <h3 id="h-ag">Running ads for several brands?</h3>
          <p>
            Agencies get one account with a separate set of creators, scripts
            and videos for each client.
          </p>
        </div>
        <a className="btn" href="#contact">
          Talk about agency pricing
        </a>
      </div>
    </section>
  );
}
