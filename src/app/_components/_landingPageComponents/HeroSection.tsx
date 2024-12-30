'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const carouselImages = [
  // "https://squadra-media.s3.ap-south-1.amazonaws.com/c1.jpg",
  "https://squadra-media.s3.ap-south-1.amazonaws.com/c3.jpg",
  "https://squadra-media.s3.ap-south-1.amazonaws.com/c2.jpg",
  "https://squadra-media.s3.ap-south-1.amazonaws.com/c4.jpg",
  "https://squadra-media.s3.ap-south-1.amazonaws.com/c5.jpg"
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 2500) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

 

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel Background */}
      {carouselImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={src}
            alt={`Carousel image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl pt-60 md:pt-60 lg:pt-72">
            <h1 className="text-left text-4xl font-extralight tracking-tight text-white sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl lg:leading-tight md:leading-relaxed">
              Smart Solutions For <br className="md:inline" /> Your{" "}
              <span className="text-amber-500">Brand</span>
            </h1>
            <p className="mt-6 text-left text-lg text-gray-200 sm:text-xl md:text-xl">
              We handle the journey, so you can enjoy the destination.
            </p>
          </div>
        </div>
      </div>

    
    </div>
  )
}

export default HeroSection

