import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../components/Button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, just reset the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary-background overflow-hidden py-12 sm:py-16 md:py-20" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-text mb-4 sm:mb-6 tracking-tight text-left">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-primary-text-secondary max-w-3xl leading-relaxed text-left">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-slide-in">
            <div className="bg-secondary-background/10 backdrop-blur-sm border border-secondary-border/20 p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary-text mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-text-secondary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-primary-background border border-secondary-border/30 rounded-lg text-primary-text placeholder-primary-text-secondary/50 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-text-secondary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-primary-background border border-secondary-border/30 rounded-lg text-primary-text placeholder-primary-text-secondary/50 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-text-secondary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary-background border border-secondary-border/30 rounded-lg text-primary-text placeholder-primary-text-secondary/50 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-primary-background border border-secondary-border/30 rounded-lg text-primary-text placeholder-primary-text-secondary/50 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>
                <Button onClick={() => {}} className='w-full flex-row items-center justify-center gap-2'> <Send className="w-4 h-4" />Send Message</Button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-primary-text mb-6">Let's Connect</h3>
                <p className="text-base sm:text-lg text-primary-text-secondary leading-relaxed mb-6">
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-accent/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-text mb-1">Email</h4>
                    <a 
                      href="mailto:agougil.mohamed@gmail.com" 
                      className="text-primary-accent hover:text-primary-accent-light transition-colors duration-300"
                    >
                      agougil.mohamed@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-text mb-1">Location</h4>
                    <p className="text-primary-text-secondary">Morocco</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-text mb-1">Availability</h4>
                    <p className="text-primary-text-secondary">Open to new opportunities</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-primary-text mb-4">Follow Me</h4>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://github.com/m0hamed541"
                    className="w-10 h-10 bg-secondary-background/20 hover:bg-primary-accent/20 rounded-lg flex items-center justify-center text-primary-text-secondary hover:text-primary-accent transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/agougil-mohamed"
                    className="w-10 h-10 bg-secondary-background/20 hover:bg-primary-accent/20 rounded-lg flex items-center justify-center text-primary-text-secondary hover:text-primary-accent transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com/mohamed_agougil"
                    className="w-10 h-10 bg-secondary-background/20 hover:bg-primary-accent/20 rounded-lg flex items-center justify-center text-primary-text-secondary hover:text-primary-accent transition-all duration-300 hover:scale-110"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
