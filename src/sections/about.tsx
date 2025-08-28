import React from "react";
import { SectionHeader } from "../components/sectionHeader";

const AboutSection = () => {
  return (
    <section id="about_section" className="relative min-h-screen flex items-center justify-center bg-primary-background overflow-hidden py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader header="About Me" subheader="Building scalable, reliable, and containerized solutions that power the future of cloud infrastructure" />

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-slide-in">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-primary-text-secondary leading-relaxed">
                Final-year Smart Systems Engineering student who loves turning
                ideas into real solutions.
              </p>
              <p className="text-base sm:text-lg text-primary-text-secondary leading-relaxed">
                I enjoy architecting and designing IT systems that solve
                real-world problems by translating human needs into concrete
                plans for building well-designed systems that can adapt and
                handle increasing loads and user traffic.My approach combines
                critical analysis with creative thinking. Currently seeking
                opportunities to apply my engineering skills where technology
                meets meaningful impact.
              </p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-secondary-background/10 backdrop-blur-sm border border-secondary-border/20 p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary-text mb-4 sm:mb-6">
                Skills & Expertise
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-primary-text-secondary">
                    Cloud Architecture & AWS
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-primary-text-secondary">
                    Containerization & Orchestration
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-primary-text-secondary">
                    System Design & Scalability
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-primary-text-secondary">
                    DevOps & CI/CD
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-primary-text-secondary">
                    Full-Stack Development
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-primary-text-secondary">
                    Problem Solving & Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
