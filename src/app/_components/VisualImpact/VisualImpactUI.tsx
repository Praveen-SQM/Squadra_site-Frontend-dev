/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import Image from "next/image";
import React from "react";
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
        "Tell your company's story with high-quality videos that inspire, inform, and engage. From brand films to training videos, showcase your corporate vision like never before.",
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
    <div className="w-full overflow-x-hidden flex flex-col items-center bg-black mt-16 xl:mt-20">
      {/*Hero section*/}
      <section id="hero-section" className="overflow-x-hidden my-15">
        <InfiniteSliderWithText />
      </section>

      {/*Records section*/}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-12 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12 xl:gap-24 max-w-7xl mx-auto">
          {records?.map((record, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 lg:space-y-6"
            >
              <p className="font-light text-2xl sm:text-4xl lg:text-5xl xl:text-7xl leading-tight text-white">
                {record?.recordNumber}
              </p>
              <div className="space-y-2 lg:space-y-3">
                <p className="font-normal text-xs sm:text-sm lg:text-base xl:text-xl leading-tight text-white">
                  {record?.title}
                </p>
                <p className="hidden sm:block font-light text-xs lg:text-sm text-gray-200 max-w-60 leading-5">
                  {record?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Services section*/}
      <div className="w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen bg-black overflow-hidden mb-12 sm:mb-16 lg:mb-20 xl:mb-32"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={`object-cover ${
                  index === 2 || index === 4 ? "object-top" : "object-center"
                }`}
              />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex items-end justify-center sm:justify-start min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen w-full">
              <div className="bg-black/70 backdrop-blur-xl text-white flex flex-col justify-center items-center sm:items-end text-center sm:text-right w-full max-w-none px-6 py-8 sm:w-80 sm:px-6 sm:py-8 sm:h-auto sm:max-w-sm md:w-96 md:px-8 md:py-10 md:h-auto md:max-w-md lg:w-[500px] lg:px-12 lg:py-12 lg:h-auto lg:max-w-lg xl:w-[744px] xl:px-32 xl:py-16 xl:h-auto xl:max-w-3xl sm:mt-6 sm:mr-6 md:mt-8 md:mr-8 lg:mt-12 lg:mr-12 xl:mt-16 xl:mr-16">
                {/* Category */}
                <div className="border-y border-gray-400 font-normal text-gray-300 uppercase w-fit mb-8 sm:mb-12 lg:mb-16 text-xs sm:text-sm py-2 px-3 sm:py-2.5 sm:px-3">
                  {service.category}
                </div>

                {/* Title */}
                <h2 className="mb-4 sm:mb-6 lg:mb-8 font-light text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight max-w-md lg:max-w-lg">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="mb-8 sm:mb-12 lg:mb-16 font-light text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg">
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
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          {/* Vision */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 lg:gap-20 py-8 sm:py-10 border-b border-gray-700">
            <div className="flex-shrink-0">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                VISION
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="uppercase text-sm sm:text-lg lg:text-xl font-normal text-gray-300">
                CRAFTING Stories
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-light text-gray-300 leading-relaxed">
                We focus on creating visuals that go beyond aesthetics,
                delivering meaningful stories through every frame.
              </p>
            </div>
          </div>

          {/* Innovation */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 lg:gap-20 py-8 sm:py-10 border-b border-gray-700">
            <div className="flex-shrink-0">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                INNOVATION
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="uppercase text-sm sm:text-lg lg:text-xl font-normal text-gray-300">
                Pushing Boundaries
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-light text-gray-300 leading-relaxed">
                Harnessing cutting-edge technology, we redefine visual content
                through drone videography, cinematic visuals, and promotional
                films.
              </p>
            </div>
          </div>

          {/* Excellence */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 lg:gap-20 py-8 sm:py-10 border-b border-gray-700">
            <div className="flex-shrink-0">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                EXCELLENCE
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="uppercase text-sm sm:text-lg lg:text-xl font-normal text-gray-300">
                Precision in Every Shot
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-light text-gray-300 leading-relaxed">
                Every detail matters. From corporate films to product
                photography, we ensure each project reflects your brand&apos;s
                essence.
              </p>
            </div>
          </div>

          {/* Collaboration */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 lg:gap-20 py-8 sm:py-10 border-b border-gray-700">
            <div className="flex-shrink-0">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                COLLABORATION
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="uppercase text-sm sm:text-lg lg:text-xl font-normal text-gray-300">
                Your Vision, Our Expertise
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-light text-gray-300 leading-relaxed">
                Working closely with clients, we translate ideas into visuals
                that captivate and inspire audiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Infinite slider*/}
      <section className="overflow-x-hidden my-15">
        <InfiniteSliderVertical />
      </section>

      {/*Visual journeys section*/}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-24 xl:mb-32">
            <div className="inline-block border-y border-gray-400 py-2 px-3 text-gray-300 font-normal text-xs tracking-widest uppercase">
              Beyond Ordinary
            </div>
            <h2 className="font-medium text-4xl sm:text-5xl lg:text-6xl xl:text-8xl text-white">
              Visual Journeys
            </h2>
            <p className="font-light text-sm sm:text-lg lg:text-xl xl:text-2xl text-gray-400 max-w-2xl mx-auto">
              Explore projects where imagination meets execution, turning
              visions into stunning realities.
            </p>
            <div className="hidden sm:block pt-4">
              <HoverButton
                href="#portfolio"
                buttonText="View Portfolio"
                defaultIcon={arrowRight}
                hoverIcon={righticon}
              />
            </div>
          </div>

          {/* Portfolio Grid */}
          <div
            id="portfolio"
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-5"
          >
            {/* First Column */}
            <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 lg:gap-5">
              {firstVisualImagesSet?.map((item, index) => (
                <div
                  key={index}
                  className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-48 lg:w-40 lg:h-52 xl:w-52 xl:h-68"
                >
                  <Image
                    src={item?.image}
                    alt={`Visual ${index + 1}`}
                    width={200}
                    height={261}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Second Column */}
            <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 lg:gap-5">
              {secondVisualImagesSet?.map((item, index) => (
                <div
                  key={index}
                  className="w-32 h-48 sm:w-36 sm:h-56 md:w-40 md:h-64 lg:w-52 lg:h-80 xl:w-68 xl:h-96"
                >
                  <Image
                    src={item?.image}
                    alt={`Visual ${index + 4}`}
                    width={270}
                    height={402}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Center Large Image */}
            <div className="w-64 h-96 sm:w-48 sm:h-72 md:w-52 md:h-80 lg:w-60 lg:h-96 xl:w-80 xl:h-[32rem] overflow-hidden">
              <Image
                src={visualImageSix}
                alt="Main Visual"
                width={420}
                height={824}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Third Column */}
            <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 lg:gap-5">
              {ThirdVisualImagesSet?.map((item, index) => (
                <div
                  key={index}
                  className="w-32 h-48 sm:w-36 sm:h-56 md:w-40 md:h-64 lg:w-52 lg:h-80 xl:w-68 xl:h-96"
                >
                  <Image
                    src={item?.image}
                    alt={`Visual ${index + 7}`}
                    width={270}
                    height={402}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Fourth Column */}
            <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 lg:gap-5">
              {FourVisualImagesSet?.map((item, index) => (
                <div
                  key={index}
                  className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-48 lg:w-40 lg:h-52 xl:w-52 xl:h-68"
                >
                  <Image
                    src={item?.image}
                    alt={`Visual ${index + 9}`}
                    width={200}
                    height={261}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisualImpactUi;
