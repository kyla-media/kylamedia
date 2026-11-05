"use client";

import { useCallback, useState } from "react";

const wrap = (i: number, n: number) => ((i % n) + n) % n;

/** Active index plus the one before it, so a move knows where it came from. */
export function useSlider(count: number) {
  const [state, setState] = useState({ active: 0, prev: 0 });

  const go = useCallback(
    (i: number) =>
      setState((s) => ({ prev: s.active, active: wrap(i, count) })),
    [count],
  );
  const step = useCallback(
    (by: number) =>
      setState((s) => ({ prev: s.active, active: wrap(s.active + by, count) })),
    [count],
  );

  return { ...state, go, next: () => step(1), back: () => step(-1) };
}
