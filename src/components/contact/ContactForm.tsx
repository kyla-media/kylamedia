"use client";

import { useRef, useState } from "react";

import { NEEDS, SPEND_OPTIONS } from "@/content/faq";

import { SentNotice } from "./SentNotice";
import styles from "./contact.module.css";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Not wired to a backend yet: a valid submit shows the sent state only. */
export function ContactForm() {
  const email = useRef<HTMLInputElement>(null);
  const [bad, setBad] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = EMAIL.test(email.current?.value.trim() ?? "");
    setBad(!ok);
    if (!ok) return email.current?.focus();
    setSent(true);
  };

  if (sent) return <SentNotice />;

  return (
    <form className={styles.form} noValidate onSubmit={submit}>
      <div className={styles.field}>
        <label htmlFor="c-name">Your name</label>
        <input id="c-name" name="name" autoComplete="name" />
      </div>
      <div className={styles.field} data-bad={bad}>
        <label htmlFor="c-email">Work email</label>
        <input
          ref={email}
          id="c-email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={bad}
          aria-describedby={bad ? "e-email" : undefined}
        />
        {bad && (
          <span className={styles.err} id="e-email">
            Enter an email we can reply to, like you@brand.com.
          </span>
        )}
      </div>
      <div className={`${styles.field} ${styles.wide}`}>
        <label htmlFor="c-site">Product or store link</label>
        <input id="c-site" name="site" placeholder="https://" />
      </div>
      <div className={`${styles.field} ${styles.wide}`}>
        <label htmlFor="c-spend">Monthly ad spend</label>
        <select id="c-spend" name="spend">
          {SPEND_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <fieldset className={styles.wide}>
        <legend>What do you need?</legend>
        <div className={styles.checks}>
          {NEEDS.map((n) => (
            <label key={n}>
              <input type="checkbox" name="needs" value={n} /> {n}
            </label>
          ))}
        </div>
      </fieldset>
      <div className={`${styles.field} ${styles.wide}`}>
        <label htmlFor="c-msg">Anything else</label>
        <textarea id="c-msg" name="msg" rows={3} />
      </div>
      <div className={styles.wide}>
        <button className="btn" type="submit">
          Send
        </button>
      </div>
    </form>
  );
}
