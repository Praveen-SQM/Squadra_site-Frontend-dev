'use client'
import Image from 'next/image'
import React from 'react'
import applyIcon from '@/utilities/icons/apply-icon.svg'
import { useRouter } from "next/navigation";


function DesktopUi() {

    const router = useRouter()




    return (
        <div className='flex flex-col mt-[80px]'>
            <div className='pt-[32px] pb-[44px] px-[124px] bg-[#FAFAFA] flex items-center gap-3'>
                <p onClick={() => { router.push('/') }} className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#888888] cursor-pointer'>Home</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p onClick={() => { router.push('/careers') }} className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#888888] cursor-pointer'>Careers</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#888888] cursor-pointer'>Design</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#888888] cursor-pointer'>Sr. UI/UX Designer</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#1E3A76] cursor-pointer'>Application Form</p>
            </div>
            <div className='py-[40px] px-[200px] bg-[#FAFAFA] flex flex-col gap-2'>
                <p className='font-medium text-[28px] leading-[33.41px] text-[#3D3D3D]'>Senior UI/UX designer</p>
            </div>
        </div>
    )
}

export default DesktopUi