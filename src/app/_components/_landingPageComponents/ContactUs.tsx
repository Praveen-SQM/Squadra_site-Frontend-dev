"use client";
import React from "react";
import Image from "next/image";

// Import the contact image using Next.js image optimization
import image from "../../../utilities/icons/contatc-us.svg";

const ContactUs = () => {
  return (
    <section className="contact-us flex justify-center items-center bg-[#F8F8F8] mb-8">
      <div className="flex flex-col max-w-screen-2xl w-full sm:flex-row gap-12 sm:gap-[112px] px-4 py-16">
        {/* Left side: Image */}
        <div className="w-full sm:w-[419px]">
          <Image
            src={image} // Use Image component
            alt="Contact Us"
            width={419} // Specify the width for optimization
            height={419} // Specify the height for optimization
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right side: Contact Us content */}
        <div className="w-full sm:w-[50%] text-center sm:text-left">
          <h2 className="text-[18px] text-[#6D6D6D] mb-1">CONTACT US</h2>
          <p className="text-[36px] sm:text-[46px] font-[600] mb-4">
            Get in touch with us!
          </p>

          <p className="text-[#6D6D6D] mb-8 max-w-[600px]">
            Feel free to reach out with any thoughts, questions, or suggestions.
            Whether it&apos;s a brief conversation or a deeper discussion, we&apos;re here
            to connect.
          </p>

          <button className="px-6 py-3 bg-[#FFFFFF] text-[#131313] font-semibold text-lg rounded-lg border-2 border-[#E7E7E7] hover:bg-[#F4F4F4] hover:text-[#131313] hover:border-[#B8B8B8]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
