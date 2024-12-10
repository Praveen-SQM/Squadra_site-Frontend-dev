import React from "react";
import Image from "next/image";

// Example data for the founding members

const FoundingMembersSection = () => {
  const members = [
    {
      name: "Anu Js",
      designation: "Founder",
      imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/Anu+JS.jpg", // Replace with actual image path
    },
    {
      name: "Sandesh K",
      designation: "Co-Founder",
      imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/Sandesh+K.jpg", // Replace with actual image path
    },
    {
      name: "Tarush Chandani",
      designation: "Co-Founder",
      imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/Tarush+Chandnani.jpg", // Replace with actual image path
    },
  ];
  return (
    <div className="py-8 px-6  md:px-44">
      <h2 className="text-2xl md:text-3xl font-[500] text-start mb-8 text-[#6D6D6D]">
        Founding Members
      </h2>

<div className="md:flex justify-between">
  {members.map((member, index) => (
    <div key={index} className="relative flex flex-col items-center">
      <div className="relative">
        <Image
          src={member.imageUrl}
          alt={member.name}
          className={`md:w-72 md:h-96 object-cover mb-8 md:mb-0 max-h-320 ${
            index % 2 != 0 ? "md:mt-8 md:mb-0" : ""
          }`}
          width={384}
          height={384}
        />
        {/* Name and Designation Overlay */}
        <div className="absolute bottom-10 md:bottom-2 right-2 bg-black bg-opacity-50 text-white py-1 px-2 rounded-md">
          <p className="font-semibold text-sm text-center">{member.name}</p>
          <p className="text-xs text-center">{member.designation}</p>
        </div>
      </div>
    </div>
  ))}
</div>




    </div>
  );
};

export default FoundingMembersSection;
