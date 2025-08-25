import React from 'react';
import { Button } from '../components/Button';

export function Hero() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold text-primary mb-4">
        Minimal React Template
      </h2>
      <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
        A clean starting point with React, TypeScript, Tailwind CSS, and a comprehensive theme system.
      </p>
      <div className="flex gap-4 justify-center">
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </section>
  );
}