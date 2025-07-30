import React from "react";
import Image from "next/image";
import unifiedSolution from "../../../utilities/icons/group-blue.svg";
import startIcon from '@/utilities/icons/starIcon.png'
import boxIcon from '@/utilities/icons/boxIcon.png'

const benefitsData = [
  {
    icon: unifiedSolution,
    title: "Unified Solution",
    description:
      "Single provider for technology and content ensures consistency.",
  },
  {
    icon: startIcon,
    title: "Enhanced Engagement",
    description:
      "Content complements LMS capabilities, keeping learners engaged.",
  },
  {
    icon: boxIcon,
    title: "Scalability",
    description: "Both LMS and content can grow with your organization.",
  },
  {
    icon: unifiedSolution,
    title: "Cost Efficiency",
    description:
      "Bundling reduces overall costs compared to sourcing separately.",
  },
];

const LMSBenefits = () => {
  return (
    <div className="max-w-6xl mx-auto xl:px-0 px-4 py-[120px] 3xl:min-w-[1590px]">
      <div className="text-center max-w-[610px] mx-auto space-y-4 mb-12 flex flex-col items-center">
        <h1 style={{ fontFamily: "'Manrope', sans-serif" }} className="text-3xl sm:text-4xl font-[550] text-[#1D1A27] lg:text-[42px] 3xl:text-[56px] 3xl:max-w-[1080px] lg:leading-[120%] 3xl:leading-[100%]">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Combine
          </span>{" "}
          LMS and Content for Maximum Impact
        </h1>
        <p className=" w-full text-sm px-4 sm:text-base lg:max-w-2xl text-[#4A4852] 3xl:text-[21px] 3xl:leading-[32px]">
          Our LMS and e-learning content development services work hand-in-hand
          to create a seamless and efficient training ecosystem.
        </p>
      </div>

      <div className="relative grid sm:grid-cols-2 gap-20 sm:gap-24 mt-16">
        {/* Center Icon with Concentric Circles */}
        <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 3xl:w-[300px] 3xl:h-[300px] ">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full bg-[#F3F2FF] animate-expand-outer"></div>

          {/* Middle circle */}
          <div className="absolute inset-7 rounded-full bg-neutral-100 animate-expand-middle"></div>

          {/* Inner circle with icon */}
          <div className="absolute inset-7 3xl:inset-24 rounded-full bg-[#E0DEFF] flex items-center justify-center animate-expand-inner">
            {/* <Image src={logoWhite} alt="Icon" width={60} height={60} /> */}
          </div>
        </div>

        {/* Benefits Cards */}
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className={`flex h-[100px] sm:h-[160px] item-center ${
              index % 2 !== 0 && "justify-end"
            } `}
          >
            <div
              key={index}
              className="absolute z-10 bg-white rounded-2xl p-4 h-full max-h-36 sm:p-6  shadow-[0px_4.25px_31.86px_0px_#00000014] max-w-[230px] lg:max-w-[350px] 3xl:min-w-[489.9114990234375px]"
            >
              <div className="flex items-center gap-3 font-semibold mb-2">
                <div className="p-2 w-[53.1px] h-[53.1px] bg-[#EDEBFF]  flex justify-center items-center rounded-md">
                  {benefit.icon === unifiedSolution ? (
                    <Image
                      width={25}
                      src={unifiedSolution}
                      alt=""
                      className="h-6"
                    />
                  ) : ( <Image
                      width={25}
                      src={benefit.icon}
                      alt=""
                      className="p-[2px]"
                    />)}
                </div>
                <h3 className="font-bold text-base lg:text-[18px] 3xl:text-[24px]">{benefit.title}</h3>
              </div>{" "}
              <p className="text-gray-500 sm:text-gray-600 font-medium sm:font-normal text-sm lg:text-[14px] 3xl:text-[18px]">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
        <div className="absolute z-0 sm:py-12 w-full h-full">
          <div className="flex h-1/2 w-full items-center justify-center gap-36">
            <div className="border border-gray-200 h-full w-full border-l-0 border-b-0 rounded-r-lg relative">
              {/* <div className="absolute w-1 h-1 rounded-full bg-blue-200 shadow shadow-blue-500 -mt-[3px] animate-[moveRight_6s_linear_infinite]" /> */}
            </div>
            <div className="border border-gray-200 h-full w-full border-r-0 rounded-l-lg border-b-0 relative">
              {/* <div className="absolute w-1 h-1 rounded-full bg-blue-200 shadow shadow-blue-500 -mt-[3px] animate-[moveLeft_6s_linear_infinite]" /> */}
            </div>
          </div>
          <div className="flex h-1/2 w-full items-center justify-center gap-36">
            <div className="border border-gray-200 h-full w-full border-l-0 rounded-r-lg border-t-0 relative">
              {/* <div className="absolute w-1 h-1 rounded-full bg-blue-200 shadow shadow-blue-500 -mt-[3px] animate-[moveRight_6s_linear_infinite]" /> */}
            </div>
            <div className="border border-gray-200 h-full w-full border-r-0 rounded-l-lg border-t-0 relative">
              {/* <div className="absolute w-1 h-1 rounded-full bg-blue-200 shadow shadow-blue-500 -mt-[3px] animate-[moveLeft_6s_linear_infinite]" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMSBenefits;
