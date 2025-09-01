import React from "react";
import {
  ChevronDown,
  Home,
  User,
  Code,
  Briefcase,
  MessageCircle,
  Layers,
} from "lucide-react";
import { FloatingButton } from "../components/FloattingButton";
import { Button } from "../components/Button.jsx";
import { headline, subheadline } from "../globals/variables.jsx";
import LightRays from "../components/ui/LightRays.jsx";

const HeroSection = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <section
      id="hero_section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-background"
    >
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-text tracking-tight font-sans">
            Agougil Mohamed
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-primary-text-secondary m-6 sm:mb-8">
            {headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed text-primary-text-secondary px-4 sm:px-0">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button
              variant="hero-primary"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("projects_section").offsetTop,
                  behavior: "smooth",
                })
              }
            >
              Explore My Projects
            </Button>
            <Button
              variant="hero-secondary"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("contact_section").offsetTop,
                  behavior: "smooth",
                })
              }
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <FloatingButton />
    </section>
  );
};

export default HeroSection;
