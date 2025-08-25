import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export function Card({ children, title }: CardProps) {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-md">
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-primary">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}