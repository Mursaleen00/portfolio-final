"use client";

import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const letters = "Mursaleen".split("");

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center snap-start relative overflow-hidden bg-solid-black text-silver-contrast"
    >
      <div className="relative z-10 text-center">
        <div className="flex justify-center">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-silver-contrast via-gray-200 to-silver-contrast bg-clip-text text-transparent tracking-tight drop-shadow-[0_2px_4px_rgba(192,192,192,0.5)] [text-shadow:0_0_10px_rgba(192,192,192,0.3)] relative"
              initial={{ opacity: 0, scale: 0, rotate: index * 20 }}
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
                rotate: index % 2 === 0 ? 5 : -5,
                y: -5,
              }}
              style={{
                WebkitTextStroke: "1px rgba(192, 192, 192, 0.8)",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.div
          className="mt-6 text-xl md:text-2xl font-medium text-silver-contrast/80 max-w-md mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <TypewriterEffectSmooth
            words={[
              { text: "Front-End" },
              { text: "Developer" },
              { text: "Crafting" },
              { text: "Digital" },
              { text: "Magic" },
            ]}
          />
        </motion.div>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 15px rgba(192, 192, 192, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            type: "spring",
            stiffness: 120,
          }}
          className="mt-8 px-6 py-3 bg-silver-contrast/10 border border-silver-contrast/30 rounded-full text-silver-contrast font-semibold hover:bg-silver-contrast/20 transition-all duration-300"
        >
          Explore My Work
        </motion.button>
      </div>
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
  );
}
