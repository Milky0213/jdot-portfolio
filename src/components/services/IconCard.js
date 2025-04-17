const IconCard = ({ children, label }) => {
    return (
        <div
            data-active="positive"
            className="group w-25 h-25 p-2.5 relative bg-white border border-[#C3CCD8] rounded-lg transition-all duration-300 ease-in-out transform hover:scale-112 hover:shadow-lg hover:border-transparent hover:bg-white inline-flex flex-col justify-center items-center gap-2.5"
        >
            <div className="self-stretch flex flex-col justify-center items-center gap-3">
                <div className="w-8 h-8 relative overflow-hidden flex items-center justify-center transition-all duration-300">
                    {/* Ensure the icon is sized and centered */}
                    {children}
                </div>
                <div className="text-center text-neutral-800 text-xs font-medium capitalize opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {label}
                </div>
            </div>
        </div>
    );
};

export default IconCard;
