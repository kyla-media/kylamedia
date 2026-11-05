/** Position maths for a looping, centre-focused slider. Pure functions, no React. */

export type SlidePos = "active" | "side" | "out";

/** Greyed slides shown on each side of the active one. */
export const sideCount = (n: number) => (n >= 5 ? 2 : 1);

/** Signed loop distance from the active slide: 0 is centre, -1 just left, 1 just right. */
export function offset(i: number, active: number, n: number) {
  const half = Math.floor(n / 2);
  return ((((i - active + n + half) % n) + n) % n) - half;
}

/** Where a slide sits, clamped so hidden slides wait just off-stage. */
export function place(i: number, active: number, n: number) {
  const side = sideCount(n);
  const d = offset(i, active, n);
  const shown = Math.max(-(side + 1), Math.min(side + 1, d));
  const pos: SlidePos =
    d === 0 ? "active" : Math.abs(d) <= side ? "side" : "out";
  return { d, shown, pos };
}

/** A slide that wraps round the loop moves instantly instead of flying across. */
export function jumps(i: number, from: number, to: number, n: number) {
  const a = place(i, from, n).shown;
  const b = place(i, to, n).shown;
  return Math.abs(b - a) > sideCount(n) + 1;
}

/** Dot size for long sets: dots far from the active one shrink. */
export function dotScale(i: number, active: number, n: number) {
  if (n <= 7) return 1;
  const far = Math.abs(i - active);
  if (far <= 2) return 1;
  return far === 3 ? 0.7 : 0.45;
}
