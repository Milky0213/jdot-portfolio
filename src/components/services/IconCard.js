const IconCard = ({ children, label }) => {
    return (
        <div
            className="group w-25 h-25 p-2.5 relative bg-white border border-[#C3CCD8] rounded-lg transition-all duration-300 ease-in-out transform hover:scale-112 hover:shadow-lg hover:border-transparent hover:bg-white inline-flex flex-col justify-center items-center"
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 group-hover:-translate-y-[1.75rem] flex items-center justify-center w-8 h-8">
                    {children}
                </div>
                <div className="absolute top-1/3 transform -translate-y-1/2 mt-10 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="text-center text-neutral-800 text-xs font-medium capitalize">
                        {label}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default IconCard;
