import styles from "./Button.module.css";

export default function ButtonMore({ href, children }) {
  return (
    <button className={styles.aboutButton}>
      <a href={href}>{children}</a>
    </button>
  );
}
