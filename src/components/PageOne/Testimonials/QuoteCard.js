import React from "react";

const QuoteCard = ({ quote, author, role, logo }) => (
    <div className="relative flex flex-col justify-between text-[#F5F1E8]
                  w-full max-w-lg min-w-[27rem] min-h-[17rem]
                  rounded-xl bg-[#232323] px-8 py-10 shadow-lg">

        <span className="absolute -top-5 right-6 text-7xl font-bold text-[#625AFF] leading-none select-none">”</span>

        {/* quote */}
        <p className="text-lg font-medium leading-relaxed">
            {quote}
        </p>

        <div className="mt-auto flex items-center gap-4 pt-8">
            {logo ? (
                <img
                    src={logo}
                    alt={`${author} logo`}
                    className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
                />
            ) : (
                <div className="h-14 w-14 flex-shrink-0 rounded-full bg-[#F5F1E8]" />
            )}
            <div>
                <h4 className="text-base font-semibold">{author}</h4>
                <span className="text-sm">{role}</span>
            </div>
        </div>
    </div>
);


export default QuoteCard;