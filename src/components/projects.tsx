"use client";

import { projects } from "@/constant/projects";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-start snap-start bg-solid-black text-silver-contrast relative overflow-hidden py-16"
    >
      <div className="relative z-10 text-center max-w-7xl w-full px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-silver-contrast via-gray-300 to-silver-contrast bg-clip-text text-transparent tracking-tight mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          My Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-solid-black/95 border border-silver-contrast/30 rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(192,192,192,0.4)] transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                viewport={{ once: false }}
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <motion.h3
                  className="text-2xl font-semibold bg-gradient-to-r from-silver-contrast to-gray-200 bg-clip-text text-transparent group-hover:text-silver-contrast transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: false }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="mt-3 text-silver-contrast/80 text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: false }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="mt-4 flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: false }}
                >
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-silver-contrast/15 border border-silver-contrast/25 rounded-full text-sm text-silver-contrast group-hover:bg-silver-contrast/25 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Background Beams */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      >
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-silver-contrast/40 to-transparent transform -rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-32 bg-triangle-to-t from-silver-contrast/40 to-transparent transform rotate-45 animate-pulse delay-200" />
        <div className="absolute top-1/3 right-1/3 w-1 h-24 bg-gradient-to-b from-silver-contrast/30 to-transparent transform rotate-30 animate-pulse delay-400" />
      </motion.div>
    </section>
  );
}
