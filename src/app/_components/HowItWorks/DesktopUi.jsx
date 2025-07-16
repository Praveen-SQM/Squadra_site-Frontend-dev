"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import HowItWorksSteps from "./components/HowItWorksSteps";
import FAQ from "./components/FAQ";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ArrowDown } from "lucide-react";
import HeroImage from "@/utilities/images/HowItWorks_hero.jpg";

const DesktopUi = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const animationRef = useRef(null);
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        targetScrollRef.current = window.scrollY;
      }
    };

    const animate = () => {
      const difference = targetScrollRef.current - currentScrollRef.current;
      const speed = 0.1; // Adjust this value to control smoothness (0.1 = smooth, 1 = instant)

      currentScrollRef.current += difference * speed;
      setScrollPosition(currentScrollRef.current);

      animationRef.current = requestAnimationFrame(animate);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleScrollDown = () => {
    if (
      typeof window !== "undefined" &&
      typeof window.scrollTo === "function"
    ) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const calculateBlur = () => {
    const maxBlur = 10;
    const blurValue =
      typeof window !== "undefined" && window.innerHeight
        ? (scrollPosition / window.innerHeight) * maxBlur
        : 0;
    return Math.min(blurValue, maxBlur);
  };

  const calculateTransform = () => {
    const translateY = scrollPosition;
    return translateY;
  };

  return (
    <div className="w-full bg-white">
      {/* <div className="pt-[95px] bg-neutral-900">
        <BackgroundBeamsWithCollision>
          <div className="relative flex flex-col h-screen justify-center p-4 overflow-hidden">
            <div
              style={{
                transform: `translate3d(0, ${calculateTransform()}px, 0)`,
                filter: `blur(${calculateBlur()}px)`,
                willChange: 'transform, filter',
              }}
              className="flex flex-col items-center transform-gpu"
            >
              <p className="text-gray-200 text-[13px] md:text-[16px] w-full text-start">HOW IT WORKS</p>
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
            </div>
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
      </div> */}

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <Image
          src={HeroImage}
          alt="Background"
          fill
          className="object-cover"
          priority // optional: loads image eagerly
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-6 sm:px-12 lg:px-32">
            <div className="max-w-8xl pt-[70px] flex flex-col gap-4 ">
              {" "}
              {/* Added padding-top here */}
              <h1
                className="text-sm pl-2
sm:text-base sm:leading-[20px] 
md:text-lg md:leading-[22px] 
lg:text-[20px] lg:leading-[19.2px] 
font-normal tracking-[0.02em] 
uppercase text-[#D1D1D1]
"
              >
                HOW IT WORKS
              </h1>
              <h2
                className="text-4xl 
sm:text-5xl sm:leading-tight 
md:text-6xl md:leading-[72px] 
lg:text-[82px] lg:leading-[100%] 
font-bold capitalize text-whitetext-4xl 
sm:text-5xl sm:leading-tight 
md:text-6xl md:leading-snug md:font-semibold 
lg:text-[clamp(2.5rem,4vw+1rem,5.125rem)] 
lg:leading-[clamp(3rem,4.2vw+1rem,6rem)] 
lg:font-bold 
text-white 
capitalize
"
              >
                Crafting Digital
                <br className="hidden sm:inline" /> Narratives
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="h-fit flex flex-col w-full justify-center items-center">
        <HowItWorksSteps />
      </div>
      <div className="w-full bg-[#F7F7F7]">
        <FAQ />
      </div>
    </div>
  );
};

export default DesktopUi;
