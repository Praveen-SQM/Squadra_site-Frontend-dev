'use client'
import Image from "next/image";
import { useState } from "react";

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState("Backend");

    const tabs = ["Backend", "Frontend", "Mobile", "DevOps", "Analytics & Engagement"];
    const backendTools = [
        { name: "Node.js", logo: "https://nodejs.org/static/images/logo.svg" },
        { name: "Express.js", logo: "https://dummyimage.com/64x64/000/fff&text=EX" },
        { name: "Python", logo: "https://www.python.org/static/favicon.ico" },
        { name: "GraphQL", logo: "https://graphql.org/img/logo.svg" },
        { name: "MongoDB", logo: "https://www.mongodb.com/assets/images/global/favicon.ico" },
        { name: "MySQL", logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
    ];

    return (
        <div className="flex flex-col items-center w-[1192px] h-[404px] bg-[#FAFAFA]">
            {/* Tabs */}
            <div className="flex  w-[1192px] space-x-20 border-b border-[#F3EBDC] mb-6 ">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`text-[24px]  leading-[28px] py-[30px] px-4 ${activeTab === tab
                            ? "border-b-2 border-[#FBAE17] text-[#06135B] font-semibold"
                            : "text-[#A1A1A1]"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Cards for Backend */}
            {activeTab === "Backend" && (
                <div className="w-[1192px] flex flex-wrap justify-center mt-[50px] gap-[50px]">
                    {backendTools.map((tool) => (
                        <div
                            key={tool.name}
                            className="flex w-[150px] bg-white h-[150px] flex-col border-1 border-[#E8E8E8] items-center justify-center gap-[8px] border rounded-lg p-4"
                        >
                            <Image
                                src={tool.logo}
                                alt={tool.name}
                                width={64} 
                                height={64}
                                className="object-contain"
                            />
                            <span className="text-[#888888] font-[14px] leading-[16.71px]">{tool.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TabComponent;
