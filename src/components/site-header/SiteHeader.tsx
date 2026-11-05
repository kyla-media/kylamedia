import { Logo } from "@/components/logo/Logo";
import { MAIN_NAV } from "@/content/nav";

import { MobileMenu } from "./MobileMenu";
import styles from "./site-header.module.css";

/** Sticky header. Its height is mirrored in --header-h so anchors stop below it. */
export function SiteHeader() {
  return (
    <header className={styles.bar}>
      <div className={`wrap ${styles.top}`}>
        <a href="#top" aria-label="Kyla Media home">
          <Logo className={styles.logo} />
        </a>
        <nav className={styles.nav} aria-label="Main">
          {MAIN_NAV.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <a className="btn sm" href="#contact">
            Book a call
          </a>
        </div>
        <MobileMenu links={MAIN_NAV} />
      </div>
    </header>
  );
}
