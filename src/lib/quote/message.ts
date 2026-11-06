import { packageName } from "@/content/plans";

import type { Quote } from "./fields";

/** Who's asking, short enough for an inbox line and a Trello card title. */
const asker = (q: Quote) => {
  const site = q.site.replace(/^https?:\/\/(www\.)?/, "").split("/")[0];
  return [q.name, site].filter(Boolean).join(" at ") || q.email;
};

/** "#" starts a label in Trello's email-to-board, so titles never carry one. */
export const subjectOf = (q: Quote) =>
  `Quote request: ${packageName(q.package)}, from ${asker(q)}`.replace(
    /#/g,
    "",
  );

/** Every field in plain text, the same for the inbox and the Trello card. */
export function bodyOf(q: Quote) {
  const lines = [
    `Package: ${packageName(q.package)}`,
    `Name: ${q.name || "(not given)"}`,
    `Email: ${q.email}`,
    `Product or store: ${q.site || "(not given)"}`,
    `Monthly ad spend: ${q.spend || "(not given)"}`,
    `Needs: ${q.needs.join(", ") || "(none ticked)"}`,
    "",
    "Message:",
    q.msg || "(none)",
  ];
  const source = Object.entries(q.source);
  if (source.length)
    lines.push("", "Came from:", ...source.map(([k, v]) => `${k}: ${v}`));
  return lines.join("\n");
}
