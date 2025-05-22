"use client";
import { useEffect } from 'react'

export default function Test() {
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      const bars = document.querySelectorAll('.parallax-bar');
      const barsArray = Array.from(bars);

      // Animate parallax movement
      barsArray.forEach(bar => {
        const speed = parseFloat(bar.dataset.speed || '1');
        gsap.to(bar, {
          y: () => -(window.innerHeight * speed * 0.5),
          ease: 'none',
          scrollTrigger: {
            trigger: bar.closest('.test-section'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // =======================
      // Top 7 bars fade in/out
      // =======================
      const topBars = barsArray
        .filter(bar => bar.style.top)
        .sort((a, b) => parseFloat(a.style.top) - parseFloat(b.style.top))
        .slice(0, 7);

      gsap.set(topBars, { opacity: 0 });

      gsap.to(topBars, {
        opacity: 1,
        scrollTrigger: {
          trigger: '.test-section',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      // =========================
      // Bottom 8 bars fade in/out
      // =========================
      const lowest8Bars = barsArray
        .filter(bar => bar.style.top)
        .sort((a, b) => parseFloat(b.style.top) - parseFloat(a.style.top))
        .slice(0, 8);

      lowest8Bars.forEach(bar => {
        // Fade out at same time as .fixed-text
        gsap.to(bar, {
          opacity: 0,
          duration: 1, // 1-second fade
          scrollTrigger: {
            trigger: '.test-section',
            start: 'bottom 95%',
            toggleActions: 'play none none reverse', // fade out once, reverse on scroll up
          },
        });

        // Optional fade-in when scrolling back
        gsap.fromTo(
          bar,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: '.test-section',
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // =======================
      // Fixed Text fade logic
      // =======================
      const fixedText = document.querySelector('.fixed-text');
      gsap.set(fixedText, { opacity: 0 });

      // Fade in near top
      gsap.to(fixedText, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.test-section',
          start: 'top 33%',
          end: 'top 30%',
        },
      });

      // Fade out near bottom
      gsap.to(fixedText, {
        opacity: 0,
        duration: 1, // 1-second fade
        scrollTrigger: {
          trigger: '.test-section',
          start: 'bottom 95%',
          scrub: true
        },
      });
    };

    loadGSAP();
  }, []);  

  return (
    <>
      <style jsx>{`
        .parallax-bar {
          position: absolute;
          width: 8px;
          border-radius: 20px;
          background: linear-gradient(180deg, #f0f, #0ff);
          opacity: 0.6;
          filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.4));
        }
        .short {
          height: 30px;
        }
        .medium {
          height: 60px;
        }
        .tall {
          height: 100px;
        }
        .fixed-text {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 20;
          pointer-events: none;
        }
      `}</style>

      {/* Fixed text that stays in center of viewport */}
      <div className="fixed-text">
        <h1 className="text-6xl md:text-8xl font-bold text-white text-center">
          J Dot<br />
          Development
        </h1>
        <p className="mt-6 text-lg text-gray-300 text-center">
          Lorem ipsum dolor sit amet consectetur. <br />
          Amet molestie nisi netus.
        </p>
      </div>

      <section className="test-section relative h-[2500px] bg-black text-white overflow-hidden">
        {/* Bars Background - Now contained within this section */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <div className="parallax-bar tall" data-speed="0.5" style={{ top: '75%', left: '5%' }} />
          <div className="parallax-bar medium" data-speed="1.2" style={{ top: '60%', left: '15%' }} />
          <div className="parallax-bar short" data-speed="0.8" style={{ top: '60%', left: '30%' }} />
          <div className="parallax-bar tall" data-speed="1.5" style={{ top: '70%', left: '50%' }} />
          <div className="parallax-bar medium" data-speed="0.7" style={{ top: '60%', left: '70%' }} />
          <div className="parallax-bar short" data-speed="1.8" style={{ top: '30%', left: '85%' }} />
          <div className="parallax-bar short" data-speed="1.8" style={{ top: '62%', left: '80%' }} />
          <div className="parallax-bar medium" data-speed="0.9" style={{ top: '75%', left: '80%' }} />
          <div className="parallax-bar tall" data-speed="1.3" style={{ top: '100%', left: '10%' }} />
          <div className="parallax-bar short" data-speed="1.6" style={{ top: '95%', left: '60%' }} />
          <div className="parallax-bar medium" data-speed="0.6" style={{ top: '100%', left: '40%' }} />
          <div className="parallax-bar tall" data-speed="0.5" style={{ top: '10%', left: '8%' }} />
          <div className="parallax-bar medium" data-speed="1.2" style={{ top: '30%', left: '19%' }} />
          <div className="parallax-bar short" data-speed="0.8" style={{ top: '20%', left: '35%' }} />
          <div className="parallax-bar tall" data-speed="1.5" style={{ top: '40%', left: '53%' }} />
          <div className="parallax-bar medium" data-speed="0.7" style={{ top: '50%', left: '74%' }} />
          <div className="parallax-bar short" data-speed="1.8" style={{ top: '100%', left: '82%' }} />
          <div className="parallax-bar medium" data-speed="0.9" style={{ top: '15%', left: '84%' }} />
          <div className="parallax-bar tall" data-speed="1.3" style={{ top: '70%', left: '13%' }} />
          <div className="parallax-bar short" data-speed="1.6" style={{ top: '25%', left: '65%' }} />
          <div className="parallax-bar medium" data-speed="0.6" style={{ top: '80%', left: '36%' }} />
        </div>

        {/* Content - kept empty as requested */}
        <div className="relative z-10 p-10 pt-48">
        </div>
      </section>
    </>
  )
}