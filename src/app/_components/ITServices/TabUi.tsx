'use client'
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import heroImage from '@/utilities/images/desktop-hero-image.svg'
import "./styles/DesktopUI.css"
import Image from 'next/image';
import { customSoftwareDevData, data, ItServices, logos, saasData, webAndMobDev } from './MobileUi';
import starSvg from '@/utilities/images/star.svg'
import BenefitFrame from '@/utilities/images/benefitFrame.svg'
import SaasMain from '@/utilities/images/Saas-main.svg'
import Container from '@/utilities/images/Container.svg'
import ITImage from '@/utilities/images/ITImage.svg'
import webandMobileMain from '@/utilities/images/webandMobileMain.svg'


function TabUi() {
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
    <div className="h-fit pt-16 flex flex-col mx-auto  w-full  items-center bg-black">
      {/* <p className='text-white'> jhghjgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhghfghfhgfghhjgkghjglh</p> */}

      {/* Intro Section */}
      <div className='w-full h-[1165px] mt-[145px] flex flex-col items-center mb-[0px]'>
        <div className='w-full h-[322px] flex flex-col gap-[16px] items-center mt-[80px]'>
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

          <div className="w-[137px] h-[57px] rounded-[12px] border flex justify-center items-center" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="w-[115px] h-[41px] py-[5px] px-[15px] gap-[8px] rounded-[8px] bg-[#FFFFFF] cursor-pointer">
              {/* Content goes here */}
              <p className="text-[15px] font-medium leading-[31px] text-center text-[#000000] text-nowrap">
                Connect Us
              </p>

            </div>
          </div>
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

      <div className='mb-[42px] flex flex-col items-center justify-center'>
        <div className="scrolling-container">
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


      <p
        className="text-center mt-[13px] text-white text-[54px] font-bold leading-[65.35px]"

      >
        What we do
      </p>

      <div className="w-[597] h-[44px] gap-0 mt-[12px]">
        <p
          className="text-center text-[#797B85] text-[18px] font-medium leading-[21.96px]"
        >
          Empowering businesses with transformative IT solutions for efficiency <br /> and success
        </p>

      </div>

      <div className='w-[321px] h-[600px] mt-[42px]'>
        {/* <Image
          src={BenefitFrame}
          width={321}
          height={586}
          alt='BenefitFrame'
        /> */}
        <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/e+video.mp4" autoPlay loop width="640" height="600" controls className='rounded-md h-[1000px]'></video>
      </div>

      {/* Feature Cards */}

      <div className='mt-[42px] grid grid-cols-2 gap-[20px]'>
        {
          data?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[200px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
            >
              <div className='flex flex-col gap-[8px]'>
                <div className='w-[58px] h-[58px] flex items-center justify-center bg-[#18181A] border-[2px] border-[#28282C] rounded-[10.62px]'>
                  <Image
                    src={el?.icon}
                    width={30}
                    height={30}
                    alt='Network'
                  />
                </div>
                <div className='w-[302px] h-[33px] flex items-center justify-left'>
                  <p
                    className="text-white text-start  text-[16px] font-medium leading-[19.09px]"

                  >
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className='w-[303px] h-[40px] mt-[8px]'>
                <p
                  className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      <div className='w-[727px] h-[113px] mt-[100px] mb-[72px] flex flex-col items-center justify-center'>
        <p
          className="text-left text-[20px] font-normal leading-[24px] text-[#888888] uppercase"

        >
          Delivering excellence.
        </p>
        <div className='w-[727px] h-[113px] mt-[16px]'>

          <p
            className="text-center text-[46px] font-medium leading-[54.89px] text-white"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Squadra delivers cutting-edge solutions for{" "}
            <span
              className="text-center text-[46px] font-medium leading-[54.89px]"
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
        <div className='w-[714px] h-[55px] '>
          <p
            className="text-center text-[46px] text-[#222222] font-semibold leading-[54.9px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Custom Software{" "}
            <span
              className="text-[46px] text-[#94969D] font-semibold leading-[54.9px]"
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
        <div className='w-[340px] h-[425px] mt-[48px]'>
          <Image
            src={Container}
            width={340}
            height={425}
            alt='Container'

          />
        </div>
        {/* Customer Software Development */}
        <div className='mt-[42px] mb-[48px] grid grid-cols-2 gap-[20px]'>
          {
            customSoftwareDevData?.map((el) => (

              <div key={el.title}
                className="w-[347px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
              >
                <div className='flex gap-[8px]'>
                  <div className='w-[50px] h-[50px] flex items-center gap-[8px] justify-center border-[1px] border-gray-300 rounded-[10.62px]'>
                    <Image
                      src={el?.icon}
                      width={23}
                      height={23}
                      alt='Network'
                    />
                  </div>
                  <div className='w-[237px] h-[38px]  flex items-center justify-left'>
                    <p
                      className="text-[#222222] text-start  text-[18px] font-medium leading-[30px]"

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
        <div className='w-[714px] h-[55px] mt-[62px]'>
          <p
            className="text-center text-[46px] font-semibold leading-[54.89px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            SaaS{" "}
            <span
              className="text-[46px] font-medium leading-[54.89px]"
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
            className="text-center mt-[8px] text-[18px] font-medium leading-[27px] text-[#797B85]"
            style={{
              fontFamily: 'Instrument Sans, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Deliver scalable, cloud-first experiences.
          </p>


        </div>
        <div className='w-[540px] h-[550px] mt-[44px]'>
          {/* <Image
            src={SaasMain}
            width={540}
            height={388}
            alt='SaaS'
          /> */}
          <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/Dashboard+video.mp4" autoPlay loop width="640" height="360" controls className='rounded-md'></video>
        </div>
        <div className='mt-[44px] mb-[48px] grid grid-cols-2 gap-[20px]'>
          {
            saasData?.map((el) => (

              <div key={el.title}
                className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
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
                      className="text-[#222222] text-start  text-[18px] font-medium leading-[21.47px]"

                    >
                      {el?.title}
                    </p>
                  </div>
                </div>
                <div className='w-[303px] h-[40px] mt-[12px]'>
                  <p
                    className="text-left text-[14px] font-medium leading-[16.71px] text-[#717171]"

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
      <div className='w-[714px] h-[58px] mt-[72px] flex justify-center'>
        <p
          className="flex  text-center text-[#FFFFFF] text-[46px] font-bold leading-[57.6px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          End-to-End{' '}&nbsp;
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
      <div className='w-[342px] h-[427px] mt-[42px]'>
        <Image
          src={ITImage}
          width={342}
          height={427}
          alt='It SErvices'
        />
      </div>
      <div className='mt-[42px] grid grid-cols-2 gap-[20px]'>
        {
          ItServices?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[147px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
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
                    className="text-white text-start  text-[18px] font-medium leading-[30px]"

                  >
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[16px] font-medium leading-[19px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      {/* Web & Mobile App
Development */}
      <div className='w-[714px] h-[110px] mt-[72px]'>
        <p
          className="flex flex-col text-center text-[#FFFFFF] text-[46px] font-medium leading-[54.89px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          Web & Mobile Application
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
      <div className='w-[342px] h-[600px] mt-[42px]'>
        {/* <Image
          src={webandMobileMain}
          width={342}
          height={398}
          alt='webandMobileMain'
        /> */}
        <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/video+sample.mp4" autoPlay loop width="640" height="360" controls className='rounded-md'></video>
      </div>
      <div className='mt-[42px] mb-[32px]'>
        {
          webAndMobDev?.map((el) => (

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

    </div>
  )
}

export default TabUi
