import React from "react";
// Components
import ReasonCard from "./ReasonCard";

const WhyUs = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#F5F1E8] px-16 py-20 text-[#101828]">
            {/* Header */}
            <div className=" justify-between items-start mb-16">
                <h2 className="text-3xl font-normal mb-3 leading-none">WHY CHOOSE</h2>
                <h1 className="text-6xl font-normal">J DOT</h1>
                <h1 className="text-6xl font-normal">DEVELOPMENT?</h1>
            </div>
            <div className="">
                <div className="flex flex-row">
                    <ReasonCard title="Reason 01" description="Lorem ipsum dolor sit amet consectetur. Proin id ut tortor facilisi varius erat scelerisque non. Ultricies feugiat libero sed ornare massa turpis ut." />
                    <ReasonCard title="Reason 02" description="Lorem ipsum dolor sit amet consectetur. Proin id ut tortor facilisi varius erat scelerisque non. Ultricies feugiat libero sed ornare massa turpis ut." />
                </div>
                <div className="flex flex-row">
                    <ReasonCard title="Reason 03" description="Lorem ipsum dolor sit amet consectetur. Proin id ut tortor facilisi varius erat scelerisque non. Ultricies feugiat libero sed ornare massa turpis ut." />
                    <ReasonCard title="Reason 04" description="Lorem ipsum dolor sit amet consectetur. Proin id ut tortor facilisi varius erat scelerisque non. Ultricies feugiat libero sed ornare massa turpis ut." />
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
