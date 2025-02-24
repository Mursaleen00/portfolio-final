"use client";

import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-6">
      <motion.nav
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: [1, 1.03, 1] }}
        transition={{ duration: 0.7, ease: "easeOut", times: [0, 0.5, 1] }}
        whileHover={{ scale: 1.02 }}
        className="px-8 py-4 backdrop-blur-lg border border-silver-contrast/50 rounded-full shadow-2xl hover:shadow-lg hover:shadow-silver-contrast/10 transition-all duration-300"
      >
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * index,
                duration: 0.5,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{ scale: 1.1, color: "#D9D9D9" }}
              className="relative text-silver-contrast font-semibold text-lg hover:text-gray-300 transition-colors duration-200 group"
            >
              <a href={item.href}>{item.name}</a>
              <span className="absolute left-0 bottom-[-0px] w-0 h-[2px] bg-silver-contrast group-hover:w-full transition-all duration-300" />
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}
