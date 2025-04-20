import React from "react";

const Button = ({ title, textColor = "text-black", onPress }) => {
    return (
        <button onClick={onPress} className={`w-80 h-14 p-3 bg-white/0 rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-500 backdrop-blur-lg inline-flex justify-center items-center gap-5 overflow-hidden hover:bg-[#635BFF] transition-all duration-300 cursor-pointer ${textColor}`}>
            {title}
        </button>
    );
};

export default Button;
