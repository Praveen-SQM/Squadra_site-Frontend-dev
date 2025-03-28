import React from "react";
import EnablingExcellence from "@/utilities/images/EnablingExcellence.svg";
import LayingTheFoundation from "@/utilities/images/LayingTheFoundation.svg";
import CreativeVisiblity from "@/utilities/images/CreativeVisiblity.svg";
import ScalingOprations from "@/utilities/images/ScalingOprations.svg";
import DrivingSalesExpansion from "@/utilities/images/DrivingSales&Expansion.svg";
import stepsLine from "@/utilities/images/stepsLine.svg";
import HowItWorksContainer from "./HowItWorksConatiner";
import Image from "next/image";

const HowItWorksSteps = () => {
  const sections = [
    {
      title: "LAYING THE FOUNDATION",
      description:
        "We help entrepreneurs craft their brand identity and build a solid future foundation.",
      services: [
        "Branding: Names, logos, and visual identities that reflect their vision.",
        "Website Design: Stunning, user-friendly websites created by our IT experts.",
      ],
      Image: LayingTheFoundation,
    },
    {
      title: "CREATIVE VISIBILITY",
      description:
        "Managed by Square6 Media, we handle social media marketing, SEO, and ads to drive awareness and engagement",
      services: [
        "Production: Our creative team at Slay It Right produces high-quality videos, advertisements, and cinematic campaigns.",
        "Animation: Through Squadraverse, we craft immersive animations, explainer videos, and AR/VR experiences.",
      ],
      Image: EnablingExcellence,
    },
    {
      title: "SCALING OPERATIONS",
      description:
        "As businesses grow, we help entrepreneurs manage their expanding needs",
      services: [
        "HR Services: Hiring the right people and building a strong workforce.",
        "Accounts Services: Managing finances, taxes, and compliance.",
      ],
      Image: CreativeVisiblity,
    },
    {
      title: "DRIVING SALES & EXPANSION",
      description: "We empower businesses to reach new heights",
      services: [
        "Sales Enablement: Strategies, tools, and processes to boost revenue",
        "Investment Support: Helping entrepreneurs connect with interested angel groups",
      ],
      Image: DrivingSalesExpansion,
    },
    {
      title: "ENABLING EXCELLENCE",
      description:
        "For sustained success, we provide training and technology solutions:",
      services: [
        "E-Learning Solutions: Customized training modules for employee development.",
        "ERP & CRM Systems: Technology solutions to optimize workflows and automate operations.",
      ],
      Image: ScalingOprations,
    },
    {
      title: "EXPANDING BEYOND BUSINESS",
      description:
        "For entrepreneurs aiming to grow into new sectors or spaces",
      services: [
        "Space9space: Interior design and construction services for office and hospitality expansion",
      ],
      Image: LayingTheFoundation,
    },
  ];
  return (
    <div className="relative py-4 md:py-16 px-4">
      <Image
        width={135}
        height={300}
        src={stepsLine}
        alt={"title"}
        className="hidden md:flex absolute right-[45%] top-16"
      />
      {sections?.map((step, index) => (
        <HowItWorksContainer step={step} key={index} index={index} />
      ))}
    </div>
  );
};

export default HowItWorksSteps;
