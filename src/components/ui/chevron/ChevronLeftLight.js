"use client";
import styles from "./ChevronLight.module.css";

export default function ChevronLeftLight({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles.left} ${
        disabled ? styles.buttonDisabled : styles.buttonEnabled
      }`}
    >
      {children || "←"}
    </button>
  );
}