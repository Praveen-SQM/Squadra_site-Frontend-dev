
import Image from 'next/image'
import React from 'react'
import starSvg from '@/utilities/images/star.svg'

function DesktopUi() {
  return (
    <div className="h-fit pt-64 flex flex-col  w-full  items-center bg-black">
      {/* Intro Section */}
      <p>Desktop </p>

      {/* Carousel */}
    {/*  add code here*/}



      {/* What we Do */}
      <div style={{border: "1px solid red"}} className="w-[1130.32px] h-[1043px] ">
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
