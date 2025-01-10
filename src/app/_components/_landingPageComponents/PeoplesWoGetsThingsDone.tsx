'use client'
import React from "react";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Carousel from "./Carousel";
import teamMeetIcon from "@/utilities/icons/team-meet.svg";
import teamImage from "@/utilities/images/team-image.png"

//    const PeoplesWhoGetThingsDone = () => {
//      return (
//        <div className="min-h-screen flex flex-col justify-center max-w-screen-2xl px-4 py-12 mx-auto">
//  <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-[600] text-center mb-12">
//            The <strong className="text-[#FBAE17] font-[600]">People</strong> Who
//            Get Things Done
//          </h1>

//          <div className="flex flex-col lg:flex-row gap-8">
//            <div className="flex flex-col items-center bg-[#F7F7F7] rounded-[20px] w-full">
//              <div className="p-10">
//                <h2 className="text-xl font-semibold">
//                  Our team is the heartbeat of Squadra Media.
//                </h2>
//                <p className="text-gray-600 mt-4">
//                  Dedicated, creative, and united, we drive every Squadra Media
//                  project to success.
//                </p>
//                <div className="mt-6">
//                  <button className="bg-[#FFFFFF] border border-[#DEDEDE] py-2 px-6 rounded-lg text-gray-700 hover:bg-gray-100">
//                    Meet Our Team
//                  </button>
//                </div>
//              </div>
//              <div className="flex justify-center w-full">
//                <Image
//                  src={image}
//                  alt="Team"
//                  width={860}
//                  height={480}
//                  className="object-cover w-full rounded-b-lg"
//                />
//              </div>
//            </div>

//            <div className="flex flex-col w-full gap-8">
//              <div className="flex flex-col lg:flex-row items-center max-w-[540px] justify-between bg-[#F7F7F7] rounded-[20px] relative">
//                <div className="w-full max-w-[368px] p-10 py-16">
//                  <p className="text-lg text-gray-600">
//                    “Working at Squadra Media has been rewarding, with opportunities
//                    to grow, collaborate, and work on innovative IT and media
//                    projects”
//                  </p>
//                  <p className="text-xl text-end font-semibold mt-4">
//                    Sparsha Shetty
//                  </p>
//                  <p className="text-gray-500 text-end">Senior Manager</p>
//                </div>
//                <div className="w-full h-[322px] md:w-[400px] p-8 md:absolute -right-52">
//                  <Image
//                    src={image}
//                    alt="Sparsha Shetty"
//                    width={400} 
//                    height={322}
//                    className="object-cover h-full w-full rounded-[10px]"
//                  />
//                </div>
//              </div>

//              <div className="rounded-lg h-full w-full">
//                <div className="flex justify-between gap-4 h-full w-full">
//                  <div className="lg:w-2/3  space-y-4 flex flex-col w-full h-full">
//                    <div className="bg-[#F8F8F8] border border-[#E7E7E7] text-black md:p-[24px] md:py-[24px] rounded-lg h-full flex items-center justify-center">
//                      <h4 className="md:text-xl font-semibold text-center">
//                        <strong className="text-[64px] font-[700]">4+</strong> <br />
//                        Years Of Industry Experience
//                      </h4>
//                    </div>
//                    <div className="flex space-x-4 w-full">
//                      <div className="bg-[#06135B] text-white md:p-[24px] p-2 pt-6 rounded-lg w-full">
//                        <h4 className="md:text-xl font-semibold text-center">
//                          <strong className="text-[32px] font-[700]">40+</strong>{" "}
//                          <br /> Consultants
//                        </h4>
//                      </div>
//                      <div className="bg-[#F8F8F8] border border-[#E7E7E7] text-black md:p-[24px] p-2 pt-6 rounded-lg w-full">
//                        <h4 className="text-xl font-semibold text-center">
//                          <strong className="text-[32px] font-[700]">150+</strong>{" "}
//                          Freelancers
//                        </h4>
//                      </div>
//                    </div>
//                  </div>

//                  <div className="md:w-1/3 w-full md:my-0 bg-[#06135B] text-white md:p-[24px] p-6 h-[235px] max-w-[219px] md:h-full rounded-xl flex flex-col items-center justify-center">
//                    <h3 className="md:text-[64px] text-[32px] font-semibold">100+</h3>
//                    <p className="text-center font-[400] text-[20px]">Experts</p>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      );
//    };

//  export default PeoplesWhoGetThingsDone;



function PeoplesWoGetsThingsDone() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 flex items-center justify-between mb-8 mt-4 md:mt-0 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-[600] lg:max-w-[570px]">
          Empowering <strong className="text-[#FBAE17] font-[600]">Brands</strong> with Media, Tech, and Animation.
        </h1>
        <div className="hidden lg:block">
          <div className="h-[56px] w-[173px] rounded-[42px] border py-4 px-5 gap-[4px] flex justify-center items-center bg-[#FFFFFF] border-[#E7E7E7] cursor-pointer">
            <p className="font-semibold text-[16px] leading-[19.09px] text-[#131313]">Meet our team</p>
            <Image src={teamMeetIcon} alt="arrow" width={12} height={10} />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
        {/* <div className="flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <Carousel />
          </div>
          <div className=" h-fit  space-y-4">
            <div className="space-y-3 p-5 bg-gray-100 rounded-lg">
              <h1 className="font-medium text-[22px]">Our team is the core of Squadra Media.</h1>
              <p className="text-gray-500 text-[1rem]">Dedicated, creative, and united, we drive every Squadra Media <br className="hidden md:inline" /> project to success.</p>
              <Link href={'/about-us'}>
                <Button variant='outline' className="p-5 mt-5">Meet Our Team</Button>
              </Link>
            </div>
            <div className="w-full">
              <div className="container mx-auto grid md:grid-cols-2 gap-2 h-full">
                <div className="flex flex-col space-y-2 h-full">
                  <div className="bg-white rounded-lg p-6 shadow-sm border text-center flex-grow flex flex-col justify-center">
                    <div ref={ref} className="text-4xl font-bold text-navy-900">{inView ? <CountUp end={4} duration={3} /> : 40} +</div>
                    <div className="text-gray-600 mt-1">Years Of Industry Experience</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#000B42] rounded-lg p-6 text-white text-center">
                      <div ref={ref} className="text-3xl font-bold">{inView ? <CountUp end={70} duration={3} /> : 40}+</div>
                      <div className="text-sm mt-1">Happy Clients</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                      <div ref={ref} className="text-3xl font-bold text-navy-900">{inView ? <CountUp end={150} duration={3} /> : 150}+</div>
                      <div className="text-sm text-gray-600 mt-1">Campaigns</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-stretch h-full">
                  <div className="bg-[#000B42] rounded-lg p-8 text-white text-center w-full flex flex-col justify-center">
                    <div ref={ref} className="text-5xl font-bold">{inView ? <CountUp end={100} duration={3} /> : 100}+</div>
                    <div className="mt-2">Experts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex items-center gap-7 lg:flex-row md:flex-col sm:flex-col flex-col">
          <div className="lg:w-[452px] lg:h-[518px] md:w-[714px] md:h-[818px] sm:w-[335px] sm:h-[383.92px] w-[335px] h-[383.92px]">
            <Carousel />
          </div>

          <div className="lg:w-fit md:w-[714px] sm:w-[335px] w-[335px] flex flex-col gap-6">
            <div className="w-full lg:h-[363px] md:h-[363px] rounded-[24px]">
              <Image src={teamImage} width={711} height={363} alt="team image" className="w-full h-[363px] rounded-[24px] object-cover" />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center justify-center gap-6">
                <div className="w-[221px] h-[130px] flex flex-col justify-center items-center rounded-[24px] border border-[#E7E7E7] bg-[#F8F8F8] p-6">
                  <p ref={ref} className="font-medium text-[52px] leading-[62.05px] text-[#FBAE17]">{inView ? <CountUp end={4} duration={3} /> : 40}+</p>
                  <p className="font-normal text-[18px] leading-[32px] text-[#6D6D6D]">Years of Experience</p>
                </div>
                <div className="w-[221px] h-[130px] flex flex-col justify-center items-center rounded-[24px] border border-[#E7E7E7] bg-[#F8F8F8] p-6">
                  <p ref={ref} className="font-medium text-[52px] leading-[62.05px] text-[#FBAE17]">{inView ? <CountUp end={150} duration={3} /> : 150}+</p>
                  <p className="font-normal text-[18px] leading-[32px] text-[#6D6D6D]">Campaigns</p>
                </div>
                <div className="w-[221px] h-[130px] flex flex-col justify-center items-center rounded-[24px] border border-[#E7E7E7] bg-[#F8F8F8] p-6">
                  <p ref={ref} className="font-medium text-[52px] leading-[62.05px] text-[#FBAE17]">{inView ? <CountUp end={100} duration={3} /> : 100}+</p>
                  <p className="font-normal text-[18px] leading-[32px] text-[#6D6D6D]">Experts</p>
                </div>
              </div>
            </div>

            <div className="block md:hidden">
              <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center gap-3">
                <div className="w-[162px] h-[64px] flex flex-col justify-center items-center rounded-[11px] border border-[#E7E7E7] bg-[#F8F8F8] p-[11.26px]">
                  <p ref={ref} className="font-medium text-[24px] leading-[28.64px] text-[#FBAE17]">{inView ? <CountUp end={4} duration={3} /> : 40}+</p>
                  <p className="font-normal text-[13px] leading-[15px] text-[#6D6D6D]">Years of Experience</p>
                </div>
                <div className="w-[162px] h-[64px] flex flex-col justify-center items-center rounded-[11px] border border-[#E7E7E7] bg-[#F8F8F8] p-[11.26px]">
                  <p ref={ref} className="font-medium text-[24px] leading-[28.64px] text-[#FBAE17]">{inView ? <CountUp end={150} duration={3} /> : 150}+</p>
                  <p className="font-normal text-[13px] leading-[15px] text-[#6D6D6D]">Campaigns</p>
                </div>
              </div>
              <div className="w-[162px] h-[64px] flex flex-col justify-center items-center rounded-[11px] border border-[#E7E7E7] bg-[#F8F8F8] p-[11.26px]">
                <p ref={ref} className="font-medium text-[24px] leading-[28.64px] text-[#FBAE17]">{inView ? <CountUp end={100} duration={3} /> : 100}+</p>
                <p className="font-normal text-[13px] leading-[15px] text-[#6D6D6D]">Experts</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default PeoplesWoGetsThingsDone

