import React from 'react';
import { featureIcons } from '../data/projects';
import { Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  accentColor: string;
  link?: string;
}

export function ProjectCard({ title, description, features, icon, accentColor, link }: ProjectCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-primary-background via-primary-background to-secondary-background/5 rounded-xl p-4 sm:p-6 border border-secondary-border/20 hover:border-secondary-border/40 transition-all duration-300 hover:scale-[1.02] group hover-lift">
      {/* Header with Icon and Title */}
      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="relative">
          <div className={`text-2xl sm:text-3xl ${accentColor}`}>
            {icon}
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-success rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-primary-text mb-2">{title}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-primary-text-secondary mb-4 sm:mb-6 leading-relaxed">{description}</p>

      {/* Features Carousel */}
      <div className="mb-4 sm:mb-6 overflow-clip pt-2 relative">
        <div className="flex space-x-4 sm:space-x-6 animate-scroll">
          {/* First set of features */}
          {features.map((feature, index) => (
            <div key={`first-${index}`} className="flex flex-col items-center gap-2 sm:gap-3 min-w-[80px] sm:min-w-[90px] flex-shrink-0">
              <div className={`p-3 sm:p-4 rounded-xl bg-secondary-background/10 border border-secondary-border/20 ${accentColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                {featureIcons[feature] || <Code className="w-5 h-5 sm:w-6 sm:h-6" />}
              </div>
              <span className="text-xs text-primary-text-secondary text-center leading-tight font-medium">{feature}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {features.map((feature, index) => (
            <div key={`second-${index}`} className="flex flex-col items-center gap-2 sm:gap-3 min-w-[80px] sm:min-w-[90px] flex-shrink-0">
              <div className={`p-3 sm:p-4 rounded-xl bg-secondary-background/10 border border-secondary-border/20 ${accentColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                {featureIcons[feature] || <Code className="w-5 h-5 sm:w-6 sm:h-6" />}
              </div>
              <span className="text-xs text-primary-text-secondary text-center leading-tight font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>


      {/* Hover Effect Overlay */}
      {/* 
      {link && (
        <div className="absolute inset-0 bg-gradient-to-t from-primary-background/80 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-3 sm:pb-4">
          <a 
            href={link}
            className="px-3 sm:px-4 py-2 bg-primary-accent/20 text-primary-text rounded-lg hover:bg-primary-accent/30 transition-colors duration-200 border border-primary-accent/30 text-sm sm:text-base"
          >
            View Project
          </a>
        </div>
      )}
         */}
    </div>
  );
}
