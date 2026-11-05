export type LyricLine = {
  /** Second in the clip where this line starts. */
  at: number;
  before: string;
  /** Word highlighted while the line is sung. */
  stress?: string;
  after?: string;
};

export const SONG_LYRICS: LyricLine[] = [
  { at: 0, before: "Like the words they never said" },
  { at: 2, before: "So I ", stress: "spray", after: " away the silence" },
  { at: 4, before: "Rub out every lie" },
  { at: 6, before: "Let it sit, let it sit" },
  { at: 9, before: "It came out" },
];

export const SONG_NOTES = [
  { value: "60–75 s", text: "one full song" },
  { value: "Original", text: "music and lyrics" },
  { value: "Concept ad", text: "shown with a stain spray" },
];
