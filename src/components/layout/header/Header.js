"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import ToggleButton from "@/components/ui/button/ToggleButton";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav
        className={`${styles.navContainer} ${scrolled || menuOpen ? styles.navContainerScrolled : ""}`}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <button
            onClick={() => handleMenuOpen()}
            className={`${styles.hamburger} ${menuOpen || menuOpen ? styles.active : ""}`}
          >
            <span
              className={`${styles.line} ${styles.line1} ${scrolled || menuOpen ? styles.line1Scrolled : ""}`}
            ></span>
            <span
              className={`${styles.line} ${styles.line2} ${scrolled || menuOpen ? styles.line2Scrolled : ""}`}
            ></span>
          </button>

          <ul
            className={`${styles.navLinks} ${scrolled ? styles.navLinksScrolled : ""}`}
          >
            <li>
              <a href="/villas">Villas</a>
            </li>
            <li>
              <a href="/spa">Spa</a>
            </li>
            <li>
              <a href="/dine">Dine</a>
            </li>
            <li>
              <a href="/retreats">Retreats</a>
            </li>
          </ul>
        </div>
        <div className={styles.logoContainer}>
          <div className={`${styles.logo} ${styles.animateZoomOut}`}>
            <Link href="/">
              <Image
                src="https://ulaman.cdn.prismic.io/ulaman/aAMlsuvxEdbNPPas_logo-new.svg"
                alt="Ulaman Logo"
                width={scrolled ? 160 : 220}
                height={scrolled ? 60 : 90}
              />
            </Link>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "end", flex: 1 }}>
          <ToggleButton
            href="/"
            children={"Stay With Us"}
            scrolled={scrolled || menuOpen}
          />
        </div>
      </nav>

      <div
        className={`${styles.menuOverlay} ${menuOpen ? styles.menuOverlayActive : ""}`}
      >
        <div className={styles.menuContent}>
          <div className={`${styles.menuLeft} ${styles.box1}`}>
            <nav className={styles.navWrapper}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <a href="/">Home</a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="/villas">Villas</a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="/packages-ulaman">Packages</a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="https://riversidespabyulaman.com/">Spa</a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="/retreats">Retreats</a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a
                    href="https://earthbyulaman.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dine
                  </a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="/activities">Experiences</a>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className={styles.socialList}>
                <li className={styles.navItem}>
                  <a
                    href="https://wa.me/6281227142854"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whatsapp
                  </a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="https://www.google.com/maps/dir/">Directions</a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="https://www.tripadvisor.com/">TripAdvisor</a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a
                    href="https://www.instagram.com/ulamanbali"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a
                    href="https://www.facebook.com/UlamanBali/"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className={`${styles.menuCenter} ${styles.box2}`}>
            <div className={`${styles.menuImageContainer}`}>
              <img
                src="https://images.prismic.io/ulaman/Zjeq0EMTzAJOCirD_hotel.jpg?auto=format,compress"
                alt="Ulaman Resort"
                className={styles.centerImage}
              />
            </div>
          </div>

          <div className={`${styles.menuRight} ${styles.box3}`}>
            <nav className={styles.navWrapper}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <a href="/">Facilities</a>
                </li>

                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="/">Home</a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="/">Blog</a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="/">Reviews</a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="/">About</a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="/">Contact</a>
                </li>
                <li className={styles.navItem}>
                  <span>/</span>
                  <a href="/">The Map</a>
                </li>
              </ul>
            </nav>

            <div className={styles.smallLogoContainer}>
              <img
                src="https://ulaman.cdn.prismic.io/ulaman/ZpJWph5LeNNTxIU8_ulaman.svg?auto=compress,format"
                alt="Ulaman Bali"
                className={styles.smallLogo}
                loading="lazy"
              />
            </div>
          </div>
          {/* Bottom Menu Image */}
          {/* <div
              className={` ${styles.menuImageHiddenXl} `}
            >
              <img
                src="https://images.prismic.io/ulaman/Zjeq0EMTzAJOCirD_hotel.jpg?auto=format,compress"
                alt="Ulaman Bali"
                className={styles.menuImage}
                loading="lazy"
              />
            </div> */}
        </div>
      </div>
    </header>
  );
}
