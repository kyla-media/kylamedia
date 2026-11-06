# kylamedia.com

The Kyla Media marketing site. It's a Next.js 16 App Router app, built from the Home page mockup Gabby is reviewing.

## Run it

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm lint
pnpm format       # Prettier, same settings as kylastudio
```

## Layout

- `src/app/`: the root layout (fonts, global CSS, motion layer) and the Home page.
- `src/components/<section>/`: one folder per page section. Each has its component and a CSS Module, plus a
  small client component only where the section needs the browser (videos, menu, form).
- `src/content/`: all copy and data (styles, plans, FAQ, lyrics). Edit text here, not in components.
- `src/styles/primitives.css`: shared building blocks (`.wrap`, `.btn`, `.kicker`, `.title`, `.phone-v`,
  `.tbc`).
- `src/styles/motion.css`: the motion timing and easing settings, plus the scroll-reveal rules.
- `public/media/`: sample clips and their poster images.

## Conventions

- Layout responds to the page width with container queries (`@container site`), not media queries.
- `.tbc` (a dashed pink underline) marks details still to be decided, such as prices, counts and reply times.
- Motion follows Lasseter's principles of animation, applied as UI rules: one easing curve set, one timing set.
  Nothing moves when the viewer prefers reduced motion, and nothing is hidden when JavaScript is off.
- To animate an item in on scroll, add `data-rv=""` to it and `data-reveal` to its section.
- The contact form isn't connected to a backend yet. A valid submit only shows the sent state.

## SEO

- `src/content/site.ts` holds the title, description, keyword list and site URL. The URL defaults to
  `https://kylamedia.com`; set `NEXT_PUBLIC_SITE_URL` to change it.
- `src/app/layout.tsx` sets the metadata: canonical URL, Open Graph, Twitter card and theme colour.
- Share images: `opengraph-image.tsx` and `twitter-image.tsx` render `components/seo/OgCard.tsx` at build time.
- `icon.svg` (the K mark), `apple-icon.tsx`, `manifest.ts`, `robots.ts` and `sitemap.ts` are in `src/app/`.
  Add each new page to the sitemap as it ships.
- The structured data in `components/seo/structured-data.ts` covers Organization, WebSite, Service (every ad
  style) and FAQPage. Check it with Google's Rich Results Test once the site is live.

## Slider

`components/slider/Slider` is the shared carousel. The active slide is centred and the others are greyed. It
loops, has arrows and worm dots, and supports swipe and arrow keys. It never moves on its own, and it plays only
the active slide's video.

## Sample videos (R2)

Sample ads live in the site's Cloudflare R2 bucket, served from `NEXT_PUBLIC_MEDIA_URL`
(default `https://media.kylamedia.com`). They are not in the repo.

Each ad becomes three files: a silent hook loop that plays on the page (a few hundred KB),
a still, and the full ad with sound, which only loads when someone taps "Watch with sound".

To add one:

1. `node scripts/media/prep.mjs <ad.mp4> tof/<name>` (use `mof/` or `bof/` for other stages;
   an optional third argument sets the preview length in seconds, default 7)
2. `node --env-file=.env.local scripts/media/upload.mjs` (needs the `R2_*` keys in `.env.local`)
3. Add the style in `src/content/styles.ts` with `media: "tof/<name>"`.

Files are cached for a year, so give a new cut a new name instead of replacing a file.
