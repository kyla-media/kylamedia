"use client";

import { useSyncExternalStore } from "react";

/**
 * The package a visitor is asking about lives in the address (?package=pro), so it
 * survives a refresh or a shared link. Cards set it; the contact form reads it.
 */
const EVENT = "kyla:package";

export function choosePackage(id: string) {
  const url = new URL(window.location.href);
  url.searchParams.set("package", id);
  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event(EVENT));
}

const subscribe = (onChange: () => void) => {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("popstate", onChange);
  };
};

const read = () => new URLSearchParams(window.location.search).get("package");

/** The chosen package id, or null when none was picked (and on the server). */
export const useChosenPackage = () =>
  useSyncExternalStore(subscribe, read, () => null);
