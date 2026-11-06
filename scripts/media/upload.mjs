// Uploads everything in .media-out/ to the site's R2 bucket, keeping folder names.
// Files never change once uploaded (a new cut gets a new name), so browsers may cache them for a year.
// Usage: node --env-file=.env.local scripts/media/upload.mjs
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = ".media-out";
const TYPES = {
  ".mp4": "video/mp4",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
};
const env = (k) =>
  process.env[k] ?? (console.error(`Missing ${k}`), process.exit(1));

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${env("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: env("R2_ACCESS_KEY_ID"),
    secretAccessKey: env("R2_SECRET_ACCESS_KEY"),
  },
});

const files = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const path = join(dir, f);
    return statSync(path).isDirectory() ? files(path) : [path];
  });

for (const path of files(ROOT)) {
  const key = relative(ROOT, path).replaceAll("\\", "/");
  const type = TYPES[key.slice(key.lastIndexOf("."))];
  if (!type) continue;
  await s3.send(
    new PutObjectCommand({
      Bucket: env("R2_BUCKET"),
      Key: key,
      Body: readFileSync(path),
      ContentType: type,
      CacheControl: "public, max-age=31536000, immutable",
    }),
  );
  console.log(`uploaded ${key} (${(statSync(path).size / 1e6).toFixed(2)} MB)`);
}
