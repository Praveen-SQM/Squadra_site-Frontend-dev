"use client";
import Image from "next/image";
import React from "react";
import clientTorque from "@/utilities/icons/top-zone.svg"
import clientHMG from "@/utilities/icons/hm-group.svg";
import clientBroncos from "@/utilities/icons/bronco.svg";
import clientDaddy from "@/utilities/icons/daddy.svg";
import clientDoubleTree from "@/utilities/icons/double-tree.svg";
import clientFerns from "@/utilities/icons/ferns.svg";
import clientGRC from "@/utilities/icons/gr-constructions.svg";
import clientGREE from "@/utilities/icons/gree.svg";
import clientHabitat from "@/utilities/icons/habitat.svg";
import clientOneSta from "@/utilities/icons/onesta.svg";
import clientPOI from "@/utilities/icons/pride-of-india.svg";
import clientS1522 from "@/utilities/icons/street.svg";
import clientVOIA from "@/utilities/icons/voia.svg";
import clientVIDA from "@/utilities/icons/vida.svg";
import clientNior from "@/utilities/icons/cafe-noir.svg";
import clientBB from "@/utilities/icons/bhangra-bistro.svg";
import chapterOne from "@/utilities/icons/chapter-one.svg";
import District from "@/utilities/icons/district.svg";
import Flo from "@/utilities/icons/flo.svg";
import Freshmenu from "@/utilities/icons/fresh-menu.svg";
import geometry from "@/utilities/icons/geometry.svg";
import happybrew from "@/utilities/icons/happy-brew.svg";
import HOK from "@/utilities/icons/house-of-karats.svg"
import houseOfDum from "@/utilities/icons/house-dum-biryani.svg"
import Ishaara from "@/utilities/icons/Ishaara.svg"
import Kyba from "@/utilities/icons/kyba.svg"
import LOTUS from "@/utilities/icons/lotus.svg"
import MDR from "@/utilities/icons/mdr.svg"
import MG from "@/utilities/icons/marigold.svg"
import Milano from "@/utilities/icons/milano.svg"
import Misosexy from "@/utilities/icons/misosexy.svg"
import OMEGA from "@/utilities/icons/omega.svg"
import Pacific from "@/utilities/icons/pacific.svg"
import Poco from "@/utilities/icons/poco.svg"
import Purity from "@/utilities/icons/purity.svg"
import ReviveLogo from "@/utilities/icons/revive.svg"
import Roshan from "@/utilities/icons/roshan-garden.svg"
import SouthernStar from "@/utilities/icons/southern-star.svg"
import Terrace from "@/utilities/icons/terrace.svg"
import Thrilled from "@/utilities/icons/thrilled.svg"
import Tipsy from "@/utilities/icons/tipsy.svg"
import Watsons from "@/utilities/icons/watsons.svg"
import { ArrowRight } from "lucide-react";

const ClientPage = () => {

    // const clients = Array.from({ length: 30 }, (_, i) => ({
    //     id: i + 1,
    //     name: `Client ${i + 1}`,
    //     logo: "/placeholder.svg",
    //     highlighted: i === 0, // First client is highlighted
    // }))

    const clients = [
        {
          src: clientVIDA,
          alt: "Client Vida"
        },
        {
          src: clientNior,
          alt: "Client Nior"
        },
        {
          src: clientVOIA,
          alt: "Client VOIA"
        },
        {
          src: clientS1522,
          alt: "Client Street"
        },
        {
          src: clientPOI,
          alt: "Client POI"
        },
        {
          src: clientOneSta,
          alt: "Client One Sta"
        },
        {
          src: clientHabitat,
          alt: "Client Habitat"
        },
        {
          src: clientGREE,
          alt: "Client Gree"
        },
        {
          src: clientGRC,
          alt: "Client Grc"
        },
        {
          src: clientFerns,
          alt: "Client Ferns"
        },
        {
          src: clientDoubleTree,
          alt: "Client Double Tree"
        },
        {
          src: clientDaddy,
          alt: "Client Daddy"
        },
        {
          src: clientBroncos,
          alt: "Client Broncos"
        },
        {
          src: clientHMG,
          alt: "Client HMG"
        },
        {
          src: clientTorque,
          alt: "Client Torque"
        },
        {
            src: clientBB,
            alt: "Client BB"
        },
        {
            src: chapterOne,
            alt: "Chapter one"
        },
        {
            src: District,
            alt: "District"
        },
        {
            src: Flo,
            alt: "Flo"
        },
        {
            src: Freshmenu,
            alt: "Freshmenu"
        },
        {
            src: geometry,
            alt: "geometry"
        },
        {
            src: happybrew,
            alt: "happybrew"
        },
        {
            src: HOK,
            alt: "HOK"
        },
        {
            src: houseOfDum,
            alt: "houseOfDum"
        },
        {
            src: Ishaara,
            alt: "Ishaara"
        },
        {
            src: Kyba,
            alt: "Kyba"
        },
        {
            src: LOTUS,
            alt: "LOTUS"
        },
        {
            src: MDR,
            alt: "MDR"
        },
        {
            src: MG,
            alt: "MG"
        },
        {
            src: Milano,
            alt: "Milano"
        },
        {
            src: Misosexy,
            alt: "Misosexy"
        },
        {
            src: OMEGA,
            alt: "OMEGA"
        },
        {
            src: Pacific,
            alt: "Pacific"
        },
        {
            src: Poco,
            alt: "Poco"
        },
        {
            src: Purity,
            alt: "Purity"
        },
        {
            src: ReviveLogo,
            alt: "ReviveLogo"
        },
        {
            src: Roshan,
            alt: "Roshan"
        },
        {
            src: SouthernStar,
            alt: "SouthernStar"
        },
        {
            src: Terrace,
            alt: "Terrace"
        },
        {
            src: Thrilled,
            alt: "Thrilled"
        },
        {
            src: Tipsy,
            alt: "Tipsy"
        },
        {
            src: Watsons,
            alt: "Watsons"
        }
      ]


    

  return (
    <>
    <div className="xl:py-[117px] sm:py-[109px] md:py-[104px] flex flex-col gap-[72px]">
     <div className="flex flex-col sm:gap-4 gap-2 items-start">
        <p className="font-normal sm:text-[20px] text-[12px] leading-6 text-[#6D6D6D]">Case Study. Clients</p>
        <p className="font-medium xl:text-[62px] xl:leading-[72px] sm:text-[52px] sm:leading-[62.05px] text-[40px] leading-[47.73px] text-[#131313] xl:max-w-[1192px] sm:max-w-[714px] max-w-[335px]">Proud to partner with clients for exceptional results.<span className="text-[#B0B0B0]">Explore our Client Stories to see the impact.</span></p>
     </div>
    </div>

    <section className="py-16 px-4 w-full bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-[300] mb-4 sm:text-[62px] sm:leading-[72px] text-[24px] leading-[28.64px] text-[#131313]">Our Clients</h2>
          <p className="text-gray-500 mx-auto font-normal sm:text-[18px] text-[16px] leading-6 sm:max-w-[668px] max-w-[335px]">
            Our focus is on building true partnerships and exceeding client expectations. Discover what sets us apart in
            our Client Stories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 lg:gap-3">
          {clients.map((client,index) => (
            <div key={index} className="rounded-lg  duration-300 flex items-center justify-center">
              <Image
              unoptimized
              priority
              quality={100}
                src={client?.src || "/placeholder.svg"}
                alt={client?.alt}
                width={300} 
                height={160}
                sizes="(max-width: 768px) 100vw, 250px"
                className="sm:h-[130px] sm:w-[250px] h-[100px] w-[150px] object-contain shadow-none rounded-lg"
              />

              </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ClientPage;
