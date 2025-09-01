import React from 'react';
import { Code } from 'lucide-react';


export function ProjectCard({ title, description, features, accentColor, link, onClick}) {
  return (
    <div className="relative bg-gradient-to-br from-primary-background
    via-primary-background to-secondary-background/5 rounded-xl p-4 sm:p-6
    border border-secondary-border/20 hover:border-secondary-border/40
    transition-all duration-300 hover:scale-[1.02] group hover-lift"
    onClick={onClick}
    >
      {/* Header with Icon and Title */}
      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-primary-text mb-2">{title}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-primary-text-secondary mb-4 sm:mb-6 leading-relaxed">{description}</p>


    </div>
  );
}
