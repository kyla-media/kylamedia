export const BUYER_TYPES = [
  "The 2 PM-Bloat Working Mom",
  "The Label-Reading Household Swapper",
  "The Sharp-at-Fifty Dad",
  "The Car-Line Nurse Mom",
  "The Meal-Prep Lifter",
  "The Senior-Cat Faucet Mom",
];

export const BUYER_TYPE_TOTAL = "141 buyer types already built";

export type Step = { title: string; text: string; tbc?: string };

export const STEPS: Step[] = [
  {
    title: "Send your product page",
    text: "We read the listing and photos and note only the claims your page can back up.",
  },
  {
    title: "Meet your creator",
    text: "We build a character around your buyer and show you their look before anything is filmed.",
  },
  {
    title: "We write and film",
    text: "We write the hooks and scripts for each funnel stage and film every video with your creator.",
  },
  {
    title: "Get your batch",
    text: "Finished videos with captions, music and your call to action, ready to post, in",
    tbc: "[x] days",
  },
];

export const COMPARISON = [
  [
    "Getting started",
    "Send us a product link",
    "Brief, cast, ship product, wait for filming",
  ],
  ["Changing a line", "We re-make that part", "Usually a reshoot"],
  ["Same face all campaign", "Always", "Depends on the creator's schedule"],
  [
    "Versions to test",
    "New hooks on the same video",
    "Each one filmed separately",
  ],
  ["A real person on camera", "No. Our creators are AI, and we say so", "Yes"],
] as const;
