"use client";

import { choosePackage } from "@/lib/quote/chosen-package";

type Props = { packageId: string; className: string };

/** Carries the package to the contact form, then scrolls there. Works as a plain link without JavaScript. */
export function QuoteLink({ packageId, className }: Props) {
  const go = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    choosePackage(packageId);
    document.getElementById("contact")?.scrollIntoView();
    document.getElementById("c-package")?.focus({ preventScroll: true });
  };

  return (
    <a
      className={className}
      href={`?package=${packageId}#contact`}
      onClick={go}
    >
      Get a custom quote
    </a>
  );
}
