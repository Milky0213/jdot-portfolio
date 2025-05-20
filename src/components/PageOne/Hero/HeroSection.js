import React from "react";
import { HeroSectionGradient } from '@/components/PageOne/Hero';
import Button from "../../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Button */}

      <HeroSectionGradient />

      {/* Content */}
      <div className="relative text-center text-[#F5F1E8] px-8">
        <h1 className="text-6xl font-bold uppercase mb-4">
          Cutting-Edge Software
        </h1>
        <h1 className="text-6xl font-bold uppercase mb-4">
          <span className="italic font-normal">Solutions</span> That Help
        </h1>
        <h1 className="text-6xl font-bold uppercase mb-30">
          Your Business <span className="italic font-normal">Grow</span>
        </h1>
        <Button title="Get Started" mode="dark" />
      </div>
    </section>
  );
};

export default HeroSection;
