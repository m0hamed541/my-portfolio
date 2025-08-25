import React from 'react';
import { Card } from '../components/Card';
import { Palette, Zap, Code } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Palette className="w-8 h-8 text-primary-600" />,
      title: 'Theme System',
      description: 'Complete design system with CSS variables and dark mode support.'
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: 'Fast Development',
      description: 'Vite for lightning-fast builds and hot module replacement.'
    },
    {
      icon: <Code className="w-8 h-8 text-primary-600" />,
      title: 'TypeScript Ready',
      description: 'Full TypeScript support with proper type checking and IntelliSense.'
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} title={feature.title}>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {feature.icon}
              </div>
              <p className="text-secondary">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}