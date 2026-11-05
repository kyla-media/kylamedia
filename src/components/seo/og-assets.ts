import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const font = (pkg: string, file: string) =>
  readFile(join(root, "node_modules/@fontsource", pkg, "files", file));
const poster = async (name: string) => {
  const data = await readFile(join(root, "public/media", `${name}.jpg`));
  return `data:image/jpeg;base64,${data.toString("base64")}`;
};

/** Fonts and sample frames for the share images. Read once at build time. */
export async function loadOgAssets() {
  const [display, body, posters] = await Promise.all([
    font("archivo", "archivo-latin-900-normal.woff"),
    font("figtree", "figtree-latin-600-normal.woff"),
    Promise.all(["selfie", "song", "mirror"].map(poster)),
  ]);

  return {
    posters,
    fonts: [
      {
        name: "Archivo",
        data: display,
        weight: 900 as const,
        style: "normal" as const,
      },
      {
        name: "Figtree",
        data: body,
        weight: 600 as const,
        style: "normal" as const,
      },
    ],
  };
}
