import React from "react";
import images from "../../../utilities/icons/contatc-us.svg";
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

 function CustomerJourneySection() {
  const services = [
    {
      title: "Brand Identity &\nLogo Design",
      description: "Our team designs logos that capture your vision and values.",
      image: images
    },
    {
      title: "Product Photography &\nMedia Production",
      description: "We create pro visuals to showcase your brand online and on social media.",
      image: images
    },
    {
      title: "Website Development &\nE-commerce Setup",
      description: "We design websites that look great and drive seamless user experiences for conversions.",
      image: images
    },
     {
      title: "Brand Identity &\nLogo Design",
      description: "Our team designs logos that capture your vision and values.",
      image: images
    },
    {
      title: "Product Photography &\nMedia Production",
      description: "We create pro visuals to showcase your brand online and on social media.",
      image: images
    },
    {
      title: "Website Development &\nE-commerce Setup",
      description: "We design websites that look great and drive seamless user experiences for conversions.",
      image: images
    }
  ]

  return (
<section className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="space-y-2 mb-12">
        <p className="text-sm text-gray-600 uppercase tracking-wider">CUSTOMER JOURNEY</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          How <span className="text-orange-500">Squadra Media</span> Drives Your Growth.
        </h2>
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service, index) => (
          <Card key={index} className="border-none shadow-none bg-gray-50 overflow-hidden">
            <div className="relative aspect-[3/2]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold whitespace-pre-line mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default CustomerJourneySection