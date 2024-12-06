import React from "react";
import image from "../../../utilities/icons/contatc-us.svg";
import Image from "next/image";

// Example data for the core team members
const CoreTeamMember = () => {
  const members = [
    {
      name: "John Doe",
      designation: "Lead Developer",
      imageUrl: image, // Replace with actual image path
    },
    {
      name: "Jane Smith",
      designation: "Product Manager",
      imageUrl: image, // Replace with actual image path
    },
    {
      name: "Alice Johnson",
      designation: "UX/UI Designer",
      imageUrl: image, // Replace with actual image path
    },
    {
      name: "Bob Brown",
      designation: "Backend Developer",
      imageUrl: image, // Replace with actual image path
    },
    {
      name: "Charlie Davis",
      designation: "Frontend Developer",
      imageUrl: image, // Replace with actual image path
    },
    {
      name: "Eve White",
      designation: "Marketing Head",
      imageUrl: image, // Replace with actual image path
    },
    {
      name: "Grace Lee",
      designation: "HR Manager",
      imageUrl: image, // Replace with actual image path
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
                className={`h-64 md:w-70 md:h-70 object-cover max-h-320 ${
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
                <p className="text-center">{member.designation}</p>
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
                className={`w-64 h-64 md:w-70 md:h-70 object-cover max-h-320 ${
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
                <p className="text-center">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeamMember;
