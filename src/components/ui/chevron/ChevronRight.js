"use client";
import styles from "./Chevron.module.css";

export default function ChevronRight({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${
        disabled ? styles.buttonDisabled : styles.buttonEnabled
      }`}
    >
      {children || "→"}
    </button>
  );
}