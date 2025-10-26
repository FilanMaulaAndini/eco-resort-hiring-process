import ButtonMore from "@/components/ui/button/ButtonMore";
import styles from "./Packages.module.css";
import { useState } from "react";
import ChevronLeft from "@/components/ui/chevron/ChevronLeft";
import ChevronRight from "@/components/ui/chevron/ChevronRight";
import packages from "/data/packages.json";
import useFadeInOnScroll from "../../../../hooks/fade-in-scroll";

export default function Packages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, visible] = useFadeInOnScroll();

  const slidesToShow = 1;
  const maxIndex = packages.length - slidesToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className={styles.packagesSection}>
      <h2 ref={ref} className={`${styles.packagesSectionHeading} ${visible ? "fade-in-up" : ""}`}>
        <p className={styles.packagesSectionText}>
          Book one of our special
          <br />
          packages for a getaway you’ll
          <br />
          never forget.
        </p>
      </h2>

      <div className={styles.packagesGrid}>
        <div className={styles.chevron}>
          <ChevronLeft onClick={prevSlide} disabled={currentIndex === 0} />
          <ChevronRight
            onClick={nextSlide}
            disabled={currentIndex === packages.length - 1}
          />
        </div>
        <div>
          <div className={styles.sliderWrapper}>
            <div
              className={styles.sliderTrack}
              style={{
                transform: `translateX(-${currentIndex * (100 / 7)}%)`,
              }}
            >
              {packages.map((villa, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.packageCard}>
                    <div>
                      <div style={{ position: "relative" }}>
                        <div className={styles.floatingElement}></div>
                        <img
                          className={styles.image}
                          src={villa.image}
                          alt={villa.title}
                        />
                      </div>

                      <div className={styles.packageContent}>
                        <h6 className={styles.badge}>
                          3&nbsp;Days / 2&nbsp;Nights
                        </h6>
                        <footer style={{ marginTop: "1rem" }}>
                          <h3 className={styles.packageTitle}>
                            {villa.title}fssf
                          </h3>
                          <ButtonMore href={"#"} children={"DISCOVER"} />
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
