"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Card Component
const Card = ({ alt }) => (
  <div className="flex-shrink-0 rounded-[22.94px] bg-gray-300">
    <Image
      src="https://s3-alpha-sig.figma.com/img/aeaa/1e68/dabb1cb0c5b86d53f6757676a718effd?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HHE541t6KTzOO2GOGvvfVEzllE5qstxEUFKqWIHQGYWO8AEZAhSSX6StWIB18FtrFnSNrZXKWb5sRkx9fiM4tYfP9swXtbE-uwHhStVWiV1V3N8gzkFTl0d95rmJj6yrM00bf5Ys4k0ius-S3OCwQp4vtbimXE6c3KKCH-RrhPuL~BfPfmrxVimZxAqZog~4XSqZAVIDMLZXbPjwQ1bXozHn6RKXmGAAYHa5aLFJkBIXDdJtnpHtT4MQ-tBU5Q-8Ssj169TYzc7OUXLUcBgMEzklkPMJxknLZguZupZInCWTXwYhiWUuEeV6nnPel-sLaQ~GOJSNAPQB9Ah1gsmf0w__"
      alt={alt}
      width={435}
      height={262}
      className="w-full h-full object-cover rounded-[22.94px] sm:w-[330px] sm:h-[200px] md:w-[435.11px] md:h-[262px] lg:w-[435.11px] lg:h-[262px]"
    />
  </div>
);

const BrandingCarousel = () => {
  const cardWidth = 435.11; // The width of the card
  const cardHeight = 262; // The height of the card

  // Carousel animation settings
  const carouselVariants = {
    animate: {
      x: [-cardWidth, 0], // Move left by card width and reset to the start position
      transition: {
        x: {
          repeat: Infinity, // Infinite loop
          repeatType: "loop",
          duration: 10, // 10 seconds for one full scroll
          ease: "linear",
        },
      },
    },
  };

  return (
    <>
      {/* Top Carousel Section */}
      <div className="flex flex-col gap-6 w-full items-center bg-black">
        <div className="w-[1200px] flex flex-col items-center">
          <motion.div
            className="flex gap-3"
            variants={carouselVariants}
            animate="animate"
            style={{ display: "flex" }}
          >
            {/* Duplicate the cards for infinite scrolling */}
            <Card alt="card 1" />
            <Card alt="card 2" />
            <Card alt="card 3" />
            <Card alt="card 4" />
            <Card alt="card 1" />
            <Card alt="card 2" />
            <Card alt="card 3" />
            <Card alt="card 4" />
          </motion.div>
        </div>

        {/* Bottom Carousel Section */}
        <motion.div
          className="flex gap-3"
          variants={{
            animate: {
              x: [cardWidth, 0], // Opposite direction for the bottom carousel
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 10,
                  ease: "linear",
                },
              },
            },
          }}
          animate="animate"
          style={{ display: "flex" }}
        >
          {/* Duplicate the cards for infinite scrolling */}
          <Card alt="card 1" />
          <Card alt="card 2" />
          <Card alt="card 3" />
          <Card alt="card 4" />
          <Card alt="card 1" />
          <Card alt="card 2" />
          <Card alt="card 3" />
          <Card alt="card 4" />
        </motion.div>
      </div>
    </>
  );
};

export default BrandingCarousel;
