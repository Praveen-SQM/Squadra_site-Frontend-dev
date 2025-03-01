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
      <div className="relative w-full h-screen bg-white mt-[64px]">
      <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/sq+2.mov"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-between text-center">
          <p className="transparent">.</p>
          <div className="s">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white w-[300px] md:w-full mb-4">
              We connect your brand with your audience.
            </h1>
            <p className="sm:text-[13px] md:text-[16px] lg:text-xl text-white w-[300px] md:w-full">
              We don&apos;t just run campaigns; we build connections between your
              brand and your audience.
            </p>
          </div>
          <Link href="#explore" className="text-white flex gap-2 mb-4 text-[13px] justify-center w-[300px] md:w-full md:text-[16px]">
          <ArrowDown size={20}/> Scroll to explore
        </Link>
        </div>
     
      </div>
      
      <div className="h-fit flex flex-col  w-full  items-center bg-black">
        <div className="max-w-[1300px] flex flex-col items-center py-20 md:py-[161px] bg-black">
          <p className="text-white text-sm md:text-[16px] mb-2">
            SQUADRA MEDIA
          </p>

          <p className="text-white text-[24px] md:text-[55px] lg:text-[62px] px-16 lg:px-0 leading-[30px] md:leading-[66px] font-bold text-center uppercase">
            <strong className="font-semibold text-gray-500">
              We&apos;re all about{" "}
            </strong>
            bringing your brand{" "}
            <strong className="font-semibold text-gray-500">
              to life in the digital space with a{" "}
            </strong>
            fresh approach.
          </p>
        </div>
        <div id="explore">
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
