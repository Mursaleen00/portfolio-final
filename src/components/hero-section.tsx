"use client";

import { motion } from "framer-motion";
import CursorDot from "./effects/CursorDot";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const letters = "Mursaleen".split("");

export default function HeroSection() {
  //
  const words = [
    {
      text: "Front-End",
    },
    {
      text: "Developer",
    },
    {
      text: "Crafting",
    },
    {
      text: "Digital",
    },
    {
      text: "Magic.",
      className: "text-silver-contrast",
    },
  ];

  return (
    <main className="bg-solid-black text-silver-contrast h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center snap-start relative overflow-hidden"
      >
        <CursorDot />
        <div className="relative z-10 text-center">
          {/* Animated Name */}
          <div className="flex justify-center">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="text-6xl bg-gradient-to-r from-silver-contrast via-gray-200 to-silver-contrast bg-clip-text text-transparent md:text-8xl font-bold tracking-tight relative"
                initial={{ opacity: 0, scale: 0, rotate: Math.random() * 360 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  backgroundPosition: ["0% 0%", "100% 0%"],
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150,
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: Math.random() * 10 - 5,
                  y: -5,
                }}
                style={{
                  WebkitTextStroke: "1px rgba(192, 192, 192, 0.8)", // Silver outline
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.div
            className="mt-6 text-xl md:text-2xl font-medium text-silver-contrast/80 max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            <TypewriterEffectSmooth words={words} />
          </motion.div>

          {/* Orbiting Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 100, y: 100 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: [0, 360],
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 1.2,
              rotate: { duration: 1.2 },
            }}
            className="mt-8 px-6 py-3 bg-silver-contrast/10 border border-silver-contrast/30 rounded-full text-silver-contrast font-semibold hover:bg-silver-contrast/20 hover:shadow-[0_0_15px_rgba(192,192,192,0.2)] transition-all duration-300"
          >
            Explore My Work
          </motion.button>
        </div>

        {/* Diagonal Beams */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-silver-contrast/50 to-transparent transform -rotate-45 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-1 h-32 bg-gradient-to-t from-silver-contrast/50 to-transparent transform rotate-45 animate-pulse delay-200" />
          <div className="absolute top-1/3 right-1/3 w-1 h-24 bg-gradient-to-b from-silver-contrast/30 to-transparent transform rotate-30 animate-pulse delay-400" />
        </motion.div>
      </section>
    </main>
  );
}
