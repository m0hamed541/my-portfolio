import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { featureIcons } from "../data/projects";
import { Code } from "lucide-react";

const Card = ({ project, cards, setCards }) => {
  const x = useMotionValue(0);

  // Fade out when dragged left or right
  const opacity = useTransform(x, [-70, 0, 70], [0.5, 1, 0.5]);

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 70) {
      if (cards.length > 1) {
        setCards([...cards.filter((c) => c.id !== project.id)]);
      }
    }
  };

  return (
    <motion.div
      className="
      w-full overflow-hidden
      bg-primary-background
      rounded-xl p-4 border border-secondary-border/20 transition-all
      duration-300"
      style={{
        gridColumn: 1,
        gridRow: 1,
        x,
        zIndex: cards.indexOf(project),
        opacity,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }} // stays on x-axis but still tracks x
      dragElastic={0.5} // make it springy
      onDragEnd={handleDragEnd}
    >
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

      {/* Description */}
      <p className="text-sm text-primary-text-secondary mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Features Carousel */}
      <div className="flex flex-row flex-wrap gap-4">
        {project.features.map((feature, index) => (
          <div key={index}>
            <div
              className={`p-3 rounded-xl bg-secondary-background/10 border border-secondary-border/20 ${project.accentColor}`}
            >
              {featureIcons[feature] || (
                <Code className="w-5 h-5 " />
              )}
            </div>
            <span className="text-xs text-primary-text-secondary text-center leading-tight font-medium">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Swiper = ({ projects }) => {
  const [cards, setCards] = useState(projects);

  useEffect(() => {
    setCards(projects);
    console.log("update cards");
  }, [projects]);

  return (
    <div className=" bg-white w-full grid place-items-center">
      {cards.map((project) => (
        <Card
          key={project.id}
          project={project}
          cards={cards}
          setCards={setCards}
        />
      ))}
    </div>
  );
};

export default Swiper;
