import React, { useState } from "react";
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

import "../../styles/lightbox.css";

const LightBox = ({ isOpen, setIsOpen, project }) => {
  const isMobile = window.innerWidth <= 768;
  const [selectedProject, setSelectedProject] = useState(0);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleLightboxClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id="lightbox_container"
      className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-50 p-2 sm:p-4"
      style={{
        display: isOpen ? "flex" : "none",
      }}
      onClick={handleBackdropClick}
    >
      <div
        id="lightbox"
        className="rounded-lg shadow-2xl w-full max-w-7xl h-full max-h-[95vh] sm:max-h-[90vh] flex flex-col lg:flex-row overflow-hidden"
        onClick={handleLightboxClick}
      >
        {isMobile && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 lg:hidden z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 flex-column items-center content-center"
            aria-label="Close lightbox"
          >
            <X size={20} className="text-gray-600" />
          </button>
        )}
        {/* Left Section - Project Details */}
        <div
          className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 overflow-y-auto"
          id="project_details"
        >
          <div className="space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="pt-8 lg:pt-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-primary font-medium">
                {project.category}
              </p>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <Calendar
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] flex-shrink-0"
                />
                <span>Duration: {project.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <Users
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] flex-shrink-0"
                />
                <span>Team: {project.team}</span>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3 flex items-center gap-2">
                <Server
                  size={18}
                  className="sm:w-[20px] sm:h-[20px] flex-shrink-0"
                />
                Project Overview
              </h3>
              <p className="leading-relaxed text-sm sm:text-base">
                {project.overview}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3 flex items-center gap-2">
                <Zap
                  size={18}
                  className="sm:w-[20px] sm:h-[20px] flex-shrink-0"
                />
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary text-sm sm:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3 flex items-center gap-2">
                <Shield
                  size={18}
                  className="sm:w-[20px] sm:h-[20px] flex-shrink-0"
                />
                Technical Challenges
              </h3>
              <p className="leading-relaxed text-sm sm:text-base">
                {project.challenges}
              </p>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3 flex items-center gap-2">
                <Database
                  size={18}
                  className="sm:w-[20px] sm:h-[20px] flex-shrink-0"
                />
                Results & Impact
              </h3>
              <p className="leading-relaxed text-sm sm:text-base">
                {project.results}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base min-h-[44px] touch-manipulation"
              >
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                View Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base min-h-[44px] touch-manipulation"
              >
                <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - System Architecture Diagram */}
        <div
          className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col border-t lg:border-t-0 lg:border-l"
          id="sys_architecture"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
            System Architecture
          </h2>

          {/* Architecture Diagram */}
          <div className="flex-1 min-h-[200px] sm:min-h-[300px] rounded-lg border-2 border-gray-200 p-3 sm:p-4 overflow-auto">
            {/* Placeholder for architecture diagram */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <Globe size={48} className="mx-auto mb-2 opacity-50" />
                <p className="text-sm">Architecture diagram goes here</p>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mt-4 sm:mt-6">
            <h3 className="text-base sm:text-lg font-semibold text-secondary mb-2 sm:mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
