import Image from "next/image";

import clientTorque from "../../../../utilities/icons/clent-torque.svg";
import clientDoubleTree from "../../../../utilities/icons/client-doubleTree.webp";
import clientFerns from "../../../../utilities/icons/client-ferns.webp";
import clientGREE from "../../../../utilities/icons/client-gree.webp";
import clientHabitat from "../../../../utilities/icons/client-habitat.webp";
import clientOneSta from "../../../../utilities/icons/client-onesta.webp";
import clientPOI from "../../../../utilities/icons/client-poi.webp";
import clientVOIA from "../../../../utilities/icons/client-voia.webp";
import clientVIDA from "../../../../utilities/icons/client-vida.webp";
import clientColdStone from "../../../../utilities/icons/client-coldStone.png";
import clientBhartiyaMall from "../../../../utilities/icons/bhartiya-mall.jpg";
import clientFTHDaily from "../../../../utilities/icons/fthdaily_logo.webp";
import clientIBMCloud from "../../../../utilities/icons/ibm_cloud_logo.jpg";
import clientJWMarriott from "../../../../utilities/icons/JWMarriott.png";
import clientSobha from "../../../../utilities/icons/shobha-limited.webp";

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
  { src: clientBhartiyaMall, alt: "Bhartiya Mall of Bengaluru" },
  { src: clientFTHDaily, alt: "FTH Daily" },
  { src: clientIBMCloud, alt: "IBM Cloud" },
  { src: clientJWMarriott, alt: "JW Marriott" },
  { src: clientSobha, alt: "Sobha Limited" },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {clients.map((client, i) => (
            <div
              key={i}
              className="card-clean p-6 lg:p-8 flex items-center justify-center group hover:border-[hsl(var(--squadra-gold))] min-h-[120px] transition-all duration-300"
            >
              <div className="relative w-full h-20">
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Clients Text */}
        {/* <div className="text-center mb-8">
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
        </div> */}

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
