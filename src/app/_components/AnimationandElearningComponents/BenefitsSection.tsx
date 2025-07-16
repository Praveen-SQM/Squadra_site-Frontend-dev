import React from "react";
import rightIcon from "@/utilities/icons/Checkmark.svg";
import Image from "next/image";
import Link from "next/link";
import BenefitImage from "@/utilities/images/Benefits_Image.jpg";

const BenefitsSection = () => {
  const points = [
    {
      point: "Unified Solution",
      text: ": Single provider for technology and content ensures consistency.",
      className:
        "3xl:max-w-[831px] xl:max-w-[597px] sm:max-w-[453px] max-w-full",
    },
    {
      point: "Enhanced Engagement",
      text: ": Tailored content complements LMS capabilities, keeping learners motivated.",
      className:
        "3xl:max-w-[831px] xl:max-w-[597px] sm:max-w-[453px] max-w-full",
    },
    {
      point: "Scalability",
      text: ": Both LMS and content can grow with your organization.",
      className:
        "3xl:max-w-[831px] xl:max-w-[597px] sm:max-w-[453px] max-w-full",
    },
    {
      point: "Cost Efficiency",
      text: ": Bundling reduces overall costs compared to sourcing separately.",
      className:
        "3xl:max-w-[818px] xl:max-w-[593px] sm:max-w-[453px] max-w-full",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-between px-4  bg-neutral-900 3xl:py-[96px] xl:py-[72px] py-[42px]">
      <div className="flex items-center sm:flex-row flex-col justify-evenly w-full  xl:px-0  mx-auto 3xl:min-w-[1580px]">
        <div className="flex flex-col sm:items-start items-center 3xl:gap-[56px] xl:gap-[42px] sm:gap-[57px] gap-8 sm:mb-0 mb-[32px]">
          <div className="flex flex-col items-start px-4 3xl:gap-[42px] xl:gap-[32px] sm:gap-[18px] gap-3">
            <p style={{ fontFamily: "'Manrope', sans-serif" }} className=" font-bold 
text-[clamp(22px,4vw,40px)] 
leading-[clamp(40px,5vw,65.6px)] 
text-white 
3xl:max-w-[728px] xl:max-w-[546px]">
              Benefits of combining both services
            </p>
            <div className="flex flex-col 3xl:gap-[21.3px] xl:gap-4 sm:gap-[9.4px] gap-4">
              {points?.map((point, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-start 3xl:gap-[6.7px] xl:gap-[5px] sm:gap-[3px] gap-[5px]"
                  >
                    <div className="3xl:w-[25px] 3xl:h-[32px] xl:w-[19px] xl:h-[23px] sm:w-5 sm:h-6 w-[19px] h-[24px]">
                      <Image
                        src={rightIcon}
                        alt="right-icon"
                        width={19}
                        height={23}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p
                     style={{ fontFamily: "'Manrope', sans-serif" }} className={`font-bold 3xl:text-[22px] 3xl:leading-8 xl:text-[16px] xl:leading-6 sm:text-[14px] sm:leading-[19px] text-[14px] leading-[24px] text-[#FFFFFF] 3xl:text-[22px] ${point?.className}`}
                    >
                      {point?.point}
                      <span className="font-normal">{point?.text}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <Link
            href={"/contact-us"}
            style={{ fontFamily: "'Manrope', sans-serif" }}
            className="bg-[#EE3CD1] 3xl:py-[21px] xl:py-4 md:ml-4 sm:py-[9.4px] py-4 3xl:px-8 xl:px-6 sm:px-[14px] px-6 3xl:rounded-[10.6px] xl:rounded-[8px] sm:rounded-[4.7px] rounded-[8px] 3xl:w-[373px] xl:w-[176px] sm:w-[164px] h-fit font-bold 3xl:text-[22px] 3xl:leading-[30px] xl:text-[16px] xl:leading-4 sm:text-[13px] sm:leading-[17.8px] text-[#FFFFFF] flex justify-center"
          >
            Contact Now
          </Link>
        </div>
        <div className="max-w-[554px] max-h-[506px] lg:w-[554px] lg:h-[506px] px-2 rounded-[32px]">
          <Image
            src={BenefitImage}
            alt="whatYouGetImage"
            width={554}
            height={506}
            className="w-auto h-full object-cover rounded-[32px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
