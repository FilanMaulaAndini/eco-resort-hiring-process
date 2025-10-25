import styles from "./Button.module.css";

export default function ToggleButton({ href, children, scrolled = false }) {
  return (
    <button className={`${styles.stayButton} ${scrolled ? styles.stayButtonScrolled : ""}`}>
      <a href={href}>{children}</a>
    </button>
  );
}