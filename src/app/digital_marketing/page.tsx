import React from 'react'
import { InfiniteSliderVertical } from './Slider'

const page = () => {
    return (
        <section>

       
        <div className='h-[852px] bg-black w-full'>
            {/* 1st */}
            <div className="w-[765px] h-[160px] mt-[100px] ml-[124px] flex gap-[74px] p-10 border-b border-gray-700">
                <div className='flex gap-[12px]'>
                    <p className='text-[40px] font-semibold text-white'>VISION</p>
                </div>
                <div className='h-[80px]'>
                    <h1 className='uppercase text-[20px] font-normal text-white'>CRAFTING Stories</h1>
                    <p className='text-[14px] font-light text-white'>We focus on creating visuals that go beyond aesthetics, delivering meaningful stories through every frame.</p>
                </div>
            </div>
            {/* 2nd */}
            <div className="w-[873px] h-[160px]  ml-[371px] flex gap-[74px] p-10 border-b border-gray-700">
                <div className='flex gap-[12px]'>
                    <p className='text-[40px] font-semibold text-white'>INNOVATION</p>
                </div>
                <div className='h-[80px]'>
                    <h1 className='uppercase text-[20px] font-normal text-white'>Pushing Boundaries</h1>
                    <p className='text-[14px] font-light text-[#E7E7E7]'>Harnessing cutting-edge technology, we redefine visual content through drone videography, cinematic visuals, and promotional films.</p>
                </div>
            </div>
            {/* 3th */}

            <div className="w-[882px] h-[160px]  ml-[174px] flex gap-[74px] p-10 border-b border-gray-700">
                <div className='flex gap-[12px]'>
                    <p className='text-[40px] font-semibold text-white'>EXCELLENCE</p>
                </div>
                <div className='h-[80px]'>
                    <h1 className='uppercase text-[20px] font-normal text-white'>Precision in Every Shot</h1>
                    <p className='text-[14px] font-light text-[#E7E7E7]'>Every detail matters. From corporate films to product photography, we ensure each project reflects your brand&apos;s essence.</p>
                </div>
            </div>
            {/* 4th */}
            <div className="w-[924px] h-[160px]  ml-[392px] flex gap-[74px] p-10 border-b border-gray-700">
                <div className='flex gap-[12px]'>
                    <p className='text-[40px] font-semibold text-white'>COLLABORATION</p>
                </div>
                <div className='h-[80px] w-full'>
                    <h1 className='uppercase text-[20px] font-normal text-white'>Your Vision, Our Expertise</h1>
                    <p className='text-[14px] font-light text-[#E7E7E7]'>Working closely with clients, we translate ideas into visuals that captivate and inspire audiences.</p>
                </div>
            </div>
        </div>
        <InfiniteSliderVertical/>
        </section>
    )
}

export default page
