'use client';
import React from "react";
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('../global/Globe'), { ssr: false });

const Global = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center" style={{ backgroundColor: '#232323' }}>
      <div
        style={{
          width: '160%', // Wider to allow overflow
          transform: 'translateX(20%)', // Shift left to only show 65%
          pointerEvents: 'none', // So it doesn’t block clicks
        }}
      >
        <Globe />
      </div>
    </section>
  );
};

export default Global;
