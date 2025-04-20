import React from "react";
import { HeroSectionGradient } from '@/components/hero';
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Button */}

      <HeroSectionGradient />

      {/* Content */}
      <div className="relative text-center px-8">
        <h1 className="text-stone-100 text-6xl font-bold uppercase mb-4">
          Cutting-Edge Software
        </h1>
        <h1 className="text-stone-100 text-6xl font-bold uppercase mb-4">
          <span className="italic font-normal">Solutions</span> That Help
        </h1>
        <h1 className="text-stone-100 text-6xl font-bold uppercase mb-30">
          Your Business <span className="italic font-normal">Grow</span>
        </h1>
        <Button title="Get Started" textColor="text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
