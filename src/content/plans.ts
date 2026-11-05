export type Plan = {
  name: string;
  /** Recommended plan gets the heavy border and a solid button. */
  pick?: boolean;
  /** First item starts with a count still to be decided. */
  videos: string;
  items: string[];
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    videos: "videos, top of funnel",
    items: [
      "1 creator built for your buyer",
      "Scripts approved by you",
      "Captions and music",
    ],
  },
  {
    name: "Pro",
    pick: true,
    videos: "videos, top and middle of funnel",
    items: [
      "2 creators",
      "Two calls to action to test",
      "Everything in Starter",
    ],
  },
  {
    name: "Expert",
    videos: "videos across the full funnel",
    items: ["1 song ad included", "3 creators", "Everything in Pro"],
  },
];
