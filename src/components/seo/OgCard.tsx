/* eslint-disable @next/next/no-img-element -- rendered to PNG by next/og, not the page */
import { LOGO_SUBPATHS } from "@/components/logo/logo-path";

const INK = "#f3eef2";
const MUTED = "#a69ca9";
const NIGHT = "#141016";
const ACCENT = "#ff5a90";

type Props = { posters: string[] };

/** 1200×630 share card. Inline styles only: next/og renders it with Satori. */
export function OgCard({ posters }: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: NIGHT,
        color: INK,
        padding: "56px 64px",
        fontFamily: "Figtree",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
          <svg width="96" height="55" viewBox="0 0 535 306">
            <path fill={INK} fillRule="evenodd" d={LOGO_SUBPATHS.join(" ")} />
          </svg>
          <span style={{ fontSize: 22, color: INK, marginBottom: 2 }}>
            media
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 44,
            fontFamily: "Archivo",
            fontSize: 62,
            lineHeight: 0.98,
            letterSpacing: -1,
            textTransform: "uppercase",
          }}
        >
          <span>Ads that look</span>
          <span>like your</span>
          <span style={{ display: "flex" }}>
            <span
              style={{
                background: ACCENT,
                color: NIGHT,
                padding: "0 14px",
                borderRadius: 10,
              }}
            >
              customers
            </span>
          </span>
          <span>made them</span>
        </div>
        <span style={{ marginTop: 30, fontSize: 26, color: MUTED }}>
          AI UGC video ads for TikTok, Reels and Shorts
        </span>
        <span
          style={{
            marginTop: "auto",
            fontSize: 20,
            color: ACCENT,
            letterSpacing: 1,
          }}
        >
          kylamedia.com
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
          marginTop: 34,
        }}
      >
        {posters.map((src, i) => (
          <img
            key={src.slice(-24)}
            src={src}
            alt=""
            width={150}
            height={267}
            style={{
              borderRadius: 18,
              objectFit: "cover",
              marginTop: [0, 60, 20][i],
              opacity: i === 1 ? 1 : 0.55,
              border: "1px solid #ffffff22",
            }}
          />
        ))}
      </div>
    </div>
  );
}
