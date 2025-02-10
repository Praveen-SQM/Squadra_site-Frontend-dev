"use client";

import React from "react";
import HowItWorksSteps from "./components/HowItWorksSteps";
import FAQ from "./components/FAQ";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ArrowDown } from "lucide-react";

const DesktopUi = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-white">
      <div className="pt-[95px] bg-neutral-900">
        <BackgroundBeamsWithCollision>
          <div className="relative flex flex-col h-screen justify-center p-4">
            <p className="text-gray-200 text-[13px] md:text-[16px]">HOW IT WORKS</p>
            <h2 className="text-[44px] leading-[48px] md:leading-none relative z-20 md:text-[58px] lg:text-7xl font-bold md:text-center text-white dark:text-white font-sans tracking-tight">
              Crafting Digital{" "}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">Narratives.</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                  <span className="">Narratives.</span>
                </div>
              </div>
            </h2>
            <div className="absolute bottom-36 w-full text-white">
              <button
                onClick={handleScrollDown}
                className="flex w-full items-center justify-center text-gray-500 gap-2 hover:text-gray-100 transition-colors"
              >
                <ArrowDown />
                <p>Scroll To Explore</p>
                <ArrowDown />
              </button>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
      <div className="h-fit flex flex-col w-full justify-center items-center">
        <HowItWorksSteps />
      </div>
      <div className="w-full bg-slate-100">
        <FAQ />
      </div>
    </div>
  );
};

export default DesktopUi;
