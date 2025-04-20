"use client";
import React, { useState } from 'react';
// Components
import IconCard from './IconCard';
import EmptyIconCard from './EmptyIconCard';
import Button from '../ui/Button';
import LineConnector from "../services/LineConnector"
// Icons
import { SiMongodb, SiNextdotjs, SiLaravel, SiJavascript, SiReact } from "react-icons/si";
import { FaLaravel, FaJs } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Database } from 'lucide-react';

const Services = () => {
    const [laravel, setLaravel] = useState(true);
    const [javaScript, setJavaScript] = useState(false);
    const [nextJS, setNextJS] = useState(false);
    const [mongoDB, setMongoDB] = useState(false);
    const [react, setReact] = useState(true);
    const X = () => {
        setLaravel(prev => !prev);
        setJavaScript(prev => !prev);
        setNextJS(prev => !prev);
        setMongoDB(prev => !prev);
        setReact(prev => !prev);
    }
    return (
        <div className="bg-[#F7F9FC]">
            <section className="w-full min-h-screen bg-stone-100 text-gray-900 py-20 px-10">
                {/* Row 1 */}
                <div className="h-28 flex items-center justify-between">
                    <div className="w-full ml-25">
                        <IconCard label="Laravel" active={laravel} activeColor='text-red-600'>
                            <SiLaravel />
                        </IconCard>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="w-full">

                        </div>
                        <div className="w-full">
                            <IconCard label="JavaScript" active={javaScript} activeColor='text-yellow-500'>
                                <SiJavascript />
                            </IconCard>
                        </div>
                        <div className="flex justify-end">
                            <IconCard label="React" active={react} activeColor='text-blue-400'>
                                <SiReact />
                            </IconCard>
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <IconCard label="Mongo DB" active={mongoDB} activeColor='text-green-600'>
                            <Database />
                        </IconCard>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="h-28 flex items-center ml-[72%]">
                    <IconCard label="Next JS" active={nextJS} activeColor='text-black'>
                        <SiNextdotjs />
                    </IconCard>
                </div>

                {/* Text Section Around 3rd Row */}
                <div className="relative mb-10 flex items-center gap-6">
                    <IconCard label="Fill">
                        <AiFillQuestionCircle className="text-gray-400 text-3xl" />
                    </IconCard>
                    <div className="ml-35">
                        <h2 className="text-[32px] font-normal text-left">OUR SERVICES</h2>
                        <h1 className="text-[64px] font-medium text-left">Software Development</h1>
                        <p className="text-[16px] font-normal text-left max-w-md">
                            Lorem ipsum dolor sit amet consectetur. Purus sagittis eget ut iaculis.
                        </p>
                    </div>
                </div>


                {/* Row 3 */}
                <div className="mb-25 ml-45 h-28 flex items-center justify-between">
                    <div className="w-full flex justify-start">
                        <IconCard label="Fill">
                            <AiFillQuestionCircle className="text-gray-400 text-3xl" />
                        </IconCard>
                    </div>
                    <div className="w-full">
                        <img src="/images/services/SoftwareDevCI.png" alt="Software Development Cover Image" className="h-70" />
                    </div>
                    <div className="w-[15%] ml-15">
                        <IconCard label="Fill">
                            <AiFillQuestionCircle className="text-gray-400 text-3xl" />
                        </IconCard>
                    </div>
                </div>

                {/* Row 4*/}
                <div className="mb-5 h-28 flex items-center justify-between w-full">
                    <IconCard label="Fill">
                        <AiFillQuestionCircle className="text-gray-400 text-3xl" />
                    </IconCard>
                    <Button title="Get Started" onPress={X}/>
                    <IconCard label="Fill">
                        <AiFillQuestionCircle className="text-gray-400 text-3xl" />
                    </IconCard>
                </div>
            </section>
        </div>
    );
};

export default Services;
