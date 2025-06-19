import React from "react";
import Image from "next/image";
// Icons
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const { imageSource, service, serviceLevel, apis, title } = project;

    return (
        <div className="overflow-hidden group">
        <a
            href="#"
            className="block mb-10 rounded-lg overflow-hidden group cursor-pointer"
        >
            <div className="relative w-full h-200 text-[#F5F1E8] rounded-lg overflow-hidden">
                <Image
                    src={imageSource}
                    alt="Project"
                    width="1200"
                    height="800"
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                    priority
                />

                {/* White glow from bottom */}
                <div
                    className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#232323] to-transparent 
          opacity-96 transition-all duration-300 group-hover:h-24 pointer-events-none rounded-b-lg"
                ></div>

                {/* Title aligned bottom left on top of glow */}
                <h3
                    className="absolute bottom-7 left-4 text-xl font-semibold z-10 pointer-events-none group-hover:bottom-12 transition-all duration-300"
                >
                    {title}
                </h3>
                <div className="absolute bottom-5 left-4 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-row">
                <p
                    className="text-sm font-semibold"
                >
                    Read More
                </p>
                    <FaArrowRight className="-mt-[-2px] ml-1"/>
                </div>
            </div>
        </a>

            {/* Details section */}
            <div className="mt-10 space-y-2 text-sm text-[#F5F1E8] font-medium flex flex-row">
                <div>
                    <span className="font-semibold">Service:</span> {service}
                </div>
                <div>
                    <span className="font-semibold ml-10">Service Level:</span> {serviceLevel}
                    
                </div>
                <div>
                    <span className="font-semibold ml-10">API's:</span> {apis}
                </div>
            </div>
            </div>
    );
};

export default ProjectCard;
