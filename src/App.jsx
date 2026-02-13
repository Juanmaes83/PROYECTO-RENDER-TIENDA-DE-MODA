import React from 'react';
import Navbar from './components/Navbar';
import HeroStage from './components/HeroStage';

/**
 * App Component
 * 
 * Main application container with:
 * - Solid red background (#FF2A00) with gradient overlay
 * - Navbar at top
 * - HeroStage as main content
 * - Overflow hidden to prevent scroll issues
 */
function App() {
  return (
    <div className="relative min-h-screen bg-renderRed overflow-hidden">
      <Navbar />
      <HeroStage />
    </div>
  );
}

export default App;
