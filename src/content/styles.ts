export type AdStyle = {
  name: string;
  line: string;
  /** Sample clip name in /public/media, if we have one. */
  sample?: string;
  /** A full sample ad in the media bucket (folder/name), played silently until tapped. */
  media?: string;
  /** Only Kyla Media makes this format. */
  only?: boolean;
  /** Name still to be decided. */
  tbc?: boolean;
};

export type FunnelStage = {
  code: "TOF" | "MOF" | "BOF";
  name: string;
  job: string;
  styles: AdStyle[];
};

export const FUNNEL: FunnelStage[] = [
  {
    code: "TOF",
    name: "Top of funnel",
    job: "Stops a cold viewer in the first second and gets your product noticed.",
    styles: [
      {
        name: "Selfie Hook",
        line: "Phone selfie, pain first",
        sample: "selfie",
      },
      { name: "Song Ad", line: "A story, sung", sample: "song", only: true },
      // Made by the team on Seedance before Kyla; Gabby filed all four as TOF (6 Nov).
      {
        name: "Bathroom Selfie",
        line: "Pain line pinned, product late",
        media: "tof/bathroom-selfie",
      },
      {
        name: "3D Body Explainer",
        line: "See-through body shows the cause",
        media: "tof/3d-body",
      },
      {
        name: "Close-up Talk",
        line: "Face to camera, myth busted first",
        media: "tof/close-up-talk",
      },
      {
        name: "Tabletop Explainer",
        line: "Each point gets its own props",
        media: "tof/tabletop-explainer",
      },
      // Samples from Jon's Affiliate Gateway portfolio, made with his bots, until Kyla makes its own (7 Nov).
      {
        name: "Podcast Cut",
        line: "Two hosts talk it through",
        media: "tof/podcast-cut",
      },
      {
        name: "Fashion · OOTD",
        line: "Moves, fabric close-up, second colour",
        media: "tof/fashion-ootd",
      },
      {
        name: "Fashion · Mirror",
        line: "Three quick mirror cuts",
        media: "tof/fashion-mirror",
      },
      {
        name: "Fashion · Car seat",
        line: "Seated in the car, then standing",
        media: "tof/fashion-car-seat",
      },
      {
        name: "Fashion · Try-on",
        line: "Fit check, ends folded on a bed",
        media: "tof/fashion-try-on",
      },
      {
        name: "Fashion · Shoes",
        line: "Every angle, then worn",
        media: "tof/fashion-shoes",
      },
    ],
  },
  {
    code: "MOF",
    name: "Middle of funnel",
    job: "Builds trust with how it works, a real story and proof.",
    styles: [
      { name: "Product Demo", line: "Hands-on, ingredients called out" },
      { name: "Unboxing", line: "Every item out, one by one" },
      { name: "Results Story", line: "Before-and-after, told to camera" },
      { name: "Green Screen", line: "Creator over product B-roll" },
    ],
  },
  {
    code: "BOF",
    name: "Bottom of funnel",
    job: "Product-first videos that turn interest into orders.",
    styles: [
      { name: "Arc Camera", line: "Camera circles the product" },
      { name: "Panel Zoom", line: "Each setting eases closer" },
      { name: "Long Text", line: "One text block carries the pitch" },
      {
        name: "Warehouse Find",
        line: "Stacked high on a store pallet",
        tbc: true,
      },
      { name: "Percentages", line: "Old price struck, discount in red" },
      { name: "Insecurity", line: "The worry first, then the fix" },
    ],
  },
];
