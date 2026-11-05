import { HERO_REEL, HERO_SPECS } from "@/content/hero";

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
        <p className={styles.lede}>
          We write, cast and deliver AI UGC video ads for TikTok, Instagram
          Reels and YouTube Shorts.{" "}
          <b>Every creator is an AI character built around your buyer</b>, every
          script is approved by you before we film, and every caption is synced
          to the voice word by word.
        </p>
        <div className={styles.ctas}>
          <a className="btn" href="#contact">
            Book a call
          </a>
          <a className="btn ghost" href="#styles">
            See the ad styles
          </a>
        </div>
        <ul className={styles.specs}>
          {HERO_SPECS.map((s) => (
            <li key={s.value}>
              <b>{s.value}</b> {s.text}
            </li>
          ))}
        </ul>
      </div>
      <HeroReel clips={HERO_REEL} />
    </section>
  );
}
