"use client";

import { useRef, useState } from "react";

import type { LyricLine } from "@/content/song";

import styles from "./song.module.css";

type Props = { lyrics: LyricLine[]; children: React.ReactNode };

/** The song clip with its lyrics lit line by line as it plays. */
export function SongPlayer({ lyrics, children }: Props) {
  const video = useRef<HTMLVideoElement>(null);
  const [line, setLine] = useState(0);
  const [muted, setMuted] = useState(true);

  const track = () => {
    const t = video.current?.currentTime ?? 0;
    setLine(lyrics.reduce((cur, l, i) => (t >= l.at ? i : cur), 0));
  };

  const toggleSound = () => {
    const v = video.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  return (
    <div className={styles.grid}>
      <div className="phone-v" data-rv="">
        <video
          ref={video}
          src="/media/songfull.mp4"
          poster="/media/songfull.jpg"
          muted
          loop
          playsInline
          autoPlay
          onTimeUpdate={track}
          aria-label="Song ad: she sprays the lipstick stain off the collar"
        />
        <button
          className={styles.sound}
          type="button"
          aria-pressed={!muted}
          onClick={toggleSound}
        >
          {muted ? "Play with sound" : "Mute"}
        </button>
      </div>
      <div data-rv="">
        {children}
        <ol className={styles.lyrics} aria-label="Lyrics in this clip">
          {lyrics.map((l, i) => (
            <li key={l.at} data-on={i === line}>
              {l.before}
              {l.stress && <em>{l.stress}</em>}
              {l.after}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
