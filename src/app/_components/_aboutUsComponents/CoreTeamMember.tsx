import React from "react";
import Image from "next/image";
import praveen from '@/utilities/images/file.jpg'
import ashwinth from '@/utilities/images/Ashwinth Mohan.jpg'
import shawn from '@/utilities/images/Shawn S.jpg'
import sujata from '@/utilities/images/Sujata Singh.jpg'
import wilson from '@/utilities/images/Wilson George.jpg'
import aby from '@/utilities/images/Aby Abraham.jpg'
import aslam from '@/utilities/images/Aslam KV.jpg'
// Example data for the core team members
const CoreTeamMember = () => {
  const members = [
      {
      name: "Aby Abraham",
      designation: "Frontend Developer",
      imageUrl: aby, 
    },
          {
      name: "Aslam KV",
      designation: "Frontend Developer",
      imageUrl: aslam, 
    },
   {
      name: "Wilson George",
      designation: "Frontend Developer",
      imageUrl: wilson, 
    },
     {
      name: "Shawn S",
      designation: "UX/UI Designer",
      imageUrl: shawn, 
    },
   
   
    {
      name: "Sujata Singh",
      designation: "Backend Developer",
      imageUrl: sujata, 
    },
   
  
     {
      name: "Ashwinth Mohan",
      designation: "Product Manager",
      imageUrl: ashwinth, 
    }
      ,{
      name: "Praveen Rao",
      designation: "Marketing Head",
      imageUrl: praveen, 
    },
  ];

  return (
    <div className="py-12 px-6">
     <h2 className="text-2xl md:text-3xl font-[500] text-start mb-8 text-[#6D6D6D]">
        Core Team Members
      </h2>

      {/* Top row: 4 images */}
      <div className="relative mb-8">
        <div
          style={{ rotate: "-10deg" }}
          className="hidden md:flex absolute inset-0 w-[600px] ml-[40%] top-36 h-[68px] bg-[#F5DEB1] transform"
        />

        <div className="flex flex-wrap justify-center md:justify-between relative z-10 gap-8">
          {members.slice(0, 4).map((member, index) => (
            <div key={index} className="relative flex flex-col items-center max-w-[300px]">
              <Image
                src={member.imageUrl}
                alt={member.name}
                className={` h-fit md:w-70 md:h-70 object-cover max-h-320 ${
                  index % 2 !== 0 ? "md:mt-8" : ""
                }`}
                width={384}
                height={384}
              />
              <div
                className={`absolute -right-8 ${
                  index % 2 !== 0 ? "md:-bottom-8 bottom-0" : "bottom-0"
                } bg-[#FDDF8A] py-2 px-4 mt-2`}
              >
                <div
                  className={`absolute z-1 top-0 -left-[30px] w-0 h-0 border-l-0 border-r-[30px] border-b-[15px] border-transparent border-b-[#F8C96F] rotate-180`}
                ></div>
                <p className="font-semibold text-center">{member.name}</p>
                {/* <p className="text-center">{member.designation}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row: 3 images */}
      <div className="relative md:p-24">
        {/* Background Yellow Stripe */}
        <div className="absolute inset-0 -z-10 h-8 bg-yellow-500 -rotate-45 transform translate-y-[-50%]" />

        <div className="flex flex-wrap justify-center md:justify-between relative z-10 gap-8">
          {members.slice(4, 7).map((member, index) => (
            <div key={index} className="relative flex flex-col items-center max-w-[300px]">
              <Image
                src={member.imageUrl}
                alt={member.name}
                className={`w-64 h-fit md:w-70 md:h-70 object-cover max-h-320 ${
                  index % 2 !== 0 ? "md:mt-8" : ""
                }`}
                width={384}
                height={384}
              />
              <div
                className={`absolute -right-8 ${
                  index % 2 !== 0 ? "md:-bottom-8 bottom-0" : "bottom-0"
                } bg-[#FDDF8A] py-2 px-4 mt-2`}
              >
                <div
                  className={`absolute z-1 top-0 -left-[30px] w-0 h-0 border-l-0 border-r-[30px] border-b-[15px] border-transparent border-b-[#F8C96F] rotate-180`}
                ></div>
                <p className="font-semibold text-center">{member.name}</p>
                {/* <p className="text-center">{member.designation}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeamMember;
