/** Sends one plain-text email through Resend's API. */
async function sendEmail(mail: {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("Email isn't configured (RESEND_API_KEY).");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    signal: AbortSignal.timeout(10_000),
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM ?? "Kyla Media <quotes@kylamedia.com>",
      to: [mail.to],
      subject: mail.subject,
      text: mail.text,
      reply_to: mail.replyTo,
    }),
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { message?: string };
    throw new Error(
      `Resend refused the email (${res.status}): ${body.message}`,
    );
  }
}

/**
 * The inbox gets the request with Reply going to the prospect. The Trello copy is
 * sent on its own, so nobody can reply-all to the board's secret address.
 */
export async function deliverQuote(quote: {
  subject: string;
  text: string;
  email: string;
}) {
  const inbox = process.env.QUOTE_TO ?? "hello@kylamedia.com";
  // Trello's copy button gives "Board name <address>"; only the address is needed.
  const board =
    process.env.TRELLO_LEADS_EMAIL?.match(/<([^>]+)>/)?.[1] ??
    process.env.TRELLO_LEADS_EMAIL?.trim();
  const [mail, card] = await Promise.allSettled([
    sendEmail({ to: inbox, ...quote, replyTo: quote.email }),
    board ? sendEmail({ to: board, ...quote }) : Promise.resolve(),
  ]);
  if (card.status === "rejected")
    console.error("Trello copy failed", card.reason);
  // The inbox is the one that matters: only its failure fails the request.
  if (mail.status === "rejected") throw mail.reason;
}
