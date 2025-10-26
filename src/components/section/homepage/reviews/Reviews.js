"use client";
import { useState, useEffect } from "react";
import styles from "./Reviews.module.css";
import ChevronLeft from "@/components/ui/chevron/ChevronLeft";
import ChevronRight from "@/components/ui/chevron/ChevronRight";

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const reviews = [
    {
      name: "Alsana Trawally",
      title: '"Best Experience In Bali."',
      date: "June 2024",
      text: `<p>"<em>Best experience I had in Bali out of all the resorts I've been to too,</em> customer service was impeccable and the staff were so kind, Mr. Komang made sure we had accommodations and did the best of his ability to make sure we had a warming welcoming, it's unbelievable that everything is made of bamboo"</p>`,
      link: "#",
    },
    {
      name: "Anne & Steve",
      title: '"A Truly Memorable Experience."',
      date: "May 2024",
      text: "Fabulous architecture, beautiful natural setting and wonderful staff combine to provide a truly memorable experience...",
      link: "https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r949534794-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
    },
    {
      name: "Beata B",
      title: '"Mind-Blowing Architecture And Top-Notch Service!"',
      date: "Apr. 2024",
      text: "From the moment you step into this incredible resort, you feel like you are in another world...",
      link: "https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r947955747-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
    },
  ];

  return (
    <div
      className={styles.carousel}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
    >
      <header className={styles.carouselHeader}>
        <div>
          <h3 className={styles.carouselTitle}>
            What Our Guests <br /> Have To Say About Us
          </h3>
          <div className={styles.ratings}>
            <div className={styles.ratingItem}>
              <span>4.8 / 295 Tripadvisor Reviews</span>
              <svg viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div className={styles.ratingItem}>
              <span>4.7 / 742 Google Reviews</span>
              <svg viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
          </div>
        </div>

        <nav className={styles.navButtons}>
          <ChevronLeft onClick={prevSlide} disabled={current === 0} />
          <ChevronRight
            onClick={nextSlide}
            disabled={current === reviews.length - 1}
          />
        </nav>
      </header>

      <div className={styles.slidesContainer}>
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className={`${styles.slide} ${idx === current ? styles.slideActive : ""}`}
              role="group"
              aria-roledescription="slide"
            >
              <article className={styles.slideContent}>
                <header className={styles.slideHeader}>
                  <h3>{review.name}</h3>
                  <span>{review.date}</span>
                </header>
                <h5>{review.title}</h5>
                <div className={styles.slideText}>
                  {/* <p dangerouslySetInnerHTML={{ __html: review.text }} /> */}
                  <p>{review.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
