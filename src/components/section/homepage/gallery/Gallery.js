import ButtonMore from "@/components/ui/button/ButtonMore";
import styles from "./Gallery.module.css";
import gallery from "/data/gallery";

export default function Gallery() {
  const galleryItems = [
    {
      src: "https://images.prismic.io/ulaman/ZlbVTKWtHYXtT4LL_ulaman.jpg?auto=format,compress",
      alt: "flower pool",
      label: "Pool Flower Decorations",
      aspectClass: styles.aspect1,
    },
    {
      src: "https://images.prismic.io/ulaman/ZpTFzx5LeNNTxJWM_PREWEDDING-1.jpg?auto=format,compress",
      alt: "pre-wedding",
      label: "Pre-wedding venue",
      aspectClass: styles.aspect2,
    },
    {
      src: "https://images.prismic.io/ulaman/ZlbYjKWtHYXtT4MP_bathflower.jpg?auto=format,compress",
      alt: "flower bath",
      label: "Bathtub Flower Decorations",
      aspectClass: styles.aspect2,
    },
    {
      src: "https://images.prismic.io/ulaman/ZlbB0KWtHYXtT4Fc_bali-hotels.jpg?auto=format,compress",
      alt: "bed decorations",
      label: "Romantic Bed Decorations",
      aspectClass: styles.aspect1,
      overlay: true,
      overlaySrc:
        "https://images.prismic.io/ulaman/ZpIRih5LeNNTxIQ__weddings-bali.jpg?auto=format,compress",
      overlayLabel: "Fairytale Tropical Jungle Wedding",
    },
    {
      src: "https://images.prismic.io/ulaman/ZoZc3h5LeNNTwyC-_luxury-resort-bali.jpg?auto=format,compress",
      alt: "helicopter flight",
      label: "VIP Airport Transfers via Helicopter",
      aspectClass: styles.aspect1,
    },
    {
      src: "https://images.prismic.io/ulaman/ZlbDa6WtHYXtT4F-_eco-hotel-bali.jpg?auto=format,compress",
      alt: "balloons and bed decoration",
      label: "Balloons and Sparkles",
      aspectClass: styles.aspect2,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.columns}>
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.articleWrapper} ${item.aspectClass}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={`${styles.image} ${item.overlay ? styles.imageHidden : styles.imageVisible}`}
              loading="lazy"
            />
            {item.overlay && (
              <img
                src={item.overlaySrc}
                alt={item.alt}
                className={`${styles.image} ${styles.imageVisible}`}
                loading="lazy"
              />
            )}
            <footer className={styles.footer}>
              <h6 className={styles.badge}>
                {item.overlay ? item.overlayLabel : item.label}
              </h6>
            </footer>
          </div>
        ))}
      </div>
      <nav style={{ textAlign: "center", marginTop: "1rem" }}>
        <ButtonMore href={"#"} children={"DISCOVER ALL EXPERIENCES"} />
      </nav>
    </div>
  );
}
