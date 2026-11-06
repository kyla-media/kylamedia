import { NEEDS, SPEND_OPTIONS } from "@/content/faq";
import { PACKAGE_CHOICES } from "@/content/plans";

/** Where the visitor came from: ad tags, a personal ?ref= link, or the referring site. */
export const SOURCE_KEYS = [
  "ref",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "referrer",
  "landing",
] as const;

export type Quote = {
  name: string;
  email: string;
  site: string;
  package: string;
  spend: string;
  needs: string[];
  msg: string;
  source: Partial<Record<(typeof SOURCE_KEYS)[number], string>>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const text = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const oneOf = (v: unknown, allowed: string[], fallback: string) =>
  typeof v === "string" && allowed.includes(v) ? v : fallback;

/** A request from the form, cleaned: unknown choices fall back, long text is cut. */
export function parseQuote(
  body: Record<string, unknown>,
): { quote: Quote } | { error: string } {
  const email = text(body.email, 200);
  if (!EMAIL.test(email)) return { error: "Enter an email we can reply to." };
  const raw = (body.source ?? {}) as Record<string, unknown>;
  const source: Quote["source"] = {};
  for (const key of SOURCE_KEYS) {
    const value = text(raw[key], 300);
    if (value) source[key] = value;
  }
  const needs = Array.isArray(body.needs) ? body.needs : [];
  return {
    quote: {
      name: text(body.name, 120),
      email,
      site: text(body.site, 300),
      package: oneOf(
        body.package,
        PACKAGE_CHOICES.map((c) => c.id),
        "unsure",
      ),
      spend: oneOf(body.spend, SPEND_OPTIONS, ""),
      needs: needs.filter((n): n is string => NEEDS.includes(n as string)),
      msg: text(body.msg, 3000),
      source,
    },
  };
}
