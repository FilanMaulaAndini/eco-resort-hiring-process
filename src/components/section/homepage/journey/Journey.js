import ButtonMore from "@/components/ui/button/ButtonMore";
import styles from "./Journey.module.css";
import { useRef } from "react";
import useScrollImageOpen from "@/hooks/scroll-image-open";

export default function Journey() {
  const sectionRef = useRef(null);
  const progress = useScrollImageOpen(sectionRef);

  const maxTranslate = 450;
  const leftTranslate = progress * -maxTranslate;
  const rightTranslate = progress * maxTranslate;

  const maxRotate = 7;
  const leftRotate = progress * maxRotate;
  const rightRotate = progress * -maxRotate;

  return (
    <section ref={sectionRef} className={styles.section}>
      <figure className={styles.images}>
        <img
          src="https://images.prismic.io/ulaman/ZlQ_cik0V36pXpWM_ulaman-eco-resort.jpg?auto=format,compress"
          alt="Left wellness"
          loading="lazy"
          className={`${styles.image} ${styles.left}`}
          style={{
            transform: `translate(${rightTranslate}px, 0) rotate(${leftRotate}deg) `,
          }}
        />
      </figure>

      <figure className={styles.images}>
        <img
          src="https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress"
          alt="Left wellness"
          loading="lazy"
          className={`${styles.image} ${styles.right}`}
          style={{
            transform: `translate(${leftTranslate}px, 0) rotate(${rightRotate}deg)`,
          }}
        />
      </figure>
      <h2 className={styles.villasSectionHeading}>
        <p className={styles.villasSectionText}>
          Discover your path to wellness and growth.
        </p>
        <p className={styles.aboutText}>
          At Ulaman we redefine luxury as an experience that not only pampers
          the senses but also nurtures the soul. Nestled in pristine nature, our
          eco-luxury retreat offers a sanctuary for healing and transformation.
          With personalized programs year-round, enjoy dedicated attention and
          care, immersing yourself in relaxation, rejuvenation, or profound
          inner change through meticulously curated activities and treatments.{" "}
          <em>Your transformative journey begins here.</em>
        </p>

        <ButtonMore href={"#"} children={"LEARN MORE"} />
      </h2>
    </section>
  );
}
