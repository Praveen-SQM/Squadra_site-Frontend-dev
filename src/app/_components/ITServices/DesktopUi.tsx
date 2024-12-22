"use client";
import Image from 'next/image'
import React from 'react'
import "./styles/DesktopUI.css"
import { useState, useRef, useEffect } from 'react';
import starSvg from '@/utilities/images/star.svg'
import heroImage from '@/utilities/images/desktop-hero-image.svg'

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
    <div className="h-fit flex flex-col  w-full  items-center bg-black">
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



      {/* What we Do */}
      <div style={{ border: "1px solid red" }} className="w-[1130.32px] h-[1043px] ">
        <div style={{ border: "1px solid red" }} className='flex flex-col items-center w-[672px] mx-auto'>

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

        <div className="w-full h-[760px] mt-[100px] gap-[40px] grid grid-cols-3">
          {/* First Div */}
          <div className="w-full h-full bg-gray-300">
            {/* Content for Div 1 */}
          </div>
          {/* Second Div */}
          <div className="w-full h-full bg-gray-300">
            {/* Content for Div 2 */}
          </div>
          {/* Third Div */}
          <div className="w-full h-full bg-gray-300">
            {/* Content for Div 3 */}
          </div>
        </div>

      </div>

    </div>
  )
}

export default DesktopUi
