// hooks/useScrollProgress.js
import { useState, useEffect } from "react";

export default function useScrollImageOpen(ref, startPoint = 0.4) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const raw = 1 - (rect.top + rect.height * startPoint) / (windowHeight + rect.height);
      const adjusted = (raw - startPoint) / (1 - startPoint);
      setProgress(Math.min(Math.max(adjusted, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, startPoint]);

  return progress;
}
