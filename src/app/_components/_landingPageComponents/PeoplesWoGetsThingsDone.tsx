'use client'
import React from "react";

import { Button } from "@/components/ui/button";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Carousel from "./Carousel";

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
//      <section className="max-w-8xl flex flex-col sm:flex-col lg:flex-row mx-auto px-4 sm:px-8 md:px-16 lg:px-24 gap-8">
      
    
//      <div className="max-w-screen-2xl lg:w-1/2 ">


  
//      <Card className="border-none shadow-none bg-gray-100">
//        <div className="space-y-8">
//  <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-4 sm:pt-6 md:pt-8 lg:pt-12 space-y-4">
//            <h2 className="text-2xl font-medium tracking-tight">
//              Our team is the core of Squadra Media.
//            </h2>
//            <p className="text-muted-foreground">
//              Dedicated, creative, and united, we drive every Squadra Media <br /> project to success.
//            </p>
//            <div className="mt-4" >

//            <Link href='/about-us'>
//             <Button size={"lg"} className=" p-6" variant="outline">
//              Meet our team
//            </Button>
//            </Link>
//            </div>
//          </div>
//          <div className="space-y-2">
//            <div className="overflow-hidden rounded-b-lg">
//              <Image
//                src={"https:squadra-media.s3.ap-south-1.amazonaws.com/DSC_8353_2_a5ff2d3f98.jpg"}
//                alt="Team members collaborating on tablets"
//                className="object-cover w-full h-full rounded-b-lg"
//                width={400}
//                height={300}   sizes="(max-width: 768px) 100vw, 288px"
//                priority
//              />
//            </div>
         
//          </div>
//        </div>
//      </Card>
 


//      </div>
//      <div className="flex flex-col gap-6">

   
//        <div className="max-w-2xl mx-auto max-h-fit ">
//        <div className="bg-gray-100 rounded-3xl shadow-sm overflow-hidden">
//          <div className="flex flex-col md:flex-row items-center gap-8">
//  <div className="flex-1 space-y-4 px-2 sm:px-4 md:px-6 lg:px-8">
//              <blockquote className="text-md text-gray-600 p-4 md:p-0">
//                &ldquo;Working at Squadra Media has been rewarding, with opportunities to grow, collaborate, and work on innovative IT and media projects&rdquo;
//              </blockquote>
//              <div className="space-y-1 px-2 md:px-0 text-right">
//                <h3 className="font-medium text-xl">Sparsha Shetty</h3>
//                <p className="text-gray-500">Senior Manager</p>
//              </div>
//            </div>
//            <div className="w-full md:w-72 h-72 relative rounded-2xl overflow-hidden">
//              <Image
//                src={"https:squadra-media.s3.ap-south-1.amazonaws.com/2_ca6605677c.jpg"}
//                alt="Testimonial"
//                className="object-cover"
//                fill
//                sizes="(max-width: 768px) 100vw, 288px"
//              />
//            </div>
//          </div>
//        </div> 
      
//        </div>

   
//      </div>
    
//      </section>
<>
  <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-[600] text-center mb-8 mt-4 md:mt-0 md:mb-12">
            The <strong className="text-[#FBAE17] font-[600]">People</strong> Who
            Get Things Done
          </h1>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
  <div className="flex flex-col lg:flex-row gap-3">
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
        {/* Left Column */}
        <div className="flex flex-col space-y-2 h-full">
          {/* Top stat */}
          <div className="bg-white rounded-lg p-6 shadow-sm border text-center flex-grow flex flex-col justify-center">
            <div ref={ref} className="text-4xl font-bold text-navy-900">{inView ?<CountUp end={4} duration={3} />: 40} +</div>
            <div className="text-gray-600 mt-1">Years Of Industry Experience</div>
          </div>
          
           {/* Bottom two stats */}
           <div className="grid grid-cols-2 gap-4">
             <div className="bg-[#000B42] rounded-lg p-6 text-white text-center">
               <div ref={ref} className="text-3xl font-bold">{inView ?<CountUp end={70} duration={3} />:40}+</div>
               <div className="text-sm mt-1">Happy Clients</div>
             </div>
             <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
               <div ref={ref} className="text-3xl font-bold text-navy-900">{inView? <CountUp end={150} duration={3} />:150}+</div>
               <div className="text-sm text-gray-600 mt-1">Campaigns</div>
             </div>
           </div>
         </div>

         {/* Right Column */}
         <div className="flex justify-center items-stretch h-full">
           <div className="bg-[#000B42] rounded-lg p-8 text-white text-center w-full flex flex-col justify-center">
             <div ref={ref} className="text-5xl font-bold">{inView ?<CountUp end={100} duration={3} />:100}+</div>
             <div className="mt-2">Experts</div>
           </div>
         </div>
       </div>
     </div>
  </div>

</div>
</div>
</>
  )
}

export default PeoplesWoGetsThingsDone

