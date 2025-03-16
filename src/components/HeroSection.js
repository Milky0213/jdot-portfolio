import React from "react";
import HeroSectionGradient from '../components/HeroSectionGradient';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Animated Heatmap Background
      <div className="absolute inset-0 animate-heatmap"></div> */}
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

        <button className="w-80 h-14 p-3 bg-white/0 rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-500 backdrop-blur-lg inline-flex justify-center items-center gap-5 overflow-hidden hover:bg-[#635BFF] transition-all duration-300 cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
