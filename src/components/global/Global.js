'use client';
import React from "react";
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('../global/Globe'), { ssr: false });

const Global = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center" style={{ backgroundColor: '#232323' }}>
      <div
        style={{
          width: '200%', // Set a width that allows for a larger globe
          position: 'absolute', // Keep it absolutely positioned
          left: '-5%', // Adjust right to move it further to the right
          overflow: 'hidden', // Hide any overflow
        }}
      >
        <Globe />
      </div>
    </section>
  );
};

export default Global;
