import React from "react";
import { projectSections } from '../data/projects';

interface ProjectsSelectorProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function ProjectsSelector({
  activeSection,
  onSectionChange,
}: ProjectsSelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12 sm:mb-16 bg-secondary-background/10 backdrop-blur-sm rounded-2xl p-2 border border-secondary-border/20 shadow-lg">
      <div className="flex items-center justify-between">
        {projectSections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`flex-1 flex flex-col items-center py-3 sm:py-4 px-2 sm:px-3 rounded-xl transition-all duration-500 relative group mx-1 ${
              activeSection === section.id
                ? "text-primary-accent bg-primary-accent/10 border border-primary-accent/30 shadow-lg shadow-primary-accent/20"
                : "text-primary-text-secondary hover:text-primary-text hover:bg-secondary-background/5 hover:shadow-md"
            }`}
          >
            {/* Active Indicator */}
            {activeSection === section.id && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-gradient-to-r from-primary-accent to-primary-accent-light rounded-full shadow-lg"></div>
            )}

            {/* Icon */}
            <div
              className={`mb-1 sm:mb-2 transition-all duration-500 ${
                activeSection === section.id
                  ? "text-primary-accent scale-110 drop-shadow-lg"
                  : "text-primary-text-secondary group-hover:scale-105 group-hover:drop-shadow-md"
              }`}
            >
              {section.icon}
            </div>

            {/* Label */}
            <span
              className={`text-xs sm:text-sm font-semibold transition-all duration-300 text-center ${
                activeSection === section.id
                  ? "text-primary-accent"
                  : "text-primary-text-secondary group-hover:text-primary-text"
              }`}
            >
              {section.label}
            </span>

            {/* Hover Glow Effect */}
            <div
              className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                activeSection === section.id
                  ? "ring-2 ring-primary-accent/30"
                  : "group-hover:ring-1 group-hover:ring-secondary-border/20"
              }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}
