"use client";

import ButtonMore from "@/components/ui/button/ButtonMore";
import styles from "./About.module.css";
import { useRef, useState } from "react";
import ChevronLeftLight from "@/components/ui/chevron/ChevronLeftLight";
import ChevronRightLight from "@/components/ui/chevron/ChevronRightLight";
import aboutImages from "/data/aboutImages";
import useFadeInOnScroll from "../../../../hooks/fade-in-scroll";
import useScrollHighlight from "@/hooks/scroll-highlight";

export default function About() {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useFadeInOnScroll();
  const textRef = useRef(null);
  const fullText =
    "Nestled among the rice fields and coconut trees of Tabanan, Ulaman is only 20 minutes away from the vibrant town of Canggu.";
  const { letters, highlightIndex } = useScrollHighlight(textRef, fullText);
  const [currentSlides, setCurrentSlides] = useState(0);
  const [fade, setFade] = useState(false);

  const handleSlideChange = (direction) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlides((prev) => {
        if (direction === "next") {
          return prev === aboutImages.length - 1 ? prev : prev + 1;
        } else {
          return prev === 0 ? prev : prev - 1;
        }
      });
      setFade(false);
    }, 400);
  };

  const goToSlide = (index) => {
    if (index === currentSlides) return;

    setFade(true);
    setTimeout(() => {
      setCurrentSlides(index);
      setFade(false);
    }, 400);
  };

  return (
    <div>
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h1 ref={textRef} className={styles.mainHeading}>
            {letters?.map((letter, idx) => (
              <span
                key={idx}
                style={{
                  color: "var(--color-primary)",
                  opacity: idx <= highlightIndex ? 1 : 0.4,
                  transition: "color 0.2s ease",
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>
      </section>
      <div className={styles.aboutGrid}>
        <div
          className={styles.aboutImageWrapper + "fade-in-up"}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ position: "relative" }}
        >
          <img
            src={aboutImages[currentSlides]}
            alt="Ulaman Architecture"
            className={styles.aboutImage}
            style={{
              transition: "opacity 0.8s ease-in-out",
              opacity: fade ? 0 : 1,
            }}
          />

          {hovered && (
            <>
            <ChevronLeftLight onClick={() => handleSlideChange("prev")} disabled={currentSlides === 0} />
          <ChevronRightLight
            onClick={
              () => handleSlideChange("next")}
            disabled={currentSlides === aboutImages.length - 1}
          />
            </>
          )}

          <div
            style={{
              position: "absolute",
              bottom: "2.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "0.5rem",
              zIndex: 10,
            }}
          >
            {aboutImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  height: "0.75rem",
                  width: "0.75rem",
                  backgroundColor:
                    currentSlides === index ? "white" : "rgba(255,255,255,0.5)",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>

        <div ref={ref} className={`${visible ? "fade-in-up" : ""}`}>
          <h2 className={styles.sectionHeading}>
            An award-winning eco-luxury resort offering a unique hideaway
            experience. Embrace yourself in traditional Balinese culture and
            luxe feeling Renovated, all while minimizing your ecological
            footprint. Recharge your mind, body, and soul in this unique
            holistic retreat.
          </h2>
          <p className={styles.aboutText}>
            We believe nature and luxury can coexist. Ulaman Eco Luxury Resort
            offers{" "}
            <em>
              a secluded, lush haven with luxurious amenities and impeccable
              service
            </em>
            . Immerse yourself in traditional Balinese culture and leave feeling
            renewed, all while minimizing your ecological footprint. Recharge
            your mind, body, and soul in this unique holistic retreat.
          </p>
          <ButtonMore href={"#"} children={"ABOUT US"} />
        </div>
      </div>
    </div>
  );
}
