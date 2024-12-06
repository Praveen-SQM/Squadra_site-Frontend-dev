import React from "react";
import image from "../../../utilities/icons/contatc-us.svg";
import Image from "next/image";

  const PeoplesWhoGetThingsDone = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center max-w-screen-2xl px-4 py-12 mx-auto">
<h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-[600] text-center mb-12">
          The <strong className="text-[#FBAE17] font-[600]">People</strong> Who
          Get Things Done
        </h1>
  
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col items-center bg-[#F7F7F7] rounded-[20px] w-full">
            <div className="p-10">
              <h2 className="text-xl font-semibold">
                Our team is the heartbeat of Squadra Media.
              </h2>
              <p className="text-gray-600 mt-4">
                Dedicated, creative, and united, we drive every Squadra Media
                project to success.
              </p>
              <div className="mt-6">
                <button className="bg-[#FFFFFF] border border-[#DEDEDE] py-2 px-6 rounded-lg text-gray-700 hover:bg-gray-100">
                  Meet Our Team
                </button>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <Image
                src={image}
                alt="Team"
                width={860}
                height={480}
                className="object-cover w-full rounded-b-lg"
              />
            </div>
          </div>
  
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col lg:flex-row items-center max-w-[540px] justify-between bg-[#F7F7F7] rounded-[20px] relative">
              <div className="w-full max-w-[368px] p-10 py-16">
                <p className="text-lg text-gray-600">
                  “Working at Squadra Media has been rewarding, with opportunities
                  to grow, collaborate, and work on innovative IT and media
                  projects”
                </p>
                <p className="text-xl text-end font-semibold mt-4">
                  Sparsha Shetty
                </p>
                <p className="text-gray-500 text-end">Senior Manager</p>
              </div>
              <div className="w-full h-[322px] md:w-[400px] p-8 md:absolute -right-52">
                <Image
                  src={image}
                  alt="Sparsha Shetty"
                  width={400} 
                  height={322}
                  className="object-cover h-full w-full rounded-[10px]"
                />
              </div>
            </div>
  
            <div className="rounded-lg h-full w-full">
              <div className="flex justify-between gap-4 h-full w-full">
                <div className="lg:w-2/3  space-y-4 flex flex-col w-full h-full">
                  <div className="bg-[#F8F8F8] border border-[#E7E7E7] text-black md:p-[24px] md:py-[24px] rounded-lg h-full flex items-center justify-center">
                    <h4 className="md:text-xl font-semibold text-center">
                      <strong className="text-[64px] font-[700]">4+</strong> <br />
                      Years Of Industry Experience
                    </h4>
                  </div>
                  <div className="flex space-x-4 w-full">
                    <div className="bg-[#06135B] text-white md:p-[24px] p-2 pt-6 rounded-lg w-full">
                      <h4 className="md:text-xl font-semibold text-center">
                        <strong className="text-[32px] font-[700]">40+</strong>{" "}
                        <br /> Consultants
                      </h4>
                    </div>
                    <div className="bg-[#F8F8F8] border border-[#E7E7E7] text-black md:p-[24px] p-2 pt-6 rounded-lg w-full">
                      <h4 className="text-xl font-semibold text-center">
                        <strong className="text-[32px] font-[700]">150+</strong>{" "}
                        Freelancers
                      </h4>
                    </div>
                  </div>
                </div>
  
                <div className="md:w-1/3 w-full md:my-0 bg-[#06135B] text-white md:p-[24px] p-6 h-[235px] max-w-[219px] md:h-full rounded-xl flex flex-col items-center justify-center">
                  <h3 className="md:text-[64px] text-[32px] font-semibold">100+</h3>
                  <p className="text-center font-[400] text-[20px]">Experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PeoplesWhoGetThingsDone;
