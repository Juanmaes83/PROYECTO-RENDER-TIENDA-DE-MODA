import React from 'react';

/**
 * ThumbnailRail Component
 * 
 * Horizontal scrolling thumbnail strip with 16 model images.
 * Features:
 * - Native overflow-x-auto with scroll-snap
 * - Grayscale filter with color on hover
 * - Scale and border effects on hover
 * - Custom scrollbar styling
 * - Responsive thumbnail sizing
 */
const ThumbnailRail = () => {
  // Generate array of 16 thumbnail paths
  const thumbnails = Array.from({ length: 16 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `/assets/models/model-${num}.jpg`;
  });

  return (
    <div className="w-full px-4 md:px-8 pb-8">
      <div 
        className="thumbnail-rail flex gap-3 overflow-x-auto scroll-snap-x py-4"
        role="region"
        aria-label="Model thumbnail gallery"
      >
        {thumbnails.map((src, index) => (
          <button
            key={index}
            className="thumbnail-item scroll-snap-start flex-shrink-0 relative rounded-lg overflow-hidden bg-white/10 border border-transparent hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{
              width: 'clamp(60px, 12vw, 80px)',
              height: 'clamp(60px, 12vw, 80px)',
            }}
            aria-label={`View model ${index + 1}`}
            onClick={() => console.log(`Thumbnail ${index + 1} clicked`)}
          >
            <img
              src={src}
              alt={`Model thumbnail ${index + 1}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              onError={(e) => {
                // Fallback when image doesn't exist - show placeholder
                e.target.style.display = 'none';
                const placeholder = e.target.nextElementSibling;
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
            {/* Placeholder for missing images */}
            <div 
              className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-white/20 to-white/5"
            >
              <span className="font-ui text-[10px] text-black/40 tracking-wider">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailRail;
