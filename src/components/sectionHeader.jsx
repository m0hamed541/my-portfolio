import React from "react";

export function SectionHeader({ header, subheader }) {
  return (
    <div className="w-full mb-14 sm:mb-20 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight text-primary-text mb-3 sm:mb-5">
        {header}
      </h2>
      {subheader && (
        <p className="text-base sm:text-lg md:text-xl text-primary-text-secondary max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          {subheader}
        </p>
      )}
    </div>
  );
}
