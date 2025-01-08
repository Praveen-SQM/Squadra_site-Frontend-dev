'use client'
import Image from 'next/image'
import React, {  useState } from 'react'
import careerImage from '@/utilities/images/career-image.png'
import searchIcon from '@/utilities/icons/search-icon.svg'
import squadraImage from '@/utilities/images/squadra-image.png'
import rightArrowIcon from '@/utilities/icons/right-arrow.svg'
import plusIcon from '@/utilities/icons/plus-icon.svg'
import minusIcon from '@/utilities/icons/minus-icon.svg'
import applyIcon from '@/utilities/icons/apply-icon.svg'
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

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black/50" /> */}

                {/* Content */}
                <div className='flex flex-col gap-[150px] absolute inset-0 mt-[390px] '>
                    <div className="flex flex-col justify-center items-center gap-[56px]">
                        <div className='flex flex-col gap-3'>
                            <p className='font-[265] text-[80px] leading-[95.47px] text-[#FFFFFF] text-center'>Step into your future with us.</p>
                            <div className='py-[10px]'>
                                <p className='font-normal text-[20px] leading-7 text-[#FFFFFF] text-center'>We aim to bring positivity to every step we take. If you share that vision,<br/> Squadra Media is the place for you</p>
                            </div>
                        </div>

                        <div onClick={() => router.push('/openings')} className='w-[200px] h-[62px] rounded-[4px] border-[0.5px] border-[#FFFFFF] bg-[#FBAE17] flex items-center justify-center gap-2 cursor-pointer'>
                            <p className='font-medium text-[18px] leading-[18px] text-[#FFFFFF]'>All openings</p>
                            <Image src={rightArrowIcon} alt='Openings'/>
                        </div>
                    </div>
                </div>


            </div>

            {/* Current Opening */}
            <div className='w-full flex flex-col justify-center items-center'>
            <div className='flex flex-col py-[72px] px-[124px] gap-[42px] w-[1192px]'>
                <div className='flex flex-col gap-[72px] justify-center'>
                    <p className='font-[300] text-[62px] leading-[50px] text-[#131313] text-center'>Current openings</p>
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

                <div className='w-full flex justify-end'>
                    <div onClick={() => router.push('/openings')} className='w-[194px] h-[58px] flex justify-center items-center rounded-[4px] gap-2 bg-[#131313] cursor-pointer'>
                        <p className='font-normal text-[16px] leading-[18px] text-[#FFFFFF]'>See all openings</p>
                        <Image src={rightArrowIcon} alt='Openings' width={24} height={24}/>
                    </div>
                </div>
            </div>
            </div>

            {/* Values Section */}
            <div className="bg-[#FBAE17] flex flex-col justify-center py-[97.5px]">
                <div className='flex gap-[167.5px] justify-center'>
                    <div className='flex flex-col gap-[57px]'>
                        <div className='flex flex-col gap-6'>
                            <h1 className="font-normal text-[60px] leading-[81px] text-[#FFFFFF]">The Values<br />We Live By</h1>
                            <p className="font-normal text-[18px] leading-7 text-[#FFFFFF]">
                                We prioritize putting our values at the forefront, in<br />
                                everything we do and everywhere we go.
                            </p>
                        </div>
                        <Image src={squadraImage} alt='squadra Image' />
                    </div>

                    <div className='flex flex-col gap-[60px]'>
                        <div className='flex gap-[33px]'>
                            <div className='w-[0.75px] h-[216.13px] bg-[#FFFFFF]'></div>
                            <div className='flex flex-col'>
                                <p className='font-normal text-[18px] leading-[21.6px] text-[#FFFFFF] mb-[32.09px]'>01</p>
                                <p className='font-normal text-[60px] leading-[60px] text-[#FFFFFF] mb-[17.25px]'>Growth</p>
                                <p className='font-normal text-[13.25px] leading-[21.6px] text-[#FFFFFF]'>Our vision is to grow together as an organisation <br/>while working towards achieving individual and <br/>professional goals.</p>
                            </div>
                        </div>

                        <div className='flex gap-[33px]'>
                            <div className='w-[0.75px] h-[216.13px] bg-[#FFFFFF]'></div>
                            <div className='flex flex-col'>
                                <p className='font-normal text-[18px] leading-[21.6px] text-[#FFFFFF] mb-[32.09px]'>02</p>
                                <p className='font-normal text-[60px] leading-[60px] text-[#FFFFFF] mb-[17.25px]'>People</p>
                                <p className='font-normal text-[13.25px] leading-[21.6px] text-[#FFFFFF]'>Our people are the driving force behind all our <br/>achievements, and we make it a point to give it  <br/>back to them.</p>
                            </div>
                        </div>

                        <div className='flex gap-[33px]'>
                            <div className='w-[0.75px] h-[216.13px] bg-[#FFFFFF]'></div>
                            <div className='flex flex-col'>
                                <p className='font-normal text-[18px] leading-[21.6px] text-[#FFFFFF] mb-[32.09px]'>03</p>
                                <p className='font-normal text-[60px] leading-[60px] text-[#FFFFFF] mb-[17.25px]'>Balance</p>
                                <p className='font-normal text-[13.25px] leading-[21.6px] text-[#FFFFFF]'>We value life and its intricate balance, hence <br/>ensuring all our people are well balanced in both <br/>their professional and personal roles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopUi