import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary-background overflow-hidden py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-text mb-4 sm:mb-6 tracking-tight text-left">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-primary-text-secondary max-w-3xl leading-relaxed text-left">
            Building scalable, reliable, and containerized solutions that power the future of cloud infrastructure
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-slide-in">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-primary-text-secondary leading-relaxed">
                I'm a passionate Smart Systems Engineer with expertise in modern cloud technologies and system design. 
                I love creating robust, scalable solutions that solve complex infrastructure challenges.
              </p>
              <p className="text-base sm:text-lg text-primary-text-secondary leading-relaxed">
                With experience in AWS, Docker, Kubernetes, and modern development practices, I bring architectural 
                visions to life through clean code and reliable system design.
              </p>
              <p className="text-base sm:text-lg text-primary-text-secondary leading-relaxed">
                My passion lies in designing systems that are not just functional, but resilient, maintainable, 
                and ready for the challenges of tomorrow's cloud landscape.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-secondary-background/10 backdrop-blur-sm border border-secondary-border/20 p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary-text mb-4 sm:mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-primary-text-secondary">Cloud Architecture & AWS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-primary-text-secondary">Containerization & Orchestration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-primary-text-secondary">System Design & Scalability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-primary-text-secondary">DevOps & CI/CD</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-primary-text-secondary">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                  <span className="text-sm sm:text-base text-primary-text-secondary">Problem Solving & Innovation</span>
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