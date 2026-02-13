import React from 'react';

/**
 * Navbar Component
 * 
 * Absolute positioned navigation bar at the top of the page.
 * Features:
 * - Left: Crosshair icon + "SHOP" link
 * - Center: "ARCHIVE" link
 * - Right: "SEARCH" link
 * - Uppercase text with wide tracking
 * - Black text with hover opacity effect
 */
const Navbar = () => {
  return (
    <nav 
      className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-10 md:py-8"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between">
        {/* Left: Crosshair + SHOP */}
        <div className="flex items-center gap-3">
          <span 
            className="crosshair-icon text-inkBlack" 
            aria-hidden="true"
          />
          <a 
            href="#shop" 
            className="nav-link font-ui text-xs font-medium tracking-[0.2em] uppercase text-inkBlack"
          >
            Shop
          </a>
        </div>

        {/* Center: ARCHIVE */}
        <a 
          href="#archive" 
          className="nav-link font-ui text-xs font-medium tracking-[0.2em] uppercase text-inkBlack"
        >
          Archive
        </a>

        {/* Right: SEARCH */}
        <a 
          href="#search" 
          className="nav-link font-ui text-xs font-medium tracking-[0.2em] uppercase text-inkBlack"
        >
          Search
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
