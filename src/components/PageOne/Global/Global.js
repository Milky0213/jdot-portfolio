'use client';
import React from "react";
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('./Globe'), { ssr: false });

const Global = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#232323] flex items-center justify-between px-16">
      {/* Left Text Section */}
      <div className="z-10 text-white max-w-xl text-center ml-25">
        <h2 className="text-3xl mb-3">GLOBAL SCALE</h2>
        <h1 className="text-6xl mb-6">Lorem ipsum</h1>
        <p className="text-base mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Morbi placerat massa neque donec tempor.
          Dolor morbi rhoncus sit in quis dui accumsan luctus risus. Mi sed nulla ultrices at.
        </p>

        {/* Stats Row */}
        <div className="flex justify-center space-x-12">
          {[
            { value: "100%", label: "Customer Satisfaction" },
            { value: "19+", label: "Countries Reached" },
            { value: "20,000+", label: "Daily Actions Logged" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl">{stat.value}</p>
              <p className="text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Globe Section */}
      <div
        style={{
          width: '200%',
          position: 'absolute',
          left: '-15%',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <Globe />
      </div>
    </section>
  );
};

export default Global;
