'use client'
import Image from 'next/image'
import React, {  useState, useEffect, useRef } from 'react'
import plusIcon from '@/utilities/icons/plus-icon.svg'
import minusIcon from '@/utilities/icons/minus-icon.svg'
import applyIcon from '@/utilities/icons/apply-icon.svg'
import rightArrowIcon from '@/utilities/icons/right-arrow.svg'
import { useRouter } from "next/navigation";


function DesktopUi() {

    const router=useRouter()

    const jobSections = [
        {
          title: "StoryBoard (3)",
           content: "As a Senior UI/UX Designer, you will be responsible for creating user-centered designs for our clients' digital products. You will work closely with our development team to ensure that designs are implemented accurately and efficiently."
        },
        {
          title: "Illustration (4)",
          content: "As a Senior UI/UX Designer, you will be responsible for creating user-centered designs for our clients' digital products. You will work closely with our development team to ensure that designs are implemented accurately and efficiently."
        },
        {
          title: "Animation (3)",
          content: "• 5+ years of experience in UI/UX design\n• Strong portfolio demonstrating user-centered design solutions\n• Proficiency in design tools such as Figma, Sketch, or Adobe XD\n• Experience with design systems and component libraries\n• Excellent communication and collaboration skills"
        },
        {
          title: "Design (1)",
          content: "Bengaluru, India (On-site)"
        },
        {
          title: "Writing (2)",
          content: "• Competitive salary\n• Health insurance\n• Flexible working hours\n• Professional development opportunities\n• Collaborative and innovative work environment"
        }
      ]

    const [openIndexes, setOpenIndexes] = useState<number[]>([])

    const toggleAccordion = (index: number) => {
        setOpenIndexes(prevIndexes =>
            prevIndexes.includes(index)
                ? prevIndexes.filter(i => i !== index)
                : [...prevIndexes, index]
        )
    }



    return (
        <div className='my-[80px] pt-[32px] pb-[72px] lg:px-[124px] md:px-[60px] flex flex-col gap-[42px]'>
           <div className='pb-[44px] flex items-center gap-[12px]'>
            <p onClick={()=>{router.push('/')}} className='font-medium text-[16px] leading-6 text-[#888888] cursor-pointer'>Home</p>
            <Image src={applyIcon} alt='apply' width={18} height={18}/>
            <p onClick={()=>{router.push('/careers')}} className='font-medium text-[16px] leading-6 text-[#888888] cursor-pointer'>Careers</p>
            <Image src={applyIcon} alt='apply' width={18} height={18}/>
            <p className='font-medium text-[16px] leading-6 text-[#1E3A76] cursor-pointer'>All Openings</p>
           </div>
           <div className='pb-[38px] flex flex-col gap-[72px] lg:w-[1192px] md:w-[714px]'>
            <p className='font-[300] text-[62px] leading-[50px] text-[#131313] flex justify-center'>All Openings</p>

            <div>
                    {jobSections?.map((item, index) => (
                    <div key={index} className={`border-b ${index===0?"border-t":""} ${openIndexes.includes(index)?"border-t border-[#06135B]":"border-[#E7E7E7]"}`}>
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
                            <div className="">
                                {/* {item.content} */}
                                <ul className='pl-[100px] border-t border-[#B0B0B0]'>
                                    <li className='border-b border-[#B0B0B0] flex justify-between py-[16px] pl-[40px] pr-[32px]'>
                                        <div className='flex flex-col justify-between gap-[2px]'>
                                            <p className='font-normal text-[20px] leading-[23.87px] text-[#3D3D3D]'>StoryBoard Lead</p>
                                            <div className='flex items-center gap-3'>
                                                <p className='py-1 font-[300] text-[14px] leading-[16.71px] text-[#4F4F4F]'>Bengaluru</p>
                                                <div className='border-l border-[#D1D1D1] py-1 pl-4 font-[300] text-[14px] leading-[16.71px] text-[#4F4F4F]'>Full-time</div>
                                                <div className='border-l border-[#D1D1D1] py-1 pl-4 font-[300] text-[14px] leading-[16.71px] text-[#4F4F4F]'>5+ Years of Experience</div>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 cursor-pointer'>
                                            <Image src={applyIcon} alt='apply' width={24} height={24}/>
                                            <p className='font-normal text-[18px] leading-[24px] text-[#888888]'>Apply</p>
                                        </div>
                                    </li>
                                    <li className='border-b border-[#B0B0B0] flex justify-between py-[16px] pl-[40px] pr-[32px]'>
                                        <div className='flex flex-col justify-between gap-[2px]'>
                                            <p className='font-normal text-[20px] leading-[23.87px] text-[#3D3D3D]'>StoryBoard Artist</p>
                                            <div className='flex items-center gap-3'>
                                                <p className='py-1 font-[300] text-[14px] leading-[16.71px] text-[#4F4F4F]'>Bengaluru</p>
                                                <div className='border-l border-[#D1D1D1] py-1 pl-4 font-[300] text-[14px] leading-[16.71px] text-[#4F4F4F]'>Full-time</div>
                                                <div className='border-l border-[#D1D1D1] py-1 pl-4 font-[300] text-[14px] leading-[16.71px] text-[#4F4F4F]'>1+ Years of Experience</div>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 cursor-pointer'>
                                            <Image src={applyIcon} alt='apply' width={24} height={24}/>
                                            <p className='font-normal text-[18px] leading-[24px] text-[#888888]'>Apply</p>
                                        </div>
                                    </li>
                                    <li className='flex justify-between py-[16px] pl-[40px] pr-[32px]'>
                                        <div className='flex flex-col justify-between gap-[2px]'>
                                            <p className='font-normal text-[20px] leading-[23.87px] text-[#3D3D3D]'>StoryBoard Artist</p>
                                            <div className='flex items-center gap-3'>
                                                <p className='py-1 font-[300] text-[14px] leading-[16.71px] text-[#4F4F4F]'>Bengaluru</p>
                                                <div className='border-l border-[#D1D1D1] py-1 pl-4 font-[300] text-[14px] leading-[16.71px] text-[#4F4F4F]'>Full-time</div>
                                                <div className='border-l border-[#D1D1D1] py-1 pl-4 font-[300] text-[14px] leading-[16.71px] text-[#4F4F4F]'>2.5+ Years of Experience</div>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 cursor-pointer'>
                                            <Image src={applyIcon} alt='apply' width={24} height={24}/>
                                            <p className='font-normal text-[18px] leading-[24px] text-[#888888]'>Apply</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
                    </div>
           </div>

           <div className='py-[60px] px-[40px] bg-[#FAFAFA] flex items-center justify-between lg:w-[1192px] md:w-[714px]'>
            <div className='flex flex-col gap-[18px]'>
                <p className='font-medium text-[40px] leading-[48px] text-[#131313]'>Didn't find the role <br/>you were looking for? </p>
                <p className='font-normal text-[18px] leading-[26px] text-[#454545]'>No worries! <span className='font-medium'>Send us your application </span> <br/>we might just have the perfect spot for you soon!</p>
            </div>
            <div onClick={() => router.push('/direct-apply')} className='w-[139px] h-[58px] rounded-[4px] flex items-center justify-center gap-2 bg-[#131313] cursor-pointer'>
                <p className='font-normal text-[16px] leading-[18px] text-[#FFFFFF]'>Apply</p>
                <Image src={rightArrowIcon} alt='right-arrow' width={24} height={24}/>
            </div>
           </div>
        </div>
    )
}

export default DesktopUi