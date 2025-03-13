"use client";

import { categorizedData } from "@/constant/skills";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center snap-start bg-solid-black text-silver-contrast relative overflow-hidden py-12"
    >
      <div className="relative z-10 text-center max-w-5xl w-full px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-silver-contrast via-gray-300 to-silver-contrast bg-clip-text text-transparent tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="mt-12 mb-4 text-2xl font-semibold text-silver-contrast/80">
            Frontend
          </h3>
          <Marquee gradient gradientWidth={200} gradientColor="#1A1A1A">
            <div className="flex gap-10 items-center pl-6">
              {categorizedData.frontend.map((item, index) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={index}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 grayscale hover:grayscale-0 transition-all duration-300"
                    width={48}
                    height={48}
                  />
                  <h3 className="font-medium text-silver-contrast text-sm text-center mt-2">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </Marquee>
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="mt-12 mb-4 text-2xl font-semibold text-silver-contrast/80">
            Backend
          </h3>
          <Marquee
            gradient
            gradientWidth={200}
            gradientColor="#1A1A1A"
            direction="right"
            autoFill
          >
            <div className="flex gap-10 items-center pl-6">
              {categorizedData.backend.map((item, index) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={index}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 grayscale hover:grayscale-0 transition-all duration-300"
                    width={48}
                    height={48}
                  />
                  <h3 className="font-medium text-silver-contrast text-sm text-center mt-2">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </Marquee>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="mt-12 mb-4 text-2xl font-semibold text-silver-contrast/80">
            Tools
          </h3>
          <Marquee gradient gradientWidth={200} gradientColor="#1A1A1A">
            <div className="flex gap-10 items-center pl-6">
              {categorizedData.tools.map((item, index) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={index}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 grayscale hover:grayscale-0 transition-all duration-300"
                    width={48}
                    height={48}
                  />
                  <h3 className="font-medium text-silver-contrast text-sm text-center mt-2">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </Marquee>
        </motion.div>
      </div>

      {/* Background Accent */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-silver-contrast/40 to-transparent transform -rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-32 bg-gradient-to-t from-silver-contrast/40 to-transparent transform rotate-45 animate-pulse delay-200" />
        <div className="absolute top-1/3 right-1/3 w-1 h-24 bg-gradient-to-b from-silver-contrast/30 to-transparent transform rotate-30 animate-pulse delay-400" />
      </motion.div>
    </section>
  );
}
