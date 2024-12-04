/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useEffect, useState } from "react";
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

const clientImages = [
  clientTorque,
  clientHMG,
  clientBroncos,
  clientDaddy,
  clientDoubleTree,
  clientFerns,
  clientGRC,
  clientGREE,
  clientHabitat,
  clientOneSta,
  clientPOI,
  clientS1522,
  clientVOIA,
  clientVIDA
];

const ClientsSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [clients, setClients] = useState<any>([]);

  useEffect(() => {
    setClients(clientImages);
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* @ts-expect-error */}
          {clients.map((img, index) => (

            <div
              key={index}
              className="flex justify-center items-center transform transition grayscale cursor-pointer duration-200 hover:shadow-lg hover:grayscale-0"
            >
              <Image
                src={img}
                alt={`Client ${index + 1}`}
                width={150}
                height={100} 
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
