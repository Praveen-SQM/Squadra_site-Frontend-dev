import React from "react";
import image from "../../../utilities/icons/contatc-us.svg";
import Image from "next/image";

// Sample data for the cards
const cards = [
  {
    id: 1,
    image: image,
    title: "Brand Identity & Logo Design",
    description: "Our team designs logos that capture your vision and values.",
  },
  {
    id: 2,
    image: image,
    title: "Product Photography & Media Production",
    description:
      "We create pro visuals to showcase your brand online and on social media.",
  },
  {
    id: 3,
    image: image,
    title: "Website Development & E-commerce Setup",
    description:
      "We design websites that look great and drive seamless user experiences for conversions.",
  },
  {
    id: 4,
    image: image,
    title: "Digital Marketing Strategy",
    description:
      "We craft digital strategies to boost your presence, engage customers, and grow your brand.",
  },
  {
    id: 5,
    image: image,
    title: "Public Relations for Brand Launch",
    description:
      "We craft your message and deliver it to the right audience with targeted PR.",
  },
  {
    id: 6,
    image: image,
    title: "Ongoing Marketing, Analytics & Scaling Your Business ",
    description:
      "We drive engagement and sales while refining performance with data analytics.",
  },
];
const CustomerJourneySection = () => {
  return (
    <section className="customer-journey py-12 max-w-screen-2xl mx-auto px-4">
      <div className="mb-12">
        <h2 className="text-[18px] text-[#6D6D6D] mb-3">CUSTOMER JOURNEY</h2>
        <p className="text-[46px] font-[600]">
          How{" "}
          <strong className="text-[#FBAE17] font-[600]">Squadra Media</strong>{" "}
          Drives Your Growth
        </p>
      </div>

      {/* Flex container for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {cards.map((card) => (
          <div key={card.id} className="w-full ">
            <div className="bg-gray-50 rounded-xl overflow-hidden min-h-[448px] md:mb-10 mb-0">
              {/* Card image */}
              <div className="relative w-full h-[350px] md:h-[450px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>

              {/* Card content */}
              <div className="p-4">
                <h4 className="text-[20px] font-semibold mb-2">{card.title}</h4>
                <p className="text-[#4E4D4D]">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerJourneySection;
