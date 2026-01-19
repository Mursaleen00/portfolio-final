"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    // Wait for main element to be ready (after WelcomeScreen)
    const setupObserver = () => {
      const scrollContainer = document.querySelector("main");

      if (!scrollContainer) {
        // Retry after a short delay if main isn't ready yet
        setTimeout(setupObserver, 100);
        return;
      }

      // Update active section based on hash on load
      const initialHash = window.location.hash.substring(1) || "home";
      setActiveSection(initialHash);

      // Use Intersection Observer to detect visible sections
      const observerOptions: IntersectionObserverInit = {
        root: scrollContainer, // CRITICAL: Set to scroll container, not null!
        rootMargin: "0px 0px -50% 0px", // Section needs to be in top 50% to be active
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], // Multiple thresholds, lowered for tall sections
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        // Find the most visible section
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Sort by intersection ratio (most visible first)
          visibleEntries.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          );
          const mostVisible = visibleEntries[0];
          const sectionId = mostVisible.target.id;

          setActiveSection(sectionId);
          // Update URL hash
          if (window.location.hash !== `#${sectionId}`) {
            window.history.replaceState(null, "", `#${sectionId}`);
          }
        }
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions,
      );

      // Observe all sections
      navItems.forEach((item) => {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          observer.observe(section);
        }
      });

      // Handle hash changes (when clicking navbar or changing URL)
      const handleHashChange = () => {
        const hash = window.location.hash.substring(1) || "home";
        setActiveSection(hash);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      window.addEventListener("hashchange", handleHashChange);

      // Scroll to section if hash exists on load
      if (initialHash && initialHash !== "home") {
        setTimeout(() => {
          const element = document.getElementById(initialHash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }

      // Set cleanup function
      cleanup = () => {
        observer.disconnect();
        window.removeEventListener("hashchange", handleHashChange);
      };
    };

    // Start setup
    setupObserver();

    return () => cleanup?.();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      // Smooth scroll to element
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update hash
      window.history.pushState(null, "", href);
      setActiveSection(targetId);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-6">
      <motion.nav
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: [1, 1.03, 1] }}
        transition={{ duration: 0.7, ease: "easeOut", times: [0, 0.5, 1] }}
        whileHover={{ scale: 1.02 }}
        className="sm:px-8 px-4 py-4 backdrop-blur-lg border border-silver-contrast/50 rounded-full transition-all duration-300"
      >
        <ul className="flex space-x-4 sm:space-x-6">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);

            return (
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
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-semibold text-xs sm:text-lg transition-colors duration-300 ${
                    isActive
                      ? "text-silver-contrast"
                      : "text-silver-contrast/60 hover:text-silver-contrast/90"
                  }`}
                >
                  {item.name}
                </a>
                {/* Active indicator underline */}
                <motion.span
                  className="absolute left-0 bottom-[-4px] h-[2px] bg-silver-contrast"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                {/* Hover underline - only show when not active */}
                {!isActive && (
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-silver-contrast/50 group-hover:w-full transition-all duration-300" />
                )}
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    </div>
  );
}
