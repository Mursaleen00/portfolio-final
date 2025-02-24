"use client";

import HeroSection from "@/components/hero-section";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      {/* Placeholder Sections */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center snap-start"
      >
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="mt-4 text-lg">Coming soon...</p>
      </section>
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center snap-start"
      >
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-lg">Front-end enthusiast...</p>
      </section>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center snap-start"
      >
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="mt-4 text-lg">Get in touch!</p>
      </section>
    </Fragment>
  );
}
