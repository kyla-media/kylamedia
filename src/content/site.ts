/**
 * Site-wide SEO settings. Keywords follow how the market searches and how ranking
 * competitors title their pages: "AI UGC agency", "AI UGC ads", "UGC video ads".
 */
export const SITE = {
  name: "Kyla Media",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kylamedia.com",
  email: "hello@kylamedia.com",
  title: "AI UGC Ad Agency for TikTok, Reels & Shorts",
  description:
    "Kyla Media makes AI UGC video ads for TikTok, Instagram Reels and YouTube Shorts. AI creators built around your buyer, scripts you approve, every funnel stage.",
  ogAlt:
    "Kyla Media: ads that look like your customers made them. AI UGC video ads for every stage of the funnel.",
} as const;

export const KEYWORDS = [
  "AI UGC agency",
  "AI UGC ads",
  "AI UGC video ads",
  "UGC video ads",
  "UGC ad agency",
  "UGC style ads",
  "AI UGC creators",
  "TikTok UGC ads",
  "TikTok Shop video ads",
  "Instagram Reels ads",
  "YouTube Shorts ads",
  "Meta video ads",
  "ecommerce video ads",
  "full funnel video ads",
  "song ads",
];
