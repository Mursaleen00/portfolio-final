"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Spotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const spotlight = spotlightRef.current;
      if (spotlight) {
        spotlight.style.background = `radial-gradient(circle 200px at ${clientX}px ${clientY}px, rgba(192, 192, 192, 0.15), transparent)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={spotlightRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
