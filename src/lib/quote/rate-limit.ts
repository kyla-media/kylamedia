/**
 * A light brake on bots: a few requests per sender in a window. It lives in one
 * server's memory, so it's a speed bump rather than a wall; the trap field does the rest.
 */
const WINDOW_MS = 10 * 60_000;
const LIMIT = 5;
const seen = new Map<string, number[]>();

export function tooMany(sender: string, now = Date.now()) {
  const recent = (seen.get(sender) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  seen.set(sender, recent);
  if (seen.size > 5000) seen.clear();
  return recent.length > LIMIT;
}
