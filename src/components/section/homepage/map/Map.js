import styles from "./Map.module.css";
import facilities from "/data/facilities.json";
import useFadeInOnScroll from "../../../../hooks/fade-in-scroll";

export default function Map() {
  const [ref, visible] = useFadeInOnScroll();

  return (
    <section className={styles.villasSection}>
      <div ref={ref} className={`${styles.villasSectionHeading} ${visible ? "fade-in-up" : ""}`}>
        <h3 className={styles.villasSectionText}>
          Discover Ulaman
          <br />
          From Above
        </h3>
        <div className={styles.tipWrapper}>
          <span className={styles.circle}></span>
          <span className={styles.text}>Tap on an icon</span>
        </div>
        <span className={styles.textFinger}>* Use your finger to navigate</span>
      </div>
      <div className={styles.mapContainer}>
        <img
          className={styles.mapImage}
          src="https://ulamanbali.com/_nuxt/ulaman.B-iYsIcw.jpg"
          alt="map"
          loading="lazy"
        />
        <ul className={styles.wrapper}>
          {facilities.map((facility, idx) => (
            <li
              key={idx}
              className={styles.item}
              style={{ top: facility.top, left: facility.left }}
            >
              <div className={styles.icon}>
                <img src={facility.icon} alt={facility.name} loading="lazy" />
              </div>
              <div className={styles.label}>{facility.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
