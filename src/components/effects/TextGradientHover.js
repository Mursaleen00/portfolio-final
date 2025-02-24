"use client";

import { motion } from "framer-motion";

export default function TextGradientHover({ text }) {
  return (
    <motion.div
      className="relative inline-block"
      whileHover="hover"
      initial="initial"
    >
      <motion.span
        className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-solid-black [-webkit-text-stroke:2px_#C0C0C0] tracking-tight"
        variants={{
          initial: { backgroundImage: "none" },
          hover: {
            backgroundImage:
              "linear-gradient(90deg, #C0C0C0 0%, #A0A0A0 50%, #C0C0C0 100%)",
            backgroundSize: "200% 100%",
            transition: {
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
          },
        }}
      >
        {text}
      </motion.span>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      />
    </motion.div>
  );
}
