"use client";

import { useRef, useState } from "react";

import { mediaFiles } from "@/content/media";

import styles from "./rails.module.css";

type Props = { media: string; name: string };

/**
 * A silent loop of the hook plays on the page (a few hundred KB). The full ad, with sound,
 * only downloads when someone taps for it.
 */
export function SampleAd({ media, name }: Props) {
  const files = mediaFiles(media);
  const video = useRef<HTMLVideoElement>(null);
  const [full, setFull] = useState(false);

  const watch = () => {
    const v = video.current;
    if (!v) return;
    setFull(true);
    v.src = files.full;
    v.muted = false;
    v.loop = false;
    v.play().catch(() => {});
  };

  return (
    <>
      <video
        ref={video}
        src={files.preview}
        poster={files.poster}
        muted
        loop
        playsInline
        preload="none"
        controls={full}
        aria-label={`${name} sample`}
      />
      {!full && (
        <button className={styles.sound} type="button" onClick={watch}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
          Watch with sound
        </button>
      )}
    </>
  );
}
