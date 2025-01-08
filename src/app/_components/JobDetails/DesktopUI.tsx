'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import plusIcon from '@/utilities/icons/plus-icon.svg'
import minusIcon from '@/utilities/icons/minus-icon.svg'
import applyIcon from '@/utilities/icons/apply-icon.svg'
import shareFileIcon from '@/utilities/icons/share-file-icon.svg'
import linkedInIcon from '@/utilities/icons/linkedin-icon.svg'
import { useRouter } from "next/navigation";


interface JobListingProps {
    sections: { title: string; content: string }[]
}

function DesktopUi({ sections }: JobListingProps) {

    const router = useRouter()


    const [openIndexes, setOpenIndexes] = useState<number[]>([])

    const toggleAccordion = (index: number) => {
        setOpenIndexes(prevIndexes =>
            prevIndexes.includes(index)
                ? prevIndexes.filter(i => i !== index)
                : [...prevIndexes, index]
        )
    }



    return (
        <div className='my-[80px]'>
            <div className='pt-[32px] pb-[44px] px-[124px] flex items-center gap-3'>
                <p onClick={() => { router.push('/') }} className='font-medium text-[16px] leading-6 text-[#888888] cursor-pointer'>Home</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p onClick={() => { router.push('/careers') }} className='font-medium text-[16px] leading-6 text-[#888888] cursor-pointer'>Careers</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p className='font-medium text-[16px] leading-6 text-[#888888] cursor-pointer'>Design</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p className='font-medium text-[16px] leading-6 text-[#1E3A76] cursor-pointer'>Sr. UI/UX Designer</p>
            </div>
            <div className='pt-[60px] pb-[40px] ml-[124px] w-[60%]'>
                <div className='flex flex-col gap-[40px]'>
                    <div className='flex flex-col gap-[12px]'>
                        <p className='font-medium text-[40px] leading-[47.73px] text-[#3D3D3D]'>Senior UI/UX designer</p>
                        <div className='flex items-center gap-6'>
                            <p className='font-normal text-[24px] leading-[28.64px] text-[#4F4F4F]'>Bengaluru, India</p>
                            <div className='w-[1px] h-[21px] bg-[#B0B0B0]'></div>
                            <p className='font-normal text-[24px] leading-[28.64px] text-[#4F4F4F]'>Full Time</p>
                            <div className='w-[1px] h-[21px] bg-[#B0B0B0]'></div>
                            <p className='font-normal text-[24px] leading-[28.64px] text-[#4F4F4F]'>3+ Years Of Experience</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                    <div className='flex items-center w-fit h-[44px] rounded-[4px] px-[24px] bg-[#06135B] font-medium text-[16px] leading-[19.09px] text-[#FFFFFF] cursor-pointer'>Apply for this job</div>
                    <div className='flex items-center gap-3 p-3'>
                        <p className='font-medium text-[16px] leading-[19.09px] text-[#3D3D3D] cursor-pointer'>Share</p>
                        <div className='flex items-center gap-4'>
                            <Image src={shareFileIcon} alt='share' width={24} height={24} />
                            <Image src={linkedInIcon} alt='share' width={24} height={24} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-10'>
                <div className="w-[60%] ml-[124px]">
                    {sections?.map((item, index) => (
                        <div key={index} className={`border-b border-[#E7E7E7] ${index === 0 ? "border-t" : ""}`}>
                            <button
                                className="flex justify-between items-center w-full py-7 text-left"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-[24px] leading-[28.64px] text-[#3D3D3D] font-medium">{item.title}</span>
                                {openIndexes.includes(index) ? (
                                    <Image src={minusIcon} alt='close' />
                                ) : (
                                    <Image src={plusIcon} alt='open' />
                                )}
                            </button>
                            {openIndexes.includes(index) && (
                                <div className="pb-6 pt-1 pr-10 font-normal text-[18px] leading-7 text-[#4F4F4F]">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DesktopUi