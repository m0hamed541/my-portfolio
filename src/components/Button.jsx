import React from 'react';

export function Button({ children, variant = 'primary', onClick, className = '' }) {
  const baseClasses = 'px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base';
  const variantClasses = {
    primary: 'bg-primary-accent text-primary-text border border-primary-accent/30',
    secondary: 'bg-secondary-background text-primary-text border border-secondary-border',
    'hero-primary': 'bg-primary-accent text-primary-text border border-primary-accent/30 shadow-lg shadow-primary-accent/20',
    'hero-secondary': 'bg-secondary-background text-primary-text border border-secondary-border'
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}