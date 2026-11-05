import { SectionHead } from "@/components/section-head/SectionHead";
import { Slider } from "@/components/slider/Slider";
import { FUNNEL } from "@/content/styles";

import { StyleCard } from "./StyleCard";
import styles from "./rails.module.css";

const tag = (code: string, i: number) =>
  `${code} ${String(i + 1).padStart(2, "0")}`;

export function StyleRails() {
  return (
    <section
      className="block"
      id="styles"
      aria-labelledby="h-styles"
      data-reveal
    >
      <div className="wrap">
        <SectionHead
          id="h-styles"
          kicker="What we make"
          title="One brand, the whole funnel"
        >
          Each stage has a different job, so each gets its own styles. Order one
          stage or run all three in a single batch with the same creator.
        </SectionHead>
        {FUNNEL.map((stage) => (
          <div key={stage.code} className={styles.stage} data-rv="">
            <div className={styles.head}>
              <h3>
                {stage.code}{" "}
                <small>
                  {stage.name} · {stage.styles.length} styles
                </small>
              </h3>
              <p className={styles.job}>{stage.job}</p>
            </div>
            <Slider
              label={`${stage.name} styles`}
              names={stage.styles.map((s) => s.name)}
            >
              {stage.styles.map((s, i) => (
                <StyleCard key={s.name} style={s} tag={tag(stage.code, i)} />
              ))}
            </Slider>
          </div>
        ))}
        <p className={styles.also}>
          <b>Also available:</b> illustrated slideshow posts and static ads for
          every placement.
        </p>
      </div>
    </section>
  );
}
