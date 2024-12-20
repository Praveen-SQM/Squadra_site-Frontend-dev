import React from 'react';
import starSvg from '@/utilities/images/star.svg'
import Image from 'next/image';
function MobileUi() {
  return (
    <div className="h-screen pt-48 flex flex-col  border-1 border-red-300  w-full  items-center bg-black">
      {/* Carousel */}


      {/* Our Benefits */}
      <div className="w-[140.88px] h-[44px] justify-center items-center flex  rounded-[100px] bg-[#131315]">
        <div className='flex gap-[2px]'>
          <Image
            src={starSvg}
            width={20}
            height={20}
            alt='Star'
          />
          <p
            className="text-white font-medium text-[16px] leading-[24px] text-center"
           
          >
            Our Benefits
          </p>

        </div>
      </div>
      <p
        className="text-center mt-[13px] text-white text-[32px] font-bold leading-[38.19px]"
      
      >
        What we do
      </p>

      <div className="w-[335px] h-[34px] gap-0">
        <p
          className="text-center text-[#797B85] text-[14px] font-medium leading-[17.08px]"
        >
          Empowering businesses with transformative IT solutions for efficiency and success
        </p>

      </div>



    </div>
  );
}

export default MobileUi;
