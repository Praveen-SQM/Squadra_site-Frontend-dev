'use client'
import Image from 'next/image'
import React from 'react'
import starSvg from '@/utilities/images/star.svg'
import { aiAndDigital, cloudData, customSoftwareDevData, data, finTech, healthcare, ItServices, webAndMobDev } from './MobileUi'
import frame from '@/utilities/images/mobile-frame.svg'
import Container from '@/utilities/images/Container.svg'
import arrowRight from '@/utilities/images/arrow-right.svg'
import "./styles/DesktopUI.css"
import { useState, useRef, useEffect } from 'react';
import heroImage from '@/utilities/images/desktop-hero-image.svg'
import TabComponent from './Tabs'
import whyChooseImage from '@/utilities/images/whyChooseUsImageDesktop.svg'
import ContactUsForm from './components/DesktopContactUsForm'
import ITImage from '@/utilities/images/ITImage.svg'
import webandMobileMain from '@/utilities/images/webandMobileMain.svg'
import HealthCareMain from '@/utilities/images/healthCareMAin.svg'
import finTechMain from '@/utilities/images/fintechMain.svg';
import ApproachComponent from './components/ApproachComponent'
import Link from 'next/link'

function DesktopUi() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isInView, setIsInView] = useState(false);

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


  return (
    <div className="h-fit pt-16 flex flex-col  w-full  items-center bg-black">
      {/* Intro Section */}
      <div className='w-[1200px] h-[1165px] mt-[145px] flex flex-col items-center mb-[88px]'>
        <div className='w-[976px] h-[322px] flex flex-col gap-[16px] items-center mt-[80px]'>
          <p className="font-medium text-[72px] leading-[84px] text-center text-[#FFFFFF]">
            Your Trusted Partner <br />
            <span
              className=""
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
              in IT Innovation
            </span>
          </p>
          <div className='w-[544px] h-[62px] flex items-center justify-center text-center'>
            <p className='font-normal text-[18px] leading-[31px] text-white'>Empowering businesses with cutting-edge technology, scalable solutions, and transformative digital strategies.</p>
          </div>

          <Link href='#contact-section' className="w-[137px] h-[57px] rounded-[12px] border flex justify-center items-center" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="w-[115px] h-[41px] py-[5px] px-[15px] gap-[8px] rounded-[8px] bg-[#FFFFFF] cursor-pointer">
              {/* Content goes here */}
              <p  className="text-[15px] font-medium leading-[31px] text-center text-[#000000] text-nowrap">
                Connect Us
              </p>

            </div>
          </Link>
        </div>

        <div className='mb-[43px]'>
          <div className='w-full h-[815.25px]'>
            <Image
              src={heroImage}
              ref={imageRef}
              alt="Hero Image"
              width={0}
              height={0}
              className={`image ${isInView ? 'expand' : ''}`}
            />
          </div>
        </div>

      </div>

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
      <div className="w-[1130.32px] h-fit mb-[50px] mt-[140px]">
        <div className='flex flex-col items-center w-[672px] mx-auto'>

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
            className="text-center mt-[13px] text-white text-[54px] font-bold leading-[69.6px]"

          >
            What we do
          </p>

          <div className="w-[620px] h-[44px] gap-0 mt-[12px]">
            <p
              className="text-center text-[#797B85] text-[18px] font-medium leading-[21.96px]"
            >
              Empowering businesses with transformative IT solutions for efficiency and success
            </p>

          </div>
        </div>

        <div className="w-[1130px] h-[760px] mt-[100px] gap-[0px] grid grid-cols-3 items-center">
          {/* First Div */}
          <div className="h-[760px] flex flex-col gap-[20px] ">
            {
              data?.slice(0, 3)?.map((el) => (

                <div key={el.title}
                  className="w-[387px] bg-[#19191C] h-[240px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
                >
                  <div className='flex flex-col gap-[8px]'>
                    <div className='w-[58px] h-[58px] flex items-center justify-center bg-[#18181A] border-[2px] border-[#28282C] rounded-[14px]'>
                      <Image
                        src={el?.icon}
                        width={30}
                        height={30}
                        alt='Network'
                      />
                    </div>
                    <div className='w-[335px]  flex items-center justify-left'>
                      <p
                        className="text-white text-start  text-[20px] font-medium leading-[33px]"

                      >
                        {el?.title}
                      </p>
                    </div>
                  </div>
                  <div className='w-[355px] h-[49px] mt-[8px]'>
                    <p
                      className="text-left text-[16px] font-medium leading-[24px] text-[#94969D]"

                    >
                      {el?.description}
                    </p>

                  </div>
                </div>
              ))}          </div>
          {/* Second Div */}
          <div className='flex flex-col items-center w-full h-fit'>

            <div className="w-[277px] h-[586px] flex flex-col items-center ">
              <Image
                width={0}
                height={0}
                src={frame}
                alt="Placeholder Image"
              />
            </div>
          </div>
          {/* Third Div */}
          <div className="h-[760px] flex flex-col gap-[20px] ">
            {
              data?.slice(3, 6)?.map((el) => (

                <div key={el.title}
                  className="w-[387px] bg-[#19191C] h-[240px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
                >
                  <div className='flex flex-col gap-[8px]'>
                    <div className='w-[58px] h-[58px] flex items-center justify-center bg-[#18181A] border-[2px] border-[#28282C] rounded-[14px]'>
                      <Image
                        src={el?.icon}
                        width={30}
                        height={30}
                        alt='Network'
                      />
                    </div>
                    <div className='w-[335px]  flex items-center justify-left'>
                      <p
                        className="text-white text-start  text-[20px] font-medium leading-[33px]"

                      >
                        {el?.title}
                      </p>
                    </div>
                  </div>
                  <div className='w-[355px] h-[49px] mt-[8px]'>
                    <p
                      className="text-left text-[16px] font-medium leading-[24px] text-[#94969D]"

                    >
                      {el?.description}
                    </p>

                  </div>
                </div>
              ))}
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
      <section className='bg-white w-full flex items-center'>


        <div className="w-[1152px] h-full flex items-center mx-auto bg-white py-[70px]">
          {/* First Div */}
          <div className="w-[438px] h-full">
            <div className='w-[438px] h-[547px] mt-[48px]'>
              <Image
                src={Container}
                width={438}
                height={547}
                alt='Container'

              />
            </div>        </div>
          {/* Second Div */}
          <div className="w-[664px] h-full">
            <div className='w-[664px] h-[76px] '>
              <p
                className="text-[46px] text-[#222222] font-semibold leading-[54.89px]"
                style={{
                  fontFamily: 'SF UI Display, sans-serif',
                  textDecorationSkipInk: 'none',
                  textUnderlinePosition: 'from-font',
                }}
              >
                Custom Software{" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
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

            <div className='mt-[42px] mb-[48px] grid grid-cols-2'>
              {
                customSoftwareDevData?.map((el) => (

                  <div key={el.title}
                    className="w-[322px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
                  >
                    <div className='flex gap-[8px]'>
                      <div className='w-[44px] h-[44px] flex items-center justify-center border-[1px] border-gray-300 rounded-[10.62px]'>
                        <Image
                          src={el?.icon}
                          width={23}
                          height={23}
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
            <Link href='#contact-section' className="cursor-pointer w-[184px] h-[52px] gap-[16px] rounded-[30px] flex items-center justify-center bg-[#131313]">
              <p className="uppercase font-sans text-[16px] font-normal leading-[19.09px] text-[#F5F5F5]">
                Get a Quote</p>
              <div className='w-[36px] h-[36px] flex items-center justify-center rounded-[20px] bg-[#FFFFFF]'>
                <Image
                  src={arrowRight}
                  width={36}
                  height={36}
                  alt='ArrowRight'
                />
              </div>

            </Link>

          </div>
        </div>
      </section>

      {/* Saas Development */}
      <section className='bg-white w-full flex items-center'>


        <div className="w-[1152px] h-full flex items-center mx-auto bg-white py-[70px] gap-[28px]">
          {/* First Div */}
          <div className="w-[664px] h-full">
            <div className='w-[664px] h-[76px] '>
              <p
                className="text-[46px] text-[#222222] font-semibold leading-[54.89px]"
                style={{
                  fontFamily: 'SF UI Display, sans-serif',
                  textDecorationSkipInk: 'none',
                  textUnderlinePosition: 'from-font',
                }}
              >
                Saas{" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
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
                className="text-start mt-[8px] text-[18px] font-medium leading-[27px] text-[#797B85]"
                style={{
                  fontFamily: 'Instrument Sans, sans-serif',
                  textDecorationSkipInk: 'none',
                  textUnderlinePosition: 'from-font',
                }}
              >
                Deliver scalable, cloud-first experiences.
              </p>
            </div>

            <div className='mt-[42px] mb-[48px] grid grid-cols-2'>
              {
                customSoftwareDevData?.map((el) => (

                  <div key={el.title}
                    className="w-[322px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
                  >
                    <div className='flex gap-[8px]'>
                      <div className='w-[44px] h-[44px] flex items-center justify-center border-[1px] border-gray-300 rounded-[10.62px]'>
                        <Image
                          src={el?.icon}
                          width={23}
                          height={23}
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
            <Link href='#contact-section' className="cursor-pointer w-[184px] h-[52px] gap-[16px] rounded-[30px] flex items-center justify-center bg-[#131313]">
              <p className="uppercase font-sans text-[16px] font-normal leading-[19.09px] text-[#F5F5F5]">
                Get a Quote</p>
              <div className='w-[36px] h-[36px] flex items-center justify-center rounded-[20px] bg-[#FFFFFF]'>
                <Image
                  src={arrowRight}
                  width={36}
                  height={36}
                  alt='ArrowRight'
                />
              </div>

            </Link>

          </div>




          {/* Second Div */}
          <div className="w-[438px] h-full">
            <div className='w-[540px] h-[400px]'>
              {/* <Image
                src={SaasMain}
                width={540}
                height={388}
                alt='SaaS'
              /> */}
              <video autoPlay loop width="400" height="250" className='rounded-[24px]'>
                <source src="https://squadra-media.s3.ap-south-1.amazonaws.com/Dashboard+video.mp4" type="video/mp4" />
              </video>
            </div>        </div>


        </div>
      </section>



      {/* End to End It Services */}
      <section className=' max-w-full flex items-center'>


        <div className="w-[1152px] h-full flex items-center mx-auto py-[70px] gap-[28px]">
          {/* First Div */}
          <div className="w-[438px] h-full">
            <div className='w-[438px] h-[547px] mt-[48px]'>
              <Image
                src={ITImage}
                width={438}
                height={547}
                alt='It SErvices'
              />
            </div>        </div>
          {/* Second Div */}
          <div className="w-[664px] h-full">
            <div className='w-[664px] h-[76px] '>
              <p
                className="text-[46px] text-white font-semibold leading-[54.89px]"
                style={{
                  fontFamily: 'SF UI Display, sans-serif',
                  textDecorationSkipInk: 'none',
                  textUnderlinePosition: 'from-font',
                }}
              >
                End-to-End{" "} <br />
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
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
                  IT Services
                </span>
              </p>

            </div>

            <div className='mt-[42px] mb-[48px] grid grid-cols-2'>
              {
                ItServices?.map((el) => (

                  <div key={el.title}
                    className="w-[322px] mt-[16px] bg-[#19191C] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
                  >
                    <div className='flex gap-[8px]'>
                      <div className='w-[44px] h-[44px] flex items-center justify-center border-[1px] border-gray-600 rounded-[10.62px]'>
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
            <Link href='#contact-section' className="cursor-pointer w-[184px] h-[52px] gap-[16px] rounded-[30px] flex items-center justify-center bg-[#19191C]">
              <p className="uppercase font-sans text-[16px] font-normal leading-[19.09px] text-[#F5F5F5]">
                Get a Quote</p>
              <div className='w-[36px] h-[36px] flex items-center justify-center rounded-[20px] bg-[#FFFFFF]'>
                <Image
                  src={arrowRight}
                  width={36}
                  height={36}
                  alt='ArrowRight'
                />
              </div>

            </Link>

          </div>
        </div>
      </section>

      {/* Web & Mobile Application Development */}
      <section className=' max-w-full flex items-center'>


        <div className="w-[1152px] h-full flex items-center mx-auto py-[70px] gap-[28px]">
          {/* First Div */}
          <div className="w-[664px] h-full">
            <div className='w-[664px] h-[76px] '>
              <p
                className="text-[46px] text-white font-semibold leading-[54.89px]"
                style={{
                  fontFamily: 'SF UI Display, sans-serif',
                  textDecorationSkipInk: 'none',
                  textUnderlinePosition: 'from-font',
                }}
              >
                Web & Mobile Application {" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
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

            </div>

            <div className='mt-[42px] mb-[48px] grid grid-cols-2'>
              {
                webAndMobDev?.map((el) => (

                  <div key={el.title}
                    className="w-[322px] mt-[16px] bg-[#19191C] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
                  >
                    <div className='flex gap-[8px]'>
                      <div className='w-[44px] h-[44px] flex items-center justify-center border-[1px] border-gray-600 rounded-[10.62px]'>
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
            <Link href='#contact-section' className="cursor-pointer w-[184px] h-[52px] gap-[16px] rounded-[30px] flex items-center justify-center bg-[#131313]">
              <p className="uppercase font-sans text-[16px] font-normal leading-[19.09px] text-[#F5F5F5]">
                Get a Quote</p>
              <div className='w-[36px] h-[36px] flex items-center justify-center rounded-[20px] bg-[#FFFFFF]'>
                <Image
                  src={arrowRight}
                  width={36}
                  height={36}
                  alt='ArrowRight'
                />
              </div>

            </Link>

          </div>




          {/* Second Div */}
          <div className="w-[438px] h-full">
            <div className='w-[438px] h-[547px] mt-[48px]'>
              <Image
                src={webandMobileMain}
                width={438}
                height={547}
                alt='webandMobileMain'
              />
            </div>        </div>


        </div>
      </section>


      {/* Healthcare Applications */}
      <section className='bg-white w-full flex items-center'>


        <div className="w-[1152px] h-full flex items-center mx-auto bg-white py-[70px] gap-[28px]">
          {/* First Div */}
          <div className="w-[664px] h-full">
            <div className='w-[664px] h-[76px] '>
              <p
                className="text-[46px] text-[#222222] font-semibold leading-[54.89px]"
                style={{
                  fontFamily: 'SF UI Display, sans-serif',
                  textDecorationSkipInk: 'none',
                  textUnderlinePosition: 'from-font',
                }}
              >
                Healthcare{" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
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

            <div className='mt-[42px] mb-[48px] grid grid-cols-2'>
              {
                healthcare?.map((el) => (

                  <div key={el.title}
                    className="w-[322px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
                  >
                    <div className='flex gap-[8px]'>
                      <div className='w-[44px] h-[44px] flex items-center justify-center border-[1px] border-gray-300 rounded-[10.62px]'>
                        <Image
                          src={el?.icon}
                          width={23}
                          height={23}
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
            <Link href='#contact-section' className="cursor-pointer w-[184px] h-[52px] gap-[16px] rounded-[30px] flex items-center justify-center bg-[#131313]">
              <p className="uppercase font-sans text-[16px] font-normal leading-[19.09px] text-[#F5F5F5]">
                Get a Quote</p>
              <div className='w-[36px] h-[36px] flex items-center justify-center rounded-[20px] bg-[#FFFFFF]'>
                <Image
                  src={arrowRight}
                  width={36}
                  height={36}
                  alt='ArrowRight'
                />
              </div>

            </Link>

          </div>



          {/* Second Div */}
          <div className="w-[438px] h-full">
            <div className='w-[438px] h-[547px] mt-[48px]'>
              <Image
                src={HealthCareMain}
                width={438}
                height={547}
                alt='HealthCareMain'

              />
            </div>
          </div>


        </div>
      </section>

      {/* Automation & Digital Transformation */}
      <section className='bg-white w-full flex items-center'>


        <div className="w-[1152px] h-full flex items-center mx-auto bg-white py-[70px] gap-[28px]">
          {/* First Div */}

          <div className="w-[438px] h-full">
            <div className='w-[438px] h-[547px] mt-[48px]'>
              {/* <Image
                src={aiMain}
                width={438}
                height={547}
                alt='SaaS'
              /> */}
              <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/video3d.mp4" autoPlay={true} loop width="438" height="547" className='rounded-[24px]'></video>
            </div>

          </div>

          {/* Second Div */}
          <div className="w-[664px] h-full">
            <div className='w-[664px] h-[76px] '>
              <p
                className="text-[46px] text-[#222222] font-semibold leading-[54.89px]"
                style={{
                  fontFamily: 'SF UI Display, sans-serif',
                  textDecorationSkipInk: 'none',
                  textUnderlinePosition: 'from-font',
                }}
              >
                Automation & Digital{" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
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

            <div className='mt-[42px] mb-[48px] grid grid-cols-2'>
              {
                aiAndDigital?.map((el) => (

                  <div key={el.title}
                    className="w-[322px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
                  >
                    <div className='flex gap-[8px]'>
                      <div className='w-[44px] h-[44px] flex items-center justify-center border-[1px] border-gray-300 rounded-[10.62px]'>
                        <Image
                          src={el?.icon}
                          width={23}
                          height={23}
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
            <Link href='#contact-section' className="cursor-pointer w-[184px] h-[52px] gap-[16px] rounded-[30px] flex items-center justify-center bg-[#131313]">
              <p className="uppercase font-sans text-[16px] font-normal leading-[19.09px] text-[#F5F5F5]">
                Get a Quote</p>
              <div className='w-[36px] h-[36px] flex items-center justify-center rounded-[20px] bg-[#FFFFFF]'>
                <Image
                  src={arrowRight}
                  width={36}
                  height={36}
                  alt='ArrowRight'
                />
              </div>

            </Link>

          </div>


        </div>
      </section>


      {/*FinTech Applications */}
      <section className=' max-w-full flex items-center'>


        <div className="w-[1152px] h-full flex items-center mx-auto py-[70px] gap-[28px]">
          {/* First Div */}
          <div className="w-[438px] h-full">
            <div className='w-[438px] h-[547px] mt-[48px]'>
              <Image
                src={finTechMain}
                width={438}
                height={547}
                alt='It SErvices'
              />
            </div>        </div>
          {/* Second Div */}
          <div className="w-[664px] h-full">
            <div className='w-[664px] h-[76px] '>
              <p
                className="text-[46px] text-white font-semibold leading-[54.89px]"
                style={{
                  fontFamily: 'SF UI Display, sans-serif',
                  textDecorationSkipInk: 'none',
                  textUnderlinePosition: 'from-font',
                }}
              >
                FinTech{" "} <br />
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
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
                  Applications
                </span>
              </p>

            </div>

            <div className='mt-[42px] mb-[48px] grid grid-cols-2'>
              {
                finTech?.map((el) => (

                  <div key={el.title}
                    className="w-[322px] mt-[16px] bg-[#19191C] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
                  >
                    <div className='flex gap-[8px]'>
                      <div className='w-[44px] h-[44px] flex items-center justify-center border-[1px] border-gray-600 rounded-[10.62px]'>
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
            <Link href='#contact-section' className="cursor-pointer w-[184px] h-[52px] gap-[16px] rounded-[30px] flex items-center justify-center bg-[#19191C]">
              <p className="uppercase font-sans text-[16px] font-normal leading-[19.09px] text-[#F5F5F5]">
                Get a Quote</p>
              <div className='w-[36px] h-[36px] flex items-center justify-center rounded-[20px] bg-[#FFFFFF]'>
                <Image
                  src={arrowRight}
                  width={36}
                  height={36}
                  alt='ArrowRight'
                />
              </div>

            </Link>

          </div>
        </div>
      </section>

      {/*Cloud Solutions */}
      <section className=' max-w-full flex items-center'>


        <div className="w-[1152px] h-full flex items-center mx-auto py-[70px] gap-[28px]">
          {/* First Div */}
          <div className="w-[664px] h-full">
            <div className='w-[664px] h-[76px] '>
              <p
                className="text-[46px] text-white font-semibold leading-[54.89px]"
                style={{
                  fontFamily: 'SF UI Display, sans-serif',
                  textDecorationSkipInk: 'none',
                  textUnderlinePosition: 'from-font',
                }}
              >
                Cloud {" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
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
                  Solutions
                </span>
              </p>

            </div>

            <div className='mt-[42px] mb-[48px] grid grid-cols-2'>
              {
                cloudData?.map((el) => (

                  <div key={el.title}
                    className="w-[322px] mt-[16px] bg-[#19191C] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
                  >
                    <div className='flex gap-[8px]'>
                      <div className='w-[44px] h-[44px] flex items-center justify-center border-[1px] border-gray-600 rounded-[10.62px]'>
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
            <Link href='#contact-section'  className="cursor-pointer w-[184px] h-[52px] gap-[16px] rounded-[30px] flex items-center justify-center bg-[#131313]">
              <p className="uppercase font-sans text-[16px] font-normal leading-[19.09px] text-[#F5F5F5]">
                Get a Quote</p>
              <div className='w-[36px] h-[36px] flex items-center justify-center rounded-[20px] bg-[#FFFFFF]'>
                <Image
                  src={arrowRight}
                  width={36}
                  height={36}
                  alt='ArrowRight'
                />
              </div>

            </Link>

          </div>




          {/* Second Div */}
          <div className="w-[438px] h-[538px]">
            <div className='w-[300px] h-[400px]'>
              {/* <Image className='object-cover'
                src={cloudMain} unoptimized={true}
                width={438} quality={80}
                height={547} priority
                alt='webandMobileMain'
              /> */}
               <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/video+sample.mp4" autoPlay loop width="438" height="300" className='rounded-[24px]'></video>
            </div>        </div>

        </div>
      </section>

      {/* solutions */}
      <div className='w-full h-[860px] bg-white flex items-center'>
      <ApproachComponent/>
      </div>

      {/* Squadra Tech Team */}
      <div className='w-full py-[72px] px-[124px] flex flex-col gap-[62px] bg-[#FAFAFA] items-center'>
        <div className='flex flex-col gap-[12px] items-center justify-center w-[668px] h-[132px]'>
          <p className="font-semibold text-[62px] leading-[72px] text-center text-[#FBAE17]">
            Squadra <span className="font-semibold text-[62px] leading-[72px] text-center text-[#131313]">Tech Team</span>
          </p>
          <p className="font-normal text-[18px] leading-[24px] text-center text-[#888888]">
            Discover a workplace where creativity thrives, teamwork shines, and careers take flight.
          </p>
        </div>
        <div className='flex gap-[24px] items-center'>
          <div className='flex flex-col gap-[24px]'>
            <div className='w-[584px] h-[263px] bg-gray-200'>
              <Image
                src={"https://squadra-media.s3.ap-south-1.amazonaws.com/7.jpg"}
                alt='Tech Team'
                width={584}
                height={263}
                className='object-cover h-[263px] w-[584px]'
              />
            </div>
            <div className='flex items-center gap-[24px]'>
              <div className='w-[280px] h-[262px] bg-gray-200'>
                <Image
                  src={"https://squadra-media.s3.ap-south-1.amazonaws.com/444.png"}
                  alt='Tech Team'
                  width={280}
                height={262}
                className='object-cover h-[262px] w-[280px]'
                />
              </div>
              <div className='w-[280px] h-[262px] bg-gray-200'>
                <Image
                  src={"https://squadra-media.s3.ap-south-1.amazonaws.com/5.jpg"}
                  alt='Tech Team'
                  width={280}
                height={262}
                className='object-cover h-[262px] w-[280px]'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[24px]'>
            <div className='flex items-center gap-[24px]'>
              <div className='w-[280px] h-[262px] bg-gray-200'>
                <Image
                  src={"https://squadra-media.s3.ap-south-1.amazonaws.com/3+%281%29.jpg"}
                  alt='Tech Team'
                  width={280}
                  height={262}
                  className='object-cover h-[262px] w-[280px]'
                />
              </div>
              <div className='w-[280px] h-[262px] bg-gray-200'>
                <Image
                  src={"https://squadra-media.s3.ap-south-1.amazonaws.com/333.jpg"}
                  alt='Tech Team'
                  width={280}
                  height={262}
                  className='object-cover h-[262px] w-[280px]'
                />
              </div>
            </div>
            <div className='w-[584px] h-[263px] bg-gray-200'>
              <Image
                src={"https://squadra-media.s3.ap-south-1.amazonaws.com/6.jpg"}
                alt='Tech Team'
                width={584}
                height={263}
                className='object-cover h-[263px] w-[584px]'
              />
            </div>
          </div>
        </div>
      </div>


      {/* Why Choose us */}
      <div className='w-full flex items-center'>


        <div className='bg-white w-full mx-auto h-[762px] flex items-center justify-center flex-col'>


          <div className='flex flex-col gap-[12px] w-[662px] h-[128px] mb-[120px] '>
            <p className="font-sans text-[62px] font-semibold leading-[73.99px] text-center text-[#000000]">
              Why Choose <span className="font-sans text-[62px] font-semibold leading-[73.99px] text-center text-[#FBAE17]">Us</span>
            </p>
            <div className="flex items-center justify-center h-full">
              <p className='font-normal text-[16px] leading-[20.8px] text-[#000000] text-center'>
                We understand your needs and deliver impactful solutions with expertise, dedication, and a proven track record.
              </p>
            </div>
          </div>

          <div className='relative w-full flex items-center justify-center' style={{ height: '280px' }}>
            <Image
              src={whyChooseImage}
              width={0}
              height={0}
              className='absolute z-10 top-0'
              alt='Network'
            />
          </div>
        </div> </div>

      {/* technologies we use */}
      <div className='w-full'>


        <div className='min-w-[1440px] mx-auto h-[860px] bg-[#FAFAFA] pt-[100px]'>
          <div className='w-full h-[120px] flex flex-col  items-center justify-center text-center mb-[70px]'>
            <div className='w-[664px] h-[76px] '>
              <p
                className="text-[46px] text-[#222222] font-semibold leading-[54.89px]"
                style={{
                  fontFamily: 'SF UI Display, sans-serif',
                  textDecorationSkipInk: 'none',
                  textUnderlinePosition: 'from-font',
                }}
              >
                Technologies {" "}
                <span
                  className="text-[46px] text-[#94969D] font-semibold leading-[54.89px]"
                  style={{
                    fontFamily: 'SF UI Display, sans-serif',
                    textDecorationSkipInk: 'none',
                    textUnderlinePosition: 'from-font',
                  }}
                >
                  we use
                </span>
              </p>
              <p className="text-[16px] mt-[24px] font-normal leading-[19.09px] text-center text-[#4E4D4D]">              Discover the cutting-edge technologies we use to deliver innovative and impactful solutions, from modern frameworks to advanced cloud and machine learning tools</p>
            </div>
          </div>
          <TabComponent />

        </div> </div>
      {/* Contact us */}
      <ContactUsForm />
    </div>
  )
}

export default DesktopUi
