import React from 'react';
import ModelCards from './ModelCards';
import ThumbnailRail from './ThumbnailRail';

/**
 * HeroStage Component
 * 
 * Full viewport hero section containing:
 * - Giant "RENDER" text behind everything (low opacity)
 * - Crosshair markers around center
 * - ModelCards in center
 * - ThumbnailRail at bottom
 * - Vignette effect on edges
 */
const HeroStage = () => {
  // Crosshair marker positions (relative to center)
  const crosshairPositions = [
    { top: '15%', left: '20%' },
    { top: '20%', right: '25%' },
    { top: '70%', left: '15%' },
    { top: '75%', right: '20%' },
    { top: '45%', left: '8%' },
    { top: '50%', right: '10%' },
  ];

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col items-center justify-center vignette overflow-hidden"
      aria-label="Hero section"
    >
      {/* Giant "RENDER" text - behind everything */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <h1 
          className="font-display giant-text giant-text-shadow text-inkBlack uppercase whitespace-nowrap"
          style={{
            fontSize: 'clamp(120px, 35vw, 500px)',
            opacity: 0.15,
            letterSpacing: '0.02em',
            lineHeight: 0.85,
          }}
        >
          RENDER
        </h1>
      </div>

      {/* Crosshair markers */}
      {crosshairPositions.map((pos, index) => (
        <span
          key={index}
          className="crosshair absolute pointer-events-none z-10"
          style={{
            ...pos,
            transform: 'translate(-50%, -50%)',
          }}
          aria-hidden="true"
        >
          <span 
            className="text-black/30 text-lg font-light"
            style={{ fontFamily: 'monospace' }}
          >
            +
          </span>
        </span>
      ))}

      {/* Main content container */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 w-full px-4">
        {/* Model Cards - centered */}
        <div className="flex items-center justify-center flex-1 py-20">
          <ModelCards />
        </div>
      </div>

      {/* Thumbnail Rail - at bottom */}
      <div className="relative z-20 w-full mt-auto">
        <ThumbnailRail />
      </div>
    </section>
  );
};

export default HeroStage;
