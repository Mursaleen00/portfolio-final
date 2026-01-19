"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Profile Views", value: "4K+" },
    { label: "Pull Requests", value: "105" },
    { label: "Technologies", value: "15+" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-solid-black text-silver-contrast relative overflow-hidden py-20"
    >
      <div className="relative z-10 max-w-6xl w-full px-6">
        {/* Heading with Decorative Line */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-silver-contrast via-gray-300 to-silver-contrast bg-clip-text text-transparent tracking-tight mb-4">
              About Me
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-silver-contrast to-transparent rounded-full" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              {/* Accent Border */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-silver-contrast/60 via-silver-contrast/30 to-transparent rounded-full" />

              <p className="text-lg text-silver-contrast/90 leading-relaxed">
                Hi, I'm{" "}
                <span className="text-silver-contrast font-semibold">
                  Mursaleen
                </span>{" "}
                – a passionate{" "}
                <span className="text-silver-contrast font-semibold">
                  Front-End Developer
                </span>{" "}
                with a love for creating beautiful, functional, and user-centric
                digital experiences.
              </p>

              <p className="text-base text-silver-contrast/75 leading-relaxed mt-4">
                I specialize in building modern web applications using
                cutting-edge technologies like{" "}
                <span className="text-silver-contrast/90 font-medium">
                  Next.js
                </span>
                ,{" "}
                <span className="text-silver-contrast/90 font-medium">
                  React
                </span>
                ,{" "}
                <span className="text-silver-contrast/90 font-medium">
                  TypeScript
                </span>
                , and{" "}
                <span className="text-silver-contrast/90 font-medium">
                  Tailwind CSS
                </span>
                . My approach combines clean code, innovative design, and
                attention to detail to deliver exceptional results.
              </p>

              <p className="text-base text-silver-contrast/75 leading-relaxed mt-4">
                Whether it's crafting pixel-perfect interfaces, optimizing
                performance, or solving complex problems, I'm driven by the
                challenge of turning ideas into reality. I believe in continuous
                learning and staying ahead of industry trends to deliver
                solutions that make a difference.
              </p>
            </div>

            {/* Call to Action */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-silver-contrast/10 border border-silver-contrast/30 rounded-lg text-silver-contrast hover:bg-silver-contrast/20 hover:border-silver-contrast/50 transition-all duration-300 text-sm font-medium"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-silver-contrast/10 to-silver-contrast/5 border border-silver-contrast/20 rounded-lg text-silver-contrast/80 hover:text-silver-contrast hover:border-silver-contrast/40 transition-all duration-300 text-sm font-medium"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-solid-black/40 backdrop-blur-md border border-silver-contrast/10 rounded-xl p-6 hover:border-silver-contrast/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-silver-contrast/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-silver-contrast to-gray-300 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-silver-contrast/60 group-hover:text-silver-contrast/80 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-silver-contrast/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-xl rounded-bl-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-silver-contrast/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-silver-contrast/5 rounded-full blur-3xl animate-pulse delay-700" />

        {/* Accent Lines */}
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-silver-contrast/30 to-transparent transform -rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-32 bg-gradient-to-t from-silver-contrast/30 to-transparent transform rotate-45 animate-pulse delay-200" />
        <div className="absolute top-1/3 right-1/3 w-1 h-24 bg-gradient-to-b from-silver-contrast/20 to-transparent transform rotate-30 animate-pulse delay-400" />
      </motion.div>
    </section>
  );
}
