// components/Typewriter.tsx
"use client";

import { useEffect, useState } from "react";

const text = "Journey With Voice.";

export default function Typewriter() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <h1 className="text-md md:text-3xl font-semibold font-mono text-white text-stroke-orange text-center">
      {displayedText}
    </h1>
  );
}
