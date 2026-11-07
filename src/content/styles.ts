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
      // Samples from Jon's Affiliate Gateway portfolio, made with his bots and shown with his okay, until Kyla makes its own (7 Nov).
      {
        name: "Podcast Cut",
        line: "Two hosts talk it through",
        media: "tof/podcast-cut",
      },
      // Gabby (7 Nov): OOTD, Mirror and Shoes aren't top of funnel, so they're off the site.
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
    ],
  },
  {
    code: "MOF",
    name: "Middle of funnel",
    job: "Builds trust with how it works, a real story and proof.",
    // MOF and BOF samples are from Jon's Affiliate Gateway portfolio, shown with his okay (7 Nov).
    styles: [
      {
        name: "Product Demo",
        line: "Hands-on, ingredients called out",
        media: "mof/product-demo",
      },
      {
        name: "Unboxing",
        line: "Every item out, one by one",
        media: "mof/unboxing",
      },
      {
        name: "Results Story",
        line: "Before-and-after, told to camera",
        media: "mof/results-story",
      },
      {
        name: "Green Screen",
        line: "Creator over product B-roll",
        media: "mof/green-screen",
      },
    ],
  },
  {
    code: "BOF",
    name: "Bottom of funnel",
    job: "Product-first videos that turn interest into orders.",
    styles: [
      {
        name: "Arc Camera",
        line: "Camera circles the product",
        media: "bof/arc-camera",
      },
      {
        name: "Panel Zoom",
        line: "Each setting eases closer",
        media: "bof/panel-zoom",
      },
      {
        name: "Long Text",
        line: "One text block carries the pitch",
        media: "bof/long-text",
      },
      {
        name: "Warehouse Find",
        line: "Stacked high on a store pallet",
        tbc: true,
        media: "bof/warehouse-find",
      },
      {
        name: "Percentages",
        line: "Old price struck, discount in red",
        media: "bof/percentages",
      },
      {
        name: "Insecurity",
        line: "The worry first, then the fix",
        media: "bof/insecurity",
      },
    ],
  },
];
