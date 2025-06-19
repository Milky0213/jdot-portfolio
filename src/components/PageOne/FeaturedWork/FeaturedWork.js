"use client";
import React, { useEffect, useRef } from "react";
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FeaturedWork = () => {
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);

    useEffect(() => {
        const headingSplit = new SplitText(headingRef.current, {
            type: "lines",
            linesClass: "split-line",
        });
        const paragraphSplit = new SplitText(paragraphRef.current, {
            type: "lines",
            linesClass: "split-line",
        });

        // Animate heading
        gsap.from(headingSplit.lines, {
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            y: 80,
            opacity: 0,
            stagger: 0.4,
            ease: "circ.out",
            duration: 0.7,
        });

        // Animate paragraph
        gsap.from(paragraphSplit.lines, {
            scrollTrigger: {
                trigger: paragraphRef.current,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            y: 80,
            opacity: 0,
            stagger: 0.5,
            ease: "power2.out",
            duration: 0.6,
        });

        return () => {
            headingSplit.revert();
            paragraphSplit.revert();
        };
    }, []);

    const projects = [
        {
            imageSource: "/images/pageOne/featuredWork/featureWorkOne.png",
            service: "App Development",
            serviceLevel: "4",
            apis: "Podio, Twilio, Postmark, Google Translate",
            title: "iOS & Android Habit Tracking App",
        },
        {
            imageSource: "/images/pageOne/featuredWork/featureWorkTwo.png",
            service: "Software Development",
            serviceLevel: "3",
            apis: "Google Maps, Twilio, SendGrid, Excel",
            title: "Advanced Construction CRM",
        },
    // Add more project entries as needed
    ];

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#232323] px-16 py-20 text-white">
            <div className="flex justify-between items-start text-[#F5F1E8] mb-16">
                <h2 ref={headingRef} className="text-6xl font-normal">
                    FEATURED WORK
                </h2>
                <p ref={paragraphRef} className="max-w-xl text-base font-normal leading-relaxed">
                    We’re committed to creating software solutions that drive real results. 
                    Working with clients from across the globe, we know the importance of 
                    understanding your unique needs and deliver bespoke software that transforms 
                    your vision into reality.
                </p>
            </div>

            {/* Embla Carousel */}
            <EmblaCarousel projects={projects} />
        </section>
    );
};

export default FeaturedWork;
