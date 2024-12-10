import React from "react";
import Image from "next/image";

// Example data for the core team members
const CoreTeamMember = () => {
  const members = [
      {
      name: "Aby Abraham",
      designation: "Storyboard Lead",
      imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/Aby+Abraham.jpg", 
    },
          {
      name: "Aslam KV",
      designation: "Illustration Lead",
      imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/Aslam+KV.jpg", 
    },
   {
      name: "Wilson George",
      designation: "Animation Lead",
      imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/Wilson+George.jpg", 
    },
     {
      name: "Shawn S",
      designation: "Campaign Strategist",
      imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/Shawn+S.jpg", 
    },
   
   
    {
      name: "Sujata Singh",
      designation: "Account Lead",
      imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/Sujata+Singh.jpg", 
    },
   
      {
      name: "Praveen Rao",
      designation: "Product Manager",
      imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/Praveen.jpg", 
    },
     {
      name: "Ashwinth Mohan",
      designation: "Photography Lead",
      imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/Ashwinth+Mohan.jpg", 
    }
  
  ];

  return (
    <div className="py-12 px-6 md:px-44 lg:px-60">
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
      <div className="relative">
        <Image
          src={member.imageUrl}
          alt={member.name} 
          className={`h-fit md:w-52 md:h-70 object-cover max-h-320`}
          width={384}
          height={384}
        />
        {/* Name and Designation overlay */}
        <div
          className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white py-1 px-2 rounded-md"
        >
          <p className="font-semibold text-sm">{member.name}</p>
          <p className="text-xs">{member.designation}</p>
        </div>
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
        <div className="relative">
          <Image
            src={member.imageUrl}
            alt={member.name}
            className={`w-64 h-fit md:w-52 md:h-70 object-cover max-h-320 ${
              index % 2 !== 0 ? "md:mt-8" : ""
            }`}
            width={384}
            height={384}
          />
          {/* Name and Designation Overlay */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white py-1 px-2 rounded-md">
            <p className="font-semibold text-sm">{member.name}</p>
            <p className="text-xs">{member.designation}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default CoreTeamMember;
