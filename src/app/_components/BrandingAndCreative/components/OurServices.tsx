import Image from "next/image";
import React from "react";
// import brandStrategyImage from "@/utilities/images/brand-strategy.jpg";
// import visualisationImage from "@/utilities/images/visualization.jpg";
// import brandCollateralImage from "@/utilities/images/Brand-collateral.jpg";
// import industrialDesignImage from "@/utilities/images/industrial-design.jpg";
import clientTorque from "@/utilities/icons/clent-torque.svg";
import clientHMG from "@/utilities/icons/client-HMGroup.webp";
import clientBroncos from "@/utilities/icons/client-broncos.webp";
import clientDaddy from "@/utilities/icons/client-daddy.webp";
import clientDoubleTree from "@/utilities/icons/client-doubleTree.webp";
import clientGREE from "@/utilities/icons/client-gree.webp";
import clientHabitat from "@/utilities/icons/client-habitat.webp";
import clientS1522 from "@/utilities/icons/client-street1522.webp";
import clientVOIA from "@/utilities/icons/client-voia.webp";
import clientVIDA from "@/utilities/icons/client-vida.webp";
import clientNior from "@/utilities/icons/client-cafeNior.webp";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const Card = ({ index, card,clientStyle }: { index: number, card: any,clientStyle:boolean }) => {

  return (
    <div
      className={`flex-shrink-0 rounded-xl ${clientStyle?"bg-white":""} overflow-hidden transition-transform duration-300 hover:scale-95`}
    >
      <div className={`relative ${clientStyle?"md:w-[153px] w-[85px]":"md:w-[256px] w-[153px]"} md:h-[120px] h-[69px]`}>
        <Image
          src={card?.image}
          alt={`Card ${index + 1}`}
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  );
};

const OurServices = () => {
  const services = [
    {
      title: "Brand Strategy & Consulting",
      description:
        "Coating matagin 30 define and elevate your brand identity to a competitive market.",
      image: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/brand_strategy.webp",
      slider: false
    },
    {
      title: "Logo Design & Brand Identity",
      description:
        "Delivering striking visuals that communicate your brand's story with clarity and creativity.",
      image: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/brand_strategy.webp",
      slider: true,
      clientStyle: true,  
      sliderImagesOne: [
        clientVIDA,
        clientTorque,
        clientVOIA,
        clientGREE,
        clientHabitat,
      ],
      sliderImagesTwo: [
        clientDoubleTree,
        clientNior,
        clientBroncos,
        clientS1522,
        clientDaddy
      ]
    },
    {
      title: "Graphic Design",
      description:
        "Delivering striking visuals that communicate your brand's story with clarity and creativity.",
      image: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/brand_strategy.webp",
      slider: true,
      sliderImagesOne: [
        "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/graphicSlider-1.webp",
        "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/graphicSlider-2.webp",
        "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/graphicSlider-3.webp",
      ],
      sliderImagesTwo: [
        "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/graphicSlider-4.webp",
        "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/graphicSlider-5.webp",
        "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/graphicSlider-6.webp",
      ]
    },
    {
      title: "2D/3D Visualisation",
      description:
        "Bringing concepts to life with realistic and engaging visual renderings.",
      image: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/2D-3D-visualization.webp",
      slider: false
    },
    {
      title: "Brand Collateral",
      description:
        "Designing innovative, user-friendly websites that deliver exceptional digital experiences.",
      image: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/brand-collateral.webp",
      slider: false
    },
    {
      title: "Industrial Product Design",
      description:
        "Transforming ideas into tangible designs that captivate and convert.",
      image: "https://squadra-media.s3.ap-south-1.amazonaws.com/services-images/industrial-design.webp",
      slider: false
    },
  ];

  return (
    <div className="h-fit flex flex-col w-full items-center bg-black">
      <div className="max-w-[1500px] flex flex-col gap-2 md:gap-6 items-center py-[72px] lg:py-[161px] bg-black">
        <div className="bg-white px-6 py-2 rounded-lg md:text-[14px] lg:text-[16px] font-semibold">
          TOP RATED
        </div>
        <p className="text-[36px] md:text-5xl lg:text-6xl text-white">Our Services</p>
        <p className="text-gray-500 text-sm lg:text-base max-w-[231px] md:max-w-96 text-center">
          Expand and win in every market with optimised checkout and payments.
        </p>
      </div>

      {/* Services Section */}
      <div className=" w-full lg:max-w-[1500px] flex flex-wrap items-center justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1A1A1D] w-full max-w-[343px] md:max-w-[695px] lg:max-w-[550px] p-[20px] pb-0 md:p-[60px] md:pb-0 lg:p-10 lg:pb-0 rounded-xl shadow-md flex flex-col justify-between gap-5 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-[16px] md:text-[28px] text-white font-semibold">
              {service.title}
            </h3>
            <p className="text-gray-500 text-[12px] md:text-[22px] lg:text-[16px] md:max-w-[520px] lg:max-w-96">{service.description}</p>
            <div className="h-[154px] md:h-[262px] rounded-t-xl flex-shrink-0">
              {service.slider ? (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <InfiniteSlider
                      duration={25}
                      durationOnHover={50}
                      gap={12}
                      direction="horizontal"
                    >
                      {service?.sliderImagesOne?.map((image, index) => {
                        return (
                          <Card key={index} index={index} card={{ image }} clientStyle={!!service?.clientStyle}/>
                        )
                      })}
                    </InfiniteSlider>
                  </div>
                  <div className="flex items-center gap-3">
                    <InfiniteSlider
                      duration={25}
                      durationOnHover={50}
                      gap={12}
                      direction="horizontal"
                      reverse
                    >
                      {service?.sliderImagesTwo?.map((image, index) => {
                        return (
                          <Card key={index} index={index} card={{ image }} clientStyle={!!service?.clientStyle}/>
                        )
                      })}
                    </InfiniteSlider>
                  </div>
                  {/* <Image
                    src={service?.image}
                    alt={''}
                    width={435}
                    height={262}
                    className="w-full h-full object-cover rounded-xl w-full h-full"
                  /> */}
                </div>
              ) : (
                <Image
                  src={service?.image}
                  alt={''}
                  width={435}
                  height={262}
                  className="w-full h-full object-cover rounded-xl w-full h-full"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
