import ButtonMore from "@/components/ui/button/ButtonMore";
import styles from "./Experience.module.css";
import { useEffect, useState, useRef } from "react";

export default function Experience() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const totalScrollRange = windowHeight + sectionHeight * 0.6;
      const rawProgress = 1 - (rect.top + sectionHeight) / totalScrollRange;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const widthProgress = Math.min(progress * 2, 1);
  const width = 50 + (100 - 50) * widthProgress;

  const radiusProgress = Math.max((progress - 0.5) * 1.5, 0);
  const borderRadius = 668 - 668 * Math.min(radiusProgress, 1);

  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.experienceSectionHeading}>
        <p className={styles.experienceSectionText}>
          Experience a blend of nature, comfort and luxury like never before.
        </p>
        <ButtonMore href={"#"} children={"BOOK YOUR STAY"} />
      </h2>

      <div ref={sectionRef} className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{
            width: `${width}%`,
            borderRadius: `${borderRadius}px ${borderRadius}px 0px 0px`,
            transform: "translateY(-40px) scale(1.03)",
          }}
        ></div>
      </div>
    </section>
  );
}
