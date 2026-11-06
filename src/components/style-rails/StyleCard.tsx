import type { AdStyle } from "@/content/styles";

import { SampleAd } from "./SampleAd";
import styles from "./rails.module.css";

type Props = { style: AdStyle; tag: string };

/** One style: sample video (or a placeholder), its code, name and one line. The slider plays it. */
export function StyleCard({ style, tag }: Props) {
  return (
    <div className={styles.card}>
      <div className="phone-v">
        {style.media ? (
          <SampleAd media={style.media} name={style.name} />
        ) : style.sample ? (
          <video
            src={`/media/${style.sample}.mp4`}
            poster={`/media/${style.sample}.jpg`}
            muted
            loop
            playsInline
            preload="none"
            aria-label={`${style.name} sample`}
          />
        ) : (
          <div className={styles.slot}>
            <span>Sample video</span>
          </div>
        )}
        {style.only && (
          <span className={`only ${styles.pin}`}>Only at Kyla</span>
        )}
      </div>
      <span className="stage-tag">{tag}</span>
      <b>
        {style.tbc ? <span className="tbc">{style.name}</span> : style.name}
      </b>
      <span className={styles.line}>{style.line}</span>
    </div>
  );
}
