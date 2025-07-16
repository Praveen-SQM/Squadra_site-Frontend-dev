/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HoverButton } from "../ITServices/DesktopUi";
import arrowRight from "@/utilities/images/arrow-right.svg";
import righticon from "@/utilities/images/right-arrow.svg";
import CommercialPhotographyImage from "@/utilities/images/commercial-photography_.png";
import corporateFilmsImage from "@/utilities/images/Branding-creative.jpg";
import promotionalVideosImage from "@/utilities/images/technology-development.png";
import dronePhotographyImage from "@/utilities/images/drone-photography.png";
import eventPhotographyImage from "@/utilities/images/e-learning.jpg";
import cinematicVisualsImage from "@/utilities/images/cinematic-visuals.jpg";
import visualImageOne from "@/utilities/images/VisualImpact_VJ-1.jpg";
import visualImageTwo from "@/utilities/images/VisualImpact_VJ-2.jpg";
import visualImageThree from "@/utilities/images/VisualImpact_VJ-3.jpg";
import visualImageFour from "@/utilities/images/VisualImpact_VJ-4.jpg";
import visualImageFive from "@/utilities/images/VisualImpact_VJ-5.jpg";
import visualImageSix from "@/utilities/images/VisualImpact_VJ-6.jpg";
import visualImageSeven from "@/utilities/images/VisualImpact_VJ-7.jpg";
import visualImageEight from "@/utilities/images/VisualImpact_VJ-8.jpg";
import visualImageNine from "@/utilities/images/VisualImpact_VJ-9.jpg";
import visualImageTen from "@/utilities/images/VisualImpact_VJ-10.jpg";
import visualImageEleven from "@/utilities/images/VisualImpact_VJ-11.jpg";
import { InfiniteSliderVertical } from "./InfiniteSliderVertical";
import { InfiniteSliderWithText } from "./InfiniteSliderWithText";
import { Link } from "lucide-react";
function VisualImpactUi() {
  const services = [
    {
      category: "Branding",
      title: "Commercial Photography",
      description:
        "Whether for your website, e-commerce, or social media, we provide professional photography and video production to ensure your products and brand stand out.",
      image: CommercialPhotographyImage,
      maxParagraphWidth: "max-w-[504px]",
    },
    {
      category: "StoryTelling",
      title: "Corporate Films",
      description:
        "Tell your company’s story with high-quality videos that inspire, inform, and engage. From brand films to training videos, showcase your corporate vision like never before.",
      image: corporateFilmsImage,
      maxParagraphWidth: "max-w-[504px]",
    },
    {
      category: "Engagement",
      title: "Promotional Videos",
      description:
        "Create short, impactful videos designed to captivate audiences and promote your products, services, or events across digital platforms.",
      image: promotionalVideosImage,
      maxParagraphWidth: "max-w-[374px]",
    },
    {
      category: "Perspective",
      title: "Drone Photography",
      description:
        "Capture breathtaking aerial perspectives with cutting-edge drone technology, perfect for real estate, events, and cinematic storytelling.",
      image: dronePhotographyImage,
      maxParagraphWidth: "max-w-[374px]",
    },
    {
      category: "Showcase",
      title: "Event & Product Photography",
      description:
        "Document unforgettable moments and showcase your products with precision and style. Ideal for corporate events, exhibitions, and detailed product shots.",
      image: eventPhotographyImage,
      maxParagraphWidth: "max-w-[464px]",
    },
    {
      category: "Artistry",
      title: "Cinematic Visuals",
      description:
        "Immerse your audience in visually stunning, high-production-value content. Perfect for advertisements, brand films, and creative storytelling.",
      image: cinematicVisualsImage,
      maxParagraphWidth: "max-w-[447px]",
    },
  ];

  const records = [
    {
      recordNumber: "500+",
      title: "Commercial Photography",
      description: "Projects successfully delivered to elevate brand imagery.",
    },
    {
      recordNumber: "200+",
      title: "Promotional videos",
      description: "Crafted to engage audiences and drive growth.",
    },
    {
      recordNumber: "50+",
      title: "Corporate films",
      description: "Crafted to engage audiences and drive growth.",
    },
  ];

  const firstVisualImagesSet = [
    { image: visualImageOne },
    { image: visualImageTwo },
    { image: visualImageThree },
  ];

  const secondVisualImagesSet = [
    { image: visualImageFour },
    { image: visualImageFive },
  ];

  const ThirdVisualImagesSet = [
    { image: visualImageSeven },
    { image: visualImageEight },
  ];

  const FourVisualImagesSet = [
    { image: visualImageNine },
    { image: visualImageTen },
    { image: visualImageEleven },
  ];

  return (
    <div className="w-full overflox-x-hidden flex flex-col items-center bg-[#000000] xl:mt-[80px] mt-[64px]">
      {/*Hero section*/}
      <section id="hero-section" className="overflow-x-hidden my-[60px]">
        <InfiniteSliderWithText />
      </section>

      {/*Records section*/}
      <div className="sm:py-[120px] xl:px-[124px] lg:px-[40px] md:px-[40px] flex flex-row xl:gap-[145.5px] lg:gap-[130px] md:gap-[80px] sm:gap-[50px] gap-[0px]">
        {records?.map((record, index) => {
          return (
            <div
              key={index}
              className="py-10 px-5 flex flex-col xl:gap-6 lg:gap-5 md:gap-5 gap-1"
            >
              <p className="font-[300] xl:text-[80px] lg:text-[60px] md:text-[60px] sm:text-[60px] text-[24px] xl:leading-[95.47px] lg:leading-[71.6px] md:leading-[71.6px] sm:leading-[71.6px] leading-[28.64px] text-center text-[#FFFFFF]">
                {record?.recordNumber}
              </p>
              <div className="flex flex-col gap-3 justify-center">
                <p className="font-normal font-sans xl:text-[20px] xl:leading-[23.87px] lg:text-[16px] lg:leading-[19.09px] md:text-[16px] md:leading-[19.09px] text-[12px] leading-[14.32px] text-center text-[#FFFFFF]">
                  {record?.title}
                </p>
                <p className="font-[300] font-sans xl:text-[16px] lg:text-[14px] text-[14px] md:text-[14px] leading-5 text-center text-[#F8F8F8] max-w-[248px] sm:block hidden">
                  {record?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/*Services section*/}

      {/* <div className='flex flex-col xl:gap-[0px] lg:gap-[49px] md:gap-[49px] gap-[49px]'>
                {services.map((service, index) => {
                    return (
                        <div key={index} className={`xl:py-[120px] sm:py-0 py-[49px] sm:px-0 px-5 flex sm:flex-row flex-col items-center xl:gap-[64px] lg:gap-[60px] md:gap-[40px] gap-[28px] ${index % 2 === 0 ? "sm:bg-[#000000] bg-[#FFFFFF1A]" : ""}`}>
                            <div className='flex flex-col sm:gap-[60px] gap-6 sm:items-end items-center'>
                                <div className='border-t-[0.75px] border-b-[0.75px] sm:py-[9.39px] py-[4px] px-[11.52px] border-[#D1D1D1] font-normal sm:text-[13px] sm:leading-[15.51px] text-[10px] leading-[11.93px] text-[#D1D1D1] w-fit'>{service.category}</div>
                                <div className='flex flex-col xl:gap-[80px] lg:gap-[30px] md:gap-[30px] sm:gap-[30px] gap-[12px] sm:items-end items-center'>
                                    <div className='flex flex-col gap-3 sm:items-end items-center'>
                                        <p className='max-w-[506px] font-[300] xl:text-[80px] xl:leading-[95.47px] lg:text-[60px] lg:leading-[71.6px] md:text-[60px] md:leading-[71.6px] sm:text-[60px] sm:leading-[71.6px] text-[24px] leading-[28.64px] sm:text-right text-center text-[#FFFFFF]'>{service.title}</p>
                                        <p className={`py-1 font-[300] xl:text-[16px] xl:leading-7 lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] text-[14px] leading-[16.71px] text-[#E7E7E7] sm:text-right text-center ${service.maxParagraphWidth}`}>{service.description}</p>
                                    </div>
                                    <HoverButton
                                        href="/contact-us"
                                        buttonText="Get a Quote"
                                        defaultIcon={arrowRight}
                                        hoverIcon={righticon}
                                    />
                                </div>
                            </div>
                            <div className='xl:w-[720px] xl:h-[720px] lg:w-[388px] lg:h-[423px] md:w-[370px] md:h-[423px] sm:w-[370px] sm:h-[423px] w-[318px] h-[356px]'>
                                <Image src={service.image} alt="Commercial Photography" width={720} height={720} className='xl:w-[720px] xl:h-[720px] lg:w-[388px] lg:h-[423px] sm:w-[370px] sm:h-[423px] w-[318px] h-[356px] object-cover' />
                            </div>
                        </div>
                    )
                })}
            </div> */}

      <div className="w-full flex flex-col gap-[49px] xl:gap-0">
 {services.map((service, index) => (
  <div
    key={index}
    className="relative w-full sm:my-16 md:my-28 lg:my-32 min-h-screen bg-black overflow-hidden"
  >
    {/* Background Image */}
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className={`object-cover ${index === 2 || index === 4 ? "object-[top]" : ""}`}
      />
    </div>

    {/* Content Wrapper */}
    <div className="relative z-10 flex items-end sm:justify-center  md:justify-start lg:justify-start min-h-screen md:h-[700px] lg:h-[700px] w-full px-4 sm:px-6 md:px-0 lg:px-0">
      <div
        className="
          bg-black/65 backdrop-blur-3xl text-white
          flex flex-col justify-center
          items-center sm:items-end text-center sm:text-right
          w-full max-w-full
          sm:w-[300px] sm:px-4 sm:py-6 sm:h-auto
          md:w-[600px] md:px-16 md:py-10 md:h-[500px]
          lg:w-[744px] lg:px-[120px] lg:py-[60px] lg:h-[600px]
        "
      >
        {/* Category */}
        <div
          className="border-y-[0.75px] border-x-0 border-[#D1D1D1] 
            font-normal text-[#D1D1D1] uppercase w-fit mb-16
            text-[10px] leading-[11.93px] py-[4px] px-[11.52px]
            sm:text-[13px] sm:leading-[15.51px] sm:py-[9.39px]
          "
        >
          {service.category}
        </div>

        {/* Title */}
        <p
          className="mb-6 font-[300] text-[#FFFFFF]
            text-[24px] leading-[28.64px] 
            sm:text-[40px] sm:leading-[48px]
            md:text-[52px] md:leading-[64px]
            lg:text-[60px] lg:leading-[71.6px]
            xl:text-[64px] xl:leading-[64px]
            max-w-[506px]
          "
        >
          {service.title}
        </p>

        {/* Description */}
        <p
          className={`mb-16 font-sans font-[300] text-[#E7E7E7]
            text-[14px] leading-[16.71px]
            md:text-[14px] md:leading-[20px]
            lg:text-[14px] lg:leading-[28px]
            xl:text-[16px] xl:leading-[28px]
            ${service.maxParagraphWidth}
          `}
        >
          {service.description}
        </p>

        {/* CTA Button */}
        <HoverButton
          href="/contact-us"
          buttonText="Get a Quote"
          defaultIcon={arrowRight}
          hoverIcon={righticon}
          bgColor="#FFFFFF1A"
        />
      </div>
    </div>
  </div>
))}

</div>


      {/*Values section*/}
      <div className="sm:py-[100px] md:py-16 lg:py-12 pb-24 flex flex-col items-start">
        {/* 1st */}
        <div className="xl:w-[765px] lg:w-[618px] md:w-[618px] sm:w-[618px] w-[335px] xl:ml-[124px] flex sm:flex-row flex-col sm:gap-[74px] gap-6 sm:py-10 py-8 sm:pr-10 border-b border-gray-700">
          <div className="flex gap-[12px] items-center">
            <p className="sm:text-[40px] text-[32px] sm:leading-[47.73px] leading-[38.19px] font-semibold text-white">
              VISION
            </p>
          </div>
          <div className="flex flex-col sm:gap-3 gap-2">
            <h1 className="uppercase sm:text-[20px] sm:leading-[100%] text-[16px] leading-[19.09px] font-normal text-[#E7E7E7]">
              CRAFTING Stories
            </h1>
            <p className="sm:text-[16px] sm:leading-[22px] text-[13px] leading-[15.51px] font-light text-[#E7E7E7]">
              We focus on creating visuals that go beyond aesthetics, delivering
              meaningful stories through every frame.
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="xl:w-[873px] lg:w-[646px] md:w-[646px] sm:w-[618px] w-[335px] xl:ml-[371px] md:ml-[67px] flex sm:flex-row flex-col sm:gap-[74px] gap-6 sm:py-10 py-8 sm:pr-10 border-b border-gray-700">
          <div className="flex gap-[12px] items-center">
            <p className="sm:text-[40px] text-[32px] sm:leading-[47.73px] leading-[38.19px] font-semibold text-white">
              INNOVATION
            </p>
          </div>
          <div className="flex flex-col sm:gap-3 gap-2">
            <h1 className="uppercase sm:text-[20px] sm:leading-[100%] text-[16px] leading-[19.09px] font-normal text-[#E7E7E7]">
              Pushing Boundaries
            </h1>
            <p className="sm:text-[16px] sm:leading-[22px] text-[13px] leading-[15.51px] font-light text-[#E7E7E7]">
              Harnessing cutting-edge technology, we redefine visual content
              through drone videography, cinematic visuals, and promotional
              films.
            </p>
          </div>
        </div>
        {/* 3rd */}

        <div className="xl:w-[882px] lg:w-[648px] md:w-[648px] sm:w-[618px] w-[335px] xl:ml-[174px] flex sm:flex-row flex-col sm:gap-[74px] gap-6 sm:py-10 py-8 sm:pr-10 border-b border-gray-700">
          <div className="flex gap-[12px] items-center">
            <p className="sm:text-[40px]  text-[32px] sm:leading-[47.73px] leading-[38.19px] font-semibold text-white">
              EXCELLENCE
            </p>
          </div>
          <div className="flex flex-col sm:gap-3 gap-2">
            <h1 className="uppercase sm:text-[20px] sm:leading-[100%] text-[16px] leading-[19.09px] font-normal text-[#E7E7E7]">
              Precision in Every Shot
            </h1>
            <p className="sm:text-[16px] sm:leading-[22px] text-[13px] leading-[15.51px] font-light text-[#E7E7E7]">
              Every detail matters. From corporate films to product photography,
              we ensure each project reflects your brand&apos;s essence.
            </p>
          </div>
        </div>
        {/* 4th */}
        <div className="xl:w-[924px] lg:w-[642px] md:w-[642px] sm:w-[618px] w-[335px] xl:ml-[392px] md:ml-[67px] flex sm:flex-row flex-col sm:gap-[74px] gap-6 sm:py-10 py-8 border-b border-gray-700">
          <div className="flex gap-[12px] items-center">
            <p className="sm:text-[40px]  text-[32px] sm:leading-[47.73px] leading-[38.19px] font-semibold text-white">
              COLLABORATION
            </p>
          </div>
          <div className="flex flex-col sm:gap-3 gap-2">
            <h1 className="uppercase sm:text-[20px] sm:leading-[23.87px] text-[16px] leading-[19.09px] font-normal text-[#E7E7E7]">
              Your Vision, Our Expertise
            </h1>
            <p className="sm:text-[16px] sm:leading-[22px] text-[13px] leading-[15.51px] font-light text-[#E7E7E7]">
              Working closely with clients, we translate ideas into visuals that
              captivate and inspire audiences.
            </p>
          </div>
        </div>
      </div>

      {/*Infinite slider*/}
      <section className="overflow-x-hidden my-[60px]">
        <InfiniteSliderVertical />
      </section>

      {/*Visual journeys section*/}
      <div className="flex flex-col xl:pt-[120px] xl:pb-[80px] lg:pt-[0px] lg:pb-[0px] md:pt-[0px] md:pb-[0px] xl:mt-0 lg:mt-[49px] md:mt-[49px] mt-[61px] xl:gap-[138px] lg:gap-[49px] md:gap-[49px] gap-[61px]">
        <div className="flex flex-col sm:gap-6 gap-3 items-center">
          <div className="border-t-[0.75px] border-b-[0.75px] py-[9.39px] px-[11.52px] border-[#D1D1D1] text-[#D1D1D1] font-normal text-[12px] leading-[14.4px] tracking-[0.12625em] uppercase text-right align-middle">
            Beyond Ordinary
          </div>
          <p className="font-medium xl:text-[100px] xl:leading-[120px] lg:text-[55px] lg:leading-[65.63px] md:text-[55px] md:leading-[65.63px] text-[55px] leading-[65.63px] text-[#FFFFFF] text-center tracking-[0em]">
            Visual Journeys
          </p>
          <p className="font-[300] sm:text-[24px] sm:leading-[28.64px] text-[13px] leading-[15.51px] text-center text-[#B0B0B0] sm:max-w-[596px] max-w-[335px]">
            Explore projects where imagination meets execution, turning visions
            into stunning realities.
          </p>
          <div className="sm:flex hidden">
            <HoverButton
              href="#portfolio"
              buttonText="View Portfolio"
              defaultIcon={arrowRight}
              hoverIcon={righticon}
            />
          </div>
        </div>

        <div
          id="portfolio"
          className="flex sm:flex-row flex-col items-center xl:gap-5 lg:gap-[10px] md:gap-[10px] sm:gap-[10px] gap-4"
        >
          <div className="flex items-center xl:gap-5 lg:gap-[10px] md:gap-[10px] sm:gap-[10px] gap-4  overflow-hidden">
            <div className="flex flex-col xl:gap-5 lg:gap-[10px] md:gap-[10px] sm:gap-[10px] gap-4">
              {firstVisualImagesSet?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[110px] md:h-[187px] sm:w-[110px] sm:h-[187px] w-[137px] h-[232.67px]"
                  >
                    <Image
                      src={item?.image}
                      alt="Visual one"
                      className="xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px] sm:w-[117px] sm:h-[187px] w-[137px] h-[232.67px] object-cover"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col xl:gap-5 lg:gap-[10px] md:gap-[10px] sm:gap-[10px] gap-4">
              {secondVisualImagesSet?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="xl:w-[270px] xl:h-[402px] lg:w-[157px] lg:h-[286px] md:w-[150px] md:h-[286px] sm:w-[150px] sm:h-[286px] w-[204px] h-[357px]"
                  >
                    <Image
                      src={item?.image}
                      alt="Visual one"
                      className="xl:w-[270px] xl:h-[402px] lg:w-[157px] lg:h-[286px] md:w-[157px] md:h-[286px] sm:w-[157px] sm:h-[286px] w-[204px] h-[357px] object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="xl:w-[420px] xl:h-[824px] lg:w-[236px] lg:h-[582px] md:w-[204px] md:h-[582px] sm:w-[204px] sm:h-[582px] w-[355px] h-[824px] overflow-hidden">
            <Image
              src={visualImageSix}
              alt="Visual one"
              className="xl:w-[420px] xl:h-[824px] lg:w-[236px] lg:h-[582px] md:w-[236px] md:h-[582px] sm:w-[236px] sm:h-[582px] w-[355px] h-[824px] object-cover"
            />
          </div>
          <div className="flex items-center xl:gap-5 lg:gap-[10px] md:gap-[10px] sm:gap-[10px] gap-4  overflow-hidden">
            <div className="flex flex-col xl:gap-5 lg:gap-[10px] md:gap-[10px] sm:gap-[10px] gap-4">
              {ThirdVisualImagesSet?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="xl:w-[270px] xl:h-[402px] lg:w-[157px] lg:h-[286px] md:w-[150px] md:h-[286px] sm:w-[150px] sm:h-[286px] w-[204px] h-[357px]"
                  >
                    <Image
                      src={item?.image}
                      alt="Visual one"
                      className="xl:w-[270px] xl:h-[402px] lg:w-[157px] lg:h-[286px] md:w-[157px] md:h-[286px] sm:w-[157px] sm:h-[286px] w-[204px] h-[357px] object-cover"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col xl:gap-5 lg:gap-[10px] md:gap-[10px] sm:gap-[10px] gap-4">
              {FourVisualImagesSet?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[110px] md:h-[187px] sm:w-[110px] sm:h-[187px] w-[137px] h-[232.67px]"
                  >
                    <Image
                      src={item?.image}
                      alt="Visual one"
                      className="xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px] sm:w-[117px]  sm:h-[187px] w-[137px] h-[232.67px] object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisualImpactUi;
