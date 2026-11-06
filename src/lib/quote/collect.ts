import { SOURCE_KEYS } from "./fields";

/** The form's fields plus where the visitor came from, ready to post. */
export function collectQuote(form: HTMLFormElement) {
  const data = new FormData(form);
  const params = new URLSearchParams(window.location.search);
  const source: Record<string, string> = {};
  for (const key of SOURCE_KEYS) {
    const value = params.get(key);
    if (value) source[key] = value;
  }
  if (document.referrer && !document.referrer.startsWith(location.origin))
    source.referrer = document.referrer;
  source.landing = location.pathname;
  return {
    name: data.get("name"),
    email: data.get("email"),
    site: data.get("site"),
    package: data.get("package"),
    spend: data.get("spend"),
    needs: data.getAll("needs"),
    msg: data.get("msg"),
    company: data.get("company"),
    source,
  };
}

/** Posts the request; resolves to an error message, or null when it was sent. */
export async function postQuote(body: unknown) {
  try {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) return null;
    const out = (await res.json().catch(() => ({}))) as { error?: string };
    return out.error ?? "Something went wrong. Please try again.";
  } catch {
    return "We couldn't reach the server. Check your connection and try again.";
  }
}
