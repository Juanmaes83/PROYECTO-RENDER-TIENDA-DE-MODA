import React from 'react';

/**
 * ModelCards Component
 * 
 * Two overlapping model cards with a layered depth effect.
 * Features:
 * - Card A (front): Positioned left, higher z-index
 * - Card B (behind): Positioned right, lower z-index with offset
 * - White background with rounded corners and soft shadow
 * - Hover effects with subtle lift and scale
 * - Responsive sizing
 */
const ModelCards = () => {
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ 
        width: 'clamp(320px, 70vw, 500px)',
        height: 'clamp(400px, 60vh, 500px)'
      }}
    >
      {/* Card B - Behind (right/back) */}
      <div 
        className="model-card absolute bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden"
        style={{
          width: 'clamp(200px, 45vw, 280px)',
          height: 'clamp(280px, 55vh, 380px)',
          right: '5%',
          top: '8%',
          zIndex: 1,
          transform: 'rotate(3deg)',
        }}
      >
        <img 
          src="/assets/models/hero-back.jpg" 
          alt="Fashion model back view"
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)';
          }}
        />
        {/* Placeholder overlay when image fails */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-ui text-xs text-black/30 tracking-wider uppercase">Model B</span>
        </div>
      </div>

      {/* Card A - Front (left/front) */}
      <div 
        className="model-card absolute bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden"
        style={{
          width: 'clamp(220px, 50vw, 300px)',
          height: 'clamp(300px, 60vh, 400px)',
          left: '5%',
          bottom: '5%',
          zIndex: 2,
          transform: 'rotate(-2deg)',
        }}
      >
        <img 
          src="/assets/models/hero-front.jpg" 
          alt="Fashion model front view"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #fafafa 0%, #e8e8e8 100%)';
          }}
        />
        {/* Placeholder overlay when image fails */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-ui text-xs text-black/30 tracking-wider uppercase">Model A</span>
        </div>
      </div>
    </div>
  );
};

export default ModelCards;
