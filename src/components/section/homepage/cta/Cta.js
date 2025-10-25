import ButtonMore from "@/components/ui/button/ButtonMore";
import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Reconnect With Yourself In Luxurious Comfort.
          </h2>
          <ButtonMore href={"#"} children={"BOOK YOUR STAY"} />
        </div>
      </div>
      <div className={styles.copyright}>@ulamanbali</div>
    </section>
  );
}
