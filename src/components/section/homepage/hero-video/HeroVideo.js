"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./HeroVideo.module.css";

export default function HeroVideo() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const lastScrollY = useRef(0);
  const velocity = useRef(0);

  useEffect(() => {
    let ticking = false;
    let lastTimestamp = 0;

    const handleScroll = (event) => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (delta !== 0) {
        velocity.current = delta;
        lastScrollY.current = currentScrollY;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset((prev) => {
            let newOffset = prev + velocity.current * 0.5;
            if (newOffset > 600) newOffset = 600;
            if (newOffset < -600) newOffset = -600;
            return newOffset;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleScrollStop = () => {
      velocity.current = 0;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollend", handleScrollStop);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollStop);
    };
  }, []);

  const line1Transform = `translateX(${offset}px)`;
  const line2Transform = `translateX(${-(offset + 300)}px)`;

  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying((prev) => !prev);
  };

  const previewVideoSrcMp4 =
    "https://ulaman.cdn.prismic.io/ulaman/ZnDvD5m069VX10t2_spa.mp4";
  const previewVideoSrcWebm =
    "https://ulaman.cdn.prismic.io/ulaman/ZnDvnJm069VX10uC_spa.webm";

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      setCursorPos({ x, y, xPercent, yPercent });
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const videoRef = useRef(null);
  const handleClick = () => {
    if (!playing) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => console.log("Play failed:", err));
      }
    } else {
      videoRef.current.pause();
    }

    setPlaying(!playing);
  };

  return (
    <section
      ref={sectionRef}
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={styles.backgroundTextContainer}>
        <div
          className={styles.backgroundText}
          style={{ transform: line1Transform }}
        >
          Balance • Relax • Luxury
        </div>
        <div
          className={styles.backgroundText}
          style={{ transform: line2Transform }}
        >
          Balance • Relax • Luxury
        </div>
      </div>
      <div className={`${styles.containerVideo}`} onClick={handlePlay}>
        <video
          ref={videoRef}
          poster="https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress"
          className={`${styles.previewVideo} ${playing ? styles.playing : ""}`}
          loop
          playsInline
          muted
          preload="auto"
          onClick={handleClick}
        >
          <source src={previewVideoSrcMp4} type="video/mp4" />
          <source src={previewVideoSrcWebm} type="video/webm" />
        </video>
      </div>
      {hovered && (
        <button
          className={styles.playButton}
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            opacity: hovered ? 1 : 0,
            transform: hovered
              ? "translate(-50%, -50%) scale(1)"
              : "translate(-50%, -50%) scale(0.8)",
          }}
          onClick={handlePlay}
        >
          <div className={styles.playIconCircle}>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
              <path d="M0 0L10 6L0 12V0Z" />
            </svg>
          </div>
          <span className={styles.playText}>Play Video</span>
        </button>
      )}
    </section>
  );
}
