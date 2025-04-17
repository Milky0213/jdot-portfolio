import React from "react";
// Icons
import { Database } from 'lucide-react';

const EmptyIconCard = () => {
    return (
        <div
            data-active="positive"
            className="group w-25 h-25 p-2.5 relative rounded-lg transition-all duration-350 inline-flex flex-col justify-center items-center gap-2.5"
        >
            <div className="self-stretch flex flex-col justify-center items-center gap-3">
                <div className="w-8 h-8 relative overflow-hidden flex items-center justify-center transition-all duration-350">
                    <Database className="text-white" color="#F7F9FC" />
                </div>
                <div className="text-center text-neutral-800 text-xs font-medium  capitalize opacity-0">
                    Mongo DB
                </div>
            </div>
        </div>
    );
};

export default EmptyIconCard;
