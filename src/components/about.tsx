"use client";

import { motion } from "framer-motion";

// Sample skills (replace with yours)
const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Git",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center snap-start bg-solid-black text-silver-contrast relative overflow-hidden py-12"
    >
      <div className="relative z-10 text-center max-w-4xl w-full px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-silver-contrast via-gray-300 to-silver-contrast bg-clip-text text-transparent tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          About Me
        </motion.h2>

        {/* Bio */}
        <motion.p
          className="mt-6 text-lg md:text-xl font-medium text-silver-contrast/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          I’m Mursaleen, a passionate front-end developer who loves crafting
          modern, intuitive, and visually stunning web experiences. With a keen
          eye for design and a knack for code, I bring ideas to life using
          cutting-edge tools and technologies.
        </motion.p>

        {/* Skills */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-silver-contrast/10 border border-silver-contrast/20 rounded-full text-silver-contrast font-semibold text-sm hover:bg-silver-contrast/20 hover:shadow-[0_0_10px_rgba(192,192,192,0.3)] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: false }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Background Accent */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      >
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-silver-contrast/40 to-transparent transform -rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-32 bg-gradient-to-t from-silver-contrast/40 to-transparent transform rotate-45 animate-pulse delay-200" />
        <div className="absolute top-1/3 right-1/3 w-1 h-24 bg-gradient-to-b from-silver-contrast/30 to-transparent transform rotate-30 animate-pulse delay-400" />
      </motion.div>
    </section>
  );
}
