import ButtonMore from "@/components/ui/button/ButtonMore";
import styles from "./Cta.module.css";
import useFadeInOnScroll from "../../../../hooks/fade-in-scroll";

export default function Cta() {
  const [ref, visible] = useFadeInOnScroll();

  return (
    <section>
      <div ref={ref} className={`${styles.container} ${visible ? "fade-in-up" : ""}`}>
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
