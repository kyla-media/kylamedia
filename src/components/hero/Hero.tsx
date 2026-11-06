import { HERO_REEL } from "@/content/hero";

import { HeroReel } from "./HeroReel";
import { HeroTitle } from "./HeroTitle";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={`wrap ${styles.hero}`} id="work" aria-labelledby="h1">
      <div>
        <span className="kicker">AI UGC ad agency</span>
        <HeroTitle
          id="h1"
          before="Ads that look like your"
          highlight="customers"
          after="made them"
        />
        {/* Short on purpose (6 Nov): the videos carry the hero, so the words stay out of their way. */}
        <p className={styles.lede}>
          Scroll-stopping ads for TikTok, Reels and Shorts, starring{" "}
          <b>AI creators built around your buyer</b>.
        </p>
        <div className={styles.ctas}>
          <a className="btn" href="#contact">
            Book a call
          </a>
          <a className="btn ghost" href="#styles">
            See the ad styles
          </a>
        </div>
      </div>
      <HeroReel clips={HERO_REEL} />
    </section>
  );
}
