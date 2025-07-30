// import Image from "next/image";
// import React from "react";
// import dataAnalyticsImage from "@/utilities/images/DM&PR_Data&Analytics.png";
// import publicRelationsImage from "@/utilities/images/DM&PR_PR.png";
// import socialMediaImage from "@/utilities/images/DM&PR_SocialMediaManangement.png";
// import contentMarketingImage from "@/utilities/images/DM&PR_Performance&CM.png";
// import SEOImage from "@/utilities/images/DM&PR_SEO&SEM.png";

// const OurMethodology = () => {
//   // Data for the alternating sections
//   const sections = [
//     {
//       number: "1",
//       bgColor: "black",
//       heading: "Social Media Management",
//       description:
//         "We schedule a meeting to discuss your goals, challenges, and vision, laying the foundation for a tailored approach to propel your brand forward.",
//       imageUrl:socialMediaImage
//     },
//     {
//       number: "2",
//       bgColor: "blue",
//       heading: "SEO & SEM",
//       description:
//         "We craft a custom plan tailored to your brand's needs and goals, setting clear objectives and outlining actionable tactics for success.",
//       imageUrl:SEOImage
//     },
//     {
//       number: "3",
//       bgColor: "black",
//       heading: "Performance & content Marketing ",
//       description:
//         "We bring the strategy to life with precision. With your approval, our team handles every aspect, from creative design to technical execution.",
//       imageUrl:contentMarketingImage
//     },
//     {
//       number: "4",
//       bgColor: "blue",
//       heading: "Public Relations (PR)",
//       description:
//         "We don't just launch the campaign and call it a day. We continually monitor metrics, gathering insights and making adjustments to optimize results.",
//       imageUrl:publicRelationsImage
//     },
//     {
//       number: "5",
//       bgColor: "black",
//       heading: "Data & Analytics",
//       description:
//         "We maintain open communication, providing regular updates and detailed reports on campaign performance, allowing you to track progress.",
//       imageUrl:dataAnalyticsImage
//     },
//   ];

//   return (
//     <div className="w-full ">
//       {/* Top Section */}
//       <div className="py-24 md:py-36 bg-[#06135B] w-full flex flex-col justify-center items-center text-center text-white gap-4">
//         <div className="uppercase text-[14px]  md:text-[16px] font-normal leading-[16.64px] tracking-normal align-middle font-[SF UI Display]">Our Services</div>
//         <div className="text-4xl md:text-[clamp(48px,6vw,72px)] leading-[76.32px] font-bold uppercase text-center align-middle font-[SF UI Display]">
//           <span className="text-[#AEC5FF] ">OUR Winning</span> <br />
//           <span>Methodology</span>
//         </div>
//         <div className="text-[clamp(14px,3.5vw,18px)] py-4 leading-[25.92px] tracking-[-0.02em] w-[295px] md:w-[550px] font-normal text-center align-middle font-[SF Pro Text] text-[#D2E1FF]">
//           We don’t just run campaigns; we build connections between your brand
//           and your audience.
//         </div>
//       </div>

//       {/* Alternating Black and Blue Sections */}
//       {sections.map((section, index) => (
//         <div
//           key={index}
//           className={`flex flex-col items-center ${
//             section.bgColor === "black" ? "bg-black" : "bg-[#06135B]"
//           }`}
//         >
//           <div className="flex items-center justify-around w-full  md:max-w-[800px] lg:max-w-[1400px] flex-wrap py-10 pb-4 sm:py-[55px] md:py-[55px] lg:py-[50px] ">
//             <div
//               className={`text-[130px]  md:text-[220px] lg:text-[240px] pl-6 font-[400] ${
//                 section.bgColor === "black" ? "text-white" : "text-yellow-300"
//               }`}
//             >
//               {section.number}
//             </div>

//             <div className="max-w-[300px] lg:max-w-[490px] w-full px-4 text-white">
//               <h2 className="text-[20px] md:text-[clamp(22px,4vw,30px)] leading-[120%] lg:text-[clamp(32px,4vw,48px)] font-bold uppercase">
//                 {section.heading}
//               </h2>
//               <p className="text-[14px] md:text-[clamp(12px,2vw,14px)] lg:text-[clamp(16px,2vw,18px)] font-light mt-4">
//                 {section.description}
//               </p>
//             </div>

//             <div className="m-4 h-[274px]">
//               <Image
//               width={474}
//               height={274}
//                 src={section.imageUrl}
//                 alt="Section"
//                 className="w-auto h-full md:w-[274px] lg:w-[474px] bg-gray-700 rounded-[138px] object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//       <div className="px-[5%]">
//         <div className="h-[1px] w-full bg-[#06135B] "></div>
//       </div>
//     </div>
//   );
// };

// export default OurMethodology;

"use client";
import Image from "next/image";
import React from "react";
import dataAnalyticsImage from "@/utilities/images/DM&PR_Data&Analytics.png";
import publicRelationsImage from "@/utilities/images/DM&PR_PR.png";
import socialMediaImage from "@/utilities/images/DM&PR_SocialMediaManangement.png";
import contentMarketingImage from "@/utilities/images/DM&PR_Performance&CM.png";
import SEOImage from "@/utilities/images/DM&PR_SEO&SEM.png";


const OurMethodology = () => {
  // Data for the alternating sections
  const sections = [
    {
      number: "1",
      bgColor: "black",
      heading: "Social Media Management",
      description:
        "We schedule a meeting to discuss your goals, challenges, and vision, laying the foundation for a tailored approach to propel your brand forward.",
      imageUrl: socialMediaImage,
    },
    {
      number: "2",
      bgColor: "blue",
      heading: "SEO & SEM",
      description:
        "We craft a custom plan tailored to your brand's needs and goals, setting clear objectives and outlining actionable tactics for success.",
      imageUrl: SEOImage,
    },
    {
      number: "3",
      bgColor: "black",
      heading: "Performance & content Marketing ",
      description:
        "We bring the strategy to life with precision. With your approval, our team handles every aspect, from creative design to technical execution.",
      imageUrl: contentMarketingImage,
    },
    {
      number: "4",
      bgColor: "blue",
      heading: "Public Relations (PR)",
      description:
        "We don't just launch the campaign and call it a day. We continually monitor metrics, gathering insights and making adjustments to optimize results.",
      imageUrl: publicRelationsImage,
    },
    {
      number: "5",
      bgColor: "black",
      heading: "Data & Analytics",
      description:
        "We maintain open communication, providing regular updates and detailed reports on campaign performance, allowing you to track progress.",
      imageUrl: dataAnalyticsImage,
    },
  ];

  return (
    <div className="w-full ">
      {/* Top Section */}
      <div className="py-24 md:py-36 bg-[#06135B] w-full flex flex-col justify-center items-center text-center text-white gap-4">
        <div className="uppercase text-[14px]  md:text-[16px] font-normal leading-[16.64px] tracking-normal align-middle font-[SF UI Display]">
          Our Services
        </div>
        <div className="text-4xl md:text-[clamp(48px,6vw,72px)] leading-[46.32px] md:leading-[76.32px] font-bold uppercase text-center align-middle font-[SF UI Display]">
          <span className="text-[#AEC5FF] ">OUR Winning</span> <br />
          <span>Methodology</span>
        </div>
        <div className="text-[clamp(14px,3.5vw,18px)] py-4 leading-[25.92px] tracking-[-0.02em] w-[295px] md:w-[550px] font-normal text-center align-middle font-[SF Pro Text] text-[#D2E1FF]">
          We don’t just run campaigns; we build connections between your brand
          and your audience.
        </div>
      </div>

      {/* Alternating Black and Blue Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          style={{
            position: "sticky",
            top: "0px",
            zIndex: 1,
          }}
          className={`flex flex-col items-center ${
            section.bgColor === "black" ? "bg-black" : "bg-[#06135B]"
          }`}
        >
          <div className="flex items-center justify-around w-full sm:gap-0 md:gap-6 lg:gap-0 md:max-w-[800px] lg:max-w-[1400px] flex-wrap py-10 pb-4 sm:py-[55px] md:py-[55px] lg:py-[50px] xl:py-[80px]">
            {/* Sticky Number (Optional effect) */}
            <div
              className={`text-[130px] md:text-[220px] lg:text-[240px] pl-6 font-[400] ${
                section.bgColor === "black" ? "text-white" : "text-yellow-300"
              } sm:sticky`} // sticky only on sm and below
              style={{
                top: "100px",
                position:
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? "sticky"
                    : "static",
              }}
            >
              {section.number}
            </div>

            {/* Text Content */}
            <div className="max-w-[300px] lg:max-w-[490px] w-full px-4 text-white">
              <h2 className="text-[20px] md:text-[clamp(26px,4vw,30px)] leading-[120%] lg:text-[clamp(32px,4vw,48px)] font-bold uppercase">
                {section.heading}
              </h2>
              <p className="text-[14px] md:text-[clamp(16px,2vw,14px)] lg:text-[clamp(16px,2vw,18px)] font-light mt-4">
                {section.description}
              </p>
            </div>

            {/* Image */}
            <div className="m-4 h-[274px]">
              <Image
                width={474}
                height={274}
                src={section.imageUrl}
                alt="Section"
                className="w-auto h-full md:w-[274px] lg:w-[474px] bg-gray-700 rounded-[138px] object-cover"
              />
            </div>
          </div>
        </section>
      ))}

      <div className="px-[5%]">
        <div className="h-[1px] w-full bg-[#06135B] "></div>
      </div>
    </div>
  );
};

export default OurMethodology;
