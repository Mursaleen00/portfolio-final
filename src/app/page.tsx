"use client";
import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects";
import SkillsSection from "@/components/SkillsSection";

import { useState } from "react";
import WelcomeScreen from "../components/WelcomeScreen";

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleWelcomeComplete = () => {
    setShowPortfolio(true);
  };

  return (
    <>
      {!showPortfolio && <WelcomeScreen onComplete={handleWelcomeComplete} />}

      {showPortfolio && (
        <main className="overflow-y-scroll h-screen scroll-smooth">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  );
}
