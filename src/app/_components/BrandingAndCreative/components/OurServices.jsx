import Image from "next/image";
import React from "react";

const OurServices = () => {
  const services = [
    {
      title: "Brand Strategy & Consulting",
      description:
        "Coating matagin 30 define and elevate your brand identity to a competitive market.",
    },
    {
      title: "Logo Design & Brand Identity",
      description:
        "Delivering striking visuals that communicate your brand's story with clarity and creativity.",
    },
    {
      title: "Graphic Design",
      description:
        "Delivering striking visuals that communicate your brand's story with clarity and creativity.",
    },
    {
      title: "2D/3D Visualisation",
      description:
        "Bringing concepts to life with realistic and engaging visual renderings.",
    },
    {
      title: "Brand Collateral",
      description:
        "Designing innovative, user-friendly websites that deliver exceptional digital experiences.",
    },
    {
      title: "Industrial Product Design",
      description:
        "Transforming ideas into tangible designs that captivate and convert.",
    },
  ];

  return (
    <div className="h-fit flex flex-col w-full items-center bg-black">
      <div className="w-[1500px] flex flex-col gap-6 items-center py-[161px] bg-black">
        <div className="bg-white px-6 py-2 rounded-lg font-semibold">
          TOP RATED
        </div>
        <p className="text-6xl text-white">Our Services</p>
        <p className="text-gray-500 max-w-96 text-center">
          Expand and win in every market with optimised checkout and payments.
        </p>
      </div>

      {/* Services Section */}
      <div className="w-[1500px] px-6 py-12 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1A1A1D] p-10 pb-0 rounded-xl shadow-md flex flex-col gap-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl text-white font-semibold">
              {service.title}
            </h3>
            <p className="text-gray-500 max-w-96">{service.description}</p>
            <div className="mx-16 h-[262px] rounded-t-xl bg-gray-700 flex-shrink-0">
              {/* <Image
                src="https://via.placeholder.com/435x262"
                alt={''}
                width={435}
                height={262}
                className="w-full h-full object-cover rounded-xl"
              /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
