// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

import Image from "next/image";

import clientTorque from "../../../utilities/icons/clent-torque.svg";
// import clientHMG from "../../../utilities/icons/client-HMGroup.webp";
// import clientBroncos from "../../../utilities/icons/client-broncos.webp";
// import clientDaddy from "../../../utilities/icons/client-daddy.webp";
import clientDoubleTree from "../../../utilities/icons/client-doubleTree.webp";
import clientFerns from "../../../utilities/icons/client-ferns.webp";
// import clientGRC from "../../../utilities/icons/client-grConst.webp";
import clientGREE from "../../../utilities/icons/client-gree.webp";
import clientHabitat from "../../../utilities/icons/client-habitat.webp";
import clientOneSta from "../../../utilities/icons/client-onesta.webp";
import clientPOI from "../../../utilities/icons/client-poi.webp";
// import clientS1522 from "../../../utilities/icons/client-street1522.webp";
import clientVOIA from "../../../utilities/icons/client-voia.webp";
import clientVIDA from "../../../utilities/icons/client-vida.webp";
// import clientNior from "../../../utilities/icons/client-cafeNior.webp";
// import bbath from "../../../utilities/icons/client-bbath-logo.png";
import clientColdStone from "../../../utilities/icons/client-coldStone.png";
// import clientFreshHome from "../../../utilities/icons/client-freshHome.png";
// import clientIBC from "../../../utilities/icons/client-ICB.png";
// import clientMisoSexy from "../../../utilities/icons/client-MisoSexy.png";
// import clientPrimeGold from "../../../utilities/icons/client-primeGold.png";
// import clientSynergy from "../../../utilities/icons/client-synergy.png";

// function ClientsSection() {
//   const logos = [
//     { name: "Brand 16", url: bbath },
//     { name: "Brand 17", url: clientColdStone, noPadding: true },
//     { name: "Brand 18", url: clientFreshHome, noPadding: true },
//     { name: "Brand 19", url: clientIBC },
//     { name: "Brand 20", url: clientMisoSexy },
//     { name: "Brand 21", url: clientPrimeGold },
//     { name: "Brand 22", url: clientSynergy, noPadding: true },
//     { name: "VIDA", url: clientVIDA },
//     { name: "Brand 8", url: clientTorque },
//     { name: "E-ZONE", url: clientVOIA },
//     { name: "Brand 3", url: clientPOI },
//     { name: "GREE", url: clientGREE },
//     { name: "Habitat India", url: clientHabitat },
//     { name: "Double Tree", url: clientDoubleTree },
//     { name: "Brand 10", url: clientBroncos },
//     { name: "Cafe Noir", url: clientFerns },
//     { name: "Brand 9", url: clientHMG },
//     { name: "Brand 11", url: clientDaddy },
//     { name: "Brand 12", url: clientOneSta },
//     { name: "Brand 13", url: clientGRC },
//     { name: "Brand 14", url: clientS1522 },
//     { name: "Brand 15", url: clientNior },
//   ];

//   const [scrollIndex, setScrollIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setScrollIndex((prev) => (prev + 1) % logos.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [logos.length]);

//   return (
//     <div className="container mx-auto max-w-7xl px-4 sm:px-6 xl:px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
//       {/* ✅ Flexbox for larger screens - centers last row */}
//       <div className="hidden md:flex md:flex-wrap md:justify-center gap-6 lg:gap-8">
//         {logos.map((logo, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 w-48 lg:w-52 xl:w-56 2xl:w-54"
//           >
//             <div
//               className={`relative w-full h-20 sm:h-28 lg:h-34 m-2 ${
//                 logo.noPadding ? "scale-50" : "scale-100"
//               } transition-transform duration-300`}
//             >
//               <Image
//                 src={logo.url}
//                 alt={`${logo.name} logo`}
//                 fill
//                 sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 30vw, 20vw"
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Carousel for mobile screens */}
//       <div className="md:hidden relative">
//         <div className="overflow-hidden rounded-lg">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${scrollIndex * 100}%)`,
//             }}
//           >
//             {logos.map((logo, index) => (
//               <div key={index} className="w-full flex-shrink-0 px-2">
//                 <div className="flex items-center justify-center mx-2">
//                   <div className={`relative w-full h-28`}>
//                     <Image
//                       src={logo.url}
//                       alt={`${logo.name} logo`}
//                       fill
//                       sizes="100vw"
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Optional: Add indicators for mobile carousel */}
//         <div className="flex justify-center mt-4 space-x-2">
//           {logos.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setScrollIndex(index)}
//               className={`w-2 h-2 rounded-full transition-all duration-200 ${
//                 index === scrollIndex
//                   ? "bg-gray-800 w-6"
//                   : "bg-gray-300 hover:bg-gray-400"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ClientsSection;

const clients = [
  { src: clientVIDA, alt: "VIDA" },
  { src: clientGREE, alt: "GREE" },
  { src: clientHabitat, alt: "Habitat" },
  { src: clientDoubleTree, alt: "DoubleTree" },
  { src: clientColdStone, alt: "Cold Stone Creamery" },
  { src: clientOneSta, alt: "Onesta" },
  { src: clientFerns, alt: "Ferns" },
  { src: clientPOI, alt: "POI" },
  { src: clientVOIA, alt: "VOIA" },
  { src: clientTorque, alt: "Torque" },
];

const industries = [
  "Real Estate",
  "FMCG",
  "Education",
  "Healthcare",
  "F&B",
  "Maritime",
  "Sports & Lifestyle",
];

const ClientsSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[hsl(var(--squadra-gray))]">
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-[hsl(var(--squadra-gold))] font-semibold uppercase text-sm tracking-wider mb-4">
            Trusted Partners
          </p>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[hsl(var(--squadra-dark))]">
            Built for <span className="text-gradient">Ambitious Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            We work with businesses that want to dominate, not just compete.
          </p>
          <p className="text-base text-muted-foreground">
            From global leaders to fast-growing disruptors who trust Squadra to
            deliver clarity and performance at scale.
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {clients.map((client, i) => (
            <div
              key={i}
              className="card-clean p-8 flex items-center justify-center group hover:border-[hsl(var(--squadra-gold))] min-h-[120px]"
            >
              <Image
                src={client.src}
                alt={client.alt}
                className="max-h-28 max-w-[180px] w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity scale-110"
                width={180}
                height={112}
              />
            </div>
          ))}
        </div>

        {/* Additional Clients Text */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            <span className="font-semibold text-[hsl(var(--squadra-dark))]">
              Synergy Marine
            </span>{" "}
            |
            <span className="font-semibold text-[hsl(var(--squadra-dark))]">
              {" "}
              OIA Global
            </span>{" "}
            |
            <span className="font-semibold text-[hsl(var(--squadra-dark))]">
              {" "}
              Prime Golf
            </span>{" "}
            |
            <span className="font-semibold text-[hsl(var(--squadra-dark))]">
              {" "}
              Sea Learning
            </span>{" "}
            |
            <span className="font-semibold text-[hsl(var(--squadra-dark))]">
              {" "}
              Aisshpra Jewels
            </span>{" "}
            |
            <span className="font-semibold text-[hsl(var(--squadra-dark))]">
              {" "}
              NRRS
            </span>{" "}
            |
            <span className="font-semibold text-[hsl(var(--squadra-dark))]">
              {" "}
              Tradelink
            </span>{" "}
            |
            <span className="font-semibold text-[hsl(var(--squadra-dark))]">
              {" "}
              CMR
            </span>
            <span className="text-muted-foreground"> and more</span>
          </p>
        </div>

        {/* Industries */}
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-white border border-border text-sm font-medium text-[hsl(var(--squadra-dark))]"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
