import React from 'react';

const CustomIcon = ({ className, svgPath }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35.47"
        height="32"
        viewBox="0 0 256 231"
        className={className}
        fill="currentColor" // Keep this to allow CSS classes to control the color
    >
        <path d={svgPath} />
    </svg>
);

export default CustomIcon;