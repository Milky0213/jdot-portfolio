'use client';
import React, { useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Globe = dynamic(() => import('./Globe'), { ssr: false });

const stats = [
  { value: "100%", label: "Customer Satisfaction" },
  { value: "19+", label: "Countries Reached" },
  { value: "20000+", label: "Daily Actions Logged" },
];

const Global = () => {
  const statRefs = useRef([]);
  const statsSectionRef = useRef(null);

  useEffect(() => {
    if (!statsSectionRef.current) return;

    ScrollTrigger.create({
      trigger: statsSectionRef.current,
      start: "top 59%", // starts when top of section is at 80% of viewport
      once: true,
      onEnter: () => {
        statRefs.current.forEach((ref, idx) => {
          if (!ref) return;

          const finalValue = stats[idx].value;
          const cleanFinal = finalValue.replace(/[^\d]/g, "");
          const suffix = finalValue.replace(/[\d]/g, "");

          let obj = { val: 0 };

          gsap.to(obj, {
            val: parseInt(cleanFinal),
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
              if (ref) {
                const current = Math.floor(obj.val);
                ref.textContent = current.toLocaleString() + suffix;
              }
            },
            delay: idx * 0.3
          });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  

  return (
    <section ref={statsSectionRef} className="relative min-h-screen overflow-hidden bg-[#232323] flex items-center justify-between px-16">
      {/* Left Text Section */}
      <div className="z-10 text-[#F5F1E8] max-w-xl text-center ml-45">
        <h2 className="text-3xl mb-3">GLOBAL SCALE</h2>
        <h1 className="text-6xl mb-6">Lorem ipsum</h1>
        <p className="text-base mb-10 leading-relaxed">
          Software development without limits. J Dot Development delivers exceptional solutions by expert developers, regardless of the size, industry, or location of your business.
        </p>

        {/* Stats Row */}
        <div className="flex justify-center space-x-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p
                className="text-3xl"
                ref={(el) => (statRefs.current[idx] = el)}
              >
                0
              </p>
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
          left: '0',
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
