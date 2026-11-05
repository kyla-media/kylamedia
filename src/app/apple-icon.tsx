import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon for iPhones, drawn from the same K mark as icon.svg. */
export default async function AppleIcon() {
  const svg = await readFile(join(process.cwd(), "src/app/icon.svg"));
  const src = `data:image/svg+xml;base64,${svg.toString("base64")}`;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#dc2f68",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- rendered to PNG by next/og */}
      <img src={src} alt="" width={180} height={180} />
    </div>,
    size,
  );
}
