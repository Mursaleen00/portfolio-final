"use client";

import { motion } from "framer-motion";
import Sansa from "@/../public/projects/sasna.png";
import Haiger from "@/../public/projects/haiger.png";
import BlogApp from "@/../public/projects/blog app.png";
import Coffee from "@/../public/projects/coffee.png";
import DProduction from "@/../public/projects/d production.png";
import Food from "@/../public/projects/food.png";
import Gaming from "@/../public/projects/gaming.png";
import RealState from "@/../public/projects/real state.png";
import RentACar from "@/../public/projects/rent a car.png";

// Your real projects
const projects = [
  {
    title: "Sansa",
    description:
      "A stylish shopping web app with seamless navigation and dynamic product displays.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://sansa-shopping-app.vercel.app/",
    image: Sansa.src,
  },
  {
    title: "Haiger Engineering",
    description:
      "A professional company profile showcasing engineering expertise with a clean UI.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://haiger.vercel.app/",
    image: Haiger.src,
  },
  {
    title: "Food Delivery",
    description:
      "A company profile for a food delivery service with a user-friendly design.",
    tech: ["HTML", "CSS", "GitHub Pages"],
    link: "https://mursaleen00.github.io/food-delivery/",
    image: Food.src,
  },
  {
    title: "Coffee Shop",
    description: "A cozy landing page for a coffee shop with warm aesthetics.",
    tech: ["HTML", "Tailwind CSS", "Vercel"],
    link: "https://coffee-shop-seven-opal.vercel.app/",
    image: Coffee.src,
  },
  {
    title: "Rent A Car",
    description:
      "A car rental platform with a minimalist design and smooth booking flow.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://cars-bay.vercel.app/",
    image: RentACar.src,
  },
  {
    title: "Blog App",
    description:
      "A full-stack blog platform with real-time content updates and user authentication.",
    tech: ["React", "Node.js", "MongoDB", "Vercel"],
    link: "https://full-stack-blog-app-lovat-delta.vercel.app/",
    image: BlogApp.src,
  },
  {
    title: "Real State",
    description:
      "A real estate site with property listings and interactive search features.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://real-estate-business.vercel.app/",
    image: RealState.src,
  },
  {
    title: "D Production",
    description:
      "A bold company profile for a production house with creative visuals.",
    tech: ["Next.js", "CSS", "Vercel"],
    link: "https://dproduction.vercel.app/",
    image: DProduction.src,
  },
  // {
  //   title: "Lilipad",
  //   description: "A test project exploring creative layouts and animations.",
  //   tech: ["React", "Tailwind CSS", "Vercel"],
  //   link: "https://test-project-mu-orpin.vercel.app/",
  //   image: .src/ },
  {
    title: "Gamin App",
    description:
      "A gaming-themed landing page with bold visuals and smooth transitions.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://gaming-app-navy.vercel.app/",
    image: Gaming.src,
  },
];

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
              viewport={{ once: false }}
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
