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
      <div className="max-w-screen-2xl p-4">
        {/* Content */}
        <h1 className="text-[48px]">About the company</h1>
        <p className="mx-auto mt-4 ">
          Imagine a team that's part tech wiz, part creative genius, and totally
          obsessed with making your business shine. As a leading digital
          marketing agency in Bangalore, that's us – Squadra Media!
        </p>
        <FoundingMembersSection />
        <CoreTeamMember/>
        <LifeAtSquadra/>  
        <EnqieryAndQuoteComponent/>
      </div>
    </div>
  );
};

export default AboutUs;
