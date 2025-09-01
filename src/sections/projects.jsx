import React, { useState } from "react";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { ProjectsSelector } from "../components/ProjectsSelector";
import { projectSections } from "../data/projects.jsx";
import { Code } from "lucide-react";
import { SectionHeader } from "../components/sectionHeader";
import ProjectsSwiper from "../components/ProjectSwiper";
import LightBox from "../components/ui/LightBox.jsx";

const demo_project = {
  id: 1,
  title: "Multi-Tier Web Application on AWS",
  category: "Full Stack Cloud Architecture",
  duration: "3 months",
  team: "Solo Project",
  technologies: [
    "AWS EC2",
    "RDS",
    "S3",
    "CloudFront",
    "Route 53",
    "Auto Scaling",
    "Load Balancer",
  ],
  overview:
    "Designed and deployed a scalable, highly available web application using AWS services with automated CI/CD pipeline and infrastructure as code.",
  features: [
    "Auto-scaling EC2 instances across multiple AZs",
    "RDS MySQL with automated backups and read replicas",
    "CloudFront CDN for global content delivery",
    "S3 for static asset storage with versioning",
    "Application Load Balancer with health checks",
    "Route 53 for DNS management and failover",
  ],
  challenges:
    "Implementing zero-downtime deployments and optimizing costs while maintaining high availability.",
  results:
    "Achieved 99.9% uptime, reduced latency by 40%, and cut infrastructure costs by 25% through intelligent resource scaling.",
  githubUrl: "https://github.com/yourusername/aws-web-app",
  liveUrl: "https://your-project.com",
};


const ProjectsSection = () => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(demo_project);
  const [activeSection, setActiveSection] = useState("cloud-architecting");

  const isMobile = window.innerWidth <= 768;

  const currentSection = projectSections.find(
    (section) => section.id === activeSection
  );
  const currentProjects = currentSection?.projects || [];

  const openProject = (project) => {
    console.log("Open project:", project.title);
    setIsProjectOpen(true);
  }
  return (
    <section
      id="projects_section"
      className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-primary-background overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          header="Featured Projects"
          subheader="Explore my latest work across different domains of software engineering and system design"
        />

        {/* Projects Selector */}
        <ProjectsSelector
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Section Description */}
        {!isMobile && (
          <div className="text-center mb-8 sm:mb-12 transition-all duration-500 px-4 sm:px-0">
            <div className="inline-block p-4 bg-secondary-background/5 rounded-2xl border border-secondary-border/20">
              <p className="text-primary-text-secondary text-base sm:text-lg">
                {currentSection?.description}
              </p>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {isMobile ? (
          <ProjectsSwiper projects={currentProjects} onProjectOpen={openProject} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProjectCard {...project} onClick={() => openProject(project)} />
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
          <a
            href="https://github.com/m0hamed541"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-primary-accent/20 text-primary-text rounded-lg hover:bg-primary-accent/30 transition-all duration-300 hover:scale-105 border border-primary-accent/30"
          >
            <Code className="w-5 h-5" />
            <span className="hidden sm:inline">
              View All Projects on GitHub
            </span>
            <span className="sm:hidden">View on GitHub</span>
          </a>
        </div>
      </div>
      <LightBox isOpen={isProjectOpen} setIsOpen={setIsProjectOpen} project={selectedProject} />
    </section>
  );
};

export default ProjectsSection;
