import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export function Card({ children, title }: CardProps) {
  return (
    <div className="bg-secondary-background p-6 rounded-lg shadow-md border border-secondary-border">
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-primary-text">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}