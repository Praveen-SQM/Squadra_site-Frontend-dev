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
import growthIcon from '@/utilities/icons/growth-icon.svg'
import remunerationIcon from '@/utilities/icons/remuneration-icon.svg'
import workplaceIcon from '@/utilities/icons/workplace-icon.svg'
import workEnvironmentIcon from '@/utilities/icons/work-environment-icon.svg'
import TalentIcon from '@/utilities/icons/talent-icon.svg'
import WorkBalanceIcon from '@/utilities/icons/work-balance.svg'
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

    const employeeBenefits=[
        {
            icon:growthIcon,
            title:"01. Growth Opportunities",
            description:"At Squadra Media, we believe learning never stops. We’re dedicated to fostering growth and helping employees achieve their best."
        },
        {
            icon:remunerationIcon,
            title:"02. Competitive Remuneration",
            description:"We value our employee's contributions and ensure they’re rewarded for their dedication and growth."
        },
        {
            icon:workplaceIcon,
            title:"03. Eco-friendly Workplace",
            description:"Surrounded by nature, our workspace promotes mental well-being while reducing our carbon footprint."
        },
        {
            icon:workEnvironmentIcon,
            title:"04. An Instagram-worthy Fun Work Environment",
            description:"Our beautifully designed office is a productivity booster and an Instagram-worthy spot every day."
        },
        {
            icon:TalentIcon,
            title:"05.Talent Nurturing Community",
            description:"We help employees achieve career goals while encouraging them to explore hidden talents and make a difference."
        },
        {
            icon:WorkBalanceIcon,
            title:"06. Work-Life Balance",
            description:"We promote a healthy balance between work and personal life to enhance happiness, well-being, and productivity."
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
                <div className='flex flex-col gap-[150px] absolute inset-0 lg:mt-[390px] md:mt-[504px]'>
                    <div className="flex flex-col justify-center items-center lg:gap-[56px] md:gap-[42px]">
                        <div className='flex flex-col lg:gap-1 md:gap-2'>
                            <p className='font-[265] lg:text-[80px] lg:leading-[95.47px] md:text-[56px] md:leading-[66.83px] text-[#FFFFFF] text-center'>Step into your future with us.</p>
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
            <div className='w-full flex flex-col items-center'>
            <div className='flex flex-col py-[72px] lg:px-[124px] md:px-[0px] gap-[42px] lg:w-[1192px] md:w-[714px]'>
                <div className='flex flex-col gap-[72px] justify-center'>
                    <p className='font-[300] lg:text-[62px] md:text-[48px] leading-[50px] text-[#131313] text-center'>Current openings</p>
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
                                            <p className='font-normal lg:text-[20px] lg:leading-[23.87px] md:text-[18px] md:leading-[21.48px] text-[#3D3D3D]'>StoryBoard Lead</p>
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

            {/* Employee Benefits */}
            <div className='w-full bg-[#FAFAFA] flex flex-col py-[72px] lg:px-[124px] md:px-[60px] items-center'>
                <div className='flex flex-col lg:gap-[80px] md:gap-[60px] lg:w-[1192px] md:w-[714px]'>
                   <p className='font-[300] lg:text-[60px] lg:leading-[71.6px] md:text-[48px] md:leading-[57.28px] text-center text-[#131313]'>We prioritise our employee's <br/> <span className='text-[#FBAE17]'> well-being.</span></p>
                   <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                    {employeeBenefits?.map((benefit, index) => (
                        <div key={index} className={`lg:h-[460px] lg:w-[397.33px] md:h-[309px] md:w-[357px] flex flex-col items-center lg:pt-[72px] lg:pb-[64px] lg:px-[44px] lg:gap-[40px] md:pt-[40px] md:pb-[40px] md:px-[32px] md:gap-[32px] ${index%2===0?'bg-[#FFFFFF]':'bg-[#FAFAFA]'}`}>
                            <Image src={benefit?.icon} alt={benefit.title} className='lg:w-[100px] lg:h-[100px] md:w-[64px] md:h-[64px]'/>
                            <div className='flex flex-col gap-5'>
                                <p className='font-[600] lg:text-[20px] lg:leading-[23.87px] md:text-[18px] md:leading-[21.48px] text-[#131313]'>{benefit?.title}</p>
                                <p className='font-normal lg:text-[18px] lg:leading-7 md:text-[16px] md:leading-[23px] text-[#6D6D6D]'>{benefit?.description}</p>
                            </div>
                        </div>
                    ))}
                   </div>
                </div>
            </div>

            {/* Life at squadra */}
            <div className='w-full bg-[#FFFFFF] py-[72px] lg:px-[124px] md:px-[60px] flex flex-col gap-[44px] items-center'>
                <div className='flex flex-col gap-[44px] lg:w-[1192px] md:w-[714px]'>
                    <div className='flex flex-col gap-[12px]'>
                        <p className='font-[300] lg:text-[62px] lg:leading-[72px] md:text-[48px] md:leading-[57.28px] text-center text-[#131313]'>Life at <span className='text-[#FBAE17]'>Squadra Media</span></p>
                        <p className='font-normal lg:text-[18px] lg:leading-[24px] md:text-[16px] md:leading-[21px] text-center text-[#6D6D6D]'>A space to unlock your true potential, chase your dreams, and embrace your <br/> passion all while enjoying every moment with fun and laughter!</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-3'>
                                <div className='flex flex-col gap-3'>
                                    <div className='rounded-[6px] lg:w-[420px] h-[194px] md:w-[282px] bg-gray-400'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/5555.webp" alt='Life at Squadra' width={420} height={194} className="lg:w-[420px] lg:h-[194px] md:w-[282px] md:h-[194px] object-cover"/>
                                    </div>
                                    <div className='rounded-[6px] lg:w-[420px] h-[194px] md:w-[282px] bg-gray-400'></div>
                                </div>
                                <div className='rounded-[6px] lg:w-[760px] md:w-[420px] h-[400px]'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/444.webp" alt='Life at Squadra' width={760} height={400} className="lg:w-[760px] md:w-[420px] h-[400px] object-cover"/>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='rounded-[6px] lg:w-[760px] md:w-[420px] h-[400px] bg-gray-400'>
                                <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/2.1.webp" alt='Life at Squadra' width={760} height={400} className="lg:w-[760px] md:w-[420px] h-[400px] object-cover"/>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='rounded-[6px] lg:w-[420px] h-[194px] md:w-[282px] bg-gray-400'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/333.jpg" alt='Life at Squadra' width={420} height={194} className="lg:w-[420px] h-[194px] md:w-[282px] object-cover"/>
                                    </div>
                                    <div className='rounded-[6px] lg:w-[420px] h-[194px] md:w-[282px] bg-gray-400'></div>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-[6px] lg:w-[1192px] lg:h-[440px] md:w-[714px] md:h-[400px] bg-gray-400'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopUi