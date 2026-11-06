// Turns one finished ad into the three files the site serves:
//   <name>-preview.mp4  a silent loop of the hook (plays on the page)
//   <name>.jpg          the still shown before anything loads
//   <name>.mp4          the full ad with sound (loads only when someone taps play)
// Usage: node scripts/media/prep.mjs <input.mp4> <folder/name> [previewSeconds=7]
import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const [input, name, seconds = "7"] = process.argv.slice(2);
if (!input || !name) {
  console.error("Usage: prep.mjs <input.mp4> <folder/name> [previewSeconds]");
  process.exit(1);
}
const out = join(".media-out", name);
mkdirSync(dirname(out), { recursive: true });

const ffmpeg = (...args) => {
  const run = spawnSync("ffmpeg", ["-v", "error", "-y", ...args], {
    stdio: "inherit",
  });
  if (run.status !== 0) process.exit(run.status ?? 1);
};

// The hook, small: 540 px wide, no sound, starts playing before it finishes loading.
ffmpeg(
  ...["-i", input, "-t", seconds, "-an", "-vf", "scale=540:-2"],
  ...["-c:v", "libx264", "-crf", "30", "-preset", "slow"],
  ...["-pix_fmt", "yuv420p", "-movflags", "+faststart", `${out}-preview.mp4`],
);
ffmpeg(
  ...["-ss", "1", "-i", input, "-frames:v", "1", "-vf", "scale=540:-2"],
  ...["-q:v", "4", `${out}.jpg`],
);
// The full ad keeps its quality; faststart lets it play while it downloads.
ffmpeg(...["-i", input, "-c", "copy", "-movflags", "+faststart", `${out}.mp4`]);
console.log(`Ready in .media-out/${name}{-preview.mp4,.jpg,.mp4}`);
