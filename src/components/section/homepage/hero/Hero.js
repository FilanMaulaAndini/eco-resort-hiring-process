"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "pqkVOxt7Tk4";
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handleReady = (event) => {
    setTimeout(() => {
      setIsPlaying(true);
    }, 2000);
  };

  useEffect(() => {
    handleReady();
  }, []);

  return (
    <section className={styles.hero}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src={thumbnail}
          alt="video thumbnail"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            transition: "opacity 1s ease",
            opacity: isPlaying ? 0 : 1,
          }}
        />

        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1&playlist=${videoId}`}
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media"
          style={{
            width: "100%",
            height: "100vh",
            display: "block",
            verticalAlign: "middle",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        ></iframe>
      </div>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent + "fade-in"}>
        {/* <img
        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&h=1080&fit=crop"
        alt="Ulaman Resort Aerial View"
        style={styles.heroImage}
      /> */}
      </div>
    </section>
  );
}
