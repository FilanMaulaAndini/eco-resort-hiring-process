"use client";
import styles from "./ChevronLight.module.css";

export default function ChevronRightLight({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles.right} ${
        disabled ? styles.buttonDisabled : styles.buttonEnabled
      }`}
    >
      {children || "→"}
    </button>
  );
}