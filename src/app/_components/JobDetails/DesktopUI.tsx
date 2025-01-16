'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import plusIcon from '@/utilities/icons/plus-icon.svg'
import minusIcon from '@/utilities/icons/minus-icon.svg'
import applyIcon from '@/utilities/icons/apply-icon.svg'
import shareFileIcon from '@/utilities/icons/share-file-icon.svg'
import linkedInIcon from '@/utilities/icons/linkedin-icon.svg'
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast'


interface JobListingProps {
    sections: { title: string; content: string }[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jobDetails: any
}

function DesktopUi({ sections,jobDetails }: JobListingProps) {

    const router = useRouter()
  

    const [openIndexes, setOpenIndexes] = useState<number[]>([])

    const toggleAccordion = (index: number) => {
        setOpenIndexes(prevIndexes =>
            prevIndexes.includes(index)
                ? prevIndexes.filter(i => i !== index)
                : [...prevIndexes, index]
        )
    }

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: jobDetails.jobTitle,
                    text: jobDetails?.jobDescription,
                    url: window.location.href, // You can use a specific URL if needed
                });
                console.log('Content shared successfully!');
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            alert('Sharing is not supported in your browser.');
        }
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href); // Copy current URL to clipboard
            toast.success('Link copied to clipboard!');
        } catch (error) {
            console.error('Failed to copy link:', error);
            alert('Failed to copy link. Please try again.');
        }
    };

    return (
        <div className='my-[80px]'>
            <div className='pt-[32px] pb-[44px] lg:px-[124px] md:px-[60px] sm:px-[20px] px-[20px] flex items-center lg:gap-3 md:gap-3 sm:gap-2 gap-2'>
                <p onClick={() => { router.push('/') }} className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#888888] cursor-pointer'>Home</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p onClick={() => { router.push('/careers') }} className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#888888] cursor-pointer'>Careers</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#888888] cursor-pointer'>{jobDetails?.jobCategory}</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#1E3A76] cursor-pointer'>{jobDetails?.jobTitle}</p>
            </div>
            <div className='lg:pt-[60px] md:pt-[60px] sm:pt-[40px] pt-[40px] pb-[40px] lg:ml-[124px] md:ml-[60px] sm:ml-[20px] ml-[20px] lg:w-[60%] md:w-[714px]'>
                <div className='flex flex-col lg:gap-[40px] md:gap-[40px] sm:gap-[16px] gap-[16px]'>
                    <div className='flex flex-col lg:gap-[12px] md:gap-[12px] sm:gap-[4px] gap-[4px]'>
                        <p className='font-medium lg:text-[40px] lg:leading-[47.73px] md:text-[40px] md:leading-[47.73px] sm:text-[20px] sm:leading-[23.87px] text-[20px] leading-[23.87px] text-[#3D3D3D]'>{jobDetails?.jobTitle}</p>
                        <div className='flex items-center lg:gap-6 md:gap-6 sm:gap-1 gap-1'>
                            <p className='font-normal lg:text-[24px] lg:leading-[28.64px] md:text-[24px] md:leading-[28.64px] sm:text-[12px] sm:leading-[14.32pxpx] text-[#4F4F4F]'>{jobDetails?.jobCategory}</p>
                            <div className='w-[1px] h-[21px] bg-[#B0B0B0]'></div>
                            <p className='font-normal lg:text-[24px] lg:leading-[28.64px] md:text-[24px] md:leading-[28.64px] sm:text-[12px] sm:leading-[14.32pxpx] text-[#4F4F4F]'>{jobDetails?.employmentType}</p>
                            <div className='w-[1px] h-[21px] bg-[#B0B0B0]'></div>
                            <p className='font-normal lg:text-[24px] lg:leading-[28.64px] md:text-[24px] md:leading-[28.64px] sm:text-[12px] sm:leading-[14.32pxpx] text-[#4F4F4F]'>{jobDetails?.yearsOfExperience}+ Years Of Experience</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='hidden sm:block'>
                        <div onClick={() => { router.push(`/job-apply/${jobDetails?._id}`) }} className='flex items-center w-fit h-[44px] rounded-[4px] px-[24px] bg-[#06135B] font-medium text-[16px] leading-[19.09px] text-[#FFFFFF] cursor-pointer'>Apply for this job</div>
                        </div>
                    <div className='flex items-center gap-3 p-3'>
                        <p onClick={handleShare} className='font-medium text-[16px] leading-[19.09px] text-[#3D3D3D] cursor-pointer'>Share</p>
                        <div className='flex items-center gap-4'>
                            <div className='cursor-pointer' onClick={handleCopyLink}>
                            <Image src={shareFileIcon} alt='share' width={24} height={24} />

                            </div>
                            <div>

                            <Image src={linkedInIcon} alt='share' width={24} height={24} />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-10'>
                <div className="lg:w-[60%] md:w-[714px] sm:w-full w-full lg:ml-[124px] md:ml-[60px] sm:ml-[20px] ml-[20px] lg:mr-0 md:mr-0 sm:mr-[20px] mr-[20px]">
                    {sections?.map((item, index) => (
                        <div key={index} className={`border-b border-[#E7E7E7] ${index === 0 ? "border-t" : ""}`}>
                            <button
                                className="flex justify-between items-center w-full lg:py-7 md:py-7 sm:py-4 py-4 text-left"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="lg:text-[24px] lg:leading-[28.64px] md:text-[24px] md:leading-[28.64px] sm:text-[16px] sm:leading-[19px] text-[16px] leading-[19px] text-[#3D3D3D] font-medium">{item.title}</span>
                                {openIndexes.includes(index) ? (
                                    <Image src={minusIcon} alt='close' />
                                ) : (
                                    <Image src={plusIcon} alt='open' />
                                )}
                            </button>
                            {openIndexes.includes(index) && (
                                <div className="pb-6 pt-1 pr-10 font-normal lg:text-[18px] lg:leading-7 md:text-[18px] md:leading-7 sm:text-[14px] sm:leading-[21px] text-[#4F4F4F]">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className='px-[20px] w-full mt-[48px] block md:hidden'>
            <div className='flex items-center justify-center w-full h-[44px] rounded-[4px] px-[24px] bg-[#06135B] font-medium text-[16px] leading-[19.09px] text-[#FFFFFF] cursor-pointer'>Apply for this job</div>
            </div>
        </div>
    )
}

export default DesktopUi