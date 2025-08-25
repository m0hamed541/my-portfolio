import React from 'react';
import { Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-secondary border-b border-primary">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <Zap className="w-6 h-6 text-primary-600" />
          <h1 className="text-xl font-semibold text-primary">
            React Template
          </h1>
        </div>
      </div>
    </header>
  );
}