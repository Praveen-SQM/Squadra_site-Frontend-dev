'use client'
import Image from 'next/image'
import React from 'react'
import starSvg from '@/utilities/images/star.svg'
import { customSoftwareDevData, data } from './MobileUi'
import frame from '@/utilities/images/mobile-frame.svg'
import Container from '@/utilities/images/Container.svg'
import arrowRight from '@/utilities/images/arrow-right.svg'

function DesktopUi() {
  return (
    <div className="h-fit pt-64 flex flex-col  w-full  items-center bg-black">
      {/* Intro Section */}
      <p>Desktop </p>

      {/* Carousel */}
      {/*  add code here*/}



      {/* What we Do */}
      <div className="w-[1130.32px] h-fit mb-[50px]">
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

      {/* Custom Software Devlopment */}
      <section className='bg-white max-w-full flex items-center'>


        <div className="w-[1152px] h-full flex items-center mx-auto bg-white py-[143px]">
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
            <div className="cursor-pointer w-[184px] h-[52px] gap-[16px] rounded-[30px] flex items-center justify-center bg-[#131313]">
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
              
                          </div>

          </div>
        </div>
      </section>

      {/* Saas Development */}
      <section className='bg-white max-w-full flex items-center'>


        <div className="w-[1152px] h-full flex items-center mx-auto bg-white py-[78px]">
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
            <div className="cursor-pointer w-[184px] h-[52px] gap-[16px] rounded-[30px] flex items-center justify-center bg-[#131313]">
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

            </div>

          </div>




          {/* Second Div */}
          <div className="w-[438px] h-full">
            <div className='w-[438px] h-[547px] mt-[48px]'>
              <Image
                src={Container}
                width={438}
                height={547}
                alt='Container'

              />
            </div>        </div>
          
         
        </div>
      </section>
    </div>
  )
}

export default DesktopUi
