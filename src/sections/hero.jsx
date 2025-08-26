import React from 'react';
import { ChevronDown, Home, User, Code, Briefcase, MessageCircle, Layers } from "lucide-react";
import { FloatingButton } from '../components/FloattingButton';
import { Button } from '../components/Button.jsx';
import { headline, subheadline } from '../globals/variables.jsx';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-background">
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
            <Button variant="hero-primary">
              Explore My Projects
            </Button>
            <Button variant="hero-secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <FloatingButton/>
    </section>
  );
};

export default HeroSection;