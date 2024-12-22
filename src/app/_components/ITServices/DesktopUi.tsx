
import Image from 'next/image'
import React from 'react'
import starSvg from '@/utilities/images/star.svg'
import sliderIcon from "@/utilities/icons/slider-icon.svg"
import cloud from '@/utilities/images/cloud.svg';
import whyChooseImage from '@/utilities/images/whyChooseUsImageDesktop.svg'
import dottedLineDesktopImage from '@/utilities/images/dottedLineDesktop.svg'

const logos = [
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

function DesktopUi() {
  return (
    <div className="h-fit pt-64 flex flex-col  w-full  items-center bg-black">
      {/* Intro Section */}
      <p>Desktop </p>

      {/* Carousel */}
      {/*  add code here*/}

      <div className='mb-[42px] flex flex-col items-center justify-center'>
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
      </div>


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
                src={cloud}
                alt='Tech Team'
              />
            </div>
            <div className='flex items-center gap-[24px]'>
              <div className='w-[280px] h-[262px] bg-gray-200'>
                <Image
                  src={cloud}
                  alt='Tech Team'
                />
              </div>
              <div className='w-[280px] h-[262px] bg-gray-200'>
                <Image
                  src={cloud}
                  alt='Tech Team'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[24px]'>
            <div className='flex items-center gap-[24px]'>
              <div className='w-[280px] h-[262px] bg-gray-200'>
                <Image
                  src={cloud}
                  alt='Tech Team'
                />
              </div>
              <div className='w-[280px] h-[262px] bg-gray-200'>
                <Image
                  src={cloud}
                  alt='Tech Team'
                />
              </div>
            </div>
            <div className='w-[584px] h-[263px] bg-gray-200'>
              <Image
                src={cloud}
                alt='Tech Team'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose us */}
      <div className='bg-white w-[1440px] h-[762px] flex items-center justify-center flex-col'>


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
      </div>
    </div>
  )
}

export default DesktopUi
