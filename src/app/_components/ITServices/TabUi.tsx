"use client";
import React from "react";
import { useRef, useEffect } from "react";
// import heroImage from "@/utilities/images/desktop-hero-image.svg"; // Removed unused import
import "./styles/TabletUI.css";
import Image from "next/image";
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
import starSvg from "@/utilities/images/star.svg";
import Container from "@/utilities/images/Container.jpg";
import ITImage from "@/utilities/images/ITImage.png";
import HealthCareMain from "@/utilities/images/healthCareMAin.svg";
import finTechMain from "@/utilities/images/fintechMain.png";
import whyChooseImage from "@/utilities/images/whyChooseUsImageDesktop.svg";
import TabComponent from "./TabletTab";
import ContactUsForm from "./components/TabletContactUsForm";
import ApprochCompTab from "./components/ApprochCompTab";
import imageOne from "@/utilities/images/image-1.jpg";
// import imageTwo from "@/utilities/images/image-2.png"; // Removed unused import
// import imageThree from "@/utilities/images/image-3.png"; // Removed unused import
import webandMobileMain from "@/utilities/images/webandMobileMain.jpg";

import HeroImage from "@/utilities/images/IT_services_Hero.jpg";
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
import Link from "next/link";

function TabUi() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  // const [isInView, setIsInView] = useState(false); // Removed unused state

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      // const rect = imageRef.current?.getBoundingClientRect();
      // const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      // setIsInView(inView); // This was setting an unused state
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactRef = useRef<HTMLDivElement>(null);

  // This function was defined but never called
  // const scrollToContact = () => {
  //   if (contactRef.current) {
  //     contactRef.current.scrollIntoView({
  //       behavior: "smooth",
  //     });
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

  return (
    <div className="h-fit  flex flex-col mx-auto  w-full  items-center bg-[#040206]">
      {/* <p className='text-white'> jhghjgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhghfghfhgfghhjgkghjglh</p> */}

      {/* Hero Section */}
      <div className="relative h-screen pt-[100px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute flex items-start justify-start inset-0 transition-opacity duration-1000 opacity-100 overflow-hidden">
          <Image
            src={HeroImage}
            alt="Carousel image"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="translate-y-[-50px] h-[calc(100%+50px)]"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[clamp(60%,65%,70%)] pointer-events-none bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(102,102,102,0)]" />

        {/* Content */}
        <div className="flex flex-col pt-[350px] absolute inset-0 mt-[clamp(104px,14vw,220px)] gap-[clamp(32px,6vw,120px)] px-[clamp(16px,4vw,64px)]">
          <div className="flex flex-col justify-center items-center gap-[clamp(32px,4vw,48px)] text-center">
            <div className="flex flex-col gap-[clamp(2px,0.6vw,6px)] max-w-[90%] items-center text-center">
              <p
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="font-[Inter] font-[450]  text-white tracking-[-0.0506em]
          text-[58px] leading-[clamp(38px,6vw,72px)]
          px-[clamp(8px,3vw,32px)]"
              >
                Your Trusted Partner in IT{" "}
                <span className="text-transparent bg-gradient-to-b from-white via-white/60 to-[#B372CF] bg-clip-text">
                  Innovation
                </span>
              </p>

              <div className="pt-[clamp(4px,1vw,10px)]">
                <p
                  className="font-[Inter] font-medium text-white
            text-[20px] leading-[clamp(24px,2.5vw,30px)]
            max-w-[clamp(320px,62vw,640px)] tracking-[0.02em]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Empowering businesses with cutting-edge technology, scalable
                  solutions, and transformative digital strategies.
                </p>
              </div>

              <div className="mt-[clamp(24px,3vw,32px)]">
                <Link href="/contact-us">
                  <div className="px-[clamp(8px,1.2vw,12.5px)] py-[clamp(12px,0.8vw,18px)] rounded-[clamp(8px,1vw,12px)] border border-[#FFFFFF1A]">
                    <button
                      className="flex items-center justify-center 
    bg-white text-black font-medium
    font-inter
    rounded-[clamp(6px,0.8vw,8px)] 
    px-[clamp(20px,2.2vw,22px)] 
    h-[clamp(38px,3.5vw,44px)] 
    text-[15px] 
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

      {/* Carousel */}
      {/*  add code here*/}

      {/* <div className='mb-[42px] flex flex-col items-center justify-center'>
        <div className="scrolling-container-tablet">
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

      {/* Logo Section */}
      <div className="w-full px-[clamp(12px,4vw,32px)] mb-12 py-[clamp(32px,5vw,44px)]">
        <div className="flex flex-wrap md:justify-between justify-center items-center gap-[clamp(16px,4vw,32px)]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-[clamp(120px,22vw,170px)] h-[clamp(40px,6vw,56px)] flex items-center justify-center rounded-md"
            >
              <Image
                src={logo.url.src}
                alt={logo.name}
                width={170}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Our Benefits */}
      <div className="w-[140.88px] h-[44px] flex justify-center items-center rounded-[100px] bg-[#131315]">
        <div className="flex items-center gap-[2px] h-full">
          <Image
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

      <p className="text-center mt-[13px] text-white text-[54px] font-bold leading-[65.35px]">
        What we do
      </p>

      <div className="w-[597] h-[44px] gap-0 mt-[12px]">
        <p className="text-center text-[#797B85] text-[18px] font-medium leading-[21.96px]">
          Empowering businesses with transformative IT solutions for efficiency{" "}
          <br /> and success
        </p>
      </div>

      {/* Feature Cards */}

      <div className="mt-[42px] grid grid-cols-2 gap-[20px]">
        {data?.map((el, index) => (
          <div
            key={el.title}
            className={`relative w-[335px] mt-[16px] ${
              index === 0 ? "bg-black" : "bg-[#19191C]"
            } h-[200px] p-[16px] gap-[8px] rounded-[16px] border-t-[1px] border-transparent`}
          >
            {/* ✅ Background image only for index 0 */}
            {index === 0 && (
              <div className="absolute inset-0 opacity-20 rounded-[16px] overflow-hidden z-0 transition-all duration-300">
                <Image
                  src={Hemingway}
                  alt="Background GIF"
                  fill
                  className="object-cover scale-[1.2] transform"
                />
              </div>
            )}

            <div className="flex flex-col gap-[8px] relative z-10">
              <div className="w-[58px] h-[58px] flex items-center justify-center bg-[#18181A] border-[2px] border-[#28282C] rounded-[10.62px]">
                <Image src={el?.icon} width={30} height={30} alt="Network" />
              </div>
              <div className="w-[302px] h-[33px] flex items-center justify-left">
                <p className="text-white text-start text-[16px] font-medium leading-[19.09px]">
                  {el?.title}
                </p>
              </div>
            </div>

            <div className="w-[303px] h-[40px] mt-[8px] relative z-10">
              <p className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]">
                {el?.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full py-8 max-w-[727px] h-auto mt-[clamp(40px,8vw,100px)] mb-[clamp(32px,6vw,72px)] mx-auto flex flex-col items-center justify-center px-[clamp(12px,4vw,24px)]">
        <p className="text-left text-[clamp(14px,2.5vw,20px)] font-normal leading-[clamp(20px,3vw,24px)] text-[#888888] uppercase">
          Delivering excellence.
        </p>

        <div className="w-full  px-16 mt-[clamp(12px,2vw,16px)]">
          <p
            className="text-center font-medium text-white"
            style={{
              fontSize: "35px",
              lineHeight: "clamp(36px,7vw,54.89px)",
              fontFamily: "SF UI Display, sans-serif",
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
          >
            Squadra delivers cutting-edge solutions for{" "}
            <span
              style={{
                fontSize: "35px",
                lineHeight: "clamp(36px,7vw,54.89px)",
                fontFamily: "SF UI Display, sans-serif",
                background:
                  "linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Business Success
            </span>
          </p>
        </div>
      </div>

      {/*  Custom Software Development */}
      <div className="bg-white w-full py-[70px] flex flex-col items-center justify-center pt-[48px]">
        <div className="w-[714px] h-[55px] ">
          <p
            className="text-center font-semibold text-[#222222]"
            style={{
              fontFamily: "SF UI Display, sans-serif",
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
              fontSize: "clamp(28px,5.5vw,46px)",
              lineHeight: "clamp(36px,6vw,54.9px)",
            }}
          >
            Custom Software{" "}
            <span
              className="font-semibold text-[#94969D]"
              style={{
                fontFamily: "SF UI Display, sans-serif",
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
                fontSize: "clamp(28px,5.5vw,46px)",
                lineHeight: "clamp(36px,6vw,54.9px)",
              }}
            >
              Development
            </span>
          </p>
        </div>
        <div className="w-[340px] h-[425px] rounded-[16px] mt-[48px]">
          <Image
            src={Container}
            width={340}
            height={425}
            alt="Container"
            className="rounded-[16px]"
          />
        </div>
        {/* Customer Software Development */}
        <div className="mt-[42px] mb-[48px]  grid grid-cols-2 gap-[20px]">
          {customSoftwareDevData?.map((el) => (
            <div
              key={el.title}
              className="w-[347px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
            >
              <div className="flex gap-[8px]">
                <div className="w-[50px] h-[50px] flex items-center gap-[8px] justify-center  rounded-[10.62px]">
                  <Image src={el?.icon} width={30} height={30} alt="Network" />
                </div>
                <div className="w-[237px] h-[38px] pt-1  flex items-center justify-left">
                  <p className="text-[#222222] text-start  text-[18px] font-medium leading-[30px]">
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
        {/* Saas Development */}
        <div className="w-[714px] h-[55px] pb-[70px] mt-[62px]">
          <p
            className="text-center text-[46px] font-semibold leading-[54.89px]"
            style={{
              fontFamily: "SF UI Display, sans-serif",
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
          >
            SaaS{" "}
            <span
              className="text-[46px] font-medium leading-[54.89px]"
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
            className="text-center mt-[8px] text-[18px] font-medium leading-[27px] text-[#797B85]"
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
          >
            Deliver scalable, cloud-first experiences.
          </p>
        </div>
        <div className="w-[425px] h-[340px] rounded-[16px] mt-[64px]">
          {/* <Image
            src={SaasMain}
            width={540}
            height={388}
            alt='SaaS'
          /> */}
          {/* <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/Dashboard+video.mp4" autoPlay loop width="640" height="360" className='rounded-md'></video> */}
          <Image
            src={imageOne}
            width={425}
            height={340}
            alt="SaaS"
            className="h-full w-full rounded-[16px] object-cover"
          />
        </div>
        <div className="mt-[44px] mb-[48px] grid grid-cols-2 gap-[20px]">
          {saasData?.map((el) => (
            <div
              key={el.title}
              className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
            >
              <div className="flex gap-[8px]">
                <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[10.62px]">
                  <Image src={el?.icon} width={30} height={30} alt="Network" />
                </div>
                <div className="w-[237px] h-[38px] pt-1 flex items-center justify-left">
                  <p className="text-[#222222] text-start  text-[18px] font-medium leading-[21.47px]">
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className="w-[303px] h-[40px] mt-[12px]">
                <p className="text-left text-[14px] font-medium leading-[16.71px] text-[#717171]">
                  {el?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* End-to-End
IT Services */}
      <div className="w-[714px] h-[58px] mt-[122px] flex justify-center">
        <p
          className="flex  text-center text-[#FFFFFF] text-[46px] font-bold leading-[57.6px]"
          style={{
            fontFamily: "SF UI Display, sans-serif",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          End-to-End  
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE5EFF] via-[#635BFF] to-[#38CBFF]"
            style={{
              fontFamily: "SF UI Display, sans-serif",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            IT Services
          </span>
        </p>
      </div>
      <div className="w-[342px] h-[427px] rounded-[16px] overflow-hidden mt-[42px]">
        <Image src={ITImage} width={342} height={427} alt="It SErvices" />
      </div>
      <div className="mt-[42px] grid grid-cols-2 gap-[20px]">
        {ItServices?.map((el) => (
          <div
            key={el.title}
            className="w-[335px] mt-[16px] bg-[#19191C] h-[147px] p-[16px] gap-[8px] rounded-[16px]   border-[1px] border-[#1D1D20]"
          >
            <div className="flex gap-[8px]">
              <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#18181A]  rounded-[10.62px]">
                <Image src={el?.icon} width={30} height={30} alt="Network" />
              </div>
              <div className="w-[237px] h-[38px] pt-1  flex items-center justify-left">
                <p className="text-white text-start  text-[18px] font-medium leading-[30px]">
                  {el?.title}
                </p>
              </div>
            </div>
            <div className="w-[303px] h-[40px] mt-[12px]">
              <p className="text-left text-[16px] font-medium leading-[19px] text-[#94969D]">
                {el?.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Web & Mobile App
Development */}
      <div className="w-[714px] h-[110px] mt-[72px]">
        <p
          className="flex flex-col text-center text-[#FFFFFF] text-[46px] font-medium leading-[54.89px]"
          style={{
            fontFamily: "SF UI Display, sans-serif",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Web & Mobile Application
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE5EFF] via-[#635BFF] to-[#38CBFF]"
            style={{
              fontFamily: "SF UI Display, sans-serif",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Development
          </span>
        </p>
      </div>
      <div className="w-[342px] h-[400px] bg-black rounded-[16px] mt-[42px]">
        <Image
          src={webandMobileMain}
          width={400}
          height={378}
          alt="webandMobileMain"
          className="rounded-[16px]"
        />
        {/* <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/video+sample.mp4" autoPlay loop width="640" height="360" className='rounded-md'></video> */}
      </div>
      <div className="mt-[42px] mb-[32px] grid grid-cols-2 gap-[20px]">
        {webAndMobDev?.map((el) => (
          <div
            key={el.title}
            className="w-[298px] mt-[16px] bg-[#19191C] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-[1px] border-[#1D1D20]"
          >
            <div className="flex gap-[8px]">
              <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#18181A]  rounded-[10.62px]">
                <Image src={el?.icon} width={30} height={30} alt="Network" />
              </div>
              <div className="w-[237px] h-[38px] pt-1 flex items-center justify-left">
                <p className="text-white text-start  text-[16px] font-medium leading-[19.09px]">
                  {el?.title}
                </p>
              </div>
            </div>
            <div className="w-[266px] h-[40px] mt-[12px]">
              <p className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]">
                {el?.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/*  Health Care*/}
      <div className="bg-white w-full flex flex-col items-center justify-center pt-[48px]">
        <div className="w-[714px] h-[58px] ">
          <p
            className="text-center text-[46px] text-[#222222] font-semibold leading-[57.6px]"
            style={{
              fontFamily: "SF UI Display, sans-serif",
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
          >
            Healthcare{" "}
            <span
              className="text-[46px] text-[#94969D] font-semibold leading-[57.6px]"
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
        <div className="w-[342px] h-[427px] mt-[48px]">
          <Image
            src={HealthCareMain}
            width={342}
            height={427}
            alt="HealthCareMain"
          />
        </div>
        {/* Ai */}
        <div className="mt-[42px] mb-[48px] grid grid-cols-2 gap-[20px]">
          {healthcare?.map((el) => (
            <div
              key={el.title}
              className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[147px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
            >
              <div className="flex gap-[8px]">
                <div className="w-[44px] h-[44px] flex items-center justify-center  rounded-[10.62px]">
                  <Image src={el?.icon} width={30} height={30} alt="Network" />
                </div>
                <div className="w-[237px] h-[38px] pt-1 flex items-center justify-left">
                  <p className="text-[#222222] text-start  text-[18px] font-medium leading-[30px]">
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className="w-[303px] h-[40px] mt-[12px]">
                <p className="text-left text-[16px] font-medium leading-[19px] text-[#717171]">
                  {el?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[714px] h-[110px] mt-[72px]">
          <p
            className="text-center text-[46px] font-semibold leading-[54.89px]"
            style={{
              fontFamily: "SF UI Display, sans-serif",
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
          >
            Automation & Digital{" "}
            <span
              className="text-[46px] font-medium leading-[54.89px]"
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
        <div className="w-[342px] h-[427px] mt-[44px]">
          {/* <Image
            src={aiMain}
            width={342}
            height={427}
            alt='SaaS'
          /> */}
          <video
            src="https://squadra-media.s3.ap-south-1.amazonaws.com/video3d.mp4"
            autoPlay={true}
            loop
            width="640"
            height="360"
            className="rounded-[24px]"
          ></video>
          {/* <Image
            src={imageTwo}
            width={342}
            height={427}
            alt='SaaS'
            className='h-full w-full object-cover'
          /> */}
        </div>
        <div className="mt-[44px] mb-[48px] grid grid-cols-2 gap-[20px]">
          {aiAndDigital?.map((el) => (
            <div
              key={el.title}
              className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[147px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
            >
              <div className="flex gap-[8px]">
                <div className="w-[44px] h-[44px] flex items-center justify-center  rounded-[10.62px]">
                  <Image src={el?.icon} width={30} height={30} alt="Network" />
                </div>
                <div className="w-[237px] h-[38px] pt-1 flex items-center justify-left">
                  <p className="text-[#222222] text-start  text-[18px] font-medium leading-[22px]">
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
      </div>

      {/* End-to-End
IT Services */}
      <div className="w-[750px] h-[58px] mt-[72px] flex justify-center">
        <p
          className="flex text-center text-[#FFFFFF] text-[46px] font-medium leading-[57px]"
          style={{
            fontFamily: "SF UI Display, sans-serif",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          FinTech 
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE5EFF] via-[#635BFF] to-[#38CBFF]"
            style={{
              fontFamily: "SF UI Display, sans-serif",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Applications
          </span>
        </p>
      </div>
      <div className="w-[342px] h-[427px] rounded-[24px] bg-black overflow-hidden mt-[42px]">
        <Image src={finTechMain} width={342} height={427} alt="It SErvices" />
      </div>
      <div className="mt-[42px] grid grid-cols-2 gap-[20px]">
        {finTech?.map((el) => (
          <div
            key={el.title}
            className="w-[335px] mt-[16px] bg-[#19191C] h-[147px] p-[16px] gap-[8px] rounded-[16px]   border-[1px] border-[#1D1D20]"
          >
            <div className="flex gap-[8px]">
              <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#18181A] rounded-[10.62px]">
                <Image src={el?.icon} width={30} height={30} alt="Network" />
              </div>
              <div className="w-[237px] h-[38px] pt-1 flex items-center justify-left">
                <p className="text-white text-start  text-[18px] font-medium leading-[20px]">
                  {el?.title}
                </p>
              </div>
            </div>
            <div className="w-[303px] h-[40px] mt-[12px]">
              <p className="text-left text-[16px] font-medium leading-[19px] text-[#94969D]">
                {el?.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cloud */}
      <div className="w-[335px] h-[76px] mt-[72px] flex items-center justify-center">
        <p
          className="flex  text-center text-[#FFFFFF] text-[46px] font-medium leading-[57.6px]"
          style={{
            fontFamily: "SF UI Display, sans-serif",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Cloud 
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE5EFF] via-[#635BFF] to-[#38CBFF]"
            style={{
              fontFamily: "SF UI Display, sans-serif",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Solutions
          </span>
        </p>
      </div>
      <div className="w-[342px] h-[450px] rounded-[22px] overflow-hidden mt-[42px]">
        {/* <Image className='object-cover'
          src={cloudMain} unoptimized={true}
          width={342} quality={80}
          height={427} priority
          alt='webandMobileMain'
        /> */}
        <video
          src="https://squadra-media.s3.ap-south-1.amazonaws.com/video+sample.mp4"
          autoPlay
          loop
          width="640"
          height="360"
          className="rounded-[24px]"
        ></video>
        {/* <Image
          src={imageThree} unoptimized={true}
          width={342}
          height={427} priority
          alt='webandMobileMain'
          className="h-full w-full object-cover"
        /> */}
      </div>
      <div className="mt-[42px] mb-[32px] grid grid-cols-2 gap-[20px]">
        {cloudData?.map((el) => (
          <div
            key={el.title}
            className="w-[335px] mt-[16px] bg-[#040206] h-[147px] p-[16px] gap-[8px] rounded-[16px]   border-[1px] border-[#1D1D20]"
          >
            <div className="flex gap-[8px]">
              <div className="w-[44px] h-[44px] flex items-center justify-center bg-[#18181A] rounded-[10.62px]">
                <Image src={el?.icon} width={30} height={30} alt="Network" />
              </div>
              <div className="w-[237px] h-[38px] pt-1 flex items-center justify-left">
                <p className="text-white text-start  text-[24px] font-medium leading-[20px]">
                  {el?.title}
                </p>
              </div>
            </div>
            <div className="w-[303px] h-[40px] mt-[12px]">
              <p className="text-left text-[16px] font-medium leading-[20px] text-[#94969D]">
                {el?.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* solutions */}
      <div className="w-full h-[860px] bg-white flex items-center">
        <ApprochCompTab />
      </div>

      {/*    sQuadra tech Team */}
      <div className="w-full py-[72px] px-[124px] flex flex-col gap-[62px] bg-[#FAFAFA] items-center">
        <div className="flex flex-col gap-[12px] items-center justify-center w-[668px] h-[132px]">
          <p className="font-semibold text-[40px] leading-[47px] text-center text-[#FBAE17]">
            Squadra{" "}
            <span className="font-semibold text-[40px] leading-[47px] text-center text-[#131313]">
              Tech Team
            </span>
          </p>
          <p className="font-normal text-[18px] leading-[21.50px] text-center text-[#888888]">
            A space to unlock your true potential, chase your dreams, and
            embrace your passion all while enjoying every moment with fun and
            laughter!
          </p>
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="flex flex-col gap-[12px]">
            <div className="w-[351px] h-[268.5px] bg-gray-200">
              <Image
                src={SquadraTechTeamImage_1}
                alt="Tech Team"
                width={351}
                height={268.5}
                className="object-cover h-[268.5px] w-[351px]"
              />
            </div>
            <div className="flex items-center gap-[12px]">
              <div className="w-[169.5px] h-[268.5px] bg-gray-200">
                <Image
                  src={SquadraTechTeamImage_4}
                  alt="Tech Team"
                  width={169.5}
                  height={268.5}
                  className="object-cover h-[268.5px] w-[169.5px]"
                />
              </div>
              <div className="w-[169.5px] h-[268.5px] bg-gray-200">
                <Image
                  src={SquadraTechTeamImage_5}
                  alt="Tech Team"
                  width={169.5}
                  height={268.5}
                  className="object-cover h-[268.5px] w-[169.5px]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-[12px]">
              <div className="w-[169.5px] h-[268.5px] bg-gray-200">
                <Image
                  src={SquadraTechTeamImage_2}
                  alt="Tech Team"
                  width={169.5}
                  height={268.5}
                  className="object-cover h-[268.5px] w-[169.5px]"
                />
              </div>
              <div className="w-[169.5px] h-[268.5px] bg-gray-200">
                <Image
                  src={SquadraTechTeamImage_3}
                  alt="Tech Team"
                  width={169.5}
                  height={268.5}
                  className="object-cover h-[268.5px] w-[169.5px]"
                />
              </div>
            </div>
            <div className="w-[351px] h-[268.5px] bg-gray-200">
              <Image
                src={SquadraTechTeamImage_6}
                alt="Tech Team"
                width={351}
                height={268.5}
                className="object-cover h-[268.5px] w-[351px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose us */}
      <div className="w-full flex items-center bg-white pt-[124px]">
        <div className="bg-white min-w-[714px] mx-auto h-[516px] flex items-center justify-center flex-col">
          <div className="flex flex-col gap-[12px] w-[662px] h-[128px] mb-[60px] ">
            <p className="font-sans text-[40px] font-semibold leading-[47.73px] text-center text-[#000000]">
              Why Choose{" "}
              <span className="font-sans text-[40px] font-semibold leading-[47.73px] text-center text-[#FBAE17]">
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
            className="relative w-[714px] flex items-center justify-center"
            style={{ height: "280px" }}
          >
            <Image
              src={whyChooseImage}
              width={0}
              height={0}
              className="absolute z-10 top-0"
              alt="Network"
            />
          </div>
        </div>
      </div>

      {/* technologies we use */}
      <div className="w-full">
        <div className="min-w-[714px] mx-auto h-fit bg-[#FAFAFA] pt-[100px]">
          <div className="w-full h-[120px] flex flex-col  items-center justify-center text-center mb-[70px]">
            <div className="w-[664px] h-[76px] ">
              <p
                className="text-[40px] text-[#222222] font-semibold leading-[57.6px]"
                style={{
                  fontFamily: "SF UI Display, sans-serif",
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Technologies{" "}
                <span
                  className="text-[40px] text-[#94969D] font-semibold leading-[57.6px]"
                  style={{
                    fontFamily: "SF UI Display, sans-serif",
                    textDecorationSkipInk: "none",
                    textUnderlinePosition: "from-font",
                  }}
                >
                  we use
                </span>
              </p>
              <p className="text-[14px] mt-[24px] font-normal leading-[16.7px] text-center text-[#4E4D4D]">
                Discover the cutting-edge technologies we use to deliver
                innovative and impactful solutions, from modern frameworks to
                advanced cloud and machine learning tools
              </p>
            </div>
          </div>
          <TabComponent />
        </div>
      </div>
      <div ref={contactRef} id="contact-section">
        {/* Contact us */}
        <ContactUsForm />
      </div>
    </div>
  );
}

export default TabUi;