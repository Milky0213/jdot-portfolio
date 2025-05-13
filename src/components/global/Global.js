'use client';
import React from "react";
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('../global/Globe'), { ssr: false });

const Global = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center" style={{ backgroundColor: '#232323' }}>
      <Globe />
    </section>
  );
};

export default Global;
