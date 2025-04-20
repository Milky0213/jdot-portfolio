import React from 'react';
// Components
import IconCard from './IconCard';
import EmptyIconCard from './EmptyIconCard';
import Button from '../ui/Button';
import LineConnector from "../services/LineConnector"
// Icons
import { SiMongodb, SiNextdotjs } from "react-icons/si";
import { FaLaravel, FaJs } from "react-icons/fa";
import { Database } from 'lucide-react';
import { SiLaravel, SiJavascript, SiReact } from "react-icons/si";

const Services = () => {
    return (
        <div className="bg-[#F7F9FC]">
            <section className="w-full bg-stone-100 text-gray-900 py-20 px-10">
                {/* <div className="h-[1024px] relative bg-stone-100">
                    <IconCard>
                        <Database className="text-gray-400 text-3xl transition-colors duration-700 group-hover:text-green-600" />
                    </IconCard>
                    <div data-ative="positve" className="w-28 h-28 p-2.5 left-[1004.50px] top-[224px] absolute bg-neutral-800 rounded-lg shadow-[0px_2px_12px_0px_rgba(0,0,0,0.20)] inline-flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-3">
                            <div data-size="48" className="w-8 h-8 relative overflow-hidden">
                                <FaLaravel color="#FF3528" className="text-3xl" />
                            </div>
                            <div className="self-stretch text-center justify-start text-stone-100 text-xs font-medium  capitalize">Laravel</div>
                        </div>
                    </div>
                    <div data-ative="negative" className="w-24 h-24 p-2.5 left-[904.50px] top-[97px] absolute rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-2">
                            <div className="inline-flex flex-col justify-start items-start overflow-hidden">
                                <div className="outline outline-[2.50px] outline-offset-[-1.25px] outline-neutral-400"></div>
                            </div>
                        </div>
                    </div>
                    <div data-ative="negative" className="w-16 h-16 p-1.5 left-[280px] top-[54px] absolute rounded-md outline outline-[0.70px] outline-offset-[-0.70px] outline-neutral-400 inline-flex flex-col justify-center items-center gap-1.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-1.5">
                            <div className="inline-flex flex-col justify-start items-start overflow-hidden">
                                <div className="outline outline-2 outline-offset-[-0.88px] outline-neutral-400"></div>
                            </div>
                        </div>
                    </div>
                    <div data-ative="negative" className="w-24 h-24 p-2.5 left-[1317px] top-[570px] absolute rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-2">
                            <div className="inline-flex flex-col justify-start items-start overflow-hidden">
                                <div className="outline outline-[2.50px] outline-offset-[-1.25px] outline-neutral-400"></div>
                            </div>
                        </div>
                    </div>
                    <div data-ative="negative" className="w-24 h-24 p-2.5 left-[1134px] top-[167px] absolute rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-2">
                            <div className="inline-flex flex-col justify-start items-start overflow-hidden">
                                <div className="outline outline-[2.50px] outline-offset-[-1.25px] outline-neutral-400"></div>
                            </div>
                        </div>
                    </div>
                    <div data-ative="negative" className="w-24 h-24 p-2.5 left-[140px] top-[104px] absolute rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-2">
                            <div className="inline-flex flex-col justify-start items-start overflow-hidden">
                                <div className="outline outline-[2.50px] outline-offset-[-1.25px] outline-neutral-400"></div>
                            </div>
                        </div>
                    </div>
                    <div data-ative="negative" className="w-24 h-24 p-2.5 left-[230px] top-[836px] absolute rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-2">
                            <div className="inline-flex flex-col justify-start items-start overflow-hidden">
                                <div className="outline outline-[2.50px] outline-offset-[-1.25px] outline-neutral-400"></div>
                            </div>
                        </div>
                    </div>
                    <div data-ative="negative" className="w-16 h-16 p-1.5 left-[80px] top-[778px] absolute rounded-md outline outline-[0.70px] outline-offset-[-0.70px] outline-neutral-400 inline-flex flex-col justify-center items-center gap-1.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-1.5">
                            <div className="inline-flex flex-col justify-start items-start overflow-hidden">
                                <div className="outline outline-2 outline-offset-[-0.88px] outline-neutral-400"></div>
                            </div>
                        </div>
                    </div>
                    <div data-ative="negative" className="w-24 h-24 p-2.5 left-[24px] top-[357px] absolute rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-2">
                            <div className="inline-flex flex-col justify-start items-start overflow-hidden">
                                <div className="outline outline-[2.50px] outline-offset-[-1.25px] outline-neutral-400"></div>
                            </div>
                        </div>
                    </div>
                    <div data-ative="negative" className="w-16 h-16 p-2 left-[930px] top-[936px] absolute rounded-md outline outline-[0.72px] outline-offset-[-0.72px] outline-neutral-400 inline-flex flex-col justify-center items-center gap-2">
                        <div className="self-stretch flex flex-col justify-center items-center gap-1.5">
                            <div className="inline-flex flex-col justify-start items-start overflow-hidden">
                                <div className="outline outline-2 outline-offset-[-0.90px] outline-neutral-400"></div>
                            </div>
                        </div>
                    </div>
                    <div data-ative="positve" className="w-28 h-28 p-2.5 left-[1176.50px] top-[836px] absolute bg-neutral-800 rounded-lg shadow-[0px_2px_12px_0px_rgba(0,0,0,0.20)] inline-flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-3">
                            <div data-size="48" className="w-8 h-8 relative overflow-hidden">
                                <FaJs color="#F3E229" className="text-3xl" />
                            </div>
                            <div className="self-stretch text-center justify-start text-stone-100 text-xs font-medium  capitalize">JavaScript</div>
                        </div>
                    </div>
                    <div data-ative="negative" className="w-16 h-16 p-1.5 left-[1337px] top-[27px] absolute rounded-md outline outline-[0.70px] outline-offset-[-0.70px] outline-neutral-400 inline-flex flex-col justify-center items-center gap-1.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-1.5">
                            <div className="inline-flex flex-col justify-start items-start overflow-hidden">
                                <div className="outline outline-2 outline-offset-[-0.88px] outline-neutral-400"></div>
                            </div>
                        </div>
                    </div>
                    <div data-property-1="SD" className="left-[289.50px] top-[281px] absolute inline-flex flex-col justify-start items-start gap-3">
                        <div className="self-stretch justify-center text-neutral-800 text-3xl font-normal ">OUR SERVICES</div>
                        <div className="justify-start text-neutral-800 text-6xl font-medium  capitalize">software development</div>
                        <div className="w-80 justify-start text-neutral-800 text-base font-normal ">Lorem ipsum dolor sit amet consectetur. Purus sagittis eget ut iaculis.</div>
                    </div>
                    <div data-ative="positve" className="w-28 h-28 p-2.5 left-[195px] top-[540px] absolute bg-neutral-800 rounded-lg shadow-[0px_2px_12px_0px_rgba(0,0,0,0.20)] inline-flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-3">
                            <div data-size="48" className="w-8 h-8 relative overflow-hidden">
                                <SiNextdotjs color="white" className="text-3xl" />
                            </div>
                            <div className="self-stretch text-center justify-start text-stone-100 text-xs font-medium  capitalize">Next JS</div>
                        </div>
                    </div>
                    <div data-ative="negative" className="w-24 h-24 p-2.5 left-[418px] top-[632px] absolute bg-stone-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-400 backdrop-blur-[3.20px] inline-flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-center items-center gap-2">
                            <div className="inline-flex flex-col justify-start items-start overflow-hidden">
                                <div className="outline outline-[2.50px] outline-offset-[-1.25px] outline-neutral-400"></div>
                            </div>
                        </div>
                    </div>
                    {/* <div data-property-1="No fill" className="w-80 h-14 p-3 left-[551px] top-[833px] absolute bg-white/0 rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-500 backdrop-blur-lg inline-flex justify-center items-center gap-5 overflow-hidden">
        <div></div>
    </div> 
                    <Button title="Get Started" />
                    <div className="w-[534.95px] h-72 left-[682px] top-[454px] absolute">
                        <div className="w-96 h-72 left-[85.21px] top-0 absolute bg-gradient-to-br from-indigo-600 to-neutral-800"></div>
                        <div className="w-96 h-12 left-[85.21px] top-0 absolute bg-gradient-to-r from-zinc-300/40 to-indigo-700/40 backdrop-blur-[48.92px]"></div>
                        <div className="w-3 h-3 left-[115.20px] top-[17.36px] absolute bg-white rounded-full"></div>
                        <div className="w-3 h-3 left-[138.87px] top-[17.36px] absolute bg-white rounded-full"></div>
                        <div className="w-3 h-3 left-[162.54px] top-[17.36px] absolute bg-white rounded-full"></div>
                        <div className="w-72 h-0 left-[209.88px] top-[23.67px] absolute rounded-3xl outline outline-[12.62px] outline-offset-[-6.31px] outline-white"></div>
                        <div className="w-52 h-32 left-[121.51px] top-[91.53px] absolute bg-violet-300"></div>
                        <div className="w-56 h-32 left-0 top-[105.73px] absolute bg-indigo-500"></div>
                        <div className="w-56 h-24 left-0 top-[146.76px] absolute border-[47.34px] border-stone-900"></div>
                        <div className="w-8 h-8 left-[69.43px] top-[130.98px] absolute bg-stone-100 rounded-full"></div>
                        <div className="w-24 h-1.5 left-[200.41px] top-[162.54px] absolute bg-stone-100"></div>
                        <div className="w-24 h-1.5 left-[200.41px] top-[175.16px] absolute bg-stone-100"></div>
                        <div className="w-16 h-1.5 left-[200.41px] top-[187.79px] absolute bg-stone-100"></div>
                        <div className="left-[386.62px] top-[108.88px] absolute justify-start text-stone-100 text-6xl font-bold ">Aa</div>
                    </div>
                </div>*/}
                <div className="mb-5 h-28 flex items-center">
                    <IconCard label="Mongo DB">
                        <Database className="text-gray-400 text-3xl transition-colors duration-700 group-hover:text-green-600" />
                    </IconCard>
                    <EmptyIconCard>
                        <Database className="text-gray-400 text-3xl" />
                    </EmptyIconCard>
                    <IconCard label="Next JS">
                        <SiNextdotjs className="text-gray-400 text-3xl transition-colors duration-700 group-hover:text-black" />
                    </IconCard>
                </div>
                <div className="mb-5 h-28 flex items-center">
                    <IconCard label="Laravel">
                        <SiLaravel className="text-gray-400 text-3xl transition-colors duration-700 group-hover:text-red-600" />
                    </IconCard>
                    <EmptyIconCard>
                        <Database className="text-gray-400 text-3xl" />
                    </EmptyIconCard>
                    <IconCard label="JavaScript">
                        <SiJavascript className="text-gray-400 text-3xl transition-colors duration-700 group-hover:text-yellow-500" />
                    </IconCard>
                    <EmptyIconCard>
                        <Database className="text-gray-400 text-3xl" />
                    </EmptyIconCard>
                    <IconCard label="React">
                        <SiReact className="text-gray-400 text-3xl transition-colors duration-700 group-hover:text-blue-400" />
                    </IconCard>
                </div>
                <div className="mb-5 h-28 w-1/3 flex items-center">
                    
                </div>




            </section>
        </div>
    );
};

export default Services;
