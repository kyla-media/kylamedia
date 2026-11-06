/**
 * No prices or video counts for now (Gabby, 6 Nov): we're still testing, so every package
 * is quoted to the brand. The id travels to the contact form when someone asks for a quote.
 */
export type Plan = {
  id: PlanId;
  name: string;
  items: string[];
};

export type PlanId = "starter" | "pro" | "expert";

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    items: [
      "Top of funnel videos",
      "1 creator built for your buyer",
      "Hooks and scripts written for you",
      "Captions and music",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    items: [
      "Top and middle of funnel videos",
      "2 creators",
      "Two calls to action to test",
      "Everything in Starter",
    ],
  },
  {
    id: "expert",
    name: "Expert",
    items: [
      "Videos across the full funnel",
      "1 song ad included",
      "3 creators",
      "Everything in Pro",
    ],
  },
];

/** The form's package choices: every plan, plus a way to say "help me pick". */
export const PACKAGE_CHOICES = [
  ...PLANS.map((p) => ({ id: p.id as string, name: p.name })),
  { id: "unsure", name: "Not sure yet" },
];

export const packageName = (id: string | null | undefined) =>
  PACKAGE_CHOICES.find((c) => c.id === id)?.name ?? "Not sure yet";
