"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function TextHoverEffect({ text }) {
  const [displayText, setDisplayText] = useState(text);

  const handleHoverStart = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (iterations >= index) {
              return text[index];
            }
            return alphabet[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      iterations += 0.5;
      if (iterations >= text.length) clearInterval(interval);
    }, 30);
  };

  return (
    <motion.h1
      onHoverStart={handleHoverStart}
      onHoverEnd={() => setDisplayText(text)}
      className="text-6xl md:text-8xl font-bold tracking-tight text-silver-contrast inline-block"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
    >
      {displayText}
    </motion.h1>
  );
}
