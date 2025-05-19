"use client";
import React from "react";
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";

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

const FeaturedWork = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#232323] px-16 py-20 text-white">
            {/* Header */}
            <div className="flex justify-between items-start text-[#F5F1E8] mb-16">
                <h2 className="text-6xl font-normal">FEATURED WORK</h2>
                <p className="max-w-lg text-base font-normal leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Morbi placerat massa neque
                    donec tempor. Dolor morbi rhoncus sit in quis dui accumsan luctus
                    risus. Mi sed nulla ultrices at.
                </p>
            </div>

            {/* Embla Carousel */}
            <EmblaCarousel projects={projects} />
        </section>
    );
};

export default FeaturedWork;
