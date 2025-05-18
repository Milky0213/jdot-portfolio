import React from 'react';

const ReasonCard = ({ title, description }) => {
    return (
        <div className="bg-[#f5f2ea] p-8 relative hover:cursor-default group">
            {/* Black dash at the top right - changes to purple on hover */}
            <div className="absolute top-8 right-8 w-45 h-4 bg-black group-hover:bg-[#625AFF] transition-colors duration-300"></div>

            <div className="pt-16"> {/* Added padding-top to account for dash placement */}
                {/* Title */}
                <h2 className="text-2xl font-medium text-black mb-6 leading-none">{title}</h2>

                {/* Description */}
                <p className="text-base font-normal text-black mb-8 leading-normal">{description}</p>

                {/* Black dot - changes to purple on hover */}
                <div className="w-10 h-10 rounded-full bg-black group-hover:bg-[#625AFF] transition-colors duration-300"></div>
            </div>
        </div>
    );
};

export default ReasonCard;