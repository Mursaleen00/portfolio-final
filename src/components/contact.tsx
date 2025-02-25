"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Placeholder for now
    // Reset form (optional)
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center snap-start bg-solid-black text-silver-contrast relative overflow-hidden"
    >
      <div className="relative z-10 text-center max-w-lg w-full px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-silver-contrast via-gray-300 to-silver-contrast bg-clip-text text-transparent tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Get in Touch
        </motion.h2>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-solid-black/80 border border-silver-contrast/30 rounded-lg text-silver-contrast placeholder-silver-contrast/50 focus:border-silver-contrast focus:shadow-[0_0_10px_rgba(192,192,192,0.3)] transition-all duration-300 outline-none"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: false }}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-solid-black/80 border border-silver-contrast/30 rounded-lg text-silver-contrast placeholder-silver-contrast/50 focus:border-silver-contrast focus:shadow-[0_0_10px_rgba(192,192,192,0.3)] transition-all duration-300 outline-none"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: false }}
          >
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-solid-black/80 border border-silver-contrast/30 rounded-lg text-silver-contrast placeholder-silver-contrast/50 focus:border-silver-contrast focus:shadow-[0_0_10px_rgba(192,192,192,0.3)] transition-all duration-300 outline-none resize-none"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(192, 192, 192, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              type: "spring",
              stiffness: 120,
            }}
            viewport={{ once: false }}
            className="px-6 py-3 bg-silver-contrast/10 border border-silver-contrast/30 rounded-full text-silver-contrast font-semibold hover:bg-silver-contrast/20 transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Background Accent */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      >
        <div className="absolute top-1/3 left-1/3 w-1 h-24 bg-gradient-to-b from-silver-contrast/40 to-transparent transform -rotate-30 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-24 bg-gradient-to-t from-silver-contrast/40 to-transparent transform rotate-30 animate-pulse delay-200" />
      </motion.div>
    </section>
  );
}
