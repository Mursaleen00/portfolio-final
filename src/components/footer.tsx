"use client";

import { motion } from "framer-motion";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <section
      id="footer"
      className="min-h-screen flex flex-col items-center justify-center snap-start bg-solid-black text-silver-contrast relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center">
        {/* Gradient Line */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-silver-contrast/50 via-silver-contrast to-silver-contrast/50 rounded-full mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        />

        {/* Name and Copyright */}
        <motion.p
          className="text-lg font-medium text-silver-contrast/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          © {new Date().getFullYear()} Mursaleen. All rights reserved.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="mt-4 flex space-x-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <motion.a
            href="https://github.com/mursaleen00" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#C0C0C0" }}
            whileTap={{ scale: 0.9 }}
            className="text-silver-contrast/80 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#C0C0C0" }}
            whileTap={{ scale: 0.9 }}
            className="text-silver-contrast/80 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </motion.div>

        {/* Back to Top */}
        <motion.a
          href="#home"
          className="mt-6 flex items-center space-x-2 text-silver-contrast/80 hover:text-silver-contrast transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
        >
          <FaArrowUp size={16} />
          <span>Back to Top</span>
        </motion.a>
      </div>

      {/* Subtle Background Accent */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-silver-contrast/10 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      />
    </section>
  );
}
