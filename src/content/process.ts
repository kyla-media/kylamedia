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

/** Gabby's outline (6 Nov): they tell us what they need, we build a custom plan, make it fast, and improve it. */
export const STEPS: Step[] = [
  {
    title: "Tell us what you need",
    text: "Send us your product, your audience and your goals. We reply within one business day.",
  },
  {
    title: "Get a custom ad plan",
    text: "We tailor every part to your brand: the funnel stages, frameworks, scripts, AI creators, video lengths and how many videos.",
  },
  {
    title: "Get your videos, fast",
    text: "Finished ads with captions, music and your call to action, ready to post. Competitive pricing and a quick turnaround.",
  },
  {
    title: "Watch them get better",
    text: "We look at how your videos perform and double down on what works for your audience, so every batch beats the last.",
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
