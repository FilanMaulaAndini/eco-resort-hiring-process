import ButtonMore from "@/components/ui/button/ButtonMore";
import styles from "./Villas.module.css";
import { useState } from "react";
import ChevronLeft from "@/components/ui/chevron/ChevronLeft";
import ChevronRight from "@/components/ui/chevron/ChevronRight";
import ChevronLeftLight from "@/components/ui/chevron/ChevronLeftLight";
import ChevronRightLight from "@/components/ui/chevron/ChevronRightLight";
import villas from "/data/villas.json";

export default function Villas() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesToShow = 1;
  const maxIndex = villas.length - slidesToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className={styles.villasSection}>
      <h2 className={styles.villasSectionHeading}>
        <p className={styles.villasSectionText}>
          Discover cozy elegance, where tranquility meets Bali's serene beauty.
        </p>
      </h2>

      <div className={styles.villasGrid}>
        <div className={styles.chevron}>
          <ChevronLeft onClick={prevSlide} disabled={currentIndex === 0} />
          <ChevronRight
            onClick={nextSlide}
            disabled={currentIndex === villas.length - 1}
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
              <Villass villas={villas} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Villass({ villas }) {
  const [hovered, setHovered] = useState(null);
  const [currentSlides, setCurrentSlides] = useState(
    Array(villas.length).fill(0)
  );
  const [fades, setFades] = useState(Array(villas.length).fill(false));

  const goToSlide = (villaIndex, targetIndex) => {
    setFades((prev) => {
      const newFades = [...prev];
      newFades[villaIndex] = true;
      return newFades;
    });

    setTimeout(() => {
      setCurrentSlides((prev) => {
        const newSlides = [...prev];
        newSlides[villaIndex] = targetIndex;
        return newSlides;
      });

      setTimeout(() => {
        setFades((prev) => {
          const newFades = [...prev];
          newFades[villaIndex] = false;
          return newFades;
        });
      }, 100);
    }, 300);
  };

  const handleSlideChange = (villaIndex, direction, totalImages) => {
    const current = currentSlides[villaIndex];
    const nextIndex =
      direction === "next"
        ? (current + 1) % totalImages
        : (current - 1 + totalImages) % totalImages;
    goToSlide(villaIndex, nextIndex);
  };

  return (
    <>
      {villas.map((villa, index) => {
        const totalImages = villa.image.length;
        const currentIndex = currentSlides[index];

        return (
          <div key={index} className={styles.slide}>
            <div className={styles.villaCard}>
              <div
                className={styles.imageContainer}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={villa.image[currentIndex]}
                  alt={villa.title}
                  style={{
                    transition: "opacity 0.8s ease-in-out",
                    opacity: fades[index] ? 0 : 1,
                  }}
                />
                <div className={styles.imageOverlay} />
                <div className={styles.dotIndicators}>
                  {villa.image.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={styles.dot}
                      style={{
                        backgroundColor:
                          currentIndex === dotIndex
                            ? "white"
                            : "rgba(255,255,255,0.5)",
                      }}
                      onClick={() => goToSlide(index, dotIndex)}
                    ></div>
                  ))}
                  {hovered === index && (
                    <>
                      <ChevronLeftLight
                        onClick={() =>
                          handleSlideChange(index, "prev", totalImages)
                        }
                        disabled={currentIndex === 0}
                      />
                      <ChevronRightLight
                        onClick={() =>
                          handleSlideChange(index, "next", totalImages)
                        }
                        disabled={currentIndex === totalImages - 1}
                      />
                    </>
                  )}
                </div>
              </div>

              <div className={styles.villaContent}>
                <h3 className={styles.villaTitle}>{villa.title}</h3>
                <p className={styles.villaDescription}>{villa.description}</p>
                <ButtonMore href="#" children="DISCOVER" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
