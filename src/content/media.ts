/**
 * Sample ads live in the site's R2 bucket, not the repo, so they never slow a deploy or
 * count against Vercel's bandwidth. Each one is three files made by scripts/media/prep.mjs.
 */
export const MEDIA_URL = (
  process.env.NEXT_PUBLIC_MEDIA_URL ?? "https://media.kylamedia.com"
).replace(/\/$/, "");

export type MediaFiles = { preview: string; poster: string; full: string };

/** The files for one uploaded sample, by its folder/name (for example "tof/3d-body"). */
export const mediaFiles = (name: string): MediaFiles => ({
  preview: `${MEDIA_URL}/${name}-preview.mp4`,
  poster: `${MEDIA_URL}/${name}.jpg`,
  full: `${MEDIA_URL}/${name}.mp4`,
});
