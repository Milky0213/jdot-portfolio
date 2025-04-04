import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import { Instrument_Sans } from 'next/font/google';

// Import the Instrument_Sans font
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
});

const HomePage = () => {
  return (
    <div className={instrumentSans.className}>
      <HeroSection />
      {/* Next Section with White Background */}
      <section className="w-full bg-stone-100 text-gray-900 py-20 px-10">
      <div className="w-[1440px] h-[1024px] relative bg-stone-100 overflow-hidden">
    <div data-ative="positve" className="w-28 h-28 p-2.5 left-[649.50px] top-[89px] absolute bg-neutral-800 rounded-lg shadow-[0px_2px_12px_0px_rgba(0,0,0,0.20)] inline-flex flex-col justify-center items-center gap-2.5">
        <div className="self-stretch flex flex-col justify-center items-center gap-3">
            <div data-size="48" className="w-8 h-8 relative overflow-hidden">
                <div className="w-6 h-7 left-[4.25px] top-[2.83px] absolute outline outline-2 outline-offset-[-1.06px] outline-stone-100"></div>
            </div>
            <div className="self-stretch text-center justify-start text-stone-100 text-xs font-medium font-['Instrument_Sans'] capitalize">Lorem ispum</div>
        </div>
    </div>
    <div data-ative="positve" className="w-28 h-28 p-2.5 left-[1004.50px] top-[224px] absolute bg-neutral-800 rounded-lg shadow-[0px_2px_12px_0px_rgba(0,0,0,0.20)] inline-flex flex-col justify-center items-center gap-2.5">
        <div className="self-stretch flex flex-col justify-center items-center gap-3">
            <div data-size="48" className="w-8 h-8 relative overflow-hidden">
                <div className="w-7 h-4 left-[2.83px] top-[8.50px] absolute outline outline-[3px] outline-offset-[-1.50px] outline-stone-100"></div>
            </div>
            <div className="self-stretch text-center justify-start text-stone-100 text-xs font-medium font-['Instrument_Sans'] capitalize">Lorem ispum</div>
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
                <div className="w-7 h-7 left-[2.83px] top-[2.83px] absolute outline outline-[3px] outline-offset-[-1.50px] outline-stone-100"></div>
            </div>
            <div className="self-stretch text-center justify-start text-stone-100 text-xs font-medium font-['Instrument_Sans'] capitalize">Lorem ispum</div>
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
        <div className="self-stretch justify-center text-neutral-800 text-3xl font-normal font-['Instrument_Sans']">OUR SERVICES</div>
        <div className="justify-start text-neutral-800 text-6xl font-medium font-['Instrument_Sans'] capitalize">software development</div>
        <div className="w-80 justify-start text-neutral-800 text-base font-normal font-['Instrument_Sans']">Lorem ipsum dolor sit amet consectetur. Purus sagittis eget ut iaculis.</div>
    </div>
    <div data-ative="positve" className="w-28 h-28 p-2.5 left-[195px] top-[540px] absolute bg-neutral-800 rounded-lg shadow-[0px_2px_12px_0px_rgba(0,0,0,0.20)] inline-flex flex-col justify-center items-center gap-2.5">
        <div className="self-stretch flex flex-col justify-center items-center gap-3">
            <div data-size="48" className="w-8 h-8 relative overflow-hidden">
                <div className="w-6 h-7 left-[4.25px] top-[2.83px] absolute outline outline-2 outline-offset-[-1.06px] outline-stone-100"></div>
            </div>
            <div className="self-stretch text-center justify-start text-stone-100 text-xs font-medium font-['Instrument_Sans'] capitalize">Lorem ispum</div>
        </div>
    </div>
    <div data-ative="negative" className="w-24 h-24 p-2.5 left-[418px] top-[632px] absolute bg-stone-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-400 backdrop-blur-[3.20px] inline-flex flex-col justify-center items-center gap-2.5">
        <div className="self-stretch flex flex-col justify-center items-center gap-2">
            <div className="inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="outline outline-[2.50px] outline-offset-[-1.25px] outline-neutral-400"></div>
            </div>
        </div>
    </div>
    <div data-property-1="No fill" className="w-80 h-14 p-3 left-[551px] top-[833px] absolute bg-white/0 rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-500 backdrop-blur-lg inline-flex justify-center items-center gap-5 overflow-hidden">
        <div></div>
    </div>
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
        <div className="left-[386.62px] top-[108.88px] absolute justify-start text-stone-100 text-6xl font-bold font-['Instrument_Sans']">Aa</div>
    </div>
</div>
      </section>
    </div>
  );
};

export default HomePage;
