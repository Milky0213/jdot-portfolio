import React from 'react';

const IconCard = ({ children, label, active = false, activeColor = "" }) => {
    const iconClass = active
        ? `text-3xl ${activeColor} transition-colors duration-700`
        : `text-3xl text-gray-400 transition-colors duration-700 group-hover:${activeColor}`;

    const icon = React.cloneElement(children, {
        className: [children.props.className || "", iconClass].join(" "),
    });

    return (
        <div
            className={`w-25 h-25 p-2.5 relative bg-white border rounded-lg inline-flex flex-col justify-center items-center transition-all duration-300 ease-in-out transform ${active
                    ? "border-transparent shadow-lg scale-112"
                    : "border-[#C3CCD8] group hover:scale-112 hover:shadow-lg hover:border-transparent"
                }`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <div
                    className={`absolute flex items-center justify-center w-8 h-8 top-1/2 transform transition-all duration-300 ${active
                            ? "-translate-y-[1.75rem]"
                            : "group-hover:-translate-y-[1.75rem] -translate-y-1/2"
                        }`}
                >
                    {icon}
                </div>

                <div
                    className={`absolute mt-10 top-1/3 transform -translate-y-1/2 text-center text-neutral-800 text-xs font-medium capitalize transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                >
                    {label}
                </div>
            </div>
        </div>
    );
};

export default IconCard;

