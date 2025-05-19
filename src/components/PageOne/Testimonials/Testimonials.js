import React from "react";
// Components
import QuoteCard from './QuoteCard';

const Testimonials = () => {
    const quoteData = [
        {
            quote: "The best development company we have worked with before, helloooooo oooo ooooo oooo ",
            author: "Naveed Hussain",
            role: "Prophetic Path, Director",
            logo: "/images/pageOne/testimonials/prophetic-path.png",
        },
        {
            quote: "Brought our ideas into real tech solutions",
            author: "Lena Nairn",
            role: "Nairn Constructions, Founder & COO",
            logo: "/images/pageOne/testimonials/nairn-constructions.png",
        },
        {
            quote: "Completely digitalised our organisation systems",
            author: "Habeeb Yusuf",
            role: "Premiere Learning Institute, Founder",
            logo: "/images/pageOne/testimonials/premier-learning-institute.png",
        },
    ];
    return (
        <section className="relative min-h-screen bg-[#F5F1E8] px-16 py-20 pt-[15vh]">
            {/* heading */}
            <div className="mx-auto mt-15 mb-25 max-w-2xl text-center">
                <h2 className="text-6xl font-normal leading-tight mb-6 tracking-wide text-[#232323] lg:text-6xl">
                    TESTIMONIALS
                </h2>
                <p className="text-base leading-relaxed text-[#232323]">
                    Lorem ipsum dolor sit amet consectetur. Eget fringilla neque eget bibendum pharetra pretium. Dignissim consequat.
                </p>
            </div>

            {/* cards */}
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 lg:flex-row">
                {quoteData.map((t, idx) => (
                    <QuoteCard key={idx} {...t} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
