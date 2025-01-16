import React from "react";
import Image from "next/image";

// Example data for the founding members

const FoundingMembersSection = () => {
  // const members = [
  //   {
  //     name: "Anu Js",
  //     designation: "Founder",
  //     imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/Anu+JS.webp",
  //   },
  //   {
  //     name: "Sandesh K",
  //     designation: "Co-Founder",
  //     imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/Sandesh+K.webp",
  //   },
  //   {
  //     name: "Tarush Chandani",
  //     designation: "Co-Founder",
  //     imageUrl: "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/Tarush+Chandnani.webp",
  //   },
  // ];
  return (
    //     <div className="py-8 px-6 lg:px-16 xl:px-24">
    //       <h2 className="text-2xl md:text-3xl font-[500] text-start mb-8 text-[#6D6D6D]">
    //         Founding Members
    //       </h2>

    // <div className="md:flex justify-evenly">
    //   {members.map((member, index) => (
    //     <div key={index} className="relative flex flex-col items-center">
    //       <div className="relative">
    //         <Image
    //           src={member.imageUrl}
    //           alt={member.name}
    //           className={`md:w-72 md:h-96 object-cover rounded-md mb-8 md:mb-0 max-h-320 ${
    //             index % 2 != 0 ? "md:mt-8 md:mb-0" : ""
    //           }`}
    //           width={384}
    //           height={384}
    //         />
    //         {/* Name and Designation Overlay */}
    //         <div className="absolute bottom-10 md:bottom-2 right-2 bg-black bg-opacity-50 text-white py-1 px-2 rounded-md">
    //           <p className="font-semibold text-sm text-center">{member.name}</p>
    //           <p className="text-xs text-center">{member.designation}</p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>




    //     </div>

    <div className="flex items-center lg:gap-[68px] md:gap-[40px] sm:gap-[100px gap-[100px] justify-center lg:flex-row md:flex-row sm:flex-col flex-col">
      <div className="lg:w-[290px] md:w-[200px] sm:w-[278px] w-[278px] rounded-[24px] bg-[#FFFFFF] flex flex-col hidden md:block">
        <div className="lg:h-[343px] md:h-[250px] sm:h-[378px] h-[378px]">
          <Image src={"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/Tarush+Chandnani.webp"} alt="Tarush" width={323} height={343} className="lg:h-[343px] md:h-[250px] sm:h-[378px] h-[378px] w-full object-cover rounded-t-[24px]"/>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center py-6 border-b-[2px] border-[#FBAE17] rounded-b-[24px]">
          <p className="font-semibold lg:text-[24px] lg:leading-[28.64px] md:text-[16px] md:leading-[19px] sm:text-[20px] sm:leading-[23.87px] text-[20px] leading-[23.87px] text-[#292929]">Tarush</p>
          <p className="font-normal lg:text-[18px] lg:leading-[21.48px] md:text-[12px] md:leading-[14.32px] sm:text-[14px] sm:leading-[16.71px] text-[14px] leading-[16.71px] text-[#292929]">Co-Founder</p>
        </div>
      </div>

      <div className="lg:w-[332px] md:w-[230px] sm:w-[335px] w-[335px] rounded-[24px] bg-[#FFFFFF] flex flex-col shadow-[0px_4px_60px_0px_rgba(0,0,0,0.12)]" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
      <div className="lg:h-[343px] md:h-[250px] sm:h-[378px] h-[378px]">
          <Image src={"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/Anu+JS.webp"} alt="Anu" width={323} height={343} className="lg:h-[343px] md:h-[250px] sm:h-[378px] h-[378px] w-full object-cover rounded-t-[24px]"/>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center py-6 bg-[#06135B] border-b-[2px] border-[#FBAE17] rounded-b-[24px]">
          <p className="font-semibold lg:text-[24px] lg:leading-[28.64px] md:text-[16px] md:leading-[19px] sm:text-[20px] sm:leading-[23.87px] text-[20px] leading-[23.87px] text-[#FFFFFF]">Anu Js</p>
          <p className="font-normal lg:text-[18px] lg:leading-[21.48px] md:text-[12px] md:leading-[14.32px] sm:text-[14px] sm:leading-[16.71px] text-[14px] leading-[16.71px] text-[#FFFFFF]">Founder</p>
        </div>
      </div>

      <div className="lg:w-[290px] md:w-[200px] sm:w-[278px] w-[278px] rounded-[24px] bg-[#FFFFFF] flex flex-col">
      <div className="lg:h-[343px] md:h-[250px] sm:h-[378px] h-[378px]">
          <Image src={"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/Sandesh+K.webp"} alt="Sandesh" width={323} height={343} className="lg:h-[343px] md:h-[250px] sm:h-[378px] h-[378px] w-full object-cover rounded-t-[24px]"/>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center py-6 border-b-[2px] border-[#FBAE17] rounded-b-[24px]">
          <p className="font-semibold lg:text-[24px] lg:leading-[28.64px] md:text-[16px] md:leading-[19px] sm:text-[20px] sm:leading-[23.87px] text-[20px] leading-[23.87px] text-[#292929]">Sandesh</p>
          <p className="font-normal lg:text-[18px] lg:leading-[21.48px] md:text-[12px] md:leading-[14.32px] sm:text-[14px] sm:leading-[16.71px] text-[14px] leading-[16.71px] text-[#292929]">Co-Founder</p>
        </div>
      </div>

      <div className="lg:w-[290px] md:w-[200px] sm:w-[278px] w-[278px] rounded-[24px] bg-[#FFFFFF] flex flex-col block md:hidden">
        <div className="lg:h-[343px] md:h-[250px] sm:h-[378px] h-[378px]">
          <Image src={"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/Tarush+Chandnani.webp"} alt="Tarush" width={323} height={343} className="lg:h-[343px] md:h-[250px] sm:h-[378px] h-[378px] w-full object-cover rounded-t-[24px]"/>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center py-6 border-b-[2px] border-[#FBAE17] rounded-b-[24px]">
          <p className="font-semibold lg:text-[24px] lg:leading-[28.64px] md:text-[16px] md:leading-[19px] sm:text-[20px] sm:leading-[23.87px] text-[20px] leading-[23.87px] text-[#292929]">Tarush</p>
          <p className="font-normal lg:text-[18px] lg:leading-[21.48px] md:text-[12px] md:leading-[14.32px] sm:text-[14px] sm:leading-[16.71px] text-[14px] leading-[16.71px] text-[#292929]">Co-Founder</p>
        </div>
      </div>
    </div>
  );
};

export default FoundingMembersSection;
