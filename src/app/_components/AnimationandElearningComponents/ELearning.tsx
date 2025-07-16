"use client";
import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../utilities/images/ContentCreationPage_TraningContent_1.png";
import image2 from "../../../utilities/images/Training-containt-2.svg";
import image3 from "../../../utilities/images/Training-containt-3.svg";
import image4 from "../../../utilities/images/ContentCreationPage_TraningContent_4.png";
import image5 from "../../../utilities/images/Training-containt-5.svg";
import Image from "next/image";
import Link from "next/link";

const TrainingContent = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="max-w-[1300px] 3xl:min-w-[1580px] flex flex-col items-center justify-center mx-auto mt-4 md:mt-12 lg:mt-16 py-24">
      <motion.div
        className="text-center mb-16 max-w-2xl  3xl:min-w-[900px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl text-[#1D1A27]  font-[500] mb-4 leading-[120%] 3xl:leading-[68px] 3xl:text-[64px] " style={{ fontFamily: "'Manrope', sans-serif" }}>
          Training <span style={{
                    background: "linear-gradient(89.86deg, #EE3CD1 6.14%, #635BFF 84.43%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                }}>content</span>, ready when
          you need it.
        </h1>
        <p style={{ fontFamily: "'Manrope', sans-serif" }} className="text-[#4A4852] font-normal mt-6 px-4  md:text-[16px] lg:text-[18px]">
          Access the right training materials instantly, ensuring seamless
          learning anytime.
        </p>
      </motion.div>

      <div className="max-w-7xl  px-4 py-8 3xl:min-w-[1580px]">
        <div className="w-full md:flex gap-[18px]">
          {/* First Feature Card */}
          <motion.div
            className="bg-[#F4F5FF] md:flex gap-[33px] rounded-[28px]  border border-[#E9E9E9] mb-5 hover:shadow-sm transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0 }}
          >
            {/* Image First on Mobile */}
            <div className="flex items-center order-1 md:order-2 w-full h-full justify-center pr-[35px] pl-[35px] pt-[20px] lg:pt-[66px] lg:pb-[55px] md:pl-0 md:pr-[19px] lg:pr-[31px]">
              <Image
                src={image1}
                alt="image1"
                width={343}
                height={313}
                className="object-fit w-auto h-full md:object-contain"
              />
            </div>

            {/* Text Below Image on Mobile */}
            <div className="pl-[30px] order-2 md:order-1 lg:pl-[46px] py-[37px] lg:py-[73px] 3xl:min-w-[450.2px]">
              <h3 style={{ fontFamily: "Manrope, sans-serif" }} className="text-2xl font-semibold mb-2 3xl:text-[28px]">Visual Learning</h3>
              <p style={{ fontFamily: "Manrope, sans-serif" }} className="text-[#4A4852] lg:text-md mb-4 3xl:text-[22px] 3xl:leading-[34px]">
              Engage learners with 2D animations and gamified experiences.
              </p>
              <ul style={{ fontFamily: "Manrope, sans-serif" }} className="space-y-2 mb-4 text-sm lg:text-[16px]  font-medium 3xl:text-[22px] 3xl:leading-[27px]">
                <li className="flex items-center text-[#1D1A27]">
                  <span className="w-1.5 h-1.5  bg-black rounded-full mr-3" />
                  2D Animations
                </li>
                <li className="flex items-center text-[#1D1A27]">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
                  Gamified Learning
                </li>
              </ul>
              <Link href="/contact-us">
                <button style={{ fontFamily: "Manrope, sans-serif" }} className="mt-4 bg-[#FFFFFF] w-[145.62px] h-[56.65px] gap-[11.65px] pt-[9.32px] pr-[23.31px] pb-[9.32px] pl-[23.31px] rounded-[46.62px] shadow-[11.65px_16.32px_51.28px_0px_#A89D9826] opacity-100 hover:bg-[#F4F5FF] font-medium text-[16px] transition-colors 3xl:text-[22px] 3xl:leading-[100%] 3xl:py-[12px] 3xl:mt-[38px]">
                  Contact Now
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Second Feature Card */}
          <motion.div
            className="bg-[#F4F5FF] md:flex flex-col justify-between border border-[#E9E9E9] rounded-[28px] p-[15px] lg:p-[46px] mb-5 hover:shadow-sm transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <div className="md:flex w-full h-full items-center px-[70px] pt-[20px] md:px-0 md:py-0 justify-center">
              <Image
                src={image2}
                alt="image2"
                height={186}
                width={270}
                className="object-contain w-auto h-full "
              />
              {/* <Image
                src={image2}
                alt="image2"
                height={186}
                width={270}
                className="w-auto h-full md:w-[196px] md:h-[116px] lg:w-[270px] lg:h-[186px] 3xl:h-[249.2675018310547px] 3xl:w-[361.072509765625px]"
              /> */}
            </div>
            <div className="">
              <h3 style={{ fontFamily: "Manrope, sans-serif" }} className="text-2xl font-semibold mb-2 3xl:text-[28px] 3xl:text-[28px]">Microlearning</h3>
              <p style={{ fontFamily: "Manrope, sans-serif" }} className="text-[#4A4852] lg:text-md mb-4 3xl:text-[22px] 3xl:leading-[34px]">
              Offers brief, targeted lessons for quick, efficient learning on-the-go.
              </p>
            </div>
          </motion.div>
        </div>
        {/* Third Feature Card */}
        <div className="md:flex gap-[18px]">
          <motion.div
            className="bg-[#F4F5FF] md:flex flex-col justify-between border border-[#E9E9E9] rounded-[28px] p-[12px] lg:p-[46px] mb-5 hover:shadow-sm transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center px-[62px] py-[20px] md:px-0 md:py-0  ">
              <Image src={image3} alt="image2" height={152} width={286} className="3xl:min-h-[203.19639587402344px] 3xl:min-w-[382.2571105957031px]"/>
            </div>
            <div className="">
              <h3 style={{ fontFamily: "Manrope, sans-serif" }} className="text-2xl font-semibold mb-2 3xl:text-[28px]">
                Assessments and Materials
              </h3>
              <p style={{ fontFamily: "Manrope, sans-serif" }} className="text-[#4A4852]  lg:text-md mb-4 3xl:text-[22px] 3xl:leading-[34px]">
              Evaluate progress with assessments and offer resources like eBooks.
              </p>
            </div>
          </motion.div>

          {/* Fourth Feature Card */}
          <motion.div
            className="bg-[#F4F5FF] md:flex flex-col justify-between border border-[#E9E9E9] rounded-[28px] mb-5 hover:shadow-sm transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center w-full rounded-t-[28px] justify-center">
              <Image
                src={image4}
                alt="image4"
                className="rounded-t-[28px] w-full"
                height={298}
                width={386}
              />
            </div>
            <div className="p-[12px] lg:p-[46px]">
              <h3 style={{ fontFamily: "Manrope, sans-serif" }} className="text-2xl font-semibold mb-2 3xl:text-[28px]">AR/VR Simulations</h3>
              <p style={{ fontFamily: "Manrope, sans-serif" }} className="text-[#4A4852] lg:text-md mb-4 3xl:text-[22px] 3xl:leading-[34px]">
              Transform training with immersive AR/VR simulations for hands-on learning.
              </p>
            </div>
          </motion.div>

          {/* Fifth Feature Card */}
          <motion.div
            className="bg-[#F4F5FF] md:flex flex-col justify-between border border-[#E9E9E9] rounded-[28px] p-[12px] lg:p-[46px] mb-5 hover:shadow-sm transition-shadow"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center w-full px-[62px] py-[20px] md:px-0 md:py-0 ">
              <Image
                src={image5}
                alt="image5"
                width={238}
                height={221}
                className="w-full md:w-[148px] md:h-[138px] lg:w-[238px] lg:h-[221px] 3xl:h-[295.9177551269531px] 3xl:w-[317.29193115234375px]"
              />
            </div>
            <div className="">
              <h3 style={{ fontFamily: "Manrope, sans-serif" }} className="text-2xl font-semibold mb-2 3xl:text-[28px]">
                Scenario-Based Learning
              </h3>
              <p style={{ fontFamily: "Manrope, sans-serif" }} className="text-[#4A4852] text-sm mb-4 3xl:text-[22px] 3xl:leading-[34px]">
              Real-world simulations for practical problem-solving skills.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrainingContent;
