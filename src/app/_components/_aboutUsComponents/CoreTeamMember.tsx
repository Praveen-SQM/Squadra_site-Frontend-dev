import React from "react";
import Image from "next/image";

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
    },
  ];

  return (
    <div className="py-8 px-6 lg:px-16 xl:px-12">
      <h2 className="text-2xl md:text-3xl font-[500] text-start mb-8 text-[#6D6D6D]">
        Core Team Members
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center max-w-[300px] ${
              members.length % 2 !== 0 && index >= Math.floor(members.length / 2)
                ? "md:justify-center"
                : ""
            }`}
          >
            <div className="relative">
              <Image
                src={member.imageUrl}
                alt={member.name}
                className="rounded-md w-64 h-fit md:w-52 md:h-70 object-cover max-h-320"
                width={384}
                height={384}
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white py-1 px-2 rounded-md">
                <p className="font-semibold text-sm">{member.name}</p>
                <p className="text-xs">{member.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreTeamMember;