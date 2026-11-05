import { ImageResponse } from "next/og";

import { loadOgAssets } from "@/components/seo/og-assets";
import { OgCard } from "@/components/seo/OgCard";
import { SITE } from "@/content/site";

export const alt = SITE.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Share image for links on social, chat apps and search. Built once at build time. */
export default async function Image() {
  const { fonts, posters } = await loadOgAssets();
  return new ImageResponse(<OgCard posters={posters} />, { ...size, fonts });
}
