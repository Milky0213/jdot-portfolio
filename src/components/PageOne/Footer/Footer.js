"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// Components
import { HeroSectionGradient } from "@/components/PageOne/Hero";
// Icons
import { ArrowUp } from "lucide-react";

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const addressRef = useRef([]);
    const socialRef = useRef([]);
    const emailRef = useRef([]);

    // ✅ Clear refs *just before JSX* so they're fresh for rendering
    addressRef.current.length = 0;
    socialRef.current.length = 0;
    emailRef.current.length = 0;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Address animation
        ScrollTrigger.batch(addressRef.current, {
            trigger: ".footerTriggerClass",
            start: "bottom bottom",
            once: true,
            onEnter: (batch) => {
                gsap.from(batch, {
                    opacity: 0,
                    y: -30,
                    stagger: 0.15,
                    duration: 0.6,
                });
            },
        });

        // Social animation
        ScrollTrigger.batch(socialRef.current, {
            trigger: ".footerTriggerClass",
            start: "bottom bottom",
            once: true,
            onEnter: (batch) => {
                gsap.from(batch, {
                    opacity: 0,
                    y: -30,
                    stagger: 0.15,
                    duration: 0.6,
                });
            },
        });

        // Email animation
        ScrollTrigger.batch(emailRef.current, {
            trigger: ".footerTriggerClass",
            start: "bottom bottom",
            once: true,
            onEnter: (batch) => {
                gsap.from(batch, {
                    opacity: 0,
                    y: -30,
                    stagger: 0.15,
                    duration: 0.6,
                });
            },
        });
    }, []);

    return (
        <footer className="relative min-h-screen text-[#F5F1E8] py-16 px-8 md:px-20 flex flex-col footerTriggerClass">
            <HeroSectionGradient />

            {/* Top row */}
            <div className="relative z-10 flex justify-between items-start mb-16">
                <Image src="/images/navbarLogo.png" alt="J Dot Logo" width={274} height={156} />
                <button
                    onClick={scrollToTop}
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Back to top"
                >
                    <ArrowUp size={25} className="cursor-pointer" />
                </button>
            </div>

            {/* Get in touch */}
            <div className="mt-35 relative z-10">
                <div className="text-right">
                    <a href="#" className="no-underline hover:underline inline-block">
                        <h1 className="text-6xl font-normal">GET IN TOUCH</h1>
                    </a>
                </div>
            </div>

            {/* Middle content */}
            <div className="relative z-10 flex flex-col md:flex-row text-2xl font-normal justify-between gap-8 md:gap-16 mt-45 w-[60%]">
                {/* Address */}
                <div className="space-y-2">
                    {["16th Floor", "Burlington Tower", "Business Bay, Dubai", "United Arabic Emirates"].map(
                        (line, index) => (
                            <p key={index} ref={(el) => (addressRef.current[index] = el)}>
                                {line}
                            </p>
                        )
                    )}
                </div>

                {/* Social Links */}
                <div className="space-y-2">
                    {[
                        { label: "Twitter / X", url: "https://youtube.com" },
                        { label: "Instagram", url: "https://youtube.com" },
                        { label: "LinkedIn", url: "https://youtube.com" },
                    ].map((item, index) => (
                        <p key={index} ref={(el) => (socialRef.current[index] = el)}>
                            <Link href={item.url} target="_blank" className="hover:underline transition">
                                {item.label}
                            </Link>
                        </p>
                    ))}
                </div>

                {/* Inquiries */}
                <div className="space-y-2">
                    <p ref={(el) => (emailRef.current[0] = el)}>General enquiries</p>
                    <p ref={(el) => (emailRef.current[1] = el)}>
                        <Link href="mailto:hello@jdot.com" className="hover:underline transition">
                            hello@jdot.com
                        </Link>
                    </p>
                </div>
            </div>

            {/* Bottom row */}
            <div className="relative z-10 mt-auto pt-16 flex flex-col md:flex-row justify-between text-xs text-[#FFFFFF]">
                <p>©2025 J DOT DEVELOPMENT</p>
                <p></p>
                <p>BUILT BY J DOT DEVELOPMENT</p>
            </div>
        </footer>
    );
};

export default Footer;
