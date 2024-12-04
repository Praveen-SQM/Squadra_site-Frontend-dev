import React from "react";
import image from "../../../utilities/icons/contatc-us.svg";
import Image from "next/image";

// Example data for the founding members

const FoundingMembersSection = () => {
  const members = [
    {
      name: "John Doe",
      designation: "CEO & Founder",
      imageUrl: image, // Replace with actual image path
    },
    {
      name: "Jane Smith",
      designation: "CTO & Co-Founder",
      imageUrl: image, // Replace with actual image path
    },
    {
      name: "Alice Johnson",
      designation: "CFO & Co-Founder",
      imageUrl: image, // Replace with actual image path
    },
  ];
  return (
    <div className="py-16">
      <h2 className="text-[32px] font-[500] text-start mb-8 text-[#6D6D6D]">
        Founding Members
      </h2>

      <div className="md:flex justify-between">
        {members.map((member, index) => (
          <div key={index} className="relative flex flex-col items-center ">
            <Image
              src={member.imageUrl}
              alt={member.name}
              className={`w-64 h-64 md:w-96 md:h-96 object-cover mb-8 md:mb-0 max-h-320 ${
                index % 2 != 0 ? "md:mt-8  md:mb-0" : ""
              }`}
              width={384} 
              height={384}
            />
            <div className={`absolute md:-right-8 ${ index % 2 != 0 ? "md:-bottom-8 bottom-0" : "bottom-0"} bg-[#FDDF8A] py-2 px-4 mt-2`}>
            <div
              className={`absolute z-1 top-0 -left-[30px] w-0 h-0 border-l-0 border-r-[30px] border-b-[15px] border-transparent border-b-[#F8C96F] rotate-180`}
            ></div>
              <p className="font-semibold">{member.name}</p>
              <p>{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundingMembersSection;
