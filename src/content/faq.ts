export type FaqItem = { q: string; a: string; tbc?: string };

export const FAQ: FaqItem[] = [
  {
    q: "Are the creators real people?",
    a: "No. Every creator is an AI character we design for your brand. We never present them as real customers, and we label them as AI wherever a platform asks.",
  },
  {
    q: "Who writes the scripts?",
    a: "We do. Every hook and script is written around your buyer, using only the claims your product can back up.",
  },
  {
    q: "What claims will the videos make?",
    a: "Only the claims you give us for your product, and we keep a note of where each one came from.",
  },
  {
    q: "Who owns the finished videos?",
    a: "You do. Run them as organic posts, paid ads or Spark Ads, on any platform.",
    tbc: "Terms to confirm.",
  },
  {
    q: "What do you need from me?",
    a: "A link to your product page and, if you have them, a few clear product photos. A short call helps us understand your buyer.",
  },
  {
    q: "What if a video isn't right?",
    a: "Tell us what to change and we'll redo it.",
    tbc: "[x] revisions per video are included.",
  },
];

export const SPEND_OPTIONS = [
  "Not running ads yet",
  "Under $5,000",
  "$5,000–$20,000",
  "$20,000–$50,000",
  "Over $50,000",
];

export const NEEDS = [
  "Top of funnel",
  "Middle of funnel",
  "Bottom of funnel",
  "Song ad",
  "Not sure yet",
];
