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
      className="w-full h-full object-cover rounded-[22.94px] w-[230px] h-[130px] md:w-[435.11px] md:h-[262px] lg:w-[435.11px] lg:h-[262px]"
    />
  </div>
);

const BrandingCarousel = () => {
  const cardWidth = 435.11; // The width of the card
  const cardCount = 4; // Number of unique cards

  // Create an endless array of cards
  const generateEndlessCards = () => {
    const cards = [];
    // Generate a large number of cards to ensure continuous scrolling
    for (let i = 0; i < 100; i++) {
      cards.push(
        <Card key={i} alt={`card ${(i % cardCount) + 1}`} />
      );
    }
    return cards;
  };

  // Carousel animation settings for top carousel
  const topCarouselVariants = {
    animate: {
      x: [0, -cardWidth * cardCount], // Move left by card width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  // Carousel animation settings for bottom carousel (reverse direction)
  const bottomCarouselVariants = {
    animate: {
      x: [0, cardWidth * cardCount], // Move right by card width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="flex flex-col gap-6 w-full items-center bg-black overflow-hidden">
      <div className="w-[1200px] flex flex-col items-center">
        {/* Top Carousel */}
        <motion.div
          className="flex gap-3 w-full"
          variants={topCarouselVariants}
          animate="animate"
        >
          {generateEndlessCards()}
        </motion.div>

        {/* Bottom Carousel */}
        <motion.div
          className="flex gap-3 w-full"
          variants={bottomCarouselVariants}
          animate="animate"
        >
          {generateEndlessCards()}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandingCarousel;