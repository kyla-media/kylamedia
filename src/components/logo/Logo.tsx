import { LOGO_SUBPATHS } from "./logo-path";

type Props = { className?: string };

/** The Kyla mark with "media" in place of "studio". Colour follows the text colour. */
export function Logo({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 535 306"
      role="img"
      aria-label="Kyla Media"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d={LOGO_SUBPATHS.join(" ")}
      />
      <text
        x="530"
        y="301"
        textAnchor="end"
        fontFamily="var(--body)"
        fontWeight="700"
        fontSize="66"
        letterSpacing="1"
        fill="currentColor"
      >
        media
      </text>
    </svg>
  );
}
