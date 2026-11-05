import styles from "./section-head.module.css";

type Props = {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
};

/** Kicker and title on the left, a short line on the right. */
export function SectionHead({ id, kicker, title, children }: Props) {
  return (
    <div className={styles.head}>
      <div data-rv="">
        <span className="kicker">{kicker}</span>
        <h2 id={id} className="title">
          {title}
        </h2>
      </div>
      <p data-rv="">{children}</p>
    </div>
  );
}
