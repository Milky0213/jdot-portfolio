"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
// Components
import IconCard from './IconCard';
import Button from '../../ui/Button';
// Data
import { contentOptions } from './Data/contentOptions';
// Icons
import { SiRender, SiTailwindcss, SiExpress, SiTwilio, SiNextdotjs, SiLaravel, SiJavascript, SiReact } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { DiMysql } from "react-icons/di";
import CustomIcon from './CustomIcon';
import { AwsIcon } from './AWSIcon';
import { MongoDBIcon } from './MongoDBIcon';
import { FigmaIcon } from './FigmaIcon';
import { PostmanIcon } from './PostmanIcon';

const Services = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const current = contentOptions[currentSet];

    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.target;
        // Check if user has scrolled to near the bottom
        if (scrollTop + clientHeight >= scrollHeight - 50) {
            setCurrentSet((prev) => (prev + 1) % contentOptions.length);
        }
    };

    const handleSwitch = () => {
        setCurrentSet((prev) => (prev + 1) % contentOptions.length);
    };

    const isActive = (name) => !!current.activeIcons[name];

    return (
        <div className="h-screen overflow-y-scroll" onScroll={handleScroll}>
            <section className="w-full h-screen bg-[#F5F1E8] text-gray-900 py-10 px-10">
                {/* Row 1 */}
                <div className="h-28 flex items-center justify-between">
                    <div className="w-full ml-75">
                        <IconCard label="Github" active={isActive('github')} activeColor='text-grey-800'>
                            <IoLogoGithub />
                        </IconCard>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="w-full"></div>
                        <div className="w-full">
                        </div>
                        <div className="flex justify-end">
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <IconCard label="Mongo DB" active={isActive('mongoDB')} multiColor={true}>
                            <MongoDBIcon />
                        </IconCard>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="h-28 -mt-7 flex items-center justify-between">
                    <div className="w-full ml-25">
                        <IconCard label="Laravel" active={isActive('laravel')} activeColor='text-red-600'>
                            <SiLaravel />
                        </IconCard>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="w-full"></div>
                        <div className="w-full mr-35">
                            <IconCard label="JavaScript" active={isActive('javaScript')} activeColor='text-yellow-500'>
                                <SiJavascript />
                            </IconCard>
                        </div>
                        <div className="flex justify-end">
                            <IconCard label="React" active={isActive('react')} activeColor='text-blue-400'>
                                <SiReact />
                            </IconCard>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                    </div>
                </div>

                {/* Row 3 */}
                <div className="h-28 flex items-center ml-[72%] mt-6">
                    <div className="">
                        <IconCard label="MySQL" active={isActive('mySQL')} activeColor='text-teal-600'>
                            <DiMysql />
                        </IconCard>
                    </div>
                    <div className="ml-10 -mt-30">
                        <IconCard label="Tailwind" active={isActive('tailwind')} activeColor='text-sky-400'>
                            <SiTailwindcss />
                        </IconCard>
                    </div>
                </div>

                {/* Text Section Around 4rd Row */}
                <div className="relative mb-10 -mt-13 flex items-center gap-6">
                    <div className="-mb-20">
                        <IconCard label="Next JS" active={isActive('nextJS')} activeColor='text-black'>
                            <SiNextdotjs />
                        </IconCard>
                    </div>
                    <div className="ml-35">
                        <h2 className="text-[32px] font-normal text-left text-[#232323]">OUR SERVICES</h2>
                        <AnimatePresence mode="wait">
                            <motion.div
                            key={currentSet}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <h1 className="text-[64px] font-medium text-left text-[#232323]">{current.title}</h1>
                                <p className="text-[16px] font-normal text-left max-w-md text-[#232323]">{current.description}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* Row 4 */}
                <div className="mb-35 ml-45 h-28 flex items-center justify-between">
                    <div className="w-full flex justify-start">
                        <IconCard label="Expo" active={isActive('expo')} activeColor='text-custom-dark-blue'>
                            <CustomIcon svgPath={"M121.309 84.673c2.094-3.086 4.385-3.478 6.244-3.478c1.86 0 4.957.392 7.051 3.478c16.502 22.667 43.742 67.819 63.835 101.126c13.104 21.72 23.168 38.403 25.233 40.526c7.751 7.97 18.382 3.003 24.559-6.037c6.081-8.9 7.77-15.15 7.77-21.817c0-4.54-88.106-168.4-96.979-182.039C150.49 3.314 147.71 0 133.106 0h-10.93c-14.56 0-16.665 3.314-25.198 16.432C88.106 30.072 0 193.93 0 198.472c0 6.666 1.688 12.916 7.77 21.816c6.177 9.04 16.808 14.007 24.559 6.037c2.065-2.123 12.13-18.806 25.233-40.526c20.093-33.307 47.245-78.46 63.747-101.126"} />
                        </IconCard>
                        <div className="ml-30 mt-15">
                            <IconCard label="Render" active={isActive('render')} activeColor='text-black'>
                                <SiRender />
                            </IconCard>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSet}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 100, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <img src={current.image} alt="Cover Image" className={current.imageHeight} />
                            </motion.div>
                        </AnimatePresence>

                    </div>
                    <div className="w-[15%] ml-15">
                        <IconCard label="Twilio" active={isActive('twilio')} activeColor='text-red-600'>
                            <SiTwilio />
                        </IconCard>
                    </div>
                </div>

                {/* Row 5 */}
                <div className="relative h-28 flex items-center justify-between w-full">
                    {/* Left Section */}
                    <div className="flex items-end gap-4 ml-4 mb-5 relative w-full">
                        {/* New upper-left icon */}
                        <div className="ml-8 mb-15"> {/* push it up */}
                            <IconCard label="Figma" active={isActive('figma')} multiColor={true}>
                                <FigmaIcon />
                            </IconCard>
                        </div>

                        {/* Amazon Web Service Icon (slightly closer to button) */}
                        <div className="ml-15">
                            <IconCard label="Amazon Web Service" active={isActive('aws')} multiColor={true}>
                                <AwsIcon />
                            </IconCard>
                        </div>
                    </div>

                    {/* Center Button */}
                    <div className="flex-1 flex justify-center self-start mt-1.5 w-full ">
                        <Button title="Get Started" mode="light" onPress={handleSwitch}/>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-start mr-4 relative w-full mt-35">
                        {/* "?" Icon slightly to the right */}
                        <div className="ml-8">
                            <IconCard label="Postman" active={isActive('postman')} multiColor={true}>
                                <PostmanIcon />
                            </IconCard>
                        </div>

                        {/* Spacer to push Express JS to the far right */}
                        <div className="ml-auto -mt-12">
                            <IconCard label="Express JS" active={isActive('express')} activeColor="text-gray-800">
                                <SiExpress />
                            </IconCard>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Services;