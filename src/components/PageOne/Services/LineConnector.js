import React from "react";
import '../../../styles/pageOne/services/lineConnector.css';

const SVGLine = () => {
    return (
        <svg width="400" height="100">
            <defs>
                <linearGradient id="myGradient" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#5752C4" />
                    <stop offset="100%" stopColor="#4419e1" />
                </linearGradient>
            </defs>
            <line
                id="animatedLine"
                x1="10"
                y1="50"
                x2="390"
                y2="50"
                stroke="url(#myGradient)"
                strokeWidth="5"
            />
        </svg>
    );
};

export default SVGLine;
