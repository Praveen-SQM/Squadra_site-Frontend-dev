"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ClientsHeroImage from "@/utilities/images/mm.png";

// Import client logos
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
import clientColdStone from "@/utilities/icons/client-coldStone.png";
import clientFreshHome from "@/utilities/icons/client-freshHome.png";
import clientIBC from "@/utilities/icons/client-ICB.png";
import clientMisoSexy from "@/utilities/icons/client-MisoSexy.png";
import clientPrimeGold from "@/utilities/icons/client-primeGold.png";
import clientSynergy from "@/utilities/icons/client-synergy.png";

const ClientPage = () => {
  const [visibleCount, setVisibleCount] = useState(40);
  const clientsPerPage = 30;

  // Calculate columns based on screen size
  const getColumnsPerRow = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 640) return 1; // mobile
      if (width < 768) return 2; // small tablet
      if (width < 1024) return 3; // tablet
      if (width < 1280) return 4; // small desktop
      return 5; // large desktop
    }
    return 5; // default for SSR
  };

  const [columnsPerRow, setColumnsPerRow] = useState(5);

  // Update columns on resize
  useEffect(() => {
    setColumnsPerRow(getColumnsPerRow());

    const handleResize = () => {
      setColumnsPerRow(getColumnsPerRow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clients = [
    { src: clientColdStone, alt: "Client ColdStone", isLarge: true },
    { src: clientFreshHome, alt: "Client FreshHome", isLarge: true },
    { src: clientIBC, alt: "Client ICB", isLarge: true },
    { src: clientMisoSexy, alt: "Client MisoSexy", isLarge: true },
    { src: clientPrimeGold, alt: "Client PrimeGold", isLarge: true },
    { src: clientSynergy, alt: "Client Synergy", isLarge: true },
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

  const renderClientGrid = () => {
    const rows = [];
    const totalRows = Math.ceil(displayedClients.length / columnsPerRow);
    const showMoreButtonRow = totalRows > 1 ? totalRows - 2 : -1;
    const showMoreButtonCol = columnsPerRow - 1;

    for (let i = 0; i < totalRows; i++) {
      const isShowMoreRow = i === showMoreButtonRow;
      const clientsInThisRow = columnsPerRow;
      const rowClients = displayedClients.slice(
        i * columnsPerRow,
        i * columnsPerRow + clientsInThisRow
      );
      const isLastRow = i === totalRows - 1;
      const shouldHideRow =
        isLastRow && remainingClients > 0 && showMoreButtonRow >= 0;

      rows.push(
        <div
          key={i}
          className={`grid gap-x-[10px] gap-y-[10px] relative ${
            shouldHideRow ? "hidden" : ""
          } ${i !== totalRows - 1 ? "mb-[30px]" : ""}`}
          style={{
            gridTemplateColumns: `repeat(${columnsPerRow}, minmax(0, 1fr))`,
            justifyItems: "center",
          }}
        >
          {rowClients.map((client, index) => {
            const globalIndex = i * columnsPerRow + index;
            const shouldShowMoreButton =
              isShowMoreRow &&
              index === showMoreButtonCol &&
              remainingClients > 0;

            if (shouldShowMoreButton) {
              return (
                <div key={`more-${globalIndex}`} className="relative">
                  {/* Client card */}
                  <div className="flex flex-wrap items-center justify-center bg-white border-r border-[#E7E7E7] w-[228px] h-[182px]">
                    <div
                      style={{
                        width: "203px",
                        height: "108px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "223px",
                          height: "128px",
                          margin: "-10px",
                        }}
                      >
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
                        <span className="text-[22px] leading-[100%] font-medium text-center text-[#06135B] font-[SF Pro Text]">
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
                className="flex flex-wrap items-center justify-center bg-white border-r border-[#E7E7E7] w-[228px] h-[182px] transform transition-transform duration-300 hover:scale-[1.03]"
              >
                <div
                  style={{
                    width: "203px",
                    height: "108px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{ width: "223px", height: "128px", margin: "-10px" }}
                  >
                    <Image
                      unoptimized
                      priority
                      quality={100}
                      src={client.src}
                      alt={client.alt}
                      width={223}
                      height={168}
                      className={`object-contain shadow-none rounded-lg ${
                        client.isLarge ? "pb-16 px-16 pt-5" : ""
                      }`}
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
      <section className="py-96 md:py-20 flex items-center relative overflow-hidden ">
        {/* Animated background elements */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="order-1 lg:order-1 lg:col-span-6 space-y-4 lg:space-y-6">
              <div
                className={`inline-block ${
                  true ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                {/* <span className="sm:text-sm text-[11px] font-medium text-gray-600 uppercase tracking-wider">
                  CLIENTS
                </span> */}
              </div>

              <div
                className={`space-y-2 ${
                  true ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: "200ms" }}
              >
                <h1 className="text-6xl font-bold text-[#D96B06] leading-tight">
                  Proud to partner with{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-[#D96B06] to-[#FF8C42] bg-clip-text text-transparent">
                      exceptional clients
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#D96B06] to-[#FF8C42] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </span>{" "}
                  <span className="text-[#666666] font-normal">
                    for remarkable results.
                  </span>
                </h1>
                {/* <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mt-4">
                  Explore our Client Stories to see the transformative impact of
                  our partnerships.
                </p> */}
              </div>

              {/* <div
                className={`pt-6 lg:pt-8 ${
                  true ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: "400ms" }}
              >
                <button className="group relative inline-flex items-center px-8 py-4 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-gradient-to-r from-gray-900 to-gray-800">
                  <span className="relative text-lg">
                    Read More
                  </span>
                  <ArrowRight className="relative ml-3 w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-2" />
                </button>
              </div> */}

              {/* Stats */}
              <div
                className={`grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 ${
                  true ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: "600ms" }}
              >
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className={`absolute bottom-0 right-0 lg:right-8 w-full lg:w-1/2 h-[450px] xl:h-[500px] ${
            true ? "animate-slide-in-right" : "opacity-0 translate-x-full"
          }`}
          style={{ animationDelay: "800ms" }}
        >
          <Image
            src={ClientsHeroImage}
            alt="Team Collaboration"
            fill
            className="object-cover rounded-t-2xl lg:rounded-2xl"
            priority
          />
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 pb-32 w-full bg-gradient-to-b from-[#F8F9FA] to-[#F1F3F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-light text-center text-[#131313] mb-6 text-[clamp(32px,5vw,72px)] leading-[clamp(36px,6vw,84px)] tracking-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-[#1122A1] to-[#D96B06] bg-clip-text text-transparent font-semibold">
                Clients
              </span>
            </h2>
            <p className="text-gray-600 mx-auto font-normal text-lg leading-relaxed sm:max-w-[720px] max-w-[380px]">
              Our focus is on building true partnerships and exceeding client
              expectations. Discover what sets us apart in our Client Stories.
            </p>

            {/* Decorative line */}
            {/* <div className="w-24 h-1 bg-gradient-to-r from-[#1122A1] to-[#D96B06] mx-auto mt-8 rounded-full" /> */}
          </div>

          <div className="space-y-8 mt-12">{renderClientGrid()}</div>
        </div>
      </section>
    </>
  );
};

export default ClientPage;
