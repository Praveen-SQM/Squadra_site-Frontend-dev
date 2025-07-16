import React from "react";
import OurMethodology from "./components/OurMethodology";
import WhatWeDo from "./components/WhatWeDo";
import { InfiniteSliderBasic } from "./components/TrustedBy";
import { ArrowDown } from "lucide-react";
// import OurLatestWork from "./components/OurLatestWork"
// import TrustedBy from "./components/TrustedBy"
import WorkTogether from "./components/WorkTogether";
import UnleashPotential from "./components/UnleashPotential";   
import Link from "next/link";
const DesktopUi = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-white">
  {/* Video background */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/DigitalMarketingAndPr_Hero.mp4" type="video/mp4" />
  </video>

  {/* Black overlay with 20% opacity */}
  <div className="absolute inset-0 bg-black opacity-20 z-0" />

  {/* Content over video and overlay */}
  <div className="absolute inset-0 flex flex-col pt-[64px] items-center justify-around text-center z-10">
    <p className="transparent">.</p>
    <div className="s md:p-8 lg:p-12 flex flex-col items-center lg:gap-4">
      <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-[100%] tracking-[-0.02em] text-white w-[300px] md:w-full mb-4 uppercase text-center align-middle font-[SF UI Display]">
        We connect your brand with your audience.
      </h1>
      <div className="lg:max-w-[600px] md:p-x-8">
        <p className="text-[clamp(13px,3.5vw,20px)] font-normal font-sf leading-[100%] tracking-normal w-[300px] md:w-full text-center align-middle  text-[#EFEFEF]">
          We don&apos;t just run campaigns; we build connections between your
          brand and your audience.
        </p>
      </div>
    </div>
    <Link
      href="#explore"
      className="text-white flex gap-2 mb-4 text-[13px] justify-center w-[300px] md:w-full md:text-[16px] animate-bounce-slow"
    >
      <ArrowDown size={20} />
      Scroll to explore
      <ArrowDown size={20} />
    </Link>
  </div>
</div>

      
      <div className="h-fit flex flex-col  w-full  items-center bg-black">
        <div className="max-w-[1370px] flex flex-col items-center py-20 md:py-[161px] bg-black">
          <p style={{ fontFamily: "'Anton', sans-serif" }} className="text-[#809FFF] py-4 text-[16px] md:text-[20px] leading-[16.64px] font-anton font-normal tracking-normal text-center align-middle uppercase  mb-2">
            SQUADRA MEDIA
          </p>

          <p className="text-[clamp(24px,6vw,70px)] px-16 lg:px-0 tracking-[-0.02em] leading-[30px] md:leading-[66px] font-[800] text-center uppercase text-white">
            <strong className=" text-[#6D6D6D]">
              We&apos;re all about{" "}
            </strong>
            bringing your brand{" "}
            <strong className="font-[800] text-[#6D6D6D]">
              to life in the digital space with a{" "}
            </strong>
            fresh approach.
          </p>
        </div>
        <div id="explore" className="w-full">
        <OurMethodology />
        </div>
        <UnleashPotential />
        <WhatWeDo />
        <InfiniteSliderBasic />
        <WorkTogether/>
      </div>
    </>
  );
};

export default DesktopUi;
