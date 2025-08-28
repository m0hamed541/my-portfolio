import { Github, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <section className="bg-primary-background text-primary-text py-8 sm:py-12" id="footer_section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-medium mb-2 text-primary-text">Agougil Mohamed</h3>
            <p className="text-sm sm:text-base text-primary-text-secondary">
              Smart Systems Engineer & Cloud Architect
            </p>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="https://github.com/m0hamed541"
              className="text-primary-text-secondary hover:text-primary-text transition-colors duration-300"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/agougil-mohamed" 
              className="text-primary-text-secondary hover:text-primary-text transition-colors duration-300"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:agougil.mohamed@gmail.com"
              className="text-primary-text-secondary hover:text-primary-text transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-secondary-border/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-primary-text-secondary/60 text-xs sm:text-sm px-4 sm:px-0">
            © 2025 AGOUGIL Mohamed. Built with React, TypeScript, and deployed on the AWS cloud.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;