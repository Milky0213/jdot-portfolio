import React from 'react';
// Components
import HeroSection from '@/components/hero/HeroSection';
import Services from '@/components/services/Services'
import Global from '@/components/global/Global';



const Landing = () => {
  return (
    <div>
      <HeroSection />
    
      <Services />

      <Global />
    </div>
  );
};

export default Landing;
