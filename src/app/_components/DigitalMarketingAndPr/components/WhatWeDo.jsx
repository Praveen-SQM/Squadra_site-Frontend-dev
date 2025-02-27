import Image from "next/image";
import React from "react";
import YourBrandImage from "@/utilities/images/your-brand-image.svg";
import amplifyImage from "@/utilities/images/amplify-image.svg";
import optimizeImage from "@/utilities/images/optimize-image.svg";
import stratizeImage from "@/utilities/images/strategize-image.svg";

const WhatWeDo = () => {
  // Image URLs (replace with your actual image URLs)
  const images = [
    stratizeImage,
    optimizeImage,
    amplifyImage,
    YourBrandImage
  ];

  // Text to display over each image
  // const textOverlays = ["STRATEGY", "CREATIVITY", "ANALYTICS", "OPTIMIZATION"];

  return (
    <div className="w-full max-w-[1400px] bg-black py-20">
      {/* Centered "WHAT WE DO" Heading */}
      <div className="text-center text-white uppercase text-xl font-bold mb-10">
        WHAT WE DO
      </div>

      {/* Grid of Images with Text Overlays */}
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 px-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-[310px] md:h-[560px] lg:h-[681px]">
            {/* Image */}
            <Image fill
              src={image}
              alt={`What We Do ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-5xl md:text-8xl lg:text-9xl font-bold uppercase text-center">
                {textOverlays[index]}
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
