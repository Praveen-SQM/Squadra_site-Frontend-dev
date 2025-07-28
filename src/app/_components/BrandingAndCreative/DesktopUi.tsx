import React from "react";
import BrandingCarousel from "./components/BrandingCarousel";
import OurServices from "./components/OurServices";
import ScrollQuoteSelector from "./components//ScrollableQuoteNavigation";
import OurLatestWork from "./components/OurLatestWork";
import { InfiniteSliderBasic } from "./components/TrustedBy";
import VideoPlayer from "../_landingPageComponents/VideoPlayer";
const DesktopUi = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
            {/* Carousel Background */}
            {/* {carouselImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <Image
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                />
              </div>
            ))} */}
            <VideoPlayer/>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
      
            {/* Content */}
            {/* <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 sm:px-12  lg:px-12 xl:px-14 2xl:px-32">
                <div className="max-w-3xl pt-60 md:pt-60 lg:pt-72">
                  <h1
                   className="text-left text-4xl font-extralight tracking-tight text-white sm:text-5xl sm:leading-tight md:text-6xl md:text-[72px] md:leading-[86px] lg:text-7xl lg:leading-[82px]">
                    Smart Solutions For <br className="md:inline" /> Your{" "}
                    <span className="text-[#FBAE17]">Brand</span>
                  </h1>
                  <p className="sm:mt-6 mt-3 text-left text-lg text-[#FAFAFA] sm:text-[14px] leading-[20px] md:text-xl sm:max-w-full max-w-[340px]">
                    We handle the journey, so you can enjoy the destination.
                  </p>
                </div>
              </div>
            </div> */}
      
          
          </div>
      <div className="h-fit flex flex-col  w-full  items-center bg-black">
        <div
          className="max-w-[1200px] flex flex-col items-center py-[57px] lg:py-[161px] bg-black"
          // style={{ height: "655px" }}
        >
          <p className="text-white text-[32px] md:text-[42px] lg:text-[62px] px-[20px] md:px-10 text-center md:text-start font-semibold">
            Crafting visually stunning, strategically sound solutions{" "}
            <strong className="font-semibold text-gray-500">
              that elevate your brand to the next level.
            </strong>
          </p>
        </div>
        <BrandingCarousel />
        <OurServices />
        <div className="hidden md:flex md:flex-col w-full">
          <ScrollQuoteSelector />
        </div>
        <OurLatestWork />
        <div className="flex flex-col pt-10">
          <p className="w-full text-center text-white text-[12px]">Trusted by</p>
          <InfiniteSliderBasic />
        </div>
      </div>
    </>
  );
};

export default DesktopUi;
