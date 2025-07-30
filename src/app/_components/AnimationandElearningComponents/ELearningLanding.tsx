"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/utilities/images/ContentCraetionPage_Hero.jpg";
const ELearningLanding = () => {
  return (
    // <div className="relative min-h-[100vh] 3xl:min-h-[100vh] lg:min-h-[120vh] 2xl-min-h-[600px] max-h-[600px] flex items-center justify-center bg-neutral-900  overflow-hidden w-full">
    //   <FloatingBackground />
    //   <div className="w-full h-full absolute flex flex-col justify-between max-w-6xl 3xl:min-w-[1590px] text-white px-4 ">
    //     <div className="h-[400px] w-2 lg:h-[600px] "></div>
    //     <motion.div
    //       className="max-w-4xl mx-auto flex flex-col items-center text-center 3xl:max-w-[1200px] 3xl:mt-[10rem]   "
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //     >

    //       <motion.h1
    //         className="text-4xl 3xl:text-[72px] 3xl:min-w-[1200px] 3xl:leading-[96px] md:text-5xl lg:text-5xl font-[600] mb-6"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ delay: 0.4 }}
    //       >
    //         Skills and compliance training for every need.
    //       </motion.h1>

    //       <motion.p
    //         className="text-gray-100 mb-6 3xl:mb-8 max-w-2xl s mx-auto 3xl:text-[24px] font-[500] leading-[150%] 3xl:min-w-[1000px]"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ delay: 0.6 }}
    //       >
    //         Comprehensive training content to enhance skills, ensure compliance,
    //         and meet diverse learning needs.
    //       </motion.p>
    //       <Link href="/contact-us">
    //         <GradientBorder className="">
    //           <motion.button
    //             className="bg-gray-900 text-white px-8 py-3 rounded-full font-[700] hover:bg-gray-800 transition-colors 3xl:text-[18px] 3xl:leading-[42px] 3xl:py-[10.67px]"
    //             initial={{ opacity: 0, scale: 0.9 }}
    //             animate={{ opacity: 1, scale: 1 }}
    //             transition={{ delay: 0.8 }}
    //             whileHover={{ scale: 1.05 }}
    //             whileTap={{ scale: 0.95 }}
    //           >
    //             Contact Now
    //           </motion.button>
    //         </GradientBorder>
    //       </Link>
    //     </motion.div>
    //     <div className="">
    //       <Image
    //         width={200}
    //         src={LMS_img}
    //         alt="LMS Dashboard"
    //         className="w-full h-full min-w-[678px] "
    //       />
    //     </div>
    //   </div>
    // </div>

    // {/* Hero Section */}
    <div className="relative h-screen w-full  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
        <Image
          src={HeroImage}
          alt="Carousel image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Gradient Overlay: 60% height from bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[70%] sm:h-[60%] pointer-events-none bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(102,102,102,0)]" />

      {/* Content */}
      <div className="flex flex-col gap-[150px] absolute inset-0 pt-16 sm:pt-[100px] md:pt-[80px] lg:pt-[60px] xl:pt-[40px] 2xl:pt-[20px]  xl:mt-[420px] lg:mt-[30%] md:mt-[304px] sm:mt-[104px] mt-[230px]">
        <div className="flex flex-col justify-center items-center  xl:gap-[56px] lg:gap-[42px] md:gap-[42px] sm:gap-[42px] gap-[44px]">
          <div className="flex flex-col xl:gap-1 lg:gap-1 md:gap-2  items-center">
            <p className="font-manrope font-bold text-[clamp(32px,4vw,40px)] leading-[clamp(48px,5vw,72px)] text-center text-[#FFFFFF] max-w-[990px] w-full px-4 lg:px-2 align-middle">
              Skills and compliance training for every need.
            </p>
            <div className="py-[10px]">
              <p
                className="font-manrope font-normal text-[clamp(14px,4vw,20px)] leading-[28px] 
    text-[#FFFFFFCC] text-center 
    xl:max-w-[700px] lg:max-w-[469px] md:max-w-[469px] sm:max-w-[469px] max-w-[370px]"
              >
                Comprehensive training content to enhance skills, ensure
                compliance, and meet diverse learning needs.
              </p>
            </div>
            <Link href="/contact-us">
              <button className="bg-[#FCC94D] font-manrope text-[#000000] font-[600] rounded-[40px] px-[35px] py-[10px] mt-8 shadow-[10px_14px_44px_0px_#A89D9826] hover:bg-[#f9cd5e] transition-colors  h-[48px] gap-[10px] 3xl:text-[14px] 3xl:leading-[42px] 3xl:py-[10.67px]">
                Contact Now
              </button>
            </Link>
          </div>

          {/* <div
                  onClick={() => router.push("/openings")}
                  className="w-[333px] h-[62px] px-[92px] py-[12px] 
    rounded-[44px] border-[0.5px] border-[#FFFFFF] 
    bg-[#FBAE17] flex items-center justify-center 
    gap-[8px] cursor-pointer"
                >
                  <p className="font-medium text-[18px] leading-[18px] text-[#000000]">
                    All openings
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-black"
                  >
                    <path
                      d="M4 12.8789H20M20 12.8789L14 6.87891M20 12.8789L14 18.8789"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default ELearningLanding;
