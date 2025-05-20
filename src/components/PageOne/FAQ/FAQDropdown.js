"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ title, description }) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (open && contentRef.current) {
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
        } else if (contentRef.current) {
            contentRef.current.style.maxHeight = "0px";
        }
    }, [open]);

    return (
        <div
            className={`rounded-lg px-6 py-4 cursor-pointer transition-all duration-[350ms] ${open ? "bg-[#F5F1E8]" : "bg-[#625AFF]"
                }`}
        >
            <div
                className="flex justify-between items-center"
                onClick={() => setOpen(!open)}
            >
                <h3
                    className={`font-medium transition-colors duration-[350ms] ${open ? "text-[#232323]" : "text-[#F5F1E8]"
                        }`}
                >
                    {title}
                </h3>
                <ChevronDown
                    className={`transition-transform duration-[350ms] ${open ? "rotate-180 text-[#232323]" : "text-[#F5F1E8]"
                        }`}
                />
            </div>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-[650ms] ease-in-out max-h-0"
                style={{ willChange: "max-height" }}
            >
                <p
                    className={`mt-4 transition-colors duration-[350ms] ${open ? "text-[#232323]" : "text-[#F5F1E8]"
                        }`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FAQItem;
