import React, { useState } from "react";
import styles from "./Footer.module.css";
import ToggleButton from "@/components/ui/button/ToggleButton";
import Image from "next/image";
import logos from "/data/logos.json";
import footerPackages from "/data/footerPackages.json";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);

  const handleSearch = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={styles.sectionFooter}>
          <div className={styles.reviewsContainer}>
            <div className={styles.reviewItem}>
              <span className={styles.rating}>4.7</span>
              <span className={styles.star}>★</span>
              <span>/ 742 Google Reviews</span>
            </div>
            <div className={styles.reviewItem}>
              <span className={styles.rating}>4.8</span>
              <span className={styles.star}>★</span>
              <span>/ 295 TripAdvisor Reviews</span>
            </div>
          </div>

          <div className={styles.bookingWidget}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Check In</label>
              <div className={styles.dividerHorizontal}></div>
              <label className={styles.inputLabel}>Check Out</label>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.counterGroup}>
              <span className={styles.counterLabel}>Adult</span>
              <div className={styles.counterControls}>
                <button
                  className={styles.counterBtn}
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  disabled={adults <= 1}
                >
                  −
                </button>
                <span className={styles.counterValue}>{adults}</span>
                <button
                  className={styles.counterBtn}
                  onClick={() => setAdults(adults + 1)}
                >
                  +
                </button>
              </div>
              <ToggleButton
                href="/"
                children={"Search"}
                onClick={handleSearch}
              />
            </div>
          </div>

          <section className={styles.natureSection}>
            <div className={styles.natureText}>
              <h3 className={styles.heading}>
                Tucked Within Majestic Balinese Nature.
              </h3>
              <p className={styles.description}>
                Strategically located near popular areas like Canggu and Ubud,
                experience tranquil nature and luxury. With endless activities,
                you'll never want to leave Ulaman.
              </p>
            </div>
            <div className={styles.natureImageWrapper}>
              {/* <img
                src="https://images.prismic.io/ulaman/ZpDw3R5LeNNTxF2w_ulaman-bali.jpg?auto=format,compress"
                alt="ulaman bali map"
                className={styles.natureImage}
                loading="lazy"
              /> */}

              <Image
                src="https://images.prismic.io/ulaman/ZpDw3R5LeNNTxF2w_ulaman-bali.jpg?auto=format,compress"
                alt="Ulaman Bali map"
                fill
                className={styles.natureImage}
              />
            </div>
          </section>

          <div className={styles.footerMain}>
            <div className={styles.footerSection}>
              <h3>Get Notified On Our Offers</h3>
              <div className={styles.newsletterForm}>
                <input
                  type="text"
                  placeholder="Your Name*"
                  className={styles.inputField}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  className={styles.inputField}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <button onClick={handleSubmit} className={styles.submitBtn}>
                  SUBMIT
                </button>
              </div>
            </div>

            <div className={styles.footerSection}>
              <h3>Explore</h3>
              <div style={{ display: "flex", gap: "6rem" }}>
                <div className={styles.footerLinks}>
                  <a href="#home">Home</a>
                  <a href="#dining">Dining</a>
                  <a href="#retreats">Retreats</a>
                  <a href="#facilities">Facilities</a>
                  <a href="#about">About</a>
                  <a href="#contact">Contact</a>
                </div>
                <div className={styles.footerLinks}>
                  <a href="#villas">Villas</a>
                  <a href="#spa">Spa</a>
                  <a href="#experiences">Experiences</a>
                  <a href="#ulaman-map">Ulaman Map</a>
                  <a href="#articles">Articles</a>
                  <a href="#testimonials">Video Testimonials</a>
                </div>
              </div>
            </div>

            <div className={styles.footerSection}>
              <h3>Connect</h3>
              <div style={{ display: "flex", gap: "6rem" }}>
                <div className={styles.footerLinks}>
                  <a href="#whatsapp">Whatsapp</a>
                  <a href="#tripadvisor">TripAdvisor</a>
                  <a href="#facebook">Facebook</a>
                </div>
                <div className={styles.footerLinks}>
                  <a href="#directions">Directions</a>
                  <a href="#instagram">Instagram</a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.carouselSection}>
            <div className={styles.carouselWrapper}>
              <ul className={styles.carouselList}>
                {logos.map((logo, idx) => (
                  <li key={idx} className={styles.carouselItem}>
                    <img src={logo.src} alt={logo.alt} />
                  </li>
                ))}
              </ul>

              <div className={styles.carouselAbsolute}>
                <ul className={styles.carouselList}>
                  {logos.map((logo, idx) => (
                    <li key={idx} className={styles.carouselItem}>
                      <img src={logo.src} alt={logo.alt} />
                    </li>
                  ))}
                </ul>
                <ul className={styles.carouselList}>
                  {logos.map((logo, idx) => (
                    <li key={idx} className={styles.carouselItem}>
                      <img src={logo.src} alt={logo.alt} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <footer className={styles.footerBottom}>
            <nav>
              <ul className={styles.footerNav}>
                <li>
                  <a href="/legal/terms">Terms</a>
                </li>
                <li>
                  <a href="/legal/privacy-policy">Privacy</a>
                </li>
                <li>
                  <a href="/contact/ulaman-bookings">Ulaman Bookings</a>
                </li>
                <li>
                  <span className={styles.footerText}>
                    Kids under 6 are not advised.
                  </span>
                </li>
                <li>
                  <span className={styles.footerText}>
                    © 2024-2025 Two Moons Studio for ulamanbali.com. All Rights
                    Reserved
                  </span>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </div>

      <nav className={styles.sliderNav}>
        <div className={styles.sliderTrack}>
          <ul className={styles.sliderList}>
            {footerPackages.map((pkg, index) => (
              <li key={index}>
                <div>
                  <span className={styles.dot}></span>
                </div>
                <button className={styles.sliderButton}>
                  <span>{pkg.title}</span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>{pkg.duration}</span>
                </button>
              </li>
            ))}
          </ul>

          <ul className={styles.sliderList}>
            {footerPackages.map((pkg, index) => (
              <li key={index}>
                <div>
                  <span className={styles.dot}></span>
                </div>
                <button className={styles.sliderButton}>
                  <span>{pkg.title}</span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>{pkg.duration}</span>
                </button>
              </li>
            ))}
          </ul>

          <ul className={styles.sliderList}>
            {footerPackages.map((pkg, index) => (
              <li key={index}>
                <div>
                  <span className={styles.dot}></span>
                </div>
                <button className={styles.sliderButton}>
                  <span>{pkg.title}</span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>{pkg.duration}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </footer>
  );
}
