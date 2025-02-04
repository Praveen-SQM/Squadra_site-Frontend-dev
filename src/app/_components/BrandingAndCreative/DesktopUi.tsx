import React from "react";
import BrandingCarousel from "./components/BrandingCarousel"
import OurServices from "./components/OurServices"
import ScrollableNavigation from "./components//ScrollableQuoteNavigation"
import OurLatestWork from "./components/OurLatestWork"
import TrustedBy from "./components/TrustedBy"
const DesktopUi = () => {
  return (
    <>
      <div className="h-fit pt-16 flex flex-col  w-full  items-center bg-white">
        <div
          className="w-[1200px] flex flex-col items-center mb-[88px]"
          style={{ height: "calc(100vh - 145px)" }}
        >
          DesktopUi
        </div>
      </div>
      <div className="h-fit flex flex-col  w-full  items-center bg-black">
        <div
          className="w-[1500px] flex flex-col items-center py-[161px] bg-black"
          style={{ height: "655px" }}
        >
          <p className="text-white text-[62px] font-semibold">
            Crafting visually stunning, strategically sound solutions{" "}
            <strong className ="font-semibold text-gray-500">that elevate your brand to the next level.</strong>
          </p>
        </div>
        <BrandingCarousel/>
        <OurServices/>
        <ScrollableNavigation/>
        <OurLatestWork/>
        <TrustedBy/>
      </div>
    </>
  );
};

export default DesktopUi;
