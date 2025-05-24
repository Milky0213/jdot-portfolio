"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// Components
import { HeroSectionGradient } from '@/components/PageOne/Hero';
// Icons
import { ArrowUp } from "lucide-react";

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative min-h-screen text-[#F5F1E8] py-16 px-8 md:px-20 flex flex-col">
            {/* Gradient Background */}
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
                <div className="space-y-2">
                    <p>Suite 1308</p>
                    <p>9 Thomas Blv.</p>
                    <p>Business District, Dubai</p>
                    <p>United Arabic Emirates</p>
                </div>

                <div className="space-y-2">
                    <p>
                        <Link href="https://youtube.com" target="_blank" className="hover:underline transition">
                            Twitter / X
                        </Link>
                    </p>
                    <p>
                        <Link href="https://youtube.com" target="_blank" className="hover:underline transition">
                            Instagram
                        </Link>
                    </p>
                    <p>
                        <Link href="https://youtube.com" target="_blank" className="hover:underline transition">
                            LinkedIn
                        </Link>
                    </p>
                </div>

                <div className="space-y-2">
                    <p>General enquiries</p>
                    <p>
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
