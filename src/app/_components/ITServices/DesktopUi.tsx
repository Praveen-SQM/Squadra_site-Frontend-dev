"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import starSvg from "@/utilities/images/star.svg";
import {
  aiAndDigital,
  cloudData,
  customSoftwareDevData,
  data,
  finTech,
  healthcare,
  ItServices,
  saasData,
  webAndMobDev,
} from "./MobileUi";
import Container from "@/utilities/images/Container.jpg";
import righticon from "@/utilities/images/right-arrow.svg";
import arrowRight from "@/utilities/images/arrow-right.svg";
import "./styles/DesktopUI.css";
import { useState, useRef, useEffect } from "react";
// import heroImage from '@/utilities/images/desktop-hero-image.svg'
import TabComponent from "./Tabs";
import whyChooseImage from "@/utilities/images/whyChooseUsImageDesktop.svg";
import ContactUsForm from "./components/DesktopContactUsForm";
import ITImage from "@/utilities/images/ITImage.png";
import webandMobileMain from "@/utilities/images/webandMobileMain.jpg";
import HealthCareMain from "@/utilities/images/healthCareMAin.svg";
import finTechMain from "@/utilities/images/fintechMain.png";
import ApproachComponent from "./components/ApproachComponent";
import imageOne from "@/utilities/images/image-1.jpg";

import HeroImage from "@/utilities/images/IT_services_Hero.jpg";
import Link from "next/link";
import lumina from "@/utilities/icons/lumina.png";
import vortex from "@/utilities/icons/vortex.png";
import velocity from "@/utilities/icons/velocity.png";
import synergy from "@/utilities/icons/synergy.png";
import enigma from "@/utilities/icons/enigma.png";
import spectrum from "@/utilities/icons/spectrum.png";
import Hemingway from "@/utilities/images/Hemingway_gif.gif";

import SquadraTechTeamImage_1 from "@/utilities/images/Squadra_Tech_Team-image-1.png";
import SquadraTechTeamImage_2 from "@/utilities/images/Squadra_Tech_Team-image-2.png";
import SquadraTechTeamImage_3 from "@/utilities/images/Squadra_Tech_Team-image-3.jpg";
import SquadraTechTeamImage_4 from "@/utilities/images/Squadra_Tech_Team-image-4.png";
import SquadraTechTeamImage_5 from "@/utilities/images/Squadra_Tech_Team-image-5.jpg";
import SquadraTechTeamImage_6 from "@/utilities/images/Squadra_Tech_Team-image-6.png";

// Define an interface for the card data
interface CardData {
  title: string;
  icon: StaticImageData | string;
  description: string;
}

function DesktopUi() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  // const [isInView, setIsInView] = useState(false); // Removed as it's not used
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      // const rect = imageRef.current?.getBoundingClientRect();
      // const inView = rect.top >= 0 && rect.bottom <= window.innerHeight; // Logic is kept in case it's needed later

      // setIsInView(inView); // Removed as isInView is not used
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkBodyBackground = () => {
      const bodyBgColor = getComputedStyle(document.body).backgroundColor;
      console.log("bodyBgColor-------->", bodyBgColor);
      // setIsDarkBackground(bodyBgColor === "rgb(255, 255, 255)");
      // White background
    };

    window.addEventListener("scroll", checkBodyBackground);
    checkBodyBackground(); // Run once on load

    return () => window.removeEventListener("scroll", checkBodyBackground);
  }, []);

  const contactRef = useRef<HTMLDivElement>(null);

  // This function is removed as it's not being called
  // const scrollToContact = () => {
  //   if (contactRef.current) {
  //     contactRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const logos = [
    { name: "Lumina", url: { src: lumina } },
    { name: "Vortex", url: { src: vortex } },
    { name: "Velocity", url: { src: velocity } },
    { name: "Synergy", url: { src: synergy } },
    { name: "Enigma", url: { src: enigma } },
    { name: "Spectrum", url: { src: spectrum } },
  ];

  const renderCard = (el: CardData, index: number, globalIndex: number) => {
    const isHovered = hoveredIndex === globalIndex;
    const shouldShowImage =
      hoveredIndex === null ? globalIndex === 0 : isHovered;

    const cardBg =
      hoveredIndex === null
        ? globalIndex === 0
          ? "bg-black"
          : "bg-[#19191C]"
        : isHovered
        ? "bg-black"
        : "bg-[#19191C]";

    return (
      <div
        key={el.title}
        onMouseEnter={() => setHoveredIndex(globalIndex)}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`relative w-[387px] h-[240px] p-[16px] gap-[8px] rounded-[16px] border-t-[1px] border-transparent ${cardBg} transition-colors duration-300`}
      >
        {/* Background Image */}
        {shouldShowImage && (
          <div className="absolute inset-0 opacity-20 rounded-[16px] overflow-hidden z-0 transition-all duration-300">
            <Image
              src={Hemingway}
              alt="Background GIF"
              fill
              className="object-cover scale-[1.2] transform"
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-[8px]">
          <div className="w-[58px] h-[58px] flex items-center justify-center bg-[#18181A] border-[2px] border-[#28282C] rounded-[14px]">
            <Image src={el?.icon} width={30} height={30} alt="Icon" />
          </div>
          <div className="w-[335px] flex items-center justify-left">
            <p className="text-white text-start text-[20px] font-medium leading-[33px]">
              {el?.title}
            </p>
          </div>
        </div>

        <div className="relative z-10 w-[355px] h-[49px] mt-[8px]">
          <p className="text-left text-[16px] font-medium leading-[24px] text-[#94969D]">
            {el?.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-fit  flex flex-col  w-full  items-center bg-[#040206]">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute flex items-start justify-start inset-0 transition-opacity duration-1000 opacity-100 overflow-hidden">
          <Image
            src={HeroImage}
            alt="Carousel image"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        {/* Gradient Overlay: 60% height from bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[clamp(60%,65%,70%)] pointer-events-none bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(102,102,102,0)]" />

        {/* Content */}
        <div className="flex flex-col lg:pt-[175px] xl:pt-[100px] absolute inset-0 mt-[clamp(104px,15vw,304px)] gap-[clamp(44px,8vw,150px)]">
          <div className="flex flex-col justify-center items-center gap-[clamp(42px,3.5vw,56px)]">
            <div className="flex flex-col gap-[clamp(4px,0.7vw,8px)] max-w-[75%] items-center text-center">
              <h1
                style={{
                  background:
                    "linear-gradient(180deg, #FFF 54.17%, #B372CF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-inter font-[450]  text-center tracking-[-5.06%] px-[clamp(0px,2vw,32px)]
          text-[clamp(68px,5.7vw,84px)] leading-[clamp(48px,5.9vw,84px)]"
              >
                Your Trusted Partner in IT <br className="hidden md:block" />
                <span>Innovation</span>
              </h1>

              <div className="pt-[clamp(6px,1vw,10px)]">
                <p
                  className="font-inter font-normal text-white text-center
            text-[clamp(18px,2vw,20px)] leading-[clamp(26px,2.5vw,31px)]
            max-w-[clamp(370px,45vw,544px)] tracking-[0.02em]"
                >
                  Empowering businesses with cutting-edge technology, scalable
                  solutions, and transformative digital strategies.
                </p>
              </div>

              <div className="mt-[clamp(24px,3vw,32px)]">
                <Link href="/contact-us">
                  <div className="px-[clamp(8px,1.2vw,12.5px)] py-[clamp(6px,0.8vw,8px)] rounded-[clamp(8px,1vw,12px)] border border-[#FFFFFF1A]">
                    <button
                      className="flex items-center justify-center 
    bg-white text-black font-medium
    font-inter
    rounded-[clamp(6px,0.8vw,8px)] 
    px-[clamp(20px,2.2vw,22px)] 
    h-[clamp(38px,3.5vw,44px)] 
    text-[clamp(14px,1.25vw,15px)] 
    leading-[clamp(22px,2.5vw,42px)] 
    shadow-[10px_14px_44px_0px_#A89D9826] 
    hover:bg-[#f9cd5e] transition-colors"
                    >
                      Connect Us
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {Logo section } */}
      <div className="w-full px-4 py-11 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 lg:gap-19">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-[170px] h-[56px] flex items-center justify-center rounded-md"
            >
              <Image
                src={logo.url.src}
                alt={logo.name}
                width={170}
                height={56}
                className="w-[170px] h-[56px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Intro Section */}
      {/* <div className="w-[1200px] h-[1165px] mt-[145px] flex flex-col items-center mb-[88px]">
        <div className="w-[976px] h-[322px] flex flex-col gap-[16px] items-center mt-[80px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-medium text-[72px] leading-[84px] text-center text-[#FFFFFF]"
          >
            {["Your", "Trusted", "Partner"].map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.3 }}
                className="inline-block"
                style={{
                  marginRight: index < 2 ? "0.2em" : 0,
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
            <br />
            {["in", "IT", "Innovation"].map((word, index) => (
              <motion.span
                key={word}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.3 + 1.2 }}
                style={{
                  fontFamily: "SF UI Display, sans-serif",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                  background:
                    "linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  marginRight: index < 2 ? "0.2em" : 0,
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="w-[544px] h-[62px] flex items-center justify-center text-center"
          >
            <p className="font-normal text-[18px] leading-[31px] text-white">
              Empowering businesses with cutting-edge technology, scalable solutions, and transformative digital strategies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="w-[147px] h-[40px] rounded-[12px] flex justify-center items-center p-[2px]"
            style={{
              background:
                "linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)",
            }}
          >
            <div onClick={scrollToContact} className="w-full cursor-pointer h-full rounded-[10px] flex items-center justify-center bg-[#FFFFFF]">
              <p className="text-[15px] font-medium leading-[31px] text-center text-[#000000] text-nowrap">
                Connect With Us
              </p>
            </div>
          </motion.div>
        </div>
        <div className="mb-[43px]">
          <div className="w-full h-[815.25px]">
            <Image
              quality={40}
              src={heroImage}
              ref={imageRef}
              alt="Hero Image"
              width={0}
              height={0}
              className={`image ${isInView ? "expand" : ""}`}
            />
          </div>
        </div>
      </div> */}

      {/* Carousel */}
      {/*  add code here*/}

      {/* <div className='mb-[42px] flex flex-col items-center justify-center'>
        <div className="scrolling-container-desktop">
          <div className="scrolling-content">
            {logos?.map((logo, index) => (
              <div key={index} className="inline-block [176.4px] h-[58.8px] rounded-[5.31px] py-[16.98px] px-[5.31px] flex items-center justify-center border border-gray-900">
                <Image src={logo?.url?.src} alt={logo?.name} width={0} height={0} className='w-[176.4px] h-[58.8px]' />
              </div>
            ))}
            {logos?.map((logo, index) => (
              <div key={`duplicate-${index}`} className="inline-block [176.4px] h-[58.8px] rounded-[5.31px] py-[16.98px] px-[5.31px] flex items-center justify-center border border-gray-900">
                <Image src={logo?.url?.src} alt={logo?.name} width={0} height={0} className='w-[176.4px] h-[58.8px]' />
              </div>
            ))}
          </div>
        </div>


      </div> */}

      {/* What we Do */}
      <div className="w-[1130.32px] h-fit mb-32 mt-[100px]">
        <div className="flex flex-col items-center w-[672px] mx-auto">
          <div className="w-[140.88px] h-[44px] flex justify-center items-center rounded-[100px] bg-[#131315]">
            <div className="flex items-center gap-[2px] h-full">
              <Image
                quality={40}
                className="flex-shrink-0"
                src={starSvg}
                width={20}
                height={20}
                alt="Star"
              />
              <p className="text-white font-medium text-[16px] leading-[24px] text-center">
                Our Benefits
              </p>
            </div>
          </div>

          <p className="text-center mt-[13px] text-white text-[54px] font-bold leading-[69.6px]">
            What we do
          </p>

          <div className="w-[620px] h-[44px] gap-0 mt-[12px]">
            <p className="text-center text-[#797B85] text-[18px] font-medium leading-[21.96px]">
              Empowering businesses with transformative IT solutions for
              efficiency and success
            </p>
          </div>
        </div>
        <div
          className="w-full h-[1px] mt-[12px]"
          style={{
            background:
              "radial-gradient(40% 50% at 50% 50%, #28282C 0%, #000000 100%)",
          }}
        ></div>

        <div className="w-full mt-[100px] flex justify-around">
          <div className="w-[1030px] grid grid-cols-2 gap-[0px] items-center">
            {/* First Div */}
            <div className="h-[760px] flex flex-col gap-[20px] items-center">
              {data?.slice(0, 3)?.map(
                (el, index) => renderCard(el, index, index) // globalIndex is 0, 1, 2
              )}
            </div>

            {/* Third Div */}
            <div className="h-[760px] flex flex-col gap-[20px] items-center">
              {data?.slice(3, 6)?.map(
                (el, index) => renderCard(el, index, index + 3) // globalIndex is 3, 4, 5
              )}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-[727px] h-[153px] mt-32  flex flex-col items-center justify-center">
            <h3 className="font-[SF Pro Text] font-normal text-[20px] leading-[24px] align-middle uppercase text-[#F5F5F5]">
              Delivering excellence.
            </h3>
            <h1 className="font-[SF UI Display] font-medium mt-5 text-[46px] leading-[120%] tracking-[0%] text-center align-middle text-[#FFFFFF]">
              Squadra delivers cutting-edge solutions for{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(196.49deg,_#EE5EFF_24%,_#635BFF_53.5%,_#38CBFF_85.5%)]">
                Business Success
              </span>
            </h1>
          </div>
        </div>
      </div>
      {/* <div className='w-[727px] h-[153px] mt-[42px] mb-[72px] flex flex-col items-center justify-center'>

        <p
          className="text-left text-[20px] font-normal leading-[24px] text-[#888888] uppercase"

        >
          Delivering excellence.
        </p>
        <div className='w-[727px] h-[113px] mt-[8px]'>

          <TextGenerateEffect />



        </div>
      </div> */}

      {/* Custom Software Devlopment */}
      <section className="bg-white w-full pt-[70px] flex items-center">
        <div className="w-[1152px] h-full  flex items-center mx-auto gap-10 bg-white py-[70px]">
          {/* First Div */}
          <div className="w-[502px] rounded-[22px] h-full">
            <div className="w-[502px] h-[548px] rounded-[22px]  overflow-hidden">
              <Image
                quality={40}
                src={Container}
                width={502}
                height={548}
                alt="Container"
                // className="rounded-[22px]"
              />
            </div>{" "}
          </div>
          {/* Second Div */}
          <div className="w-[664px] h-full">
            <div className="w-[664px] h-[76px] ">
              <p
                className="text-[46px] text-[#222222] font-semibold leading-[54.89px]"
                style={{
                  fontFamily: "SF UI Display, sans-serif",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Custom Software{" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
                  style={{
                    fontFamily: "SF UI Display, sans-serif",
                    textDecorationSkipInk: "none",
                    textUnderlinePosition: "from-font",
                  }}
                >
                  Development
                </span>
              </p>
            </div>

            <div className="mt-[42px] mb-[48px] grid grid-cols-2 gap-[10px]">
              {customSoftwareDevData?.map((el) => (
                <div
                  key={el.title}
                  className="w-[322px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[6px] rounded-[16px]   border-t-[1px] border-transparent"
                >
                  <div className="flex gap-[3px]">
                    <div className="w-[44px] h-[44px]  flex items-center justify-center  rounded-[10.62px]">
                      <Image
                        quality={40}
                        src={el?.icon}
                        width={30}
                        height={30}
                        alt="Network"
                      />
                    </div>
                    <div className="w-[237px] h-[38px] pt-1.5  flex items-center justify-left">
                      <p className="text-[#222222] text-start  text-[18px] font-semibold leading-[19.09px]">
                        {el?.title}
                      </p>
                    </div>
                  </div>
                  <div className="w-[303px] h-[40px] mt-[12px]">
                    <p className="text-left text-[14px] font-medium leading-[20px] text-[#717171]">
                      {el?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <HoverButton
              href="#contact-section"
              buttonText="Get a Quote"
              defaultIcon={arrowRight}
              hoverIcon={righticon}
            />
          </div>
        </div>
      </section>

      {/* Saas Development */}
      <section className="bg-white w-full pb-[70px] flex items-center">
        <div className="w-[1152px] h-full flex items-center mx-auto bg-white py-[70px] gap-10">
          {/* First Div */}
          <div className="w-[664px] h-full">
            <div className="w-[664px] h-[76px] ">
              <p
                className="text-[46px] text-[#222222] font-semibold leading-[54.89px]"
                style={{
                  fontFamily: "SF UI Display, sans-serif",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Saas{" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
                  style={{
                    fontFamily: "SF UI Display, sans-serif",
                    textDecorationSkipInk: "none",
                    textUnderlinePosition: "from-font",
                    background:
                      "linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Development
                </span>
              </p>
              <p
                className="text-start mt-[8px] text-[18px] font-medium leading-[27px] text-[#797B85]"
                style={{
                  fontFamily: "Instrument Sans, sans-serif",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Deliver scalable, cloud-first experiences.
              </p>
            </div>

            <div className="mt-[42px] mb-[48px] grid grid-cols-2 gap-[10px]">
              {saasData?.map((el) => (
                <div
                  key={el.title}
                  className="w-[322px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[6px] rounded-[16px]   border-t-[1px] border-transparent"
                >
                  <div className="flex gap-[3px]">
                    <div className="w-[44px] h-[44px] flex items-center justify-center  rounded-[10.62px]">
                      <Image
                        quality={40}
                        src={el?.icon}
                        width={30}
                        height={30}
                        alt="Network"
                      />
                    </div>
                    <div className="w-[237px] h-[38px] pt-1  flex items-center justify-left">
                      <p className="text-[#222222] text-start  text-[18px] font-semibold leading-[19.09px]">
                        {el?.title}
                      </p>
                    </div>
                  </div>
                  <div className="w-[303px] h-[40px] mt-[12px]">
                    <p className="text-left text-[14px] font-medium leading-[20px] text-[#717171]">
                      {el?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <HoverButton
              href="#contact-section"
              buttonText="Get a Quote"
              defaultIcon={arrowRight}
              hoverIcon={righticon}
            />
          </div>

          {/* Second Div */}
          <div className="w-[540px] rounded-[22px] h-full">
            <div className="w-[540px] rounded-[22px] h-[388px]">
              {/* <Image
                src={SaasMain}
                width={540}
                height={388}
                alt='SaaS'
              /> */}
              {/* <video autoPlay loop muted width="400" height="250" className='rounded-[24px]'>
                <source src="https://squadra-media.s3.ap-south-1.amazonaws.com/Dashboard+video.mp4" type="video/mp4" />
              </video> */}
              <Image
                src={imageOne}
                width={540}
                height={388}
                alt="SaaS"
                className="h-full w-full rounded-[22px] object-cover"
              />
            </div>{" "}
          </div>
        </div>
      </section>

      {/* End to End It Services */}
      <section className="pt-[160px] max-w-full  flex items-center">
        <div className="w-[1152px] h-full flex items-center mx-auto py-[80px] gap-10">
          {/* First Div */}
          <div className="w-[464px] h-full">
            <div className="w-[464px] h-[464px] rounded-[22px] overflow-hidden">
              <Image
                quality={40}
                src={ITImage}
                width={464}
                height={464}
                alt="It SErvices"
              />
            </div>{" "}
          </div>
          {/* Second Div */}
          <div className="w-[664px] h-full">
            <div className="w-[664px] h-[76px] ">
              <p
                className="text-[46px] text-white font-semibold leading-[54.89px]"
                style={{
                  fontFamily: "SF UI Display, sans-serif",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                End-to-End <br />
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
                  style={{
                    fontFamily: "SF UI Display, sans-serif",
                    textDecorationSkipInk: "none",
                    textUnderlinePosition: "from-font",
                    background:
                      "linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  IT Services
                </span>
              </p>
            </div>

            <div className="mt-[42px] mb-[48px] grid grid-cols-2 gap-[10px]">
              {ItServices?.map((el) => (
                <div
                  key={el.title}
                  className="w-[322px] mt-[16px] bg-[#19191C] h-[148px] p-[16px] gap-[6px] rounded-[16px]   border-[1px] border-[#1D1D20]"
                >
                  <div className="flex gap-[3px]">
                    <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[10.62px]">
                      <Image
                        quality={40}
                        src={el?.icon}
                        width={30}
                        height={30}
                        alt="Network"
                      />
                    </div>
                    <div className="w-[237px] h-[38px] pt-1  flex items-center justify-left">
                      <p className="text-white text-start  text-[18px] font-semibold leading-[19.09px]">
                        {el?.title}
                      </p>
                    </div>
                  </div>
                  <div className="w-[303px] h-[40px] mt-[12px]">
                    <p className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]">
                      {el?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <HoverButton
              href="#contact-section"
              buttonText="Get a Quote"
              defaultIcon={arrowRight}
              hoverIcon={righticon}
            />
          </div>
        </div>
      </section>

      {/* Web & Mobile Application Development */}
      <section className="pb-[160px] max-w-full flex items-center">
        <div className="w-[1152px] h-full flex items-center mx-auto py-[70px] gap-10">
          {/* First Div */}
          <div className="w-[664px] h-full">
            <div className="w-[664px] h-[76px] ">
              <p
                className="text-[46px] text-white font-semibold leading-[54.89px]"
                style={{
                  fontFamily: "SF UI Display, sans-serif",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Web & Mobile Application{" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
                  style={{
                    fontFamily: "SF UI Display, sans-serif",
                    textDecorationSkipInk: "none",
                    textUnderlinePosition: "from-font",
                    background:
                      "linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Development
                </span>
              </p>
            </div>

            <div className="mt-[42px] mb-[48px] grid grid-cols-2 gap-[10px]">
              {webAndMobDev?.map((el) => (
                <div
                  key={el.title}
                  className="w-[322px] mt-[16px] bg-[#19191C] h-[148px] p-[16px] gap-[6px] rounded-[16px]   border-[1px] border-[#1D1D20]"
                >
                  <div className="flex gap-[3px]">
                    <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[10.62px]">
                      <Image
                        quality={40}
                        src={el?.icon}
                        width={30}
                        height={30}
                        alt="Network"
                      />
                    </div>
                    <div className="w-[237px] h-[38px] pt-1  flex items-center justify-left">
                      <p className="text-white text-start  text-[18px] font-semibold leading-[19.09px]">
                        {el?.title}
                      </p>
                    </div>
                  </div>
                  <div className="w-[303px] h-[40px] mt-[12px]">
                    <p className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]">
                      {el?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <HoverButton
              href="#contact-section"
              buttonText="Get a Quote"
              defaultIcon={arrowRight}
              hoverIcon={righticon}
            />
          </div>

          {/* Second Div */}
          <div className="w-[438px] h-[548px] bg-black rounded-[22px]">
            <div className="w-[438px] h-[462px] flex items-start">
              <Image
                quality={40}
                src={webandMobileMain}
                width={438}
                height={462}
                alt="webandMobileMain"
                className="w-full h-full rounded-[22px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Applications */}
      <section className="bg-white w-full flex items-center">
        <div className="w-[1152px] h-full flex items-center mx-auto bg-white py-[70px] gap-10">
          {/* First Div */}
          <div className="w-[664px] h-full">
            <div className="w-[664px] h-[76px] mt-16">
              <p
                className="text-[46px] text-[#222222]  font-semibold leading-[54.89px]"
                style={{
                  fontFamily: "SF UI Display, sans-serif",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Healthcare{" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
                  style={{
                    fontFamily: "SF UI Display, sans-serif",
                    textDecorationSkipInk: "none",
                    textUnderlinePosition: "from-font",
                  }}
                >
                  Applications
                </span>
              </p>
            </div>

            <div className="mt-[12px] mb-[48px] grid grid-cols-2 gap-[10px]">
              {healthcare?.map((el) => (
                <div
                  key={el.title}
                  className="w-[322px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[6px] rounded-[16px]   border-t-[1px] border-transparent"
                >
                  <div className="flex gap-[3px]">
                    <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[10.62px]">
                      <Image
                        quality={40}
                        src={el?.icon}
                        width={30}
                        height={30}
                        alt="Network"
                      />
                    </div>
                    <div className="w-[237px] h-[38px] pt-1 flex items-center justify-left">
                      <p className="text-[#222222] text-start  text-[18px] font-semibold leading-[19.09px]">
                        {el?.title}
                      </p>
                    </div>
                  </div>
                  <div className="w-[303px] h-[40px] mt-[12px]">
                    <p className="text-left text-[14px] font-medium leading-[20px] text-[#717171]">
                      {el?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <HoverButton
              href="#contact-section"
              buttonText="Get a Quote"
              defaultIcon={arrowRight}
              hoverIcon={righticon}
            />
          </div>

          {/* Second Div */}
          <div className="w-[438px] h-full">
            <div className="w-[438px] h-[547px] mt-[48px]">
              <Image
                quality={40}
                src={HealthCareMain}
                width={438}
                height={547}
                alt="HealthCareMain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Automation & Digital Transformation */}
      <section className="bg-white w-full flex items-center">
        <div className="w-[1152px] h-full flex items-center mx-auto bg-white py-[80px] gap-10">
          {/* First Div */}

          <div className="w-[438px] h-full">
            <div className="w-[438px] h-[547px] mt-[48px]">
              {/* <Image
                src={aiMain}
                width={438}
                height={547}
                alt='SaaS'
              /> */}
              <video
                src="https://squadra-media.s3.ap-south-1.amazonaws.com/video3d.mp4"
                autoPlay={true}
                muted
                loop
                width="438"
                height="547"
                className="rounded-[24px]"
              ></video>
              {/* <Image
                src={imageTwo}
                width={438}
                height={547}
                alt="SaaS"
                className="h-full w-full object-cover"
              /> */}
            </div>
          </div>

          {/* Second Div */}
          <div className="w-[664px] h-full">
            <div className="w-[664px] h-[76px] ">
              <p
                className="text-[46px] text-[#222222] font-semibold leading-[54.89px]"
                style={{
                  fontFamily: "SF UI Display, sans-serif",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Automation & Digital{" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
                  style={{
                    fontFamily: "SF UI Display, sans-serif",
                    textDecorationSkipInk: "none",
                    textUnderlinePosition: "from-font",
                    background:
                      "linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Transformation
                </span>
              </p>
            </div>

            <div className="mt-[42px] mb-[48px] grid grid-cols-2 gap-[10px]">
              {aiAndDigital?.map((el) => (
                <div
                  key={el.title}
                  className="w-[322px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[6px] rounded-[16px]   border-t-[1px] border-transparent"
                >
                  <div className="flex gap-[8px]">
                    <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[10.62px]">
                      <Image
                        quality={40}
                        src={el?.icon}
                        width={30}
                        height={30}
                        alt="Network"
                      />
                    </div>
                    <div className="w-[237px] h-[38px] pt-1 flex items-center justify-left">
                      <p className="text-[#222222] text-start  text-[18px] font-semibold leading-[19.09px]">
                        {el?.title}
                      </p>
                    </div>
                  </div>
                  <div className="w-[303px] h-[40px] mt-[12px]">
                    <p className="text-left text-[14px] font-medium leading-[20px] text-[#717171]">
                      {el?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <HoverButton
              href="#contact-section"
              buttonText="Get a Quote"
              defaultIcon={arrowRight}
              hoverIcon={righticon}
            />
          </div>
        </div>
      </section>

      {/*FinTech Applications */}
      <section className=" max-w-full pt-[70px] flex items-center">
        <div className="w-[1152px] h-full flex items-center mx-auto py-[70px] gap-10">
          {/* First Div */}
          <div className="w-[438px] h-full">
            <div className="w-[438px] h-[547px] rounded-[22px] bg-black ">
              <Image
                quality={40}
                src={finTechMain}
                width={438}
                height={547}
                alt="It SErvices"
              />
            </div>{" "}
          </div>
          {/* Second Div */}
          <div className="w-[664px] h-full">
            <div className="w-[664px] h-[76px] ">
              <p
                className="text-[46px] text-white font-semibold leading-[54.89px]"
                style={{
                  fontFamily: "SF UI Display, sans-serif",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                FinTech{" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
                  style={{
                    fontFamily: "SF UI Display, sans-serif",
                    textDecorationSkipInk: "none",
                    textUnderlinePosition: "from-font",
                    background:
                      "linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Applications
                </span>
              </p>
            </div>

            <div className=" mb-[48px] grid grid-cols-2 gap-[10px]">
              {finTech?.map((el) => (
                <div
                  key={el.title}
                  className="w-[322px] mt-[16px] bg-[#19191C] h-[148px] p-[16px] gap-[6px] rounded-[16px]   border-[1px] border-[#1D1D20]"
                >
                  <div className="flex gap-[8px]">
                    <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[10.62px]">
                      <Image
                        quality={40}
                        src={el?.icon}
                        width={30}
                        height={30}
                        alt="Network"
                      />
                    </div>
                    <div className="w-[237px] h-[38px] pt-1 flex items-center justify-left">
                      <p className="text-white text-start  text-[16px] font-medium leading-[19.09px]">
                        {el?.title}
                      </p>
                    </div>
                  </div>
                  <div className="w-[303px] h-[40px] mt-[12px]">
                    <p className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]">
                      {el?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <HoverButton
              href="#contact-section"
              buttonText="Get a Quote"
              defaultIcon={arrowRight}
              hoverIcon={righticon}
            />
          </div>
        </div>
      </section>

      {/*Cloud Solutions */}
      <section className=" max-w-full flex pb-[80px] items-center">
        <div className="w-[1152px] h-full flex items-center mx-auto py-[70px] gap-12">
          {/* First Div */}
          <div className="w-[664px] h-full">
            <div className="w-[664px] h-[76px] ">
              <p
                className="text-[46px] text-white font-semibold leading-[54.89px]"
                style={{
                  fontFamily: "SF UI Display, sans-serif",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Cloud{" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
                  style={{
                    fontFamily: "SF UI Display, sans-serif",
                    textDecorationSkipInk: "none",
                    textUnderlinePosition: "from-font",
                    background:
                      "linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Solutions
                </span>
              </p>
            </div>

            <div className="mt-[42px] mb-[48px] grid grid-cols-2 gap-[10px]">
              {cloudData?.map((el) => (
                <div
                  key={el.title}
                  className="w-[322px] mt-[16px] bg-[#040206] h-[148px] p-[16px] gap-[6px] rounded-[16px]   border-[1px] border-[#1D1D20]"
                >
                  <div className="flex gap-[8px]">
                    <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[10.62px]">
                      <Image
                        quality={40}
                        src={el?.icon}
                        width={30}
                        height={30}
                        alt="Network"
                      />
                    </div>
                    <div className="w-[237px] h-[38px] pt-1 flex items-center justify-left">
                      <p className="text-white text-start  text-[16px] font-medium leading-[19.09px]">
                        {el?.title}
                      </p>
                    </div>
                  </div>
                  <div className="w-[303px] h-[40px] mt-[12px]">
                    <p className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]">
                      {el?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <HoverButton
              href="#contact-section"
              buttonText="Get a Quote"
              defaultIcon={arrowRight}
              hoverIcon={righticon}
            />
          </div>

          {/* Second Div */}
          <div className="w-[438px] h-[538px]  relative">
            <div className="w-[438px] h-[548px] rounded-[22px] overflow-hidden relative">
              <video
                src="https://squadra-media.s3.ap-south-1.amazonaws.com/video+sample.mp4"
                autoPlay
                loop
                muted
                width="438"
                height="548"
                className="w-full h-full object-cover rounded-[24px]"
              ></video>

              {/* Gradient Overlay */}
              <div
                className="absolute bottom-0 w-full h-[30%] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* solutions */}
      <div className="w-full  py[50px] bg-white flex items-center">
        <ApproachComponent />
      </div>

      {/* Squadra Tech Team */}
      <div className="w-full py-[72px] px-[124px] flex flex-col gap-[62px] bg-[#FAFAFA] items-center">
        <div className="flex flex-col gap-[12px] items-center justify-center w-[668px] h-[132px]">
          <p className="font-semibold text-[62px] leading-[72px] text-center text-[#FBAE17]">
            Squadra{" "}
            <span className="font-semibold text-[62px] leading-[72px] text-center text-[#131313]">
              Tech Team
            </span>
          </p>
          <p className="font-normal text-[18px] leading-[24px] text-center text-[#888888]">
            Discover a workplace where creativity thrives, teamwork shines, and
            careers take flight.
          </p>
        </div>
        <div className="flex gap-[24px] items-center">
          <div className="flex flex-col gap-[24px]">
            <div className="w-[584px] h-[263px] bg-gray-200">
              <Image
                unoptimized
                src={SquadraTechTeamImage_1}
                alt="Tech Team"
                width={584}
                height={263}
                className="object-cover h-[263px] w-[584px]"
              />
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="w-[280px] h-[262px] bg-gray-200">
                <Image
                  unoptimized
                  src={SquadraTechTeamImage_4}
                  alt="Tech Team"
                  width={280}
                  height={262}
                  className="object-cover h-[262px] w-[280px]"
                />
              </div>
              <div className="w-[280px] h-[262px] bg-gray-200">
                <Image
                  unoptimized
                  src={SquadraTechTeamImage_5}
                  alt="Tech Team"
                  width={280}
                  height={262}
                  className="object-cover h-[262px] w-[280px]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="flex items-center gap-[24px]">
              <div className="w-[280px] h-[262px] bg-gray-200">
                <Image
                  quality={40}
                  src={SquadraTechTeamImage_2}
                  alt="Tech Team"
                  width={280}
                  height={262}
                  className="object-cover h-[262px] w-[280px]"
                />
              </div>
              <div className="w-[280px] h-[262px] bg-gray-200">
                <Image
                  quality={40}
                  src={SquadraTechTeamImage_3}
                  alt="Tech Team"
                  width={280}
                  height={262}
                  className="object-cover h-[262px] w-[280px]"
                />
              </div>
            </div>
            <div className="w-[584px] h-[263px] bg-gray-200">
              <Image
                quality={40}
                src={SquadraTechTeamImage_6}
                alt="Tech Team"
                width={584}
                height={263}
                className="object-cover h-[263px] w-[584px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose us */}
      <div className="w-full flex items-center">
        <div className="bg-white w-full mx-auto h-[762px] flex items-center justify-center flex-col">
          <div className="flex flex-col gap-[12px] w-[662px] h-[128px] mb-[120px] ">
            <p className="font-sans text-[62px] font-semibold leading-[73.99px] text-center text-[#000000]">
              Why Choose{" "}
              <span className="font-sans text-[62px] font-semibold leading-[73.99px] text-center text-[#FBAE17]">
                Us
              </span>
            </p>
            <div className="flex items-center justify-center h-full">
              <p className="font-normal text-[16px] leading-[20.8px] text-[#000000] text-center">
                We understand your needs and deliver impactful solutions with
                expertise, dedication, and a proven track record.
              </p>
            </div>
          </div>

          <div
            className="relative w-full flex items-center justify-center"
            style={{ height: "280px" }}
          >
            <Image
              quality={40}
              src={whyChooseImage}
              width={0}
              height={0}
              className="absolute z-10 top-0 scale-110"
              alt="Network"
            />
          </div>
        </div>{" "}
      </div>

      {/* technologies we use */}
      <div className="w-full bg-[#FAFAFA]">
        <div className="w-[1192px] mx-auto pb-24 bg-[#FAFAFA] pt-[100px]">
          <div className="w-full h-[120px] flex flex-col  items-center justify-center text-center mb-[70px]">
            <div className="w-[664px] h-[76px] ">
              <p
                className="text-[46px] text-[#222222] font-semibold leading-[54.89px]"
                style={{
                  fontFamily: "SF UI Display, sans-serif",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Technologies{" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
                  style={{
                    fontFamily: "SF UI Display, sans-serif",
                    textDecorationSkipInk: "none",
                    textUnderlinePosition: "from-font",
                  }}
                >
                  we use
                </span>
              </p>
              <p className="text-[16px] mt-[24px] font-normal leading-[19.09px] text-center text-[#4E4D4D]">
                {" "}
                Discover the cutting-edge technologies we use to deliver
                innovative and impactful solutions, from modern frameworks to
                advanced cloud and machine learning tools
              </p>
            </div>
          </div>
          <TabComponent />
        </div>{" "}
      </div>
      <div ref={contactRef} id="contact-section">
        {/* Contact us */}
        <ContactUsForm />
      </div>
    </div>
  );
}

export default DesktopUi;

export const HoverButton = ({
  href,
  buttonText,
  defaultIcon,
  hoverIcon,
  bgColor,
}: {
  href: string;
  buttonText: string;
  defaultIcon: StaticImageData | string; // Correct type for image src
  hoverIcon: StaticImageData | string; // Correct type for image src
  bgColor?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseBg = bgColor ? bgColor : "#131313";

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer w-fit h-[52px] px-4 gap-4 rounded-[30px] flex items-center justify-center transition-colors duration-300"
      style={{ backgroundColor: baseBg }}
    >
      <p className="uppercase font-sans text-[16px] font-normal leading-[19.09px] text-[#F5F5F5] whitespace-nowrap">
        {buttonText}
      </p>

      <div
        className={`w-[32px] h-[32px] flex items-center justify-center rounded-[20px] transition-colors duration-300 ${
          isHovered ? "bg-[#FBAE17]" : "bg-[#FFFFFF]"
        }`}
      >
        <Image
          quality={40}
          src={isHovered ? hoverIcon : defaultIcon}
          width={22}
          height={22}
          alt="Arrow Icon"
          className="transition-transform duration-300 ease-in-out transform"
          style={{
            scale: isHovered ? "0.9" : "1",
          }}
        />
      </div>
    </Link>
  );
};