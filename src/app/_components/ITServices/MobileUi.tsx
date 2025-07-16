"use client";
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import starSvg from '@/utilities/images/star.svg'
import "./styles/MobileUI.css"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import sliderIcon from "@/utilities/icons/slider-icon.svg"
import Image from 'next/image';
import Network from '@/utilities/images/Network.svg'
import Saas from '@/utilities/images/Saas.svg'
import Solution from '@/utilities/images/Solution.svg'
import Connection from '@/utilities/images/Connection.svg'
import UserWorkFlow from '@/utilities/images/User workflow.svg'
import codeSquare from '@/utilities/images/Code Square.svg'
import Container from "@/utilities/images/Container.jpg";
import netWorkBlack from '@/utilities/images/NetworkBlack.svg'
import HandShake from '@/utilities/images/Handshake.svg'
import Archive from '@/utilities/images/Archive.svg'
import Book from '@/utilities/images/Book.svg'
import DB from '@/utilities/images/db.svg'
import CloudConnection from '@/utilities/images/cloud connection.svg'
import Graphs from '@/utilities/images/Graphs.svg'
import CustomServices from '@/utilities/images/CustomSerivces.svg'
import ITImage from '@/utilities/images/ITImage.png'
import uiux from '@/utilities/images/uiux.svg'
import devops from '@/utilities/images/devops.svg'
import cybersecurity from '@/utilities/images/cybersecurity.svg'
import qa from '@/utilities/images/qa.svg'
import progressiveWebapp from '@/utilities/images/progressivewebapp.svg'
import customwebSites from '@/utilities/images/websites.svg'
import crossPlatforms from '@/utilities/images/crossplatforms.svg';
import apiDevelopment from '@/utilities/images/apiDevelopment.svg';
import webandMobileMain from '@/utilities/images/webandMobileMain.jpg'
import teleMedicine from '@/utilities/images/telemedicine.svg';
import wellness from '@/utilities/images/wellness.svg';
import patientManagement from '@/utilities/images/patientmanagement.svg';
import healthRecords from '@/utilities/images/healthrecords.svg';
import HealthCareMain from '@/utilities/images/healthCareMAin.svg'
import aiDrivenProcess from '@/utilities/images/sparkles.svg';
import workflow from '@/utilities/images/workflow.svg';
import digitaltransformation from '@/utilities/images/digitaltransformation.svg';
import cloud from '@/utilities/images/cloud.svg';
import secure from '@/utilities/images/secure.svg';
import financial from '@/utilities/images/financial.svg';
import wallet from '@/utilities/images/wallet.svg';
import invoice from '@/utilities/images/invoice.svg';
import finTechMain from '@/utilities/images/fintechMain.png';
import cloudsolution from '@/utilities/images/cloudsolution.svg';
import architecturedesign from '@/utilities/images/architecturedesign.svg';
import clouddev from '@/utilities/images/clouddev.svg';
import cloudsecurity from '@/utilities/images/cloudsecurity.svg';

import whyChooseUsImage from '@/utilities/images/why-choose-us.svg'
import dottedLine from '@/utilities/images/dotted-line.svg'
import heroImage from '@/utilities/images/hero-image.svg'
import ContactUsForm from './components/ContactUsForm';
import { analyticsTools, backendTools, devopsTools, frontendTools, mobileTools } from './Tabs';
import ApproachComponent from './components/ApproachComponent';
import imageOne from "@/utilities/images/image-1.jpg";
import imageTwo from '@/utilities/images/image-2.png'
import imageThree from '@/utilities/images/image-3.png'

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
import Link from 'next/link';

export const data = [
  { icon: Network, title: "Custom Software Development", description: "Bespoke software solutions tailored to your business needs." },
  { icon: Solution, title: "Data & AI Solutions", description: "Leveraging data and AI to drive smarter decisions and automation." },
  { icon: codeSquare, title: "Web & Mobile Application Development", description: "Creating fast, intuitive web and mobile apps." },
  { icon: Saas, title: "SaaS Development", description: "Scalable, cloud-based applications for subscription-based services." },
  { icon: UserWorkFlow, title: "End-to-End IT Services", description: "Complete IT support from design to deployment and security." },
  { icon: Connection, title: "Industry-Specific Solutions", description: "Customised solutions for finance, healthcare, and other industries." },
]

export const customSoftwareDevData = [
  {
    icon: netWorkBlack, title: "ERP Systems", description: "Chat seamlessly with friends and communities."
  },
  {
    icon: HandShake, title: "CRM Platforms", description: "Share life moments through photos and videos."
  },
  {
    icon: Archive, title: "Inventory Management", description: "Personalize your profile with themes and layouts."
  },
  {
    icon: Book, title: "LMS Platforms", description: "Join or create groups around shared interests."
  },
]

export const saasData = [
  {
    icon: DB, title: "Subscription Management Solutions", description: "Streamline subscriptions with efficient tools for tracking, billing, and renewals."
  },
  {
    icon: CloudConnection, title: "Cloud-Based Applications", description: "Leverage scalable, secure, and accessible solutions powered by the cloud."
  },
  {
    icon: Graphs, title: "Data-Driven SaaS Tools", description: "Personalise your profile with themes and layouts."
  },
  {
    icon: CustomServices, title: "Custom Integration Services", description: "Connect systems to streamline workflows and improve data sharing."
  },
]

export const ItServices = [
  {
    "icon": uiux,
    "title": "UI/UX Design",
    "description": "Seamless interfaces for intuitive experiences."
  },
  {
    "icon": devops,
    "title": "DevOps",
    "description": "Streamlined processes for smooth deployments."
  },
  {
    "icon": cybersecurity,
    "title": "Cybersecurity",
    "description": "Safeguarding your assets through advanced protection."
  },
  {
    "icon": qa,
    "title": "QA & Automation",
    "description": "Ensuring flawless performance through rigorous testing."
  }
]

export const webAndMobDev = [
  {
    "icon": progressiveWebapp,
    "title": "Progressive Web Apps",
    "description": "Delivering speed and reliability for seamless user experiences."
  },
  {
    "icon": crossPlatforms,
    "title": "Cross-Platform Mobile Apps",
    "description": "Expanding your reach to more users across devices."
  },
  {
    "icon": customwebSites,
    "title": "Custom Websites",
    "description": "Tailored designs that reflect your brand's identity."
  },
  
  {
    "icon": apiDevelopment,
    "title": "API Development",
    "description": "Building robust and scalable APIs for seamless integration across platforms."
  }
]


export const healthcare = [
  {
    "icon": teleMedicine,
    "title": "Telemedicine Platforms",
    "description": "Streamline healthcare workflows for better patient care."
  },
  {
    "icon": wellness,
    "title": "Wellness and Fitness Apps",
    "description": "Promote healthy living with personalized fitness solutions."
  },
  {
    "icon": patientManagement,
    "title": "Patient Management Systems",
    "description": "Streamline healthcare workflows for efficiency and better care."
  },
  {
    "icon": healthRecords,
    "title": "Electronic Health Records",
    "description": "Digitize patient info for seamless access and better care."
  }
]

export const aiAndDigital = [
  {
    "icon": aiDrivenProcess,
    "title": "AI-Driven Process Automation",
    "description": "Automate tasks with AI to boost efficiency and reduce human error."
  },
  {
    "icon": workflow,
    "title": "Workflow Optimization Tools",
    "description": "Streamline processes and improve team collaboration for higher productivity."
  },
  {
    "icon": digitaltransformation,
    "title": "Complete Digital Transformation Strategies",
    "description": "Implement digital solutions to drive growth and innovation across your business."
  },
  {
    "icon": cloud,
    "title": "Cloud Integration Solutions",
    "description": "Integrate cloud technologies for enhanced scalability and operational flexibility."
  }
]

export const finTech = [
  {
    "icon": secure,
    "title": "Secure Payments",
    "description": "Secure transactions with reliable payment gateway solutions."
  },
  {
    "icon": wallet,
    "title": "Digital Wallets",
    "description": "Experience effortless, contactless payments with digital wallets."
  },
  {
    "icon": financial,
    "title": "Financial Analytics",
    "description": "Gain insights with real-time analytics for smarter decisions."
  },
  {
    "icon": invoice,
    "title": "Automated Invoicing",
    "description": "Streamline billing with efficient, accurate invoicing tools."
  }
]

export const cloudData = [
  {
    "icon": cloudsolution,
    "title": "Cloud Solutions",
    "description": "Provide scalable, flexible cloud services to meet business needs."
  },
  {
    "icon": architecturedesign,
    "title": "Architecture Design",
    "description": "Design scalable cloud infrastructures for optimal performance."
  },
  {
    "icon": clouddev,
    "title": "Cloud Dev",
    "description": "Develop cloud-native applications with agility and innovation."
  },
  {
    "icon": cloudsecurity,
    "title": "Cloud Security",
    "description": "Ensure robust protection for data and applications in the cloud."
  }
]



export const logos = [
  { name: "VIDA", url: sliderIcon },
  { name: "Brand 8", url: sliderIcon },
  { name: "E-ZONE", url: sliderIcon },
  { name: "Brand 3", url: sliderIcon },
  { name: "GREE", url: sliderIcon },
  { name: "Habitat India", url: sliderIcon },
  { name: "Double Tree", url: sliderIcon },
  { name: "Brand 10", url: sliderIcon },
  { name: "Cafe Noir", url: sliderIcon },
  { name: "Brand 9", url: sliderIcon },
  { name: "Brand 11", url: sliderIcon },
  { name: "Brand 12", url: sliderIcon },
  { name: "Brand 13", url: sliderIcon },
  { name: "Brand 14", url: sliderIcon },
  { name: "Brand 15", url: sliderIcon },
];

     const Logos = [
        { name: "Lumina", url: { src: lumina } },
        { name: "Vortex", url: { src: vortex } },
        { name: "Velocity", url: { src: velocity } },
        { name: "Synergy", url: { src: synergy } },
        { name: "Enigma", url: { src: enigma } },
        { name: "Spectrum", url: { src: spectrum } },
      ];



function MobileUi() {

  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  console.log(imageRef)

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current?.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      setIsInView(inView);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };


  return (
    <div className="h-fit  flex flex-col  w-full  items-center bg-[#040206]">
      {/* Hero Section */}
<div className="relative h-screen  w-full overflow-hidden">
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
  <div className="flex flex-col pt-[clamp(180px,15vw,100px)] absolute inset-0 mt-[clamp(80px,20vw,200px)] gap-[clamp(28px,6vw,60px)] px-[clamp(12px,5vw,24px)]">
    <div className="flex flex-col justify-center items-center gap-[clamp(24px,5vw,42px)] text-center">
      <div className="flex flex-col gap-[clamp(2px,0.7vw,6px)] max-w-[90%] items-center">
        <p
          className="font-[Inter] font-medium text-white tracking-[-0.0506em]
          text-[clamp(28px,8vw,48px)] leading-[clamp(32px,8.5vw,52px)]"
        >
          Your Trusted Partner in IT{" "}
          <span className="text-transparent bg-gradient-to-b from-white via-white/60 to-[#B372CF] bg-clip-text">
            Innovation
          </span>
        </p>

        <div className="pt-[clamp(4px,1.2vw,8px)]">
          <p
            className="font-[Inter] font-normal text-white
            text-[clamp(14px,4vw,18px)] leading-[clamp(20px,4.8vw,26px)]
            max-w-[clamp(280px,80vw,360px)] tracking-[0.02em]"
          >
            Empowering businesses with cutting-edge technology, scalable
            solutions, and transformative digital strategies.
          </p>
        </div>

        <div className="mt-[clamp(16px,4vw,24px)]">
          <Link href="/contact-us">
            <div className="px-[clamp(6px,2vw,10px)] py-[clamp(4px,1.5vw,6px)] rounded-[clamp(6px,1.5vw,10px)] border border-[#FFFFFF1A]">
              <button
                className="flex items-center justify-center 
                bg-white text-black font-bold 
                rounded-[clamp(5px,1.5vw,8px)] 
                px-[clamp(16px,5vw,24px)] 
                h-[clamp(34px,4vw,42px)] 
                text-[clamp(13px,4vw,16px)] 
                leading-[clamp(18px,4vw,24px)] 
                shadow-[6px_10px_28px_0px_#A89D9826] 
                hover:bg-[#f9cd5e] transition-colors"
              >
                Contact Us
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>


{/* Logo Section */}
<div className="w-full pb-16 px-[clamp(12px,5vw,32px)] py-[clamp(24px,6vw,44px)]">
  <div className="flex flex-wrap items-center justify-center gap-[clamp(12px,4vw,24px)]">
    {Logos.map((logo, index) => (
      <div
        key={index}
        className="w-[clamp(120px,40vw,170px)] h-[clamp(40px,12vw,56px)] flex items-center justify-center rounded-md"
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




      {/* Carousel */}

      {/* <div className='mb-[42px] flex flex-col items-center justify-center'>
        <div className="scrolling-container">
          <div className="scrolling-content">
            {logos?.map((logo, index) => (
              <div key={index} className="inline-block w-[92px] h-[52px] rounded-[5.31px] py-[16.98px] px-[5.31px] flex items-center justify-center border border-gray-900">
                <Image src={logo?.url?.src} alt={logo?.name} width={0} height={0} className='w-[82.24px] h-[18.04px]' />
              </div>
            ))}
            {logos?.map((logo, index) => (
              <div key={`duplicate-${index}`} className="inline-block w-[92px] h-[52px] rounded-[5.31px] py-[16.98px] px-[5.31px] flex items-center justify-center border border-gray-900">
                <Image src={logo?.url?.src} alt={logo?.name} width={0} height={0} className='w-[82.24px] h-[18.04px]' />
              </div>
            ))}
          </div>
        </div>
      </div> */}


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


      <p
        className="text-center mt-[13px] text-white text-[32px] font-bold leading-[38.19px]"

      >
        What we do
      </p>

      <div className="w-[335px] h-[34px] gap-0 mt-[12px]">
        <p
          className="text-center text-[#797B85] text-[14px] font-medium leading-[17.08px]"
        >
          Empowering businesses with transformative IT solutions for efficiency and success
        </p>

      </div>

      {/* <div className='w-[321px] h-[670px] mt-[42px]'>
        <Image
          src="https://squadra-media.s3.ap-south-1.amazonaws.com/mockup+.png"
          width={321}
          height={600}
          alt='BenefitFrame'
        />
      </div> */}

      {/* Feature Cards */}

      <div className='mt-[42px]'>
        {
          data?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
            >
              <div className='flex gap-[8px]'>
                <div className='w-[44px] h-[44px] flex items-center justify-center bg-[#18181A] border-[2px] border-[#28282C] rounded-[10.62px]'>
                  <Image
                    src={el?.icon}
                    width={23}
                    height={23}
                    alt='Network'
                  />
                </div>
                <div className='w-[237px] h-[38px]  flex items-center justify-left'>
                  <p
                    className="text-white text-start  text-[16px] font-medium leading-[19.09px]"

                  >
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      <div className='w-[335px] h-[124px] mt-[42px] mb-[72px] flex flex-col items-center justify-center'>
        <p
          className="text-left text-[14px] font-normal leading-[24px] text-[#888888] uppercase"

        >
          Delivering excellence.
        </p>
        <div className='w-[295px] h-[92px] mt-[8px]'>

          <p
            className="text-center text-[24px] font-medium leading-[28.64px] text-white"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Squadra delivers cutting-edge solutions for{" "}
            <span
              className="text-center text-[28px] font-medium leading-[33.41px]"
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
                background: 'linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)',
                WebkitBackgroundClip: 'text', // For Safari
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Business Success
            </span>


          </p>


        </div>
      </div>

      {/*  Custom Software Development */}
      <div className='bg-white w-full flex flex-col items-center justify-center pt-[48px]'>
        <div className='w-[335px] h-[76px] '>
          <p
            className="text-center text-[32px] text-[#222222] font-semibold leading-[38.19px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Custom Software{" "}
            <span
              className="text-[32px] text-[#94969D] font-semibold leading-[38.19px]"
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
              }}
            >
              Development
            </span>
          </p>

        </div>
        <div className='w-[340px] h-[425px] rounded-[16px] mt-[48px]'>
          <Image
            src={Container}
            width={340}
            height={425}
            alt='Container'
            className='rounded-[16px]'

          />
        </div>
        {/* Customer Software Development */}
        <div className='mt-[42px] mb-[48px]'>
          {
            customSoftwareDevData?.map((el) => (

              <div key={el.title}
                className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
              >
                <div className='flex gap-[8px]'>
                  <div className='w-[44px] h-[44px] flex items-center justify-center rounded-[10.62px]'>
                    <Image
                      src={el?.icon}
                      width={30}
                      height={30}
                      alt='Network'
                    />
                  </div>
                  <div className='w-[237px] h-[38px]  flex items-center justify-left'>
                    <p
                      className="text-[#222222] text-start  text-[16px] font-medium leading-[19.09px]"

                    >
                      {el?.title}
                    </p>
                  </div>
                </div>
                <div className='w-[303px] h-[40px] mt-[12px]'>
                  <p
                    className="text-left text-[14px] font-medium leading-[20px] text-[#717171]"

                  >
                    {el?.description}
                  </p>

                </div>
              </div>
            ))}
        </div>
        {/* Saas Development */}
        <div className='w-[335px] h-[63px]'>
          <p
            className="text-center text-[32px] font-semibold leading-[38.19px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            SaaS{" "}
            <span
              className="text-[32px] font-medium leading-[38.19px]"
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
                background: 'linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Development
            </span>
          </p>
          <p
            className="text-center mt-[8px] text-[14px] font-medium leading-[17.08px] text-[#797B85]"
            style={{
              fontFamily: 'Instrument Sans, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Deliver scalable, cloud-first experiences.
          </p>


        </div>
        <div className='w-[335px] h-[330px] rounded-[16px] mt-[44px]'>
          <Image
            src={imageOne}
            width={335}
            height={275}
            alt='SaaS'
            className='h-full w-full rounded-[16px] object-cover'
          />
          {/* <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className=" h-full w-full object-cover"
        src="https://squadra-media.s3.ap-south-1.amazonaws.com/Dashboard%2Bvideo.mp4"
      /> */}

        </div>
        <div className='mt-[44px] mb-[48px]'>
          {
            saasData?.map((el) => (

              <div key={el.title}
                className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
              >
                <div className='flex gap-[8px]'>
                  <div className='w-[44px] h-[44px] flex items-center justify-center border-[1px] border-gray-300 rounded-[10.62px]'>
                    <Image
                      src={el?.icon}
                      width={30}
                      height={30}
                      alt='Network'
                    />
                  </div>
                  <div className='w-[237px] h-[38px] pt-1  flex items-center justify-left'>
                    <p
                      className="text-[#222222] text-start  text-[16px] font-medium leading-[19.09px]"

                    >
                      {el?.title}
                    </p>
                  </div>
                </div>
                <div className='w-[303px] h-[40px] mt-[12px]'>
                  <p
                    className="text-left text-[14px] font-medium leading-[20px] text-[#717171]"

                  >
                    {el?.description}
                  </p>

                </div>
              </div>
            ))}
        </div>
      </div>

      {/* End-to-End
IT Services */}
      <div className='w-[335px] h-[76px] mt-[72px]'>
        <p
          className="flex flex-col text-center text-[#FFFFFF] text-[32px] font-medium leading-[38.19px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          End-to-End{' '}
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE5EFF] via-[#635BFF] to-[#38CBFF]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            IT Services
          </span>
        </p>

      </div>
      <div className='w-[342px] h-[427px] rounded-[16px] overflow-hidden mt-[42px]'>
        <Image
          src={ITImage}
          width={342}
          height={427}
          alt='It SErvices'
        />
      </div>
      <div className='mt-[42px]'>
        {
          ItServices?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-[1px] border-[#1D1D20]"
            >
              <div className='flex gap-[8px]'>
                <div className='w-[44px] h-[44px] flex items-center justify-center bg-[#18181A]  rounded-[10.62px]'>
                  <Image
                    src={el?.icon}
                    width={30}
                    height={30}
                    alt='Network'
                  />
                </div>
                <div className='w-[237px] h-[38px] pt-1  flex items-center justify-left'>
                  <p
                    className="text-white text-start  text-[16px] font-medium leading-[19.09px]"

                  >
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      {/* Web & Mobile App
Development */}
      <div className='w-[335px] h-[76px] mt-[72px]'>
        <p
          className="flex flex-col text-center text-[#FFFFFF] text-[32px] font-medium leading-[38.19px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          Web & Mobile App
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE5EFF] via-[#635BFF] to-[#38CBFF]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            Development
          </span>
        </p>

      </div>
      <div className='w-[342px] h-[398px] bg-black rounded-[16px] overflow-hidden mt-[42px]'>
        <Image
          src={webandMobileMain}
          width={342}
          height={398}
          alt='webandMobileMain'
          className='rounded-[16px]'
        />
      </div>
      <div className='mt-[42px] mb-[32px]'>
        {
          webAndMobDev?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-[1px] border-[#1D1D20]"
            >
              <div className='flex gap-[8px]'>
                <div className='w-[44px] h-[44px] flex items-center justify-center bg-[#18181A] rounded-[10.62px]'>
                  <Image
                    src={el?.icon}
                    width={30}
                    height={30}
                    alt='Network'
                  />
                </div>
                <div className='w-[237px] h-[38px]  flex items-center justify-left'>
                  <p
                    className="text-white text-start  text-[16px] font-medium leading-[19.09px]"

                  >
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>


      {/*  Health Care*/}
      <div className='bg-white w-full flex flex-col items-center justify-center pt-[48px]'>
        <div className='w-[335px] h-[76px] '>
          <p
            className="text-center text-[32px] text-[#222222] font-semibold leading-[38.19px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Healthcare{" "}
            <span
              className="text-[32px] text-[#94969D] font-semibold leading-[38.19px]"
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
              }}
            >
              Applications
            </span>
          </p>

        </div>
        <div className='w-[342px] h-[427px] mt-[48px]'>
          <Image
            src={HealthCareMain}
            width={342}
            height={427}
            alt='HealthCareMain'

          />
        </div>

        {/* Ai */}
        <div className='mt-[42px] mb-[48px]'>
          {
            healthcare?.map((el) => (

              <div key={el.title}
                className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
              >
                <div className='flex gap-[8px]'>
                  <div className='w-[44px] h-[44px] flex items-center justify-center rounded-[10.62px]'>
                    <Image
                      src={el?.icon}
                      width={30}
                      height={30}
                      alt='Network'
                    />
                  </div>
                  <div className='w-[237px] h-[38px] pt-1 flex items-center justify-left'>
                    <p
                      className="text-[#222222] text-start  text-[16px] font-medium leading-[19.09px]"
                    >
                      {el?.title}
                    </p>
                  </div>
                </div>
                <div className='w-[303px] h-[40px] mt-[12px]'>
                  <p
                    className="text-left text-[14px] font-medium leading-[20px] text-[#717171]"

                  >
                    {el?.description}
                  </p>

                </div>
              </div>
            ))}
        </div>

        {/* automation & digital transformation */}
        <div className='w-[335px] h-[63px] mt-[72px]'>
          <p
            className="text-center text-[32px] font-semibold leading-[38.19px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Automation & Digital {" "}
            <span
              className="text-[32px] font-medium leading-[38.19px]"
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
                background: 'linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Transformation
            </span>
          </p>



        </div>
        <div className='w-[342px] h-[400px] mt-[44px]'>
          {/* <Image
            src={imageTwo}
            width={342}
            height={427}
            alt='SaaS'
            className='h-full w-full object-cover'
          /> */}
          <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className=" h-full w-full rounded-[16px] object-cover"
        src="https://squadra-media.s3.ap-south-1.amazonaws.com/video3d+%281%29.webm"
      />

        </div>
        <div className='mt-[44px] mb-[48px]'>
          {
            aiAndDigital?.map((el) => (

              <div key={el.title}
                className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
              >
                <div className='flex gap-[8px]'>
                  <div className='w-[44px] h-[44px] flex items-center justify-center rounded-[10.62px]'>
                    <Image
                      src={el?.icon}
                      width={30}
                      height={30}
                      alt='Network'
                    />
                  </div>
                  <div className='w-[237px] h-[38px] pt-1 flex items-center justify-left'>
                    <p
                      className="text-[#222222] text-start  text-[16px] font-medium leading-[19.09px]"

                    >
                      {el?.title}
                    </p>
                  </div>
                </div>
                <div className='w-[303px] h-[40px] mt-[12px]'>
                  <p
                    className="text-left text-[14px] font-medium leading-[20px] text-[#717171]"

                  >
                    {el?.description}
                  </p>

                </div>
              </div>
            ))}
        </div>


      </div>
      {/* End-to-End
IT Services */}
      <div className='w-[335px] h-[76px] mt-[72px]'>
        <p
          className="flex flex-col text-center text-[#FFFFFF] text-[32px] font-medium leading-[38.19px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          FinTech
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE5EFF] via-[#635BFF] to-[#38CBFF]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            Applications
          </span>
        </p>

      </div>
      <div className='w-[342px] h-[427px] mt-[42px]'>
        <Image
          src={finTechMain}
          width={342}
          height={427}
          alt='It SErvices'
        />
      </div>
      <div className='mt-[42px]'>
        {
          finTech?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-[1px] border-[#1D1D20]"
            >
              <div className='flex gap-[8px]'>
                <div className='w-[44px] h-[44px] flex items-center justify-center bg-[#18181A] rounded-[10.62px]'>
                  <Image
                    src={el?.icon}
                    width={30}
                    height={30}
                    alt='Network'
                  />
                </div>
                <div className='w-[237px] h-[38px] pt-1 flex items-center justify-left'>
                  <p
                    className="text-white text-start  text-[16px] font-medium leading-[19.09px]"

                  >
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      {/* Cloud */}
      <div className='w-[335px] h-[76px] mt-[72px] flex items-center justify-center'>
        <p
          className="flex  text-center text-[#FFFFFF] text-[32px] font-medium leading-[38.19px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          Cloud&nbsp;
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE5EFF] via-[#635BFF] to-[#38CBFF]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            Solutions
          </span>
        </p>
      </div>

      <div className='w-[335px] h-[600px] mt-[42px]'>
        {/* <Image
          src={imageThree} unoptimized={true}
          width={335}
          height={600} priority
          alt='webandMobileMain'
          className="h-full w-full object-cover"
        /> */}
        <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className=" h-full w-full rounded-[16px] object-cover"
        src="https://squadra-media.s3.ap-south-1.amazonaws.com/video%2Bsample.webm"
      />
      </div>
      <div className='mt-[42px] mb-[32px]'>
        {
          cloudData?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#040206] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-[1px] border-[#1D1D20]"
            >
              <div className='flex gap-[8px]'>
                <div className='w-[44px] h-[44px] flex items-center justify-center bg-[#18181A] rounded-[10.62px]'>
                  <Image
                    src={el?.icon}
                    width={30}
                    height={30}
                    alt='Network'
                  />
                </div>
                <div className='w-[237px] h-[38px] pt-1 flex items-center justify-left'>
                  <p
                    className="text-white text-start  text-[16px] font-medium leading-[19.09px]"

                  >
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      {/* solutions */}
      <div className='w-full bg-white flex items-center'>
        <ApproachComponent />
      </div>

      {/*    sQuadra tech Team */}
      <div className='pt-[44px] pb-[40px] px-[18px] flex flex-col gap-[24px] bg-[#F7F7F7]'>
        <div className='flex flex-col gap-[12px] items-center justify-center'>
          <p className="font-semibold text-[32px] leading-[38.19px] text-center text-[#FBAE17]">
            Squadra <span className="font-semibold text-[32px] leading-[38.19px] text-center text-[#131313]">Tech Team</span>
          </p>
          <p className="font-normal text-[14px] leading-[16.71px] text-center text-[#888888]">
            Discover a workplace where creativity thrives, teamwork shines, and careers take flight.
          </p>
        </div>
        <div className='flex flex-col gap-[12px] items-center'>
          <div className='flex flex-col gap-[12px]'>
            <div className='w-[320px] h-[194px] bg-gray-200'>
              <Image
                src={SquadraTechTeamImage_1}
                alt='Tech Team'
                width={320}
                height={194}
                className='object-cover h-[194px] w-[320px]'
              />
            </div>
            <div className='flex items-center gap-[12px]'>
              <div className='w-[155px] h-[194px] bg-gray-200'>
                <Image
                  src={SquadraTechTeamImage_4}
                  alt='Tech Team'
                  width={155}
                  height={194}
                  className='object-cover h-[194px] w-[155px]'
                />
              </div>
              <div className='w-[155px] h-[194px] bg-gray-200'>
                <Image
                  src={SquadraTechTeamImage_5}
                  alt='Tech Team'
                  width={155}
                  height={194}
                  className='object-cover h-[194px] w-[155px]'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <div className='w-[320px] h-[194px] bg-gray-200'>
              <Image
                src={SquadraTechTeamImage_6}
                alt='Tech Team'
                width={320}
                height={194}
                className='object-cover h-[194px] w-[320px]'
              />
            </div>
            <div className='flex items-center gap-[12px]'>
              <div className='w-[155px] h-[194px] bg-gray-200'>
                <Image
                  src={SquadraTechTeamImage_2}
                  alt='Tech Team'
                  width={155}
                  height={194}
                  className='object-cover h-[194px] w-[155px]'
                />
              </div>
              <div className='w-[155px] h-[194px] bg-gray-200'>
                <Image
                  src={SquadraTechTeamImage_3}
                  alt='Tech Team'
                  width={155}
                  height={194}
                  className='object-cover h-[194px] w-[155px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us*/}
      <div className='bg-white w-full flex items-center justify-center flex-col'>


        <div className='mt-[72px] flex flex-col gap-[12px] w-[335px] h-[101px] mb-[40px] '>
          <p className="font-sans text-[32px] font-semibold leading-[38.19px] text-center text-[#131313]">
            Why Choose <span className="font-sans text-[32px] font-semibold leading-[38.19px] text-center text-[#FBAE17]">Us</span>
          </p>
          <div className="flex items-center justify-center h-full">
            <p className='font-normal text-[14px] leading-[16.71px] text-[#6D6D6D] text-center'>
              We understand your needs and deliver impactful solutions with expertise, dedication, and a proven track record.
            </p>
          </div>
        </div>

        <div className='relative w-full' style={{ height: '800px' }}>
          <Image
            src={whyChooseUsImage}
            width={335}
            height={731}
            className='absolute z-10 top-0 left-[22px]'
            alt='Network'
          />
          <Image
            src={dottedLine}
            width={335}
            height={0}
            className='absolute h-[700px] z-0 top-[50px] left-[22px]'
            alt='Network'
          />
        </div>  </div>


      {/* technologies we use  */}
      <div className='bg-[#FAFAFA] min-w-[360px] w-full flex flex-col items-center justify-center'>
        <div className='w-[335px] h-[118px] mt-[42px]'>
          <p
            className="text-center text-[32px] text-[#222222] font-semibold leading-[38.19px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Technologies&nbsp;
            <span
              className="text-[32px] text-[#94969D] font-semibold leading-[38.19px]"
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
              }}
            >
              we use
            </span>
          </p>
          <p className="w-[335px] h-[68px] mt-[12px] text-[#6D6D6D] text-center text-[14px] font-normal leading-[16.71px] ">
            Discover the cutting-edge technologies we use to deliver innovative and impactful solutions, from modern frameworks to advanced cloud and machine learning tools
          </p>

        </div>
        <div className="md:hidden w-full max-w-sm mx-auto p-4 my-[40px] ">
          <Accordion type="single" collapsible className="w-full space-y-4 border-none">
            <AccordionItem value="backend" className="border-none rounded-none bg-[white]">
              <AccordionTrigger className="px-4 hover:no-underline text-[16px]">
                Backend
              </AccordionTrigger>
              <AccordionContent className="bg-[#FAFAFA]">
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {
                    backendTools.map((item) => (
                      <div key={item.name} className="w-[171px] h-[120px] flex items-center justify-center bg-white">
                        <AccordionContent className="px-4 flex flex-col items-center justify-center">
                          <Image
                            src={item?.logo}
                            width={171}
                            height={120}
                            alt={item?.name.toLowerCase()}
                          />
                        </AccordionContent>
                      </div>
                    ))}
                </div>
              </AccordionContent>

            </AccordionItem>

            <AccordionItem value="frontend" className="border-none rounded-none bg-white">
              <AccordionTrigger className="px-4 hover:no-underline text-[16px]">
                Frontend
              </AccordionTrigger>
              <AccordionContent className="bg-[#FAFAFA]">
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {frontendTools?.map((item) => (
                    <div key={item.name} className="w-[171px] h-[120px] flex items-center justify-center bg-white">
                      <AccordionContent className="px-4 flex flex-col items-center justify-center">
                        <Image
                          src={item.logo}
                          width={171}
                          height={120}
                          alt={item.name.toLowerCase()}
                        />
                      </AccordionContent>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mobile" className="border-none rounded-none bg-white">
              <AccordionTrigger className="px-4 hover:no-underline text-[16px]">
                Mobile
              </AccordionTrigger>
              <AccordionContent className="bg-[#FAFAFA]">
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {mobileTools?.map((item) => (
                    <div key={item.name} className="w-[171px] h-[120px] flex items-center justify-center bg-white">
                      <AccordionContent className="px-4 flex flex-col items-center justify-center">
                        <Image
                          src={item.logo}
                          width={171}
                          height={120}
                          alt={item.name.toLowerCase()}
                        />
                      </AccordionContent>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="devops" className="border-none rounded-none bg-white">
              <AccordionTrigger className="px-4 hover:no-underline text-[16px]">
                DevOps
              </AccordionTrigger>
              <AccordionContent className="bg-[#FAFAFA]">
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {devopsTools?.map((item) => (
                    <div key={item.name} className="w-[171px] h-[120px] flex items-center justify-center bg-white">
                      <AccordionContent className="px-4 flex flex-col items-center justify-center">
                        <Image
                          src={item.logo}
                          width={171}
                          height={120}
                          alt={item.name.toLowerCase()}
                        />
                      </AccordionContent>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="analytics" className="border-none rounded-none bg-white">
              <AccordionTrigger className="px-4 hover:no-underline text-[16px]">
                Analytics & Engagement
              </AccordionTrigger>
              <AccordionContent className="bg-[#FAFAFA]">
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {analyticsTools?.map((item) => (
                    <div key={item.name} className="w-[171px] h-[120px] flex items-center justify-center bg-white">
                      <AccordionContent className="px-4 flex flex-col items-center justify-center">
                        <Image
                          src={item.logo}
                          width={171}
                          height={120}
                          alt={item.name.toLowerCase()}
                        />
                      </AccordionContent>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div ref={contactRef} id="contact-section">

        <ContactUsForm />
      </div>
    </div>
  );
}

export default MobileUi;
