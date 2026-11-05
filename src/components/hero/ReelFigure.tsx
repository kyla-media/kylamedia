import type { ReelClip } from "@/content/hero";

type Props = {
  clip: ReelClip;
  /** Desktop autoplays; in the phone slider the slider decides what plays. */
  autoPlay?: boolean;
  videoRef?: (el: HTMLVideoElement | null) => void;
} & React.HTMLAttributes<HTMLElement>;

export function ReelFigure({ clip, autoPlay, videoRef, ...rest }: Props) {
  return (
    <figure {...rest}>
      <div className="phone-v">
        <video
          ref={videoRef}
          src={clip.video}
          poster={clip.poster}
          muted
          loop
          playsInline
          autoPlay={autoPlay}
          preload={autoPlay ? "auto" : "none"}
          aria-label={clip.label}
        />
      </div>
      <figcaption>
        <span className="stage-tag">{clip.stage}</span>
        <b>{clip.name}</b>
        {clip.note}
      </figcaption>
    </figure>
  );
}
