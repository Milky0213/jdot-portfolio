"use client";
import React, { useEffect, useRef } from "react";
// Components
import FAQDropdown from "./FAQDropdown";
// Icons
import { GoArrowUpRight } from "react-icons/go";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);


const FAQ = () => {
    const textRef = useRef([]);
    const contactRef = useRef(null);


    useEffect(() => {
        const textSplit = new SplitText(textRef.current, {
            type: "chars",
            linesClass: "split-line",
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(textSplit.chars, {
            y: -80,
            opacity: 0,
            stagger: 0.1,
            ease: "circ.out",
            duration: 0.2,
        })
            .from(contactRef.current, {
                x: 100,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            }, "+=0.2"); // delay after last letter animates
    }, []);
      

    return (
        <section className="min-h-screen bg-[#232323] px-16 py-20 text-[#F5F1E8]">
            <div className="flex justify-between items-start mb-50">
                <div>
                    <h2 className="text-6xl font-normal mb-4">FAQ</h2>
                    <p className="text-base font-normal leading-relaxed">
                        Coding decoded — simple answers to your <br />
                        software development questions.
                    </p>
                </div>
                <div className="text-right">
                    <p ref={textRef} className="text-3xl font-normal mb-1 mr-42">Still have questions?</p>
                    <div ref={contactRef} className="inline-block text-left w-[280px] relative group">
                        <a href="#" className="no-underline hover:underline">
                            <p className="text-3xl font-normal leading-snug">
                                Get in touch with us<br />
                                or speak to an agent
                            </p>
                        </a>
                        <span className="absolute left-[-47px] top-1/2 transform -translate-y-1/2 transition-transform duration-500 opacity-0 group-hover:translate-x-[-25px] group-hover:opacity-100 text-3xl">
                            <GoArrowUpRight size={50} />
                        </span>
                    </div>
                </div>

            </div>

            <div className="flex w-full">
                {/* Left Column - 50% width */}
                <div className="w-1/2 pr-3">
                    <div className="mb-6">
                        <FAQDropdown title="Question" description="Description text will be here" />
                    </div>
                    <div className="mb-6">
                        <FAQDropdown title="Question" description="Description text will be here" />
                    </div>
                    <div className="mb-6">
                        <FAQDropdown title="Question" description="Description text will be here" />
                    </div>
                </div>

                {/* Right Column - 50% width */}
                <div className="w-1/2 pl-3">
                    <div className="mb-6">
                        <FAQDropdown title="Question" description="Description text will be here" />
                    </div>
                    <div className="mb-6">
                        <FAQDropdown title="Question" description="Description text will be here" />
                    </div>
                    <div className="mb-6">
                        <FAQDropdown title="Question" description="Description text will be here" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
