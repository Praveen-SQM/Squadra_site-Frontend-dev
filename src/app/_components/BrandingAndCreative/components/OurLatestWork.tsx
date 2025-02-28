import Image from "next/image";
import React from "react";

const ourWorkImages = [
  {
    src: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/latestWork-1.webp",
    alt: "Image 1",
  },
  {
    src: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/latestWork-2.webp",
    alt: "Image 2",
  },
  {
    src: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/latestWork-3.webp",
    alt: "Image 3",
  },
  {
    src: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/latestWork-4.webp",
    alt: "Image 4",
  },
  {
    src:"https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/latestWork-5.webp"
    ,alt:"Image 5"
  },
  {
    src: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/latestWork-6.webp"
    , alt: "Image 6"
  },
  {
    src: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/latestWork-7.webp"
    , alt: "Image 7"
  },
  {
    src: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/latestWork-8.webp"
    , alt: "Image 8"
  }
];

const OurLatestWork = () => {
  return (
    <div className="h-fit flex flex-col w-full items-center bg-black">
      <div className="w-full max-w-7xl flex flex-col gap-6 items-center py-[72px] lg:py-40 bg-black">
        <div className="bg-white px-4 py-1 md:px-6 md:py-2 rounded-lg text-[12px] md:text-[14px] lg:text-[16px] font-semibold">
          TOP RATED
        </div>
        <p className="text-6xl text-white text-center">Our Latest works</p>
        <p className="text-gray-500 max-w-96 text-center">
          Expand and win in every market with optimised checkout and payments.
        </p>
      </div>

      {/* Images Section */}
      <div className="w-full px-6 py-12 flex flex-col">
        {[0, 2].map((rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap ">
            <div
              className={`h-[363px] md:h-[721px] lg:h-[468px] py-4 lg:py-2 lg:pr-2 w-full rounded-xl overflow-hidden ${
                rowIndex === 0 ? "lg:w-1/3" : "lg:w-2/3"
              }`}
            >
              <Image quality={100}
              unoptimized
              width={200}
              height={200}
                src={ourWorkImages[rowIndex].src}
                alt={ourWorkImages[rowIndex].alt}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div
              className={`h-[157px] md:h-[400px] lg:h-[468px] w-full py-4 lg:py-2 lg:pl-2 rounded-xl overflow-hidden ${
                rowIndex === 0 ? "lg:w-2/3" : "lg:w-1/3"
              }`}
            >
              <Image 
              unoptimized
              width={200}
              height={200}
                src={ourWorkImages[rowIndex + 1].src}
                alt={ourWorkImages[rowIndex + 1].alt}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        ))}

{[4, 6].map((rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap ">
            <div
              className={`h-[363px] md:h-[721px] lg:h-[468px] py-4 lg:py-2 lg:pr-2 w-full rounded-xl overflow-hidden ${
                rowIndex === 0 ? "lg:w-1/3" : "lg:w-2/3"
              }`}
            >
              <Image 
              unoptimized
              width={200}
              height={200}
                src={ourWorkImages[rowIndex].src}
                alt={ourWorkImages[rowIndex].alt}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div
              className={`h-[157px] md:h-[400px] lg:h-[468px] w-full py-4 lg:py-2 lg:pl-2 rounded-xl overflow-hidden ${
                rowIndex === 0 ? "lg:w-2/3" : "lg:w-1/3"
              }`}
            >
              <Image 
              unoptimized
              width={200}
              height={200}
                src={ourWorkImages[rowIndex + 1].src}
                alt={ourWorkImages[rowIndex + 1].alt}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>

      <button className="px-[20px] py-[16px] rounded-xl bg-white hidden">
        View all works ⟶
      </button>
    </div>
  );
};

export default OurLatestWork;
