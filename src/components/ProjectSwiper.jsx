import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { featureIcons } from "../data/projects";
import { Code } from "lucide-react";

const Card = React.memo(({ project, cardIndex, onRemove }) => {
  const x = useMotionValue(0);
  
  // Add opacity transform back for better UX
  const opacity = useTransform(x, [-100, -70, 0, 70, 100], [0.3, 0.5, 1, 0.5, 0.3]);

  const handleDragEnd = useCallback(() => {
    const xValue = x.get();
    if (Math.abs(xValue) > 70) {
      onRemove(project.id);
    }
  }, [x, project.id, onRemove]);

  // Memoize feature icons to prevent re-creation
  const featureElements = useMemo(() => 
    project.features.map((feature, index) => (
      <div key={`${project.id}-${feature}-${index}`} className="flex flex-col items-center gap-1">
        <div
          className={`p-3 rounded-xl bg-secondary-background/10 border border-secondary-border/20 ${project.accentColor}`}
        >
          {featureIcons[feature] || <Code className="w-5 h-5" />}
        </div>
        <span className="text-xs text-primary-text-secondary text-center leading-tight font-medium">
          {feature}
        </span>
      </div>
    )), [project.features, project.id, project.accentColor]
  );

  return (
    <motion.div
      className="w-full h-full flex flex-col justify-between overflow-hidden rounded-xl border border-secondary-border/20 bg-primary-background p-4"

      style={{
        gridColumn: 1,
        gridRow: 1,
        x,
        zIndex: cardIndex,
        opacity
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.5}
      onDragEnd={handleDragEnd}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      // Optimize rendering performance
      dragMomentum={false}
      whileDrag={{ scale: 1.02 }}
    >
      {/* Remove motion.div - use regular divs for static content */}
      <div className="flex items-start gap-3 mb-4">
        <div className="relative">
          <div className={`text-2xl ${project.accentColor}`}>
            {project.icon}
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-primary-text mb-2">
            {project.title}
          </h3>
        </div>
      </div>

      <p className="text-sm text-primary-text-secondary mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Remove motion.div - use regular div */}
      <div className="flex flex-row flex-wrap gap-4">
        {featureElements}
      </div>
    </motion.div>
  );
});

Card.displayName = 'Card';

const ProjectsSwiper = ({ projects }) => {
  const [cards, setCards] = useState(projects);

  // Memoize the remove handler to prevent unnecessary re-renders
  const handleRemoveCard = useCallback((cardId) => {
    setCards(prevCards => {
      if (prevCards.length <= 1) return prevCards;
      return prevCards.filter(c => c.id !== cardId);
    });
  }, []);

  // Optimize the projects comparison - avoid JSON.stringify
  const projectsRef = React.useRef(projects);
  useEffect(() => {
    if (projectsRef.current !== projects) {
      setCards(projects);
      projectsRef.current = projects;
    }
  }, [projects]);

  // Memoize card elements with pre-calculated indices
  const cardElements = useMemo(() => 
    cards.map((project, index) => (
      <Card
      
        key={project.id}
        project={project}
        cardIndex={index}
        onRemove={handleRemoveCard}
      />
    )), [cards, handleRemoveCard]
  );

  return (
    <div className="w-full grid place-items-center h-[350px]">
      {cardElements}
    </div>
  );
};

export default ProjectsSwiper;