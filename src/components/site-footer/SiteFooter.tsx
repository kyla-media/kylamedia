import { Logo } from "@/components/logo/Logo";
import { FOOTER_NAV } from "@/content/nav";

import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.row}>
          <Logo className={styles.logo} />
          <nav className={styles.nav} aria-label="Footer">
            {FOOTER_NAV.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.fine}>
          <span>© 2026 Kyla Media. Kyla Studio is a Kyla Media product.</span>
          <span>Every creator in our ads is AI.</span>
        </div>
      </div>
    </footer>
  );
}
