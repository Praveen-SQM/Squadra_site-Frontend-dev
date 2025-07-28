import Image from "next/image";
import React from "react";
import strategizeImage from "@/utilities/images/strategize-image_.jpg";
import optimizeImage from "@/utilities/images/optimize-image_.jpg";
import amplifyImage from "@/utilities/images/amplify-image_.png";
import yourBrandImage from "@/utilities/images/your-brand-image_.jpg";


const WhatWeDo = () => {
  const cards = [
    {
      image: strategizeImage,
      topText: "Your brand",
      bottomText: "Strategize",
    },
    {
      image: optimizeImage,
      topText: "Your brand",
      bottomText: "Optimize",
    },
    {
      image: amplifyImage,
      topText: "Your brand",
      bottomText: "Amplify",
    },
    {
      image: yourBrandImage,
      topText: "Branding",
      bottomText: "Your brand",
    },
  ];

  return (
    <div className="w-full max-w-[1400px] bg-black py-20">
      {/* Heading */}
      <div className="text-center text-white uppercase text-[clamp(32px,5vw,64px)] leading-[100%] tracking-[0.01em] font-semibold mb-14 align-middle font-[SF Pro Text]">
        WHAT WE DO
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 px-4">
        {cards.map((card, index) => (
          <div key={index} className="relative h-[310px] md:h-[404px] lg:h-[434px] xl:h-[484px]">
            {/* Image */}
            <Image
              fill
              src={card.image}
              alt={`What We Do ${index + 1}`}
              className="w-full h-full object-cover rounded-[22px]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00000075] rounded-[22px]"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col  items-center justify-center text-white text-center px-4 rounded-[22px]">
              <div className="backdrop-blur-[2px]">
                {/* Top Text */}
              <div className="font-[SF Pro Text] font-normal text-[clamp(12px,1.4vw,18px)] leading-[1.2] uppercase mb-2">
                {card.topText}
              </div>

              {/* Bottom Text */}
              <div className="font-[SF UI Display] font-extrabold text-[clamp(24px,10vw,48px)] leading-[100%] uppercase">
                {card.bottomText}
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
