export type ReelClip = {
  video: string;
  poster: string;
  label: string;
  stage: string;
  name: string;
  note: string;
};

export const HERO_REEL: ReelClip[] = [
  {
    video: "/media/selfie.mp4",
    poster: "/media/selfie.jpg",
    label: "Selfie hook sample: a creator holds a magnetic power bank",
    stage: "TOF",
    name: "Selfie Hook",
    note: "Power bank",
  },
  {
    video: "/media/song.mp4",
    poster: "/media/song.jpg",
    label: "Song ad sample: an animated story about a lipstick stain",
    stage: "TOF",
    name: "Song Ad",
    note: "Stain spray, concept",
  },
  {
    video: "/media/mirror.mp4",
    poster: "/media/mirror.jpg",
    label: "Selfie hook sample filmed in a mirror",
    stage: "TOF",
    name: "Mirror Selfie",
    note: "Filmed in a mirror",
  },
];
