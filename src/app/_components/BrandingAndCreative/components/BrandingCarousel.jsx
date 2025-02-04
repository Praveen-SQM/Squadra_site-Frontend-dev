"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Card Component
const Card = ({ alt }) => (
  <div className="w-[435.11px] h-[262px] rounded-[22.94px] bg-gray-300 flex-shrink-0">
    <Image
      src="https://via.placeholder.com/435x262"
      alt={alt}
      width={435}
      height={262}
      className="w-full h-full object-cover rounded-[22.94px]"
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
            style={{ display: 'flex' }}
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
            ...carouselVariants,
            animate: { x: [cardWidth, 0] }, // Opposite direction for the bottom carousel
          }}
          animate="animate"
          style={{ display: 'flex' }}
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
