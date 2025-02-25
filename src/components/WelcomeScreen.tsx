"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3500); // 3.5s for a slightly longer, dramatic effect
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  // Particle animation variants
  const particleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1, 0.8],
      opacity: [0, 1, 0],
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-solid-black flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.8, delay: 2.7, ease: "easeOut" }}
    >
      {/* Radial Gradient Pulse */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(192,192,192,0.2)_0,_transparent_70%)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.15 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Orbiting Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-silver-contrast rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: Math.cos((i * Math.PI) / 4) * 100,
            y: Math.sin((i * Math.PI) / 4) * 100,
          }}
          variants={particleVariants}
          transition={{ duration: 1.5, delay: i * 0.1 }}
        />
      ))}

      {/* Glitchy Name */}
      <motion.div
        className="relative text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-silver-contrast tracking-tight relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
          }}
        >
          <span className="relative inline-block">
            Mursaleen
            {/* Glitch Layers */}
            <span
              className="absolute inset-0 text-silver-contrast/50 animate-[glitch_1s_infinite]"
              style={{ clipPath: "inset(0 0 50% 0)" }}
            >
              Mursaleen
            </span>
            <span
              className="absolute inset-0 text-gray-300/50 animate-[glitch_1s_infinite_reverse]"
              style={{ clipPath: "inset(50% 0 0 0)" }}
            >
              Mursaleen
            </span>
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-xl md:text-2xl font-medium text-silver-contrast/80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 1,
            type: "spring",
            stiffness: 120,
          }}
        >
          Code. Create. Innovate.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
