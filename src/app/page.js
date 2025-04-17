import React from 'react';
// Components
import HeroSection from '../components/hero/HeroSection';
import Services from '../components/services/Services'



const Landing = () => {
  return (
    <div>
      <HeroSection />
      {/* Our Services */}
      <Services />
    </div>
  );
};

export default Landing;
