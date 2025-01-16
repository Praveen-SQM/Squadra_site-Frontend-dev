'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import plusIcon from '@/utilities/icons/plus-icon.svg'
import minusIcon from '@/utilities/icons/minus-icon.svg'
import applyIcon from '@/utilities/icons/apply-icon.svg'
import rightArrowIcon from '@/utilities/icons/right-arrow.svg'
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

    const [openIndexes, setOpenIndexes] = useState<number[]>([])

    const toggleAccordion = (index: number) => {
        setOpenIndexes(prevIndexes =>
            prevIndexes.includes(index)
                ? prevIndexes.filter(i => i !== index)
                : [...prevIndexes, index]
        )
    }


    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getJobs = async () => {
            try {
                const response = await fetch('/api/jobs')
                const data = await response.json()
                setJobs(data)
            } catch (error) {
                console.error(error)
            }
        }
        getJobs()
    }, [])


    return (
        <div className='my-[80px] pt-[32px] xl:pb-[72px] lg:pb-[72px] md:pb-[72px] sm:pb-[40px] pb-[40px] xl:px-[124px] lg:px-[60px] md:px-[60px] sm:px-[20px] px-[20px] flex flex-col xl:gap-[42px] lg:gap-[42px] md:gap-[42px] sm:gap-[32px] gap-[32px]'>
            <div className='pb-[44px] flex items-center gap-[12px]'>
                <p onClick={() => { router.push('/') }} className='font-medium text-[16px] leading-6 text-[#888888] cursor-pointer'>Home</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p onClick={() => { router.push('/careers') }} className='font-medium text-[16px] leading-6 text-[#888888] cursor-pointer'>Careers</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p className='font-medium text-[16px] leading-6 text-[#1E3A76] cursor-pointer'>All Openings</p>
            </div>
            <div className='pb-[38px] flex flex-col xl:gap-[72px] lg:gap-[72px] md:gap-[72px] sm:gap-[32px] gap-[32px] xl:w-[1192px] lg:w-[714px] md:w-[714px]'>
                <p className='font-[300] xl:text-[62px] xl:leading-[50px] lg:text-[62px] lg:leading-[50px] md:text-[62px] md:leading-[50px] sm:text-[28px] sm:leading-[33.41px] text-[28px] leading-[33.41px] text-[#131313] flex justify-center'>All Openings</p>

                <div>
                    {jobs.data?.map((category, index) => (
                        <div
                            key={index}
                            className={`border-b ${index === 0 ? "border-t" : ""
                                } ${openIndexes.includes(index) ? "border-t border-[#06135B]" : "border-[#E7E7E7]"
                                }`}
                        >
                            <button
                                className="flex justify-between items-center w-full xl:py-7 lg:py-7 md:py-7 sm:py-4 py-4 text-left"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="xl:text-[24px] xl:leading-[28.64px] lg:text-[24px] lg:leading-[28.64px] md:text-[24px] md:leading-[28.64px] sm:text-[16px] sm:leading-[19px] text-[16px] leading-[19px] text-[#3D3D3D] font-medium">
                                    {category._id} ({category.jobsCount})
                                </span>
                                {openIndexes.includes(index) ? (
                                    <Image src={minusIcon} alt="close" />
                                ) : (
                                    <Image src={plusIcon} alt="open" />
                                )}
                            </button>
                            {openIndexes.includes(index) && (
                                <div>
                                    <ul className="xl:pl-[100px] lg:pl-[100px] md:pl-[100px] sm:pl-[6px] pl-[6px] border-t border-[#B0B0B0]">
                                        {category.jobs?.map((job, jobIndex) => (
                                            <li onClick={() => router.push(`/job-details/${job._id}`)}
                                                key={jobIndex}
                                                className="border-[#B0B0B0] flex justify-between xl:py-[16px] lg:py-[16px] md:py-[16px] sm:py-[8px] py-[8px] xl:pl-[40px] xl:pr-[32px] lg:pl-[40px] lg:pr-[32px] md:pl-[40px] md:pr-[32px]"
                                            >
                                                <div className="flex flex-col justify-between gap-[2px] cursor-pointer">
                                                    <p className="font-normal xl:text-[20px] xl:leading-[23.87px] lg:text-[18px] lg:leading-[21.48px] md:text-[18px] md:leading-[21.48px] sm:text-[14px] sm:leading-[16.71px] text-[14px] leading-[16.71px] text-[#3D3D3D]">
                                                        {job.jobTitle}
                                                    </p>
                                                    <div className="flex items-center xl:gap-3 lg:gap-3 md:gap-3 sm:gap-1 gap-1">
                                                        <p className="py-1 font-[300] xl:text-[14px] xl:leading-[16.71px] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]">
                                                            {job.location}
                                                        </p>
                                                        <div className="border-l border-[#D1D1D1] py-1 xl:pl-4 lg:pl-4 md:pl-4 sm:pl-1 pl-1 font-[300] xl:text-[14px] xl:leading-[16.71px] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]">
                                                            {job.employmentType}
                                                        </div>
                                                        <div className="border-l border-[#D1D1D1] py-1 xl:pl-4 md:pl-4 sm:pl-1 pl-1 font-[300] xl:text-[14px] xl:leading-[16.71px] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]">
                                                            {job.yearsOfExperience}+ Years of Experience
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center xl:gap-3 lg:gap-3 md:gap-3 sm:gap-1 gap-1 cursor-pointer">
                                                    <div className="xl:w-[24px] xl:h-[24px] lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[20px] h-[20px]">
                                                        <Image
                                                            src={applyIcon}
                                                            alt="apply"
                                                            width={24}
                                                            height={24}
                                                            className="w-[24px] h-[24px]"
                                                        />
                                                    </div>
                                                    <p onClick={() => router.push(`/job-apply/${job._id}`)} className="font-normal xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] leading-[24px] text-[#888888]">
                                                        Apply
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className='xl:py-[60px] xl:px-[40px] lg:py-[60px] lg:px-[40px] md:py-[60px] md:px-[40px] sm:py-[40px] sm:px-[20px] py-[40px] px-[20px] bg-[#FAFAFA] flex items-center xl:justify-between lg:justify-between md:justify-between sm:gap-[40px] gap-[40px] xl:w-[1192px] lg:w-[714px] md:w-[714px] xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col'>
                <div className='flex flex-col xl:gap-[18px] lg:gap-[18px] md:gap-[18px] sm:gap-[12px] gap-[12px]'>
                    <p className='font-medium xl:text-[40px] xl:leading-[48px] lg:text-[40px] lg:leading-[48px] md:text-[40px] md:leading-[48px] sm:text-[20px] sm:leading-[24px] text-[20px] leading-[24px] text-[#131313]'>Didn&apos;t find the role <br />you were looking for? </p>
                    <p className='font-normal xl:text-[18px] xl:leading-[26px] lg:text-[18px] lg:leading-[26px] md:text-[18px] md:leading-[26px] sm:text-[14px] sm:leading-[19px] text-[14px] leading-[19px] text-[#454545]'>No worries! <span className='font-medium'>Send us your application </span> <br />we might just have the perfect spot for you soon!</p>
                </div>
                <div onClick={() => router.push('/direct-apply')} className='xl:w-[139px] lg:w-[139px] md:w-[139px] sm:w-full w-full xl:h-[58px] lg:h-[58px] md:h-[58px] sm:h-[52px] h-[52px] rounded-[4px] flex items-center justify-center gap-2 bg-[#131313] cursor-pointer'>
                    <p className='font-normal text-[16px] leading-[18px] text-[#FFFFFF]'>Apply</p>
                    <Image src={rightArrowIcon} alt='right-arrow' width={24} height={24} />
                </div>
            </div>
        </div>
    )
}

export default DesktopUi