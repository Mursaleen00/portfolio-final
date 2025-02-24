"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CursorDot() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed w-3 h-3 duration-500 bg-silver-contrast rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.5 }}
      transition={{ duration: 2.2 }}
    />
  );
}
