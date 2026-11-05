import { ContactForm } from "./ContactForm";
import styles from "./contact.module.css";

export function Contact() {
  return (
    <section
      className="block"
      id="contact"
      aria-labelledby="h-contact"
      data-reveal
    >
      <div className={`wrap ${styles.contact}`}>
        <div className={styles.side} data-rv="">
          <span className="kicker">Contact</span>
          <h2 id="h-contact">Tell us what you sell</h2>
          <p>
            We&apos;ll reply within{" "}
            <span className="tbc">one business day</span> with a time for a
            short call and a sample hook for your product.
          </p>
          <p className={styles.mail}>hello@kylamedia.com</p>
        </div>
        <div data-rv="">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
