import React from 'react';
// Page 1 Components
import HeroSection from '@/components/PageOne/Hero/HeroSection';
import Services from '@/components/PageOne/Services/Services'
import Global from '@/components/PageOne/Global/Global';
import FeaturedWork from '@/components/PageOne/FeaturedWork/FeaturedWork';
import WhyUs from '@/components/PageOne/WhyUs/WhyUs';
import Testimonials from '@/components/PageOne/Testimonials/Testimonials';
import FAQ from '@/components/PageOne/FAQ/FAQ';



const Landing = () => {
  return (
    <div>
      <HeroSection />
    
      <Services />

      <Global />

      <FeaturedWork />

      <WhyUs />

      <Testimonials />

      <FAQ />
    </div>
  );
};

export default Landing;
