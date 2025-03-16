"use client"; 
import '../styles/HeroSectionGradient.css'
import { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    // Optionally, add custom JS to randomize animation speeds or effects
  }, []);

  return (
    <div className="background--custom">
      <canvas id="canvas" />
    </div>
  );
};

export default AnimatedBackground;
