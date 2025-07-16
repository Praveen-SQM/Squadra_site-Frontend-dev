'use client'
import React from "react";
import TrainingContent from "./ELearning";
import DevelopmentProcessSection from "./DevelopmentProcessSection";
import BenefitsSection from "./BenefitsSection";
import ELearningLanding from "./ELearningLanding";
import LMSBenefits from "./LMSBenifits"
import FAQSection from "./FAQSeaction";
import ExpertsSection from "./ExpertsSection";

const ELearning = () => {
  return (
    <div >
      {" "}
      <ELearningLanding />
      <TrainingContent />
      <DevelopmentProcessSection/>
      <ExpertsSection/>
      <LMSBenefits/>
      <BenefitsSection/>
      <FAQSection/>
    </div>
  );
};

export default ELearning;
