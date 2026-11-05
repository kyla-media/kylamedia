import { SectionHead } from "@/components/section-head/SectionHead";

import styles from "./brief.module.css";

export function Brief() {
  return (
    <section className="block" aria-labelledby="h-brief" data-reveal>
      <div className="wrap">
        <SectionHead
          id="h-brief"
          kicker="Built to your brief"
          title="Your call to action, your look, your tone"
        >
          Set these once for the whole batch, or differently for each stage of
          the funnel.
        </SectionHead>
        <div className={styles.grid}>
          <div data-rv="">
            <h3>Any call to action</h3>
            <p>
              Shop now, link in bio, use my code or comment a keyword. Run two
              side by side to see which one sells.
            </p>
          </div>
          <div data-rv="">
            <h3>Captions in 75 styles</h3>
            <p>
              Synced to the voice word by word, with 14 on-screen hook formats
              to match.
            </p>
            <div className={styles.caps} aria-label="Caption style examples">
              <span className={`${styles.cs} ${styles.k}`}>
                This <i>actually</i> works
              </span>
              <span className={`${styles.cs} ${styles.h}`}>
                Stop <i>scrolling</i>
              </span>
              <span className={`${styles.cs} ${styles.b}`}>Link below</span>
              <span className={`${styles.cs} ${styles.s}`}>
                it&apos;s linked below
              </span>
            </div>
          </div>
          <div data-rv="">
            <h3>Music under every word</h3>
            <p>
              Copyright-free backing tracks mixed below the voice: one for the
              batch, or a different one on each video.
            </p>
          </div>
          <div data-rv="">
            <h3>Sales copy or evergreen copy</h3>
            <p>Choose how hard each video sells.</p>
            <div className={styles.modes}>
              <div>
                <b>Sales</b>Prices, discounts and codes on screen
              </div>
              <div>
                <b>Evergreen</b>Never mentions a price, so it never goes out of
                date
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
