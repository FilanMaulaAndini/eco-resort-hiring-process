import { useState, useEffect } from "react";

export default function useScrollHighlight(ref, text) {
  const letters = (text || "").split("");
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      );
      const index = Math.floor(progress * letters.length);
      setHighlightIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, letters.length]);

  return { letters, highlightIndex };
}
