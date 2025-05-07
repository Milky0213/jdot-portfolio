import React, { useState } from 'react';

const IconCard = ({ children, label, active = false, activeColor = "", multiColor = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Determine icon styling based on active, hover, and multiColor state
    const baseClass = "text-3xl transition-all duration-700";

    const iconClass = !multiColor
        ? `${baseClass} ${active || isHovered ? activeColor : "text-gray-400"}`
        : baseClass;

    const icon = React.cloneElement(children, {
        className: [children.props.className || "", iconClass].join(" "),
        style: multiColor && !(active || isHovered)
            ? { filter: "grayscale(100%)", opacity: 0.4 }
            : {},
    });

    return (
        <div
            className={`w-25 h-25 p-2.5 relative bg-white border rounded-lg inline-flex flex-col justify-center items-center transition-all duration-300 ease-in-out transform ${active || isHovered
                    ? "border-transparent shadow-lg scale-112"
                    : "border-[#C3CCD8] hover:scale-112 hover:shadow-lg"
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <div
                    className={`absolute flex items-center justify-center w-8 h-8 top-1/2 transform transition-all duration-300 ${active || isHovered ? "-translate-y-[1.75rem]" : "-translate-y-1/2"
                        }`}
                >
                    {icon}
                </div>

                <div
                    className={`absolute mt-10 top-1/3 transform -translate-y-1/2 text-center text-neutral-800 text-xs font-medium capitalize transition-opacity duration-300 ${active || isHovered ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {label}
                </div>
            </div>
        </div>
    );
};

export default IconCard;
