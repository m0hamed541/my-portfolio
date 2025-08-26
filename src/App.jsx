import React, { useEffect } from "react";
import HeroSection from "./sections/hero.jsx";
import Footer from "./sections/footer.tsx";
import AboutSection from "./sections/about.tsx";
import ProjectsSection from "./sections/projects.tsx";
import ContactSection from "./sections/contact.tsx";
import TechStack from "./sections/techStack.jsx";
import { motion, useMotionValue, useSpring } from "framer-motion";

function App() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 200, damping: 20 }),
    y: useSpring(mouse.y, { stiffness: 200, damping: 20 }),
  };

  const handleCursor = (e) => {
    mouse.x.set(e.clientX - 20);
    mouse.y.set(e.clientY - 20 + window.scrollY);
  };

  const handleMouseEnter = (e) => {
    const element = e.target;
    console.log(element);

    if (element.matches(".sticky")) {
      element.style.cursor = "grab";
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleCursor);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="cursor"
        style={{
          x: smoothMouse.x,
          y: smoothMouse.y,
        }}
      />

      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStack />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
