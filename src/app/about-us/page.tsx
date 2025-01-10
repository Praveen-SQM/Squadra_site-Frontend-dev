import React from "react";
import AboutUsHeroSection from "../_components/_aboutUsComponents/AboutUsHeroSection";
import FoundingMembersSection from "../_components/_aboutUsComponents/FoundingMembersSection";
import CoreTeamMember from "../_components/_aboutUsComponents/CoreTeamMember";
import LifeAtSquadra from "../_components/_aboutUsComponents/LifeAtSquadra";
import EnqieryAndQuoteComponent from "../_components/_landingPageComponents/EnqieryAndQuoteComponent";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      <AboutUsHeroSection />
      <div className="max-w-screen-3xl">
        {/* Content */}
        <div className="w-screen bg-[#F5F6FB] pt-[72px] pb-[120px]">
        {/* <div className="px-8 sm:px-8 md:px-12 lg:px-32 py-8 text-start">
          <h2 className="font-weight-[400] text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-medium mb-4">
            About the company
          </h2>
          <p className="text-base sm:text-md md:text-md max-w-4xl text-gray-600">
            Imagine a team that&apos;s part tech wiz, part creative genius, and totally obsessed with making your business shine. As a leading digital marketing agency in Bangalore, that&apos;s us – Squadra Media!
          </p>
        </div> */}

        <div className="flex flex-col items-center justify-center gap-3 lg:mb-[140px]">
          <div className="flex items-center gap-2">
            <div className="w-[47px] h-[2px] bg-[#FBAE17]"></div>
            <p className="font-[300] text-[20px] leading-[23.87px] text-[#6D6D6D]">Our story</p>
          </div>
          <p className="font-semibold text-[52px] leading-[62.05px] text-[#131313] lg:max-w-[800px] text-center">The <span className="text-[#06135B]">Founding Members</span> Behind Squadra Media</p>
          <p className="font-[300] text-[20px] leading-[23.87px] text-center text-[#6D6D6D] lg:max-w-[756px]">Squadra Media was built by leaders with a clear vision and a drive for excellence. Meet the founders who set the standard for our success.</p>
        </div>
        <FoundingMembersSection />
        </div>

        <CoreTeamMember />
        <LifeAtSquadra />
        <EnqieryAndQuoteComponent />
      </div>
    </div>
  );
};

export default AboutUs;
