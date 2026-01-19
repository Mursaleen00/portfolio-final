"use client";

import { projects } from "@/constant/projects";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-start bg-solid-black text-silver-contrast relative overflow-hidden py-16 scroll-mt-20"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
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

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="group relative bg-solid-black/40 backdrop-blur-md border border-silver-contrast/10 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:border-silver-contrast/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.8)] transition-all duration-500 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
    >
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-silver-contrast/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image Container with Shine Effect */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-56 overflow-hidden bg-solid-black/60 block"
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
          viewport={{ once: false }}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-solid-black/80 via-solid-black/20 to-transparent" />

        {/* Shine/Reflection effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-silver-contrast/15 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
        </div>
      </a>

      {/* Content */}
      <div className="relative p-6 flex flex-col flex-grow">
        {/* Title */}
        <motion.h3
          className="text-xl font-bold text-silver-contrast mb-2.5 group-hover:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
          viewport={{ once: false }}
        >
          {project.title}
        </motion.h3>

        {/* Description with Read More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
          viewport={{ once: false }}
          className="mb-4 flex-grow"
        >
          <p
            className={`text-silver-contrast/70 text-sm leading-relaxed ${
              !isExpanded ? "line-clamp-2" : ""
            }`}
          >
            {project.description}
          </p>
          {project.description.length > 100 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-silver-contrast/80 hover:text-silver-contrast text-xs mt-1 font-medium transition-colors duration-200"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="flex flex-wrap gap-2 pb-4 border-b border-silver-contrast/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
          viewport={{ once: false }}
        >
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-silver-contrast/5 border border-silver-contrast/20 rounded-md text-xs text-silver-contrast/80 group-hover:bg-silver-contrast/10 group-hover:border-silver-contrast/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* View Project Link */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-silver-contrast/60 group-hover:text-silver-contrast transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
          viewport={{ once: false }}
        >
          <span className="text-sm font-medium">View Project</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}
