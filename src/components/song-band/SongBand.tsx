import { SONG_LYRICS, SONG_NOTES } from "@/content/song";

import { SongPlayer } from "./SongPlayer";
import styles from "./song.module.css";

export function SongBand() {
  return (
    <section
      className={`block ${styles.song}`}
      aria-labelledby="h-song"
      data-reveal
    >
      <div className="wrap">
        <SongPlayer lyrics={SONG_LYRICS}>
          <span className="kicker">Only at Kyla Media</span>
          <h2 id="h-song" className="title">
            Song ads: your product, in a story people hum
          </h2>
          <p className={styles.intro}>
            We write a short story around the problem your product solves, set
            it to an original song, and animate every line. It is a format most
            UGC studios don&apos;t offer.
          </p>
        </SongPlayer>
        <div className={styles.notes}>
          {SONG_NOTES.map((n) => (
            <span key={n.value}>
              <b>{n.value}</b> {n.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
