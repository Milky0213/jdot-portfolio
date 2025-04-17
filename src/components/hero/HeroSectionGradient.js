"use client"; 
import { useEffect } from 'react';
import { Gradient } from '../../utils/gradient';
import '../../styles/hero/heroSectionGradient.css';


const HeroSectionGradient = () => {
  useEffect(() => {
    const gradient = new Gradient(); // Create a new Gradient instance
    gradient.initGradient('#gradient-canvas'); // Call initGradient with the canvas selector

    // Adjust the canvas size when the window is resized
    const handleResize = () => {
      const canvas = document.getElementById('gradient-canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call resize initially
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <canvas id="gradient-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>
  );
};

export default HeroSectionGradient;