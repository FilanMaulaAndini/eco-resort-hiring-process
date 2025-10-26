import { useState, useEffect } from "react";

export default function useScrollRounded(ref, options = {}) {
  const { scrollMultiplier = 0.6 } = options;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const totalScrollRange = windowHeight + sectionHeight * scrollMultiplier;
      const rawProgress = 1 - (rect.top + sectionHeight) / totalScrollRange;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, scrollMultiplier]);

  return progress;
}
