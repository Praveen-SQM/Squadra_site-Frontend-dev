import Image from "next/image";
import React from "react";
import BrandPotentialFirstImage from "@/utilities/images/Brand-potential_1.png";
import BrandPotentialSecondImage from "@/utilities/images/Brand-potential_2.png";
import BrandPotentialThirdImage from "@/utilities/images/Brand-Potential_3.png";
import Link from "next/link";

const UnleashPotential = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* First Section with Text */}
      <div className="bg-black text-center py-10 md:py-15 lg:mt-24">
        <div className="max-w-[902px] mx-auto flex flex-col items-center justify-center">
          <h1 className="text-white px-4 text-[clamp(30px,7vw,72px)] sm:leading-[72px] md:leading-[92px] lg:leading-[92px] font-normal uppercase text-center align-middle font-[SF Pro Text] ">
            Unleashing the Full Potential of Your Brand.
          </h1>
          <p className="text-[#D1D1D1] text-[14px] md:text-[16px] lg:text-[18px] leading-[19.2px] font-medium text-center align-middle max-w-[315px] md:max-w-[473px] mt-8 md:mt-8 lg:mt-8 font-[SF Pro Text]">
            We don’t just run campaigns; we build connections between your brand
            and your audience.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="py-6 md:py-20 w-full max-w-[1400px] mx-auto">
        <div className="lg:flex justify-between w-full">
          {/* Image 1 */}
          <div className="relative lg:w-1/2 h-[480px] md:h-[500px] mt-0 lg:mt-[-10px] lg:h-[565px] xl:h-[845px] m-2 md:m-4 rounded-lg">
            <Image
              unoptimized
              src={BrandPotentialFirstImage}
              alt="Image 1"
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute   pb-8 pt-28 md:pb-6 md:pt-24 lg:pt-28 xl:pb-12 xl:pt-36 top-0 left-0 w-full h-full flex flex-col justify-between items-center">
              <h2 className="text-white font-bold text-[clamp(18px,3vw,36px)] leading-[clamp(30px,4vw,48px)] uppercase max-w-[386px] text-center">
                Your Brand in the <br />
                Spotlight
              </h2>
              <Link href="/contact-us">
                <div className="flex items-center justify-center w-[136px] h-[40px] md:w-[176px] md:h-[60px] rounded-[8px] md:rounded-[12px] bg-white cursor-pointer mt-6">
                  <span className="text-[clamp(12px,3.5vw,16px)] font-bold uppercase px-[clamp(12px,4vw,24px)] py-[clamp(6px,2vw,12px)] rounded-lg">
                    Connect us
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative  lg:w-1/2 h-[480px] md:h-[500px] lg:h-[540px] xl:h-[820px] m-2 md:m-4 rounded-lg">
            <Image
              unoptimized
              src={BrandPotentialSecondImage}
              alt="Image 2"
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute pb-10 pt-20 md:pb-6 md:pt-12 xl:pb-12 xl:pt-24 top-0 left-0 w-full h-full flex flex-col justify-between items-center">
              <div>
                <h2 className="text-[#BEBEBE] font-bold uppercase text-center max-w-[376px] pt-2 text-[clamp(16px,3vw,36px)] leading-[clamp(20px,5vw,48px)] tracking-[0%]">
                  Where PR Meets <br />
                  Digital Power.
                </h2>
                <p className="text-center mt-1 font-medium text-[clamp(14px,3.5vw,16px)] leading-[clamp(18px,4vw,22px)] tracking-[0%]">
                  Digital PR Power
                </p>
              </div>
              <Link href="/contact-us">
                <div className="flex items-center justify-center w-[136px] h-[40px] md:w-[176px] md:h-[60px] rounded-[12px] bg-white cursor-pointer mt-6">
                  <span className="text-[clamp(12px,3.5vw,16px)] font-bold uppercase px-[clamp(12px,4vw,24px)] py-[clamp(6px,2vw,12px)] rounded-lg">
                    Connect us
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative h-[200px] md:h-[500px] lg:h-[600px] xl:h-[800px] mx-2 md:mx-4 mt-6 rounded-lg">
          <Image
            unoptimized
            src={BrandPotentialThirdImage}
            alt="Image 3"
            className="w-full h-full object-contain rounded-lg"
          />
          <div className="absolute p-4 md:p-10 top-0 left-0 w-full h-full flex flex-col justify-center items-start">
            <h2 className="text-white font-bold text-[clamp(14px,4vw,36px)] leading-[clamp(20px,5vw,48px)] mb-0 md:mb-12 uppercase max-w-[686px] text-start">
              Amplify Your Voice, Dominate the Digital.
            </h2>
            <Link href="/contact-us">
              <div className="flex items-center justify-center w-[120px] h-[36px] md:w-[176px] md:h-[60px] rounded-[10px] md:rounded-[12px] bg-white cursor-pointer mt-6">
                <span className="text-[clamp(11px,3vw,14px)] md:text-[clamp(12px,3.5vw,16px)] font-bold uppercase px-[clamp(10px,3vw,20px)] py-[clamp(4px,1.5vw,8px)] md:px-[clamp(12px,4vw,24px)] md:py-[clamp(6px,2vw,12px)] rounded-md md:rounded-lg">
                  Connect us
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnleashPotential;
