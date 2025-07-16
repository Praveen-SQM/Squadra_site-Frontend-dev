"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import ClientsHeroImage from "@/utilities/images/mm.png";

// Import client logos (already in your code)
import clientTorque from "@/utilities/icons/top-zone.svg";
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
import HOK from "@/utilities/icons/house-of-karats.svg";
import houseOfDum from "@/utilities/icons/house-dum-biryani.svg";
import Ishaara from "@/utilities/icons/Ishaara.svg";
import Kyba from "@/utilities/icons/kyba.svg";
import LOTUS from "@/utilities/icons/lotus.svg";
import MDR from "@/utilities/icons/mdr.svg";
import MG from "@/utilities/icons/marigold.svg";
import Milano from "@/utilities/icons/milano.svg";
import Misosexy from "@/utilities/icons/misosexy.svg";
import OMEGA from "@/utilities/icons/omega.svg";
import Pacific from "@/utilities/icons/pacific.svg";
import Poco from "@/utilities/icons/poco.svg";
import Purity from "@/utilities/icons/purity.svg";
import ReviveLogo from "@/utilities/icons/revive.svg";
import Roshan from "@/utilities/icons/roshan-garden.svg";
import SouthernStar from "@/utilities/icons/southern-star.svg";
import Terrace from "@/utilities/icons/terrace.svg";
import Thrilled from "@/utilities/icons/thrilled.svg";
import Tipsy from "@/utilities/icons/tipsy.svg";
import Watsons from "@/utilities/icons/watsons.svg";
import Bbath from "@/utilities/icons/clientBbath.png";
import Caic from "@/utilities/icons/clientCaic.png";
import Braugalie from "@/utilities/icons/clientBraugalie.png";  
import Novella from "@/utilities/icons/clientNovella.png";

const ClientPage = () => {
  const [visibleCount, setVisibleCount] = useState(40);
  const clientsPerPage = 30;

  // Calculate columns based on screen size
  const getColumnsPerRow = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return 1; // mobile
      if (width < 768) return 2; // small tablet
      if (width < 1024) return 3; // tablet
      if (width < 1280) return 4; // small desktop
      return 5; // large desktop
    }
    return 5; // default for SSR
  };

  const [columnsPerRow, setColumnsPerRow] = useState(5); // Start with default

  // Update columns on resize
  useEffect(() => {
    // Set initial value after component mounts
    setColumnsPerRow(getColumnsPerRow());

    const handleResize = () => {
      setColumnsPerRow(getColumnsPerRow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const clients = [
    { src: clientVIDA, alt: "Client Vida" },
    { src: clientNior, alt: "Client Nior" },
    { src: clientVOIA, alt: "Client VOIA" },
    { src: clientS1522, alt: "Client Street" },
    { src: clientPOI, alt: "Client POI" },
    { src: clientOneSta, alt: "Client One Sta" },
    { src: clientHabitat, alt: "Client Habitat" },
    { src: clientGREE, alt: "Client Gree" },
    { src: clientGRC, alt: "Client Grc" },
    { src: clientFerns, alt: "Client Ferns" },
    { src: clientDoubleTree, alt: "Client Double Tree" },
    { src: clientDaddy, alt: "Client Daddy" },
    { src: clientBroncos, alt: "Client Broncos" },
    { src: Bbath, alt: "Client Bbath" },
    { src: Caic, alt: "Client Caic" },
    { src: Braugalie, alt: "Client Braugalie" },
    { src: Novella, alt: "Client Novella" },
    { src: clientHMG, alt: "Client HMG" },
    { src: clientTorque, alt: "Client Torque" },
    { src: clientBB, alt: "Client BB" },
    { src: chapterOne, alt: "Chapter one" },
    { src: District, alt: "District" },
    { src: Flo, alt: "Flo" },
    { src: Freshmenu, alt: "Freshmenu" },
    { src: geometry, alt: "geometry" },
    { src: happybrew, alt: "happybrew" },
    { src: HOK, alt: "HOK" },
    { src: houseOfDum, alt: "houseOfDum" },
    { src: Ishaara, alt: "Ishaara" },
    { src: Kyba, alt: "Kyba" },
    { src: LOTUS, alt: "LOTUS" },
    { src: MDR, alt: "MDR" },
    { src: MG, alt: "MG" },
    { src: Milano, alt: "Milano" },
    { src: Misosexy, alt: "Misosexy" },
    { src: OMEGA, alt: "OMEGA" },
    { src: Pacific, alt: "Pacific" },
    { src: Poco, alt: "Poco" },
    { src: Purity, alt: "Purity" },
    { src: ReviveLogo, alt: "ReviveLogo" },
    { src: Roshan, alt: "Roshan" },
    { src: SouthernStar, alt: "SouthernStar" },
    { src: Terrace, alt: "Terrace" },
    { src: Thrilled, alt: "Thrilled" },
    { src: Tipsy, alt: "Tipsy" },
    { src: Watsons, alt: "Watsons" },
  ];

  const displayedClients = clients.slice(0, visibleCount);
  const remainingClients = clients.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + clientsPerPage, clients.length));
  };

  // const renderClientGrid = () => {
  //   const rows = [];

  //   for (let i = 0; i < Math.ceil(displayedClients.length / 5); i++) {
  //     const isEighthRow = i === 7;
  //     const clientsInThisRow = isEighthRow && remainingClients > 0 ? 4 : 5;
  //     const rowClients = displayedClients.slice(i * 5, i * 5 + clientsInThisRow);

  //     rows.push(
  //       <div
  //         key={i}
  //         className="grid grid-cols-5 gap-x-[10px] gap-y-[10px] relative"
  //       >
  //         {rowClients.map((client, index) => {
  //           const isLastInRow = index === clientsInThisRow - 1;
  //           return (
  //             <div
  //               key={i * 5 + index}
  //               className={`flex flex-wrap items-center justify-center bg-white ${
  //                 isLastInRow ? "border-r border-[#E7E7E7] w-[228px] h-[182px]" : " border-r border-[#E7E7E7] w-[228px] h-[182px]"
  //               }`}
  //             >
  //               <div
  //                 style={{
  //                   width: "203px",
  //                   height: "108px",
  //                   overflow: "hidden",
  //                 }}
  //               >
  //                 <div
  //                   style={{
  //                     width: "223px", // 200px + 10px on both sides
  //                     height: "128px", // 200px + 10px on both sides
  //                     margin: "-10px",
  //                   }}
  //                 >
  //                   {/* Inner content */}
  //                   <Image
  //                     unoptimized
  //                     priority
  //                     quality={100}
  //                     src={client.src}
  //                     alt={client.alt}
  //                     width={223}
  //                     height={128}
  //                     className="object-contain rounded-lg"
  //                     // style={{
  //                     //   width: "228.8px",
  //                     //   height: "182px",
  //                     //   opacity: 1,
  //                     // }}
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //           );
  //         })}

  //         {/* +X more button in 8th row 5th position */}
  //         {isEighthRow && remainingClients > 0 && (
  //           <div className="col-span-1 flex justify-center">
  //             <button
  //               onClick={handleLoadMore}
  //               className="w-[228.8px] h-[182px] flex items-center justify-center bg-[#FFFFFF] hover:bg-gray-100 transition-colors duration-300"
  //             >
  //               <div className="text-center flex items-center rounded-[50%] justify-center w-[116px] h-[116px] bg-[#E7EEFF42] border border-[#D2E1FF] backdrop-blur-[3px]">
  //                 <span className="text-[22px] leading-[100%] font-medium text-center text-[#1227C5] font-[SF Pro Text]">
  //                   {remainingClients}+more
  //                 </span>
  //               </div>
  //             </button>
  //           </div>
  //         )}
  //       </div>
  //     );
  //   }

  //   return rows;
  // };

const renderClientGrid = () => {
  const rows = [];

  // Calculate total rows needed
  const totalRows = Math.ceil(displayedClients.length / columnsPerRow);

  // Show "+X more" button in the last column of the second-to-last row
  const showMoreButtonRow = totalRows > 1 ? totalRows - 2 : -1;
  const showMoreButtonCol = columnsPerRow - 1;

  for (let i = 0; i < totalRows; i++) {
    const isShowMoreRow = i === showMoreButtonRow;
    const clientsInThisRow = columnsPerRow;
    const rowClients = displayedClients.slice(i * columnsPerRow, i * columnsPerRow + clientsInThisRow);

    const isLastRow = i === totalRows - 1;
    const shouldHideRow = isLastRow && remainingClients > 0 && showMoreButtonRow >= 0;

    rows.push(
      <div
        key={i}
        className={`grid gap-y-[10px] relative ${shouldHideRow ? 'hidden' : ''} ${i !== totalRows - 1 ? 'mb-[30px]' : ''}`}
        style={{
          gridTemplateColumns: `repeat(${columnsPerRow}, minmax(0, 1fr))`,
          justifyItems: 'center',
        }}
      >
        {rowClients.map((client, index) => {
          const globalIndex = i * columnsPerRow + index;
          const shouldShowMoreButton = isShowMoreRow && index === showMoreButtonCol && remainingClients > 0;

          if (shouldShowMoreButton) {
            return (
              <div key={`more-${globalIndex}`} className="relative">
                {/* Client card */}
                <div className="flex flex-wrap items-center justify-center bg-white w-[228px] h-[182px]">
                  <div style={{ width: "203px", height: "108px", overflow: "hidden" }}>
                    <div style={{ width: "223px", height: "128px", margin: "-10px" }}>
                      <Image
                        unoptimized
                        priority
                        quality={100}
                        src={client.src}
                        alt={client.alt}
                        width={223}
                        height={128}
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* "+X more" overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handleLoadMore}
                    className="w-[228px] h-[182px] flex items-center justify-center bg-[#FFFFFF] hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="text-center flex items-center rounded-[50%] justify-center w-[116px] h-[116px] bg-[#E7EEFF42] border border-[#D2E1FF] backdrop-blur-[3px]">
                      <span className="text-[22px] leading-[100%] font-medium text-center text-[#1227C5] font-[SF Pro Text]">
                        {remainingClients}+more
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            );
          }

          return (
            <div
              key={globalIndex}
              className="flex flex-wrap items-center justify-center bg-white w-[228px] h-[182px] transform transition-transform duration-300 hover:scale-[1.03]"
            >
              <div style={{ width: "203px", height: "108px", overflow: "hidden" }}>
                <div style={{ width: "223px", height: "128px", margin: "-10px" }}>
                  <Image
                    unoptimized
                    priority
                    quality={100}
                    src={client.src}
                    alt={client.alt}
                    width={223}
                    height={128}
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-fit">{rows}</div>
    </div>
  );
};


  return (
    <>
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 lg:col-span-6 space-y-4 lg:space-y-6">
              <div className="inline-block">
                <span className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#1122A1] uppercase">
                  CASE STUDY. CLIENTS
                </span>
              </div>
              <div className="space-y-2">
                <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium leading-snug text-[#D96B06]">
                  Proud to partner with clients for exceptional results.{" "}
                  <span className="text-[#888888]">
                    Explore our Client Stories to see the impact.
                  </span>
                </h1>
              </div>
              <div className="pt-4 lg:pt-6">
                <button className="inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 text-white font-normal rounded-lg hover:opacity-80 transition-colors duration-300 group bg-black">
                  <span className="text-sm lg:text-base">Case Studies</span>
                  <ArrowRight className="ml-3 w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6 relative lg:pl-12 transform lg:translate-x-6">
              <div className="relative w-full h-64 sm:h-80 md:h-[600px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src={ClientsHeroImage}
                  alt="Team Collaboration"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60 bg-white" />
                <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full opacity-80 bg-white" />
                <div className="absolute top-1/3 left-4 w-1 h-1 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 pb-40 w-full bg-[#F6F6F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-0 md:mb-28">
            <h2 className="font-sf font-[300] text-center text-[#131313] mb-4 text-[clamp(24px,5vw,62px)] leading-[clamp(28.64px,6vw,72px)]">
              Our Clients
            </h2>
            <p className="text-gray-500 mx-auto font-normal sm:text-[18px] text-[16px] leading-6 sm:max-w-[668px] max-w-[335px]">
              Our focus is on building true partnerships and exceeding client
              expectations. Discover what sets us apart in our Client Stories.
            </p>
          </div>

          <div className="space-y-4 relative">{renderClientGrid()}</div>
        </div>
      </section>
    </>
  );
};

export default ClientPage;