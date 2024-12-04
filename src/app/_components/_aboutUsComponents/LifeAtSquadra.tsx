import React from "react";
import Image from "next/image";
import img from "../../../utilities/icons/contatc-us.svg";

const LifeAtSquadra = () => {
  return (
    <section className="life-at-squadra py-12 px-4 mb-6">
      {/* Heading and Subheading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Life at Squadra Media
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A space to unlock your true potential, chase your dreams, and embrace
          your passion all while enjoying every moment with fun and laughter!
        </p>
      </div>

      {/* Image Block 1 */}
      <div className="flex justify-between gap-4 mb-4 md:h-70  h-36   lg:h-[480px]">
        {/* <div className=""> */}
        <Image
          src={img}
          alt="Image 1"
          layout="intrinsic"
          width={727}
          height={441}
          className="shadow-lg object-cover w-full md:h-70 h-36 md:h-[480px]"
        />
        {/* </div>
        <div className="w-1/3 md:h-70  h-36 md:h-[480px]"> */}
        <Image
          src={img}
          alt="Image 2"
          layout="intrinsic"
          width={533}
          height={533}
          className="shadow-lg object-cover w-36  md:w-70 md:w-[480px] md:h-70  h-36 md:h-[480px]"
        />
        {/* </div> */}
      </div>

      {/* Image Block 2 */}
      <div className="image-block-2 flex justify-between gap-4 mb-4 md:h-70  h-36 md:h-[480px]">
        {/* <div className="w-1/3 md:h-70  h-36 md:h-[480px]"> */}
        <Image
          src={img}
          alt="Image 3"
          layout="intrinsic"
          width={533}
          height={533}
          className="shadow-lg object-cover w-36  md:w-70 md:w-[480px] md:h-70  h-36 md:h-[480px]"
        />
        {/* </div>
        <div className="w-2/3 md:h-70  h-36 md:h-[480px] "> */}
        <Image
          src={img}
          alt="Image 4"
          layout="intrinsic"
          width={800}
          height={533}
          className="shadow-lg object-cover w-2/3 md:h-70  h-36 md:h-[480px]"
        />
        {/* </div> */}
      </div>

      {/* Join Us Section */}
      <div className="image-block-2 md:flex justify-between gap-4 mb-8 md:h-70  h-36 md:h-[480px]">
        <Image
          src={img}
          alt="Image 4"
          layout="intrinsic"
          width={800}
          height={533}
          className="shadow-lg object-cover md:w-2/3 w-full md:h-70  h-36 md:h-[380px]"
        />
        <div className="join-us-text flex flex-col justify-center w-full md:w-1/2 px-12">
          <h1 className="text-[#131313] text-[52px] font-[300]">Join Us</h1>
          <h2 className="md:text-[20px] w-full text-start font-[300] text-gray-800 lg:mb-24 md:mb-16 mb-8">
            Join Us and View Open Positions
          </h2>
          <div className="join-us-button w-[163px] text-start bg-[#6D6D6D] text-white px-6 py-3 rounded-full mt-4 transition relative">
            VIEW JOBS
            <div className="w-8 h-8 absolute bg-white rounded-full top-2 right-2"> 

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtSquadra;
