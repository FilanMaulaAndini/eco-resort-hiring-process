import ButtonMore from "@/components/ui/button/ButtonMore";
import styles from "./Journey.module.css";
import { useEffect, useState, useRef } from "react";

export default function Journey() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const raw =
        1 - (rect.top + rect.height * 0.4) / (windowHeight + rect.height);
      const startPoint = 0.4;
      const adjusted = (raw - startPoint) / (1 - startPoint);
      const clamped = Math.min(Math.max(adjusted, 0), 1);

      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          src="https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress"
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
