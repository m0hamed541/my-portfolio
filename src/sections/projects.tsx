import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectsSelector } from '../components/ProjectsSelector';
import { projectSections } from '../data/projects';
import { Code } from 'lucide-react';
import { SectionHeader } from '../components/sectionHeader';

const ProjectsSection = () => {
  const [activeSection, setActiveSection] = useState('system-design');

  const currentSection = projectSections.find(section => section.id === activeSection);
  const currentProjects = currentSection?.projects || [];

  return (
    <section id="projects_section" className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-primary-background overflow-hidden">

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader header="Featured Projects" subheader="Explore my latest work across different domains of software engineering and system design" />

        {/* Projects Selector */}
        <ProjectsSelector 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Section Description */}
        <div className="text-center mb-8 sm:mb-12 transition-all duration-500 px-4 sm:px-0">
          <div className="inline-block p-4 bg-secondary-background/5 rounded-2xl border border-secondary-border/20">
            <p className="text-primary-text-secondary text-base sm:text-lg">
              {currentSection?.description}
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {currentProjects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
          <p className="text-primary-text-secondary mb-4 sm:mb-6">
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/m0hamed541"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-primary-accent/20 text-primary-text rounded-lg hover:bg-primary-accent/30 transition-all duration-300 hover:scale-105 border border-primary-accent/30"
          >
            <Code className="w-5 h-5" />
            <span className="hidden sm:inline">View All Projects on GitHub</span>
            <span className="sm:hidden">View on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;