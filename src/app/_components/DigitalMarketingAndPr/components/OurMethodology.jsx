import Image from "next/image";
import React from "react";
import dataAnalyticsImage from "@/utilities/images/data-analytics.svg";
import publicRelationsImage from "@/utilities/images/public-relations.svg";
import socialMediaImage from "@/utilities/images/social-media-management.svg";
import contentMarketingImage from "@/utilities/images/content-marketing.svg";
import SEOImage from "@/utilities/images/seo.svg";


const OurMethodology = () => {
  // Data for the alternating sections
  const sections = [
    {
      number: "1",
      bgColor: "black",
      heading: "Social Media Management",
      description:
        "We schedule a meeting to discuss your goals, challenges, and vision, laying the foundation for a tailored approach to propel your brand forward.",
      imageUrl:socialMediaImage
    },
    {
      number: "2",
      bgColor: "blue",
      heading: "SEO & SEM",
      description:
        "We craft a custom plan tailored to your brand's needs and goals, setting clear objectives and outlining actionable tactics for success.",
      imageUrl:SEOImage
    },
    {
      number: "3",
      bgColor: "black",
      heading: "Performance & content Marketing ",
      description:
        "We bring the strategy to life with precision. With your approval, our team handles every aspect, from creative design to technical execution.",
      imageUrl:contentMarketingImage
    },
    {
      number: "4",
      bgColor: "blue",
      heading: "Public Relations (PR)",
      description:
        "We don't just launch the campaign and call it a day. We continually monitor metrics, gathering insights and making adjustments to optimize results.",
      imageUrl:publicRelationsImage
    },
    {
      number: "5",
      bgColor: "black",
      heading: "Data & Analytics",
      description:
        "We maintain open communication, providing regular updates and detailed reports on campaign performance, allowing you to track progress.",
      imageUrl:dataAnalyticsImage
    },
  ];

  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="py-24 md:py-36 bg-[#06135B] w-full flex flex-col justify-center items-center text-center text-white gap-4">
        <div className="uppercase text-[14px] md:text-[16px]">Our Services</div>
        <div className="text-4xl md:text-7xl lg:font-bold uppercase">
          <span className="opacity-50">OUR Winning</span> <br />
          <span>Methodology</span>
        </div>
        <div className="text-[14px] md:text-[16px] lg:text-[18px] w-[295px] md:w-[550px] font-[400]">
          We don’t just run campaigns; we build connections between your brand
          and your audience.
        </div>
      </div>

      {/* Alternating Black and Blue Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col items-center ${
            section.bgColor === "black" ? "bg-black" : "bg-[#06135B]"
          }`}
        >
          <div className="flex items-center justify-between w-full md:max-w-[800px] lg:max-w-[1400px] flex-wrap py-10 pb-4 md:py-[55px] lg:py-[150px]">
            <div
              className={`text-[130px] md:text-[220px] lg:text-[240px] pl-6 font-[400] ${
                section.bgColor === "black" ? "text-white" : "text-yellow-300"
              }`}
            >
              {section.number}
            </div>

            <div className="max-w-[300px] lg:max-w-[490px] w-full px-4 text-white">
              <h2 className="text-[20px] md:text-[32px] lg:text-[48px] font-bold uppercase">
                {section.heading}
              </h2>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-[300] mt-4">
                {section.description}
              </p>
            </div>

            <div className="m-4">
              <Image 
              width={474}
              height={274}
                src={section.imageUrl}
                alt="Section"
                className="w-full md:w-[274px] lg:w-[474px] bg-gray-700 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurMethodology;
