"use client";

import { useMedia } from "@/components/motion/use-media";
import { Slider } from "@/components/slider/Slider";
import type { ReelClip } from "@/content/hero";

import { HeroStage } from "./HeroStage";
import { ReelFigure } from "./ReelFigure";
import styles from "./hero.module.css";

const PHONE = "(max-width: 520px)";

type Props = { clips: ReelClip[] };

/** Desktop: three videos side by side, one lit. Phone: the shared slider. */
export function HeroReel({ clips }: Props) {
  const phone = useMedia(PHONE);

  if (!phone) return <HeroStage clips={clips} />;

  return (
    <div className={styles.phoneReel}>
      <Slider label="Sample ads" width="80%" names={clips.map((c) => c.name)}>
        {clips.map((c) => (
          <ReelFigure key={c.video} clip={c} />
        ))}
      </Slider>
    </div>
  );
}
