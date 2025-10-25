import ButtonMore from "@/components/ui/button/ButtonMore";
import styles from "./Culinary.module.css";
import { useEffect, useRef } from "react";
import culinary from "/data/culinary.json";

export default function Culinary() {
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      imageRefs.current.forEach((img) => {
        if (!img) return;

        const speed = parseFloat(img.dataset.speed) || 1;
        const rect = img.getBoundingClientRect();

        const progress = Math.min(
          Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
          1
        );

        const translateValue = -360 + progress * 720;

        img.style.transform = `translate(0px, ${translateValue}px) scale(1.25, 1.25)`;
        img.style.willChange = "transform";
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          A world-class gastronomic journey where nature’s finest ingredients
          meet culinary craftsmanship.
        </h2>
        <ButtonMore href={"#"} children={"VISIT THE WEBSITE"} />
      </div>

      <div className={styles.imageGrid}>
        {culinary.map((item, i) => (
          <figure key={i} className={`${styles.imageWrapper} ${styles.group}`}>
            <img
              ref={(el) => (imageRefs.current[i] = el)}
              src={item.src}
              alt=""
              data-speed={1 + i * 0.2}
              className={styles.image}
              style={{
                transform: "translate(0px, -360px) scale(1.25, 1.25)",
                willChange: "transform",
              }}
            />
            <figcaption className={styles.figcaption}>
              <span className={styles.badge}>{item.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
