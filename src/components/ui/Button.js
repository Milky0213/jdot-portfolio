import React from "react";

const Button = ({ title, onPress, mode = "dark" }) => {
    // Set text color based on mode
    const textColorClass = mode === "dark" ? "text-white" : "text-black hover:text-white";

    return (
        <button
            onClick={onPress}
            className={`w-80 h-14 p-3 bg-white/0 rounded-xl outline outline-1 outline-offset-[-1px] outline-[#625AFF] backdrop-blur-lg inline-flex justify-center items-center gap-5 overflow-hidden hover:bg-[#625AFF] transition-all duration-300 cursor-pointer ${textColorClass}`}
        >
            {title}
        </button>
    );
};

export default Button;