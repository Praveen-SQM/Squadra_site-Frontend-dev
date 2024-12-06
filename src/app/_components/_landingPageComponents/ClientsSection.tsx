/* eslint-disable @typescript-eslint/ban-ts-comment */

import React from "react";
import Image from "next/image";

import clientTorque from "../../../utilities/icons/clent-torque.svg";
import clientHMG from "../../../utilities/icons/client-HMGroup.svg";
import clientBroncos from "../../../utilities/icons/client-broncos.svg";
import clientDaddy from "../../../utilities/icons/client-daddy.svg";
import clientDoubleTree from "../../../utilities/icons/client-doubleTree.svg";
import clientFerns from "../../../utilities/icons/client-ferns.svg";
import clientGRC from "../../../utilities/icons/client-grConst.svg";
import clientGREE from "../../../utilities/icons/client-gree.svg";
import clientHabitat from "../../../utilities/icons/client-habitat.svg";
import clientOneSta from "../../../utilities/icons/client-onesta.svg";
import clientPOI from "../../../utilities/icons/client-poi.svg";
import clientS1522 from "../../../utilities/icons/client-street1522.svg";
import clientVOIA from "../../../utilities/icons/client-voia.svg";
import clientVIDA from "../../../utilities/icons/client-vida.svg";



 function ClientsSection() {
  const logos = [
  { name: "VIDA", url: clientVIDA },
  { name: "E-ZONE", url: clientVOIA }, // Adjust this with the correct mapping if VOIA is not for E-ZONE
  { name: "Brand 3", url: clientPOI }, 
  { name: "GREE", url: clientGREE },
  { name: "Habitat India", url: clientHabitat },
  { name: "Double Tree", url: clientDoubleTree },
  { name: "Cafe Noir", url: clientFerns }, 
  { name: "Brand 8", url: clientTorque }, 
  { name: "Brand 9", url: clientHMG }, 
  { name: "Brand 10", url: clientBroncos }, 
  { name: "Brand 11", url: clientDaddy }, 
  { name: "Brand 12", url: clientOneSta }, 
  { name: "Brand 13", url: clientGRC }, 
  { name: "Brand 14", url: clientS1522 }, 
  { name: "Brand 15", url: clientVIDA }, 
];

  return (
       <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-6 sm:py-8 md:py-12 lg:py-24">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-0 bg-white rounded-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            <div className="relative w-full h-28">
              <Image
                src={logo.url}
                alt={`${logo.name} logo`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



export default ClientsSection;
