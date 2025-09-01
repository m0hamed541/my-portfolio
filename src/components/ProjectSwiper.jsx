import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Shield, 
  Zap, 
  Cloud, 
  Monitor,
  Smartphone,
  Layers,
  Settings,
  BarChart3
} from "lucide-react";

// Feature icons mapping
const featureIcons = {
  "Auto Scaling": <Server className="w-5 h-5" />,
  "Load Balancing": <Globe className="w-5 h-5" />,
  "Database": <Database className="w-5 h-5" />,
  "Security": <Shield className="w-5 h-5" />,
  "Performance": <Zap className="w-5 h-5" />,
  "Cloud Storage": <Cloud className="w-5 h-5" />,
  "Monitoring": <Monitor className="w-5 h-5" />,
  "Mobile": <Smartphone className="w-5 h-5" />,
  "Microservices": <Layers className="w-5 h-5" />,
  "Configuration": <Settings className="w-5 h-5" />,
  "Analytics": <BarChart3 className="w-5 h-5" />,
};

const Card = React.memo(({ project, cardIndex, onRemove, onProjectOpen }) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, -70, 0, 70, 100], [0.3, 0.5, 1, 0.5, 0.3]);

  const handleDragEnd = useCallback(() => {
    const xValue = x.get();
    if (Math.abs(xValue) > 70) {
      onRemove(project.id);
    }
  }, [x, project.id, onRemove]);

  const handleCardClick = useCallback((e) => {
    // Prevent click during drag
    if (Math.abs(x.get()) < 5) {
      onProjectOpen(project);
    }
  }, [project, onProjectOpen, x]);

  // Memoize feature elements
  const featureElements = useMemo(() => 
    project.features?.slice(0, 4).map((feature, index) => (
      <div key={`${project.id}-${feature}-${index}`} className="flex flex-col items-center gap-1">
        <div
          className={`p-3 rounded-xl bg-secondary-background/10 border border-secondary-border/20 ${project.accentColor || 'text-primary-accent'}`}
        >
          {featureIcons[feature] || <Code className="w-5 h-5" />}
        </div>
        <span className="text-xs text-primary-text-secondary text-center leading-tight font-medium max-w-16 truncate">
          {feature}
        </span>
      </div>
    )) || [], [project.features, project.id, project.accentColor]
  );

  return (
    <motion.div
      className="w-full h-full flex flex-col justify-between overflow-hidden rounded-xl border border-secondary-border/20 bg-primary-background p-4 cursor-pointer select-none"
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
      onClick={handleCardClick}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragMomentum={false}
      whileDrag={{ scale: 1.02 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="relative">
          <div className={`text-2xl ${project.accentColor || 'text-primary-accent'}`}>
            {project.icon || <Code className="w-8 h-8" />}
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-primary-text mb-1 truncate">
            {project.title}
          </h3>
          <p className="text-xs text-primary-text-secondary opacity-70">
            {project.category || 'Project'}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="flex-1 mb-4">
        <p className="text-sm text-primary-text-secondary leading-relaxed line-clamp-3">
          {project.description || project.overview}
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-3">
        {featureElements}
      </div>

      {/* Drag Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-primary-text-secondary/30 rounded-full"></div>
          <div className="w-1 h-1 bg-primary-text-secondary/30 rounded-full"></div>
          <div className="w-1 h-1 bg-primary-text-secondary/30 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
});

Card.displayName = 'Card';

const ProjectsSwiper = ({ projects = [], onProjectOpen }) => {
  const [cards, setCards] = useState(projects);

  const handleRemoveCard = useCallback((cardId) => {
    setCards(prevCards => {
      if (prevCards.length <= 1) return prevCards;
      return prevCards.filter(c => c.id !== cardId);
    });
  }, []);

  // Reset cards when projects change
  const projectIds = useMemo(() => 
    projects.map(p => p.id).join(','), [projects]
  );

  useEffect(() => {
    setCards(projects);
  }, [projectIds, projects]);

  // Handle empty state
  if (!projects.length) {
    return (
      <div className="w-full h-[350px] flex items-center justify-center">
        <div className="text-center">
          <Code className="w-12 h-12 text-primary-text-secondary/30 mx-auto mb-4" />
          <p className="text-primary-text-secondary">No projects available</p>
        </div>
      </div>
    );
  }

  // Handle single card state
  if (cards.length === 1) {
    return (
      <div className="w-full h-[350px] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <Card
            project={cards[0]}
            cardIndex={0}
            onRemove={() => {}} // Disable remove for last card
            onProjectOpen={onProjectOpen}
          />
        </div>
      </div>
    );
  }

  const cardElements = cards.map((project, index) => (
    <Card
      key={project.id}
      project={project}
      cardIndex={cards.length - index}
      onRemove={handleRemoveCard}
      onProjectOpen={onProjectOpen}
    />
  ));

  return (
    <div className="w-full">
      {/* Swiper Container */}
      <div className="relative w-full h-[350px] flex items-center justify-center px-4">
        <div className="relative w-full max-w-sm h-full grid place-items-center">
          {cardElements}
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center mt-6 px-4">
        <p className="text-sm text-primary-text-secondary">
          Swipe cards left or right to browse • Tap to view details
        </p>
        
      </div>
    </div>
  );
};

export default ProjectsSwiper;