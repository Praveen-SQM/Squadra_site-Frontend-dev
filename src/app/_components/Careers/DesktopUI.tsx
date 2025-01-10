'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import careerImage from '@/utilities/images/career-image.png'

import rightArrowIcon from '@/utilities/icons/right-arrow.svg'
import plusIcon from '@/utilities/icons/plus-icon.svg'
import minusIcon from '@/utilities/icons/minus-icon.svg'
import applyIcon from '@/utilities/icons/apply-icon.svg'
import growthIcon from '@/utilities/icons/growth-icon.svg'
import remunerationIcon from '@/utilities/icons/remuneration-icon.svg'
import workplaceIcon from '@/utilities/icons/workplace-icon.svg'
import workEnvironmentIcon from '@/utilities/icons/work-environment-icon.svg'
import TalentIcon from '@/utilities/icons/talent-icon.svg'
import WorkBalanceIcon from '@/utilities/icons/work-balance.svg'
import { useRouter } from "next/navigation";


function DesktopUi() {

    const router = useRouter()

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

    const employeeBenefits = [
        {
            icon: growthIcon,
            title: "01. Growth Opportunities",
            description: "At Squadra Media, we believe learning never stops. We’re dedicated to fostering growth and helping employees achieve their best."
        },
        {
            icon: remunerationIcon,
            title: "02. Competitive Remuneration",
            description: "We value our employee's contributions and ensure they’re rewarded for their dedication and growth."
        },
        {
            icon: workplaceIcon,
            title: "03. Eco-friendly Workplace",
            description: "Surrounded by nature, our workspace promotes mental well-being while reducing our carbon footprint."
        },
        {
            icon: workEnvironmentIcon,
            title: "04. An Instagram-worthy Fun Work Environment",
            description: "Our beautifully designed office is a productivity booster and an Instagram-worthy spot every day."
        },
        {
            icon: TalentIcon,
            title: "05.Talent Nurturing Community",
            description: "We help employees achieve career goals while encouraging them to explore hidden talents and make a difference."
        },
        {
            icon: WorkBalanceIcon,
            title: "06. Work-Life Balance",
            description: "We promote a healthy balance between work and personal life to enhance happiness, well-being, and productivity."
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
        <div className='flex flex-col justify-center'>
            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className={`absolute inset-0 transition-opacity duration-1000 opacity-100'}`}
                >
                    <Image
                        src={careerImage}
                        alt={`Carousel image`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                {/* Content */}
                <div className='flex flex-col gap-[150px] absolute inset-0 lg:mt-[390px] md:mt-[504px] sm:mt-[360px] mt-[360px]'>
                    <div className="flex flex-col justify-center items-center lg:gap-[56px] md:gap-[42px] sm:gap-[44px] gap-[44px]">
                        <div className='flex flex-col lg:gap-1 md:gap-2 items-center'>
                            <p className='font-[265] lg:text-[80px] lg:leading-[95.47px] md:text-[56px] md:leading-[66.83px] sm:text-[32px] sm:leading-[38.19px] text-[32px] leading-[38.19px] text-[#FFFFFF] text-center lg:w-full md:w-full sm:w-[308px] w-[308px]'>Step into your future with us.</p>
                            <div className='py-[10px]'>
                                <p className='font-normal text-[20px] leading-7 text-[#FFFFFF] text-center lg:max-w-[700px] md:max-w-[469px] sm:max-w-[370px] max-w-[370px]'>We aim to bring positivity to every step we take. If you share that vision, Squadra Media is the place for you</p>
                            </div>
                        </div>

                        <div onClick={() => router.push('/openings')} className='w-[200px] h-[62px] rounded-[4px] border-[0.5px] border-[#FFFFFF] bg-[#FBAE17] flex items-center justify-center gap-2 cursor-pointer'>
                            <p className='font-medium text-[18px] leading-[18px] text-[#FFFFFF]'>All openings</p>
                            <Image src={rightArrowIcon} alt='Openings' />
                        </div>
                    </div>
                </div>


            </div>

            {/* Current Opening */}
            <div className='w-full flex flex-col items-center'>
                <div className='flex flex-col py-[72px] lg:px-[124px] md:px-[0px] gap-[42px] lg:w-[1192px] md:w-[714px] sm:w-[335px] w-[335px]'>
                    <div className='flex flex-col gap-[72px] justify-center'>
                        <p className='font-[300] lg:text-[62px] md:text-[48px] lg:leading-[50px] md:leading-[50px] sm:text-[28px] sm:leading-[33.41px] text-[28px] leading-[33.41px] text-[#131313] text-center'>Current openings</p>
                        <div>
                            {jobSections?.map((item, index) => (
                                <div key={index} className={`border-b ${index === 0 ? "border-t" : ""} ${openIndexes.includes(index) ? "border-t border-[#06135B]" : "border-[#E7E7E7]"}`}>
                                    <button
                                        className="flex justify-between items-center w-full lg:py-7 md:py-7 sm:py-4 py-4 text-left"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="lg:text-[24px] lg:leading-[28.64px] md:text-[24px] md:leading-[28.64px]  sm:text-[16px] sm:leading-[19.09px] text-[#3D3D3D] font-medium">{item.title}</span>
                                        {openIndexes.includes(index) ? (
                                            <Image src={minusIcon} alt='close' />
                                        ) : (
                                            <Image src={plusIcon} alt='open' />
                                        )}
                                    </button>
                                    {openIndexes.includes(index) && (
                                        <div className="">
                                            {/* {item.content} */}
                                            <ul className='lg:pl-[100px] md:pl-[100px] sm:pl-[6px] pl-[6px] border-t border-[#B0B0B0]'>
                                                <li className='border-b border-[#B0B0B0] flex justify-between lg:py-[16px] md:py-[16px] sm:py-[8px] py-[8px] lg:pl-[40px] lg:pr-[32px] md:pl-[40px] md:pr-[32px]'>
                                                    <div className='flex flex-col justify-between gap-[2px]'>
                                                        <p className='font-normal lg:text-[20px] lg:leading-[23.87px] md:text-[18px] md:leading-[21.48px] sm:text-[14px] sm:leading-[16.71px] text-[14px] leading-[16.71px] text-[#3D3D3D]'>StoryBoard Lead</p>
                                                        <div className='flex items-center lg:gap-3 md:gap-3 sm:gap-1 gap-1'>
                                                            <p className='py-1 font-[300] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]'>Bengaluru</p>
                                                            <div className='border-l border-[#D1D1D1] py-1 lg:pl-4 md:pl-4 sm:pl-1 pl-1 font-[300] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]'>Full-time</div>
                                                            <div className='border-l border-[#D1D1D1] py-1 lg:pl-4 md:pl-4 sm:pl-1 pl-1 font-[300] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]'>5+ Years of Experience</div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center lg:gap-3 md:gap-3 sm:gap-1 gap-1 cursor-pointer'>
                                                        <div className='lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[20px] h-[20px]'>
                                                            <Image src={applyIcon} alt='apply' width={24} height={24} className='w-[24px] h-[24px]' />
                                                        </div>
                                                        <p className='font-normal lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] leading-[24px] text-[#888888]'>Apply</p>
                                                    </div>
                                                </li>
                                                <li className='border-b border-[#B0B0B0] flex justify-between lg:py-[16px] md:py-[16px] sm:py-[8px] py-[8px] lg:pl-[40px] lg:pr-[32px] md:pl-[40px] md:pr-[32px]'>
                                                    <div className='flex flex-col justify-between gap-[2px]'>
                                                        <p className='font-normal lg:text-[20px] lg:leading-[23.87px] md:text-[18px] md:leading-[21.48px] sm:text-[14px] sm:leading-[16.71px] text-[14px] leading-[16.71px] text-[#3D3D3D]'>StoryBoard Lead</p>
                                                        <div className='flex items-center lg:gap-3 md:gap-3 sm:gap-1 gap-1'>
                                                            <p className='py-1 font-[300] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]'>Bengaluru</p>
                                                            <div className='border-l border-[#D1D1D1] py-1 lg:pl-4 md:pl-4 sm:pl-1 pl-1 font-[300] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]'>Full-time</div>
                                                            <div className='border-l border-[#D1D1D1] py-1 lg:pl-4 md:pl-4 sm:pl-1 pl-1 font-[300] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]'>5+ Years of Experience</div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center lg:gap-3 md:gap-3 sm:gap-1 gap-1 cursor-pointer'>
                                                        <div className='lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[20px] h-[20px]'>
                                                            <Image src={applyIcon} alt='apply' width={24} height={24} className='w-[24px] h-[24px]' />
                                                        </div>
                                                        <p className='font-normal lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] leading-[24px] text-[#888888]'>Apply</p>
                                                    </div>
                                                </li>
                                                <li className='border-b border-[#B0B0B0] flex justify-between lg:py-[16px] md:py-[16px] sm:py-[8px] py-[8px] lg:pl-[40px] lg:pr-[32px] md:pl-[40px] md:pr-[32px]'>
                                                    <div className='flex flex-col justify-between gap-[2px]'>
                                                        <p className='font-normal lg:text-[20px] lg:leading-[23.87px] md:text-[18px] md:leading-[21.48px] sm:text-[14px] sm:leading-[16.71px] text-[14px] leading-[16.71px] text-[#3D3D3D]'>StoryBoard Lead</p>
                                                        <div className='flex items-center lg:gap-3 md:gap-3 sm:gap-1 gap-1'>
                                                            <p className='py-1 font-[300] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]'>Bengaluru</p>
                                                            <div className='border-l border-[#D1D1D1] py-1 lg:pl-4 md:pl-4 sm:pl-1 pl-1 font-[300] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]'>Full-time</div>
                                                            <div className='border-l border-[#D1D1D1] py-1 lg:pl-4 md:pl-4 sm:pl-1 pl-1 font-[300] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]'>5+ Years of Experience</div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center lg:gap-3 md:gap-3 sm:gap-1 gap-1 cursor-pointer'>
                                                        <div className='lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[20px] h-[20px]'>
                                                            <Image src={applyIcon} alt='apply' width={24} height={24} className='w-[24px] h-[24px]' />
                                                        </div>
                                                        <p className='font-normal lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] leading-[24px] text-[#888888]'>Apply</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='w-full flex justify-end'>
                        <div onClick={() => router.push('/openings')} className='lg:w-[194px] md:w-[194px] sm:w-full w-full h-[58px] flex justify-center items-center rounded-[4px] gap-2 bg-[#131313] cursor-pointer'>
                            <p className='font-normal text-[16px] leading-[18px] text-[#FFFFFF]'>See all openings</p>
                            <Image src={rightArrowIcon} alt='Openings' width={24} height={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Employee Benefits */}
            <div className='w-full bg-[#FAFAFA] flex flex-col lg:py-[72px] md:py-[72px] sm:py-[50px] py-[50px] lg:px-[124px] md:px-[60px] sm:px-[20px] px-[20px] items-center'>
                <div className='flex flex-col lg:gap-[80px] md:gap-[60px] sm:gap-[32px] gap-[32px] lg:w-[1192px] md:w-[714px] sm:w-full w-full items-center'>
                    <p className='font-[300] lg:text-[60px] lg:leading-[71.6px] md:text-[48px] md:leading-[57.28px] sm:text-[28px] sm:leading-[33.41px] text-[28px] leading-[33.41px] text-center text-[#131313] lg:max-w-[943px] md:max-w-[943px]'>We prioritise our employee&apos;s <span className='text-[#FBAE17]'> well-being.</span></p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:gap-[0px] md:gap-[0px] sm:gap-[6px] gap-[6px]'>
                        {employeeBenefits?.map((benefit, index) => (
                            <div key={index} className={`lg:h-[460px] lg:w-[397.33px] md:h-[309px] md:w-[357px] sm:w-[335px] w-[335px] flex flex-col items-center lg:pt-[72px] lg:pb-[64px] lg:px-[44px] lg:gap-[40px] md:pt-[40px] md:pb-[40px] md:px-[32px] md:gap-[32px]  sm:pt-[32px] sm:pb-[32px] sm:px-[32px] sm:gap-[32px] pt-[32px] pb-[32px] px-[32px] gap-[32px] ${index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#FAFAFA]'}`}>
                                <Image src={benefit?.icon} alt={benefit.title} className='lg:w-[100px] lg:h-[100px] md:w-[64px] md:h-[64px] sm:w-[52px] sm:h-[52px] w-[52px] h-[52px]' />
                                <div className='flex flex-col lg:gap-5 md:gap-5 sm:gap-3 gap-3'>
                                    <p className='font-[600] lg:text-[20px] lg:leading-[23.87px] md:text-[18px] md:leading-[21.48px] sm:text-[16px] sm:leading-[19.09px] text-[16px] leading-[19.09px] text-[#131313]'>{benefit?.title}</p>
                                    <p className='font-normal lg:text-[18px] lg:leading-7 md:text-[16px] md:leading-[23px] sm:text-[14px] sm:leading-[19px] text-[14px] leading-[19px] text-[#6D6D6D]'>{benefit?.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Life at squadra */}
            {/* <div className='w-full bg-[#FFFFFF] lg:py-[72px] md:py-[72px] sm:py-[40px] py-[40px] lg:px-[124px] md:px-[60px] sm:px-[20px] px-[20px] flex flex-col gap-[44px] items-center'>
                <div className='flex flex-col lg:gap-[44px] md:gap-[44px] sm:gap-[32px] gap-[32px] lg:w-[1192px] md:w-[714px]'>
                    <div className='flex flex-col gap-[12px]'>
                        <p className='font-[300] lg:text-[62px] lg:leading-[72px] md:text-[48px] md:leading-[57.28px] sm:text-[28px] sm:leading-[33.41px] text-[28px] leading-[33.41px] text-center text-[#131313]'>Life at <span className='text-[#FBAE17]'>Squadra Media</span></p>
                        <p className='font-normal lg:text-[18px] lg:leading-[24px] md:text-[16px] md:leading-[21px] sm:text-[14px] sm:leading-[19px] text-center text-[#6D6D6D]'>A space to unlock your true potential, chase your dreams, and embrace your <br /> passion all while enjoying every moment with fun and laughter!</p>
                    </div>
                    <div className='flex flex-col lg:gap-3 md:gap-3 sm:gap-[40px] gap-[40px]'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-3'>
                                <div className='flex flex-col gap-3'>
                                    <div className='rounded-[6px] lg:w-[420px] h-[194px] md:w-[282px] bg-gray-400'>
                                        <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/5555.webp" alt='Life at Squadra' width={420} height={194} className="lg:w-[420px] lg:h-[194px] md:w-[282px] md:h-[194px] object-cover" />
                                    </div>
                                    <div className='rounded-[6px] lg:w-[420px] h-[194px] md:w-[282px] bg-gray-400'></div>
                                </div>
                                <div className='rounded-[6px] lg:w-[760px] md:w-[420px] h-[400px]'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/444.webp" alt='Life at Squadra' width={760} height={400} className="lg:w-[760px] md:w-[420px] h-[400px] object-cover" />
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='rounded-[6px] lg:w-[760px] md:w-[420px] h-[400px] bg-gray-400'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/2.1.webp" alt='Life at Squadra' width={760} height={400} className="lg:w-[760px] md:w-[420px] h-[400px] object-cover" />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='rounded-[6px] lg:w-[420px] h-[194px] md:w-[282px] bg-gray-400'>
                                        <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/333.jpg" alt='Life at Squadra' width={420} height={194} className="lg:w-[420px] h-[194px] md:w-[282px] object-cover" />
                                    </div>
                                    <div className='rounded-[6px] lg:w-[420px] h-[194px] md:w-[282px] bg-gray-400'></div>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-[6px] lg:w-[1192px] lg:h-[440px] md:w-[714px] md:h-[400px] sm:w-full sm:h-[260px] w-full h-[260px] bg-gray-400'></div>
                    </div>
                </div>
            </div> */}

            <div className='w-full bg-[#FFFFFF] lg:py-[72px] md:py-[72px] sm:py-[40px] py-[40px] lg:px-[124px] md:px-[60px] sm:px-[20px] px-[20px] flex flex-col gap-[44px] items-center'>
                <div className='flex flex-col lg:gap-[44px] md:gap-[44px] sm:gap-[32px] gap-[32px] lg:w-[1192px] md:w-[714px]'>
                    <div className='flex flex-col gap-[12px]'>
                        <p className='font-[300] lg:text-[62px] lg:leading-[72px] md:text-[48px] md:leading-[57.28px] sm:text-[28px] sm:leading-[33.41px] text-[28px] leading-[33.41px] text-center text-[#131313]'>Life at <span className='text-[#FBAE17]'>Squadra Media</span></p>
                        <p className='font-normal lg:text-[18px] lg:leading-[24px] md:text-[16px] md:leading-[21px] sm:text-[14px] sm:leading-[19px] text-center text-[#6D6D6D]'>A space to unlock your true potential, chase your dreams, and embrace your <br /> passion all while enjoying every moment with fun and laughter!</p>
                    </div>
                    <div className='flex flex-col lg:gap-3 md:gap-3 sm:gap-[40px] gap-[40px]'>


                        <div className='flex flex-col gap-3'>
                            <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col items-center gap-3'>
                                <div className='flex lg:flex-col md:flex-col sm:flex-row flex-row gap-3'>
                                    <div className='rounded-[6px] lg:w-[420px] h-[194px] md:w-[282px] sm:w-[163.5px] w-[163.5px] bg-gray-400'>
                                        <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/5555.webp" alt='Life at Squadra' width={420} height={194} className="lg:w-[420px] lg:h-[194px] md:w-[282px] md:h-[194px] sm:w-[163.5px] w-[163.5px] h-[194px] object-cover" />
                                    </div>
                                    <div className='rounded-[6px] lg:w-[420px] h-[194px] md:w-[282px] sm:w-[163.5px] w-[163.5px] bg-gray-400'></div>
                                </div>
                                <div className='rounded-[6px] lg:w-[760px] md:w-[420px] sm:w-[335px] w-[335px] lg:h-[400px] md:h-[400px] sm:h-[200px] h-[200px]'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/444.webp" alt='Life at Squadra' width={760} height={400} className="lg:w-[760px] md:w-[420px] sm:w-[335px] w-[335px] lg:h-[400px] md:h-[400px] sm:h-[200px] h-[200px] object-cover" />
                                </div>
                            </div>
                            <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col items-center gap-3'>
                                <div className='rounded-[6px] lg:w-[760px] md:w-[420px] lg:h-[400px] md:h-[400px] sm:h-[200px] h-[200px] bg-gray-400 hidden sm:block'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/2.1.webp" alt='Life at Squadra' width={760} height={400} className="lg:w-[760px] md:w-[420px] lg:h-[400px] md:h-[400px] sm:h-[200px] h-[200px] object-cover" />
                                </div>
                                <div className='flex lg:flex-col md:flex-col sm:flex-row flex-row gap-3'>
                                    <div className='rounded-[6px] lg:w-[420px] h-[194px] md:w-[282px] sm:w-[163.5px] w-[163.5px] bg-gray-400'>
                                        <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/333.jpg" alt='Life at Squadra' width={420} height={194} className="lg:w-[420px] h-[194px] md:w-[282px] sm:w-[163.5px] w-[163.5px] object-cover" />
                                    </div>
                                    <div className='rounded-[6px] lg:w-[420px] h-[194px] md:w-[282px] sm:w-[163.5px] w-[163.5px] bg-gray-400'></div>
                                </div>
                                <div className='rounded-[6px] lg:w-[760px] md:w-[420px] sm:w-[335px] w-[335px] lg:h-[400px] md:h-[400px] sm:h-[200px] h-[200px] bg-gray-400 block sm:hidden'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/2.1.webp" alt='Life at Squadra' width={760} height={400} className="lg:w-[760px] md:w-[420px] sm:w-[335px] w-[335px] lg:h-[400px] md:h-[400px] sm:h-[200px] h-[200px] object-cover" />
                                </div>
                            </div>
                        </div>


                        <div className='rounded-[6px] lg:w-[1192px] lg:h-[440px] md:w-[714px] md:h-[400px] sm:w-full sm:h-[260px] w-full h-[260px] bg-gray-400'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopUi