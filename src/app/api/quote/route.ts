import { parseQuote } from "@/lib/quote/fields";
import { bodyOf, subjectOf } from "@/lib/quote/message";
import { tooMany } from "@/lib/quote/rate-limit";
import { deliverQuote } from "@/lib/quote/send";

const reply = (status: number, error?: string) =>
  Response.json(error ? { error } : { ok: true }, { status });

/** A quote request from the contact form: emailed to the inbox and the Trello Leads list. */
export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<
    string,
    unknown
  > | null;
  if (!body) return reply(400, "Something went wrong. Please try again.");
  // Bots fill every field; people never see this one. Pretend it worked.
  if (typeof body.company === "string" && body.company) return reply(200);
  const sender = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (tooMany(sender || "unknown"))
    return reply(429, "Too many requests. Please email hello@kylamedia.com.");
  const parsed = parseQuote(body);
  if ("error" in parsed) return reply(400, parsed.error);
  try {
    await deliverQuote({
      subject: subjectOf(parsed.quote),
      text: bodyOf(parsed.quote),
      email: parsed.quote.email,
    });
  } catch (error) {
    console.error("Quote request failed", error);
    return reply(
      502,
      "We couldn't send that. Please email hello@kylamedia.com.",
    );
  }
  return reply(200);
}
