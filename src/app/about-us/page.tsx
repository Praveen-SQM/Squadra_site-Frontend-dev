import React from "react";
import AboutUsHeroSection from "../_components/_aboutUsComponents/AboutUsHeroSection";
import FoundingMembersSection from "../_components/_aboutUsComponents/FoundingMembersSection";
import CoreTeamMember from "../_components/_aboutUsComponents/CoreTeamMember";
import LifeAtSquadra from "../_components/_aboutUsComponents/LifeAtSquadra";
import EnqieryAndQuoteComponent from "../_components/_landingPageComponents/EnqieryAndQuoteComponent";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <AboutUsHeroSection />
      <div className="max-w-screen-3xl p-4">
        {/* Content */}
       <div className="px-8 sm:px-8 md:px-12 lg:px-32 py-8 text-start">
  <h2 className="font-weight-[400] text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-medium mb-4">
    About the company
  </h2>
  <p className="text-base sm:text-md md:text-md max-w-4xl text-gray-600">
    Imagine a team that&apos;s part tech wiz, part creative genius, and totally obsessed with making your business shine. As a leading digital marketing agency in Bangalore, that&apos;s us – Squadra Media!
  </p>
</div>

        <FoundingMembersSection />
        <CoreTeamMember/>
        <LifeAtSquadra/>  
        <EnqieryAndQuoteComponent/>
      </div>
    </div>
  );
};

export default AboutUs;
