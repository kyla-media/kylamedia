import type { MetadataRoute } from "next";

import { SITE } from "@/content/site";

/** Add each new page here as it ships (AI UGC Ads, Our Work, Pricing, and so on). */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
