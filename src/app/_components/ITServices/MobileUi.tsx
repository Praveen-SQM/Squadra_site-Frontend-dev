import React from 'react';
import starSvg from '@/utilities/images/star.svg'
import Image from 'next/image';
import BenefitFrame from '@/utilities/images/benefitFrame.svg'
import Network from '@/utilities/images/Network.svg'
import "./styles/MobileUI.css"

import sliderIcon from "../../../utilities/icons/slider-icon.svg"

function MobileUi() {
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

  return (
    <div className="h-fit pt-32 flex flex-col  border-1 border-red-300  w-full  items-center bg-black">
      {/* Carousel */}

      <div className='mb-[42px] flex flex-col items-center justify-center'>
        <div className="scrolling-container">
          <div className="scrolling-content">
            {logos?.map((logo, index) => (
              <div key={index} className="inline-block w-[92px] h-[52px] rounded-[5.31px] py-[16.98px] px-[5.31px] flex items-center justify-center border border-gray-900">
                <img src={logo?.url?.src} alt={logo?.name} className='w-[82.24px] h-[18.04px]' />
              </div>
            ))}
            {logos?.map((logo, index) => (
              <div key={`duplicate-${index}`} className="inline-block w-[92px] h-[52px] rounded-[5.31px] py-[16.98px] px-[5.31px] flex items-center justify-center border border-gray-900">
                <img src={logo?.url?.src} alt={logo?.name} className='w-[82.24px] h-[18.04px]' />
              </div>
            ))}
          </div>
        </div>

        <div className="scrolling-container">
          <div className="scrolling-content">
            {logos?.map((logo, index) => (
              <div key={index} className="inline-block w-[92px] h-[52px] rounded-[5.31px] py-[16.98px] px-[5.31px] flex items-center justify-center border border-gray-900">
                <img src={logo?.url?.src} alt={logo?.name} className='w-[82.24px] h-[18.04px]' />
              </div>
            ))}
            {logos?.map((logo, index) => (
              <div key={`duplicate-${index}`} className="inline-block w-[92px] h-[52px] rounded-[5.31px] py-[16.98px] px-[5.31px] flex items-center justify-center border border-gray-900">
                <img src={logo?.url?.src} alt={logo?.name} className='w-[82.24px] h-[18.04px]' />
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

      <div className='w-[321px] h-[600px] mt-[42px]'>
        <Image
          src={BenefitFrame}
          width={321}
          height={586}
          alt='BenefitFrame'
        />
      </div>

      {/* Feature Cards */}
      <div
        className="w-[335px] mt-[42px] bg-[#19191C] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
      >
        <div className='flex gap-[8px]'>
          <div className='w-[44px] h-[44px] flex items-center justify-center bg-[#18181A] border-[2px] border-[#28282C] rounded-[10.62px]'>
            <Image
              src={Network}
              width={23}
              height={23}
              alt='Network'
            />
          </div>
          <div className='w-[237px] h-[38px]'><p
            className="text-white text-left text-[16px] font-medium leading-[19.09px]"

          >
            Custom Software Development
          </p>
          </div>
        </div>
        <div className='w-[303px] h-[40px] mt-[12px]'>
          <p
            className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

          >
            Bespoke software solutions tailored to your business needs.
          </p>

        </div>
      </div>

    </div>
  );
}

export default MobileUi;
