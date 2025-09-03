"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import clientTorque from "../../../utilities/icons/clent-torque.svg";
import clientHMG from "../../../utilities/icons/client-HMGroup.webp";
import clientBroncos from "../../../utilities/icons/client-broncos.webp";
import clientDaddy from "../../../utilities/icons/client-daddy.webp";
import clientDoubleTree from "../../../utilities/icons/client-doubleTree.webp";
import clientFerns from "../../../utilities/icons/client-ferns.webp";
import clientGRC from "../../../utilities/icons/client-grConst.webp";
import clientGREE from "../../../utilities/icons/client-gree.webp";
import clientHabitat from "../../../utilities/icons/client-habitat.webp";
import clientOneSta from "../../../utilities/icons/client-onesta.webp";
import clientPOI from "../../../utilities/icons/client-poi.webp";
import clientS1522 from "../../../utilities/icons/client-street1522.webp";
import clientVOIA from "../../../utilities/icons/client-voia.webp";
import clientVIDA from "../../../utilities/icons/client-vida.webp";
import clientNior from "../../../utilities/icons/client-cafeNior.webp";
import bbath from "../../../utilities/icons/client-bbath-logo.png";
import clientColdStone from "../../../utilities/icons/client-coldStone.png";
import clientFreshHome from "../../../utilities/icons/client-freshHome.png";
import clientIBC from "../../../utilities/icons/client-ICB.png";
import clientMisoSexy from "../../../utilities/icons/client-MisoSexy.png";
import clientPrimeGold from "../../../utilities/icons/client-primeGold.png";
import clientSynergy from "../../../utilities/icons/client-synergy.png";

function ClientsSection() {
  const logos = [
    { name: "Brand 16", url: bbath },
    { name: "Brand 17", url: clientColdStone, noPadding: true },
    { name: "Brand 18", url: clientFreshHome, noPadding: true },
    { name: "Brand 19", url: clientIBC },
    { name: "Brand 20", url: clientMisoSexy },
    { name: "Brand 21", url: clientPrimeGold },
    { name: "Brand 22", url: clientSynergy, noPadding: true },
    { name: "VIDA", url: clientVIDA },
    { name: "Brand 8", url: clientTorque },
    { name: "E-ZONE", url: clientVOIA },
    { name: "Brand 3", url: clientPOI },
    { name: "GREE", url: clientGREE },
    { name: "Habitat India", url: clientHabitat },
    { name: "Double Tree", url: clientDoubleTree },
    { name: "Brand 10", url: clientBroncos },
    { name: "Cafe Noir", url: clientFerns },
    { name: "Brand 9", url: clientHMG },
    { name: "Brand 11", url: clientDaddy },
    { name: "Brand 12", url: clientOneSta },
    { name: "Brand 13", url: clientGRC },
    { name: "Brand 14", url: clientS1522 },
    { name: "Brand 15", url: clientNior },
  ];

  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 max-w-7xl py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      {/* ✅ Grid for larger screens */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white rounded-sm shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            <div
              className={`relative w-full h-28 ${
                logo.noPadding ? "mx-20" : ""
              }`}
            >
              <Image
                src={logo.url}
                alt={`${logo.name} logo`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Carousel for mobile screens */}
      <div className="md:hidden overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${scrollIndex * 100}%)`,
            width: `${logos.length * 100}%`,
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
              style={{ flex: "0 0 100%" }} // Each slide takes full width
            >
              <div className="flex items-center justify-center bg-white rounded-sm shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
                <div className="relative w-full h-28">
                  <Image
                    src={logo.url}
                    alt={`${logo.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientsSection;
