import React from "react";
import { ChevronDown } from "lucide-react";

export function FloatingButton() {
  return (
    <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 transform animate-float flex items-center content-center">
      <button
        className="p-2 sm:p-3 rounded-full bg-primary-accent/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-accent/30 hover:bg-primary-accent/30"
        onClick={() => {
          document.getElementById('about_section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary-accent" />
      </button>
    </div>
  );
}
