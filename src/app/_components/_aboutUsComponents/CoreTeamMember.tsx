import React from "react";
import Image from "next/image";

const CoreTeamMember = () => {
  const members = [
    {
      name: "Aby Abraham",
      designation: "Storyboard Lead",
      imageUrl:
        "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/Aby+Abraham.webp",
    },
    {
      name: "Shawn S",
      designation: "Campaign Strategist",
      imageUrl:
        "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/Shawn%2BS+(1).webp",
    },
    {
      name: "Sujata Singh",
      designation: "Account Lead",
      imageUrl:
        "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/Sujata+Singh.webp",
    },
    {
      name: "Karthik",
      designation: "Sr. Grpahic Deisgner",
      imageUrl:
        "https://squadra-media.s3.ap-south-1.amazonaws.com/kartik-min.jpg",
    },
    {
      name: "Ananthu",
      designation: "Designer",
      imageUrl:
        "https://squadra-media.s3.ap-south-1.amazonaws.com/ananthu-min.jpg",
    },
    {
      name: "Ananthu",
      designation: "Photographer",
      imageUrl:
        "https://squadra-media.s3.ap-south-1.amazonaws.com/ananthu_D-min.jpg",
    },
    {
      name: "Bhavika",
      designation: "Account Manager",
      imageUrl:
        "https://squadra-media.s3.ap-south-1.amazonaws.com/bhavika-min.jpg",
    },
  ];

  return (
    <div className="py-[40px] sm:py-[83px]">
      <div className="flex flex-col items-center justify-center">
        <p className="font-sans text-[20px] text-[#6D6D6D] font-light leading-[23.87px] text-left">
          At the heart of <span className="text-[#FBAE17]">Squadra Media</span>{" "}
          are the <br />
          people who make it all happen—
        </p>
        <h2 className="font-sans mt-[24px] text-[40px] font-light leading-[23.87px] text-left text-[#131313] mb-8">
          Core Members
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-col-3 lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-x-8 max-w-4xl mx-auto mt-[72px] lg:mt-[72px] md:mt-[40px] sm:mt-[20px] px-4 lg:px-0 md:px-20 sm:px-6">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col w-full">
            <div className="relative w-full">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={384}
                height={384}
                className="rounded-t-[24px] w-full lg:h-[384px]  object-cover"
              />
              <div className="bg-white shadow-md rounded-b-[24px] rounded-t-none p-3 w-full -mt-4 relative z-10">
                <h3 className="text-gray-900 text-base md:text-lg font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base font-normal text-center">
                  {member.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreTeamMember;
