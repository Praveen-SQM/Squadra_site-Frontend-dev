import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";
import clientTorque from "@/utilities/icons/clent-torque.svg";
import clientHMG from "@/utilities/icons/client-HMGroup.webp";
import clientBroncos from "@/utilities/icons/client-broncos.webp";
import clientDaddy from "@/utilities/icons/client-daddy.webp";
import clientDoubleTree from "@/utilities/icons/client-doubleTree.webp";
import clientFerns from "@/utilities/icons/client-ferns.webp";
import clientGRC from "@/utilities/icons/client-grConst.webp";
import clientGREE from "@/utilities/icons/client-gree.webp";
import clientHabitat from "@/utilities/icons/client-habitat.webp";
import clientOneSta from "@/utilities/icons/client-onesta.webp";
import clientPOI from "@/utilities/icons/client-poi.webp";
import clientS1522 from "@/utilities/icons/client-street1522.webp";
import clientVOIA from "@/utilities/icons/client-voia.webp";
import clientVIDA from "@/utilities/icons/client-vida.webp";
import clientNior from "@/utilities/icons/client-cafeNior.webp";

import clientHarrisPoll from '@/utilities/icons/Harris Poll.png'
import clientEndust from '@/utilities/icons/Endust.png'
import clientHertz from '@/utilities/icons/Hertz.png'
import clientNetrix from '@/utilities/icons/Netrix.png'
import clientNorwegian from '@/utilities/icons/Norwegian.png'
import clientPaylocity from '@/utilities/icons/Paylocity.png'
import clientRebuildingExchange from '@/utilities/icons/RebuildingExchange.png'
import clientTeachForAmerica from '@/utilities/icons/TeachForAmerica.png'
import clientUnited from '@/utilities/icons/United.png'
import clientTheUniversityOfChicago from '@/utilities/icons/TheUniversityOfChicago.png'



export function InfiniteSliderBasic() {

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
    }
  ]

  const clients2 = [
    {
      src: clientHarrisPoll,
      alt: "Harris Poll"
    },
    {
      src: clientEndust,
      alt: "Endust"
    },
    {
      src: clientHertz,
      alt: "Hertz"
    },
    {
      src: clientNetrix,
      alt: "Netrix"
    },
    {
      src: clientNorwegian,
      alt: "Norwegian"
    },
    {
      src: clientPaylocity,
      alt: "Paylocity"
    },
    {
      src: clientTheUniversityOfChicago,
      alt: "TheUniversityOfChicago"
    },
    {
      src: clientRebuildingExchange,
      alt: "RebuildingExchange"
    },
    {
      src: clientTeachForAmerica,
      alt: "TeachForAmerica"
    },
    {
      src: clientUnited,
      alt: "United"
    }
  ]

  return (
    <>
      <InfiniteSlider gap={24} reverse>
        {clients?.map((client, index) => {
          return (
            <>
              <Image
                key={index}
                width={400}
                height={250}
                src={client?.src}
                alt={client?.alt}
                className={`h-[50px] md:h-[150px] w-auto mb-12 ${index !==3 ? "filter invert brightness-0" : ""}`}
              />
            </>
          )
        })}
      </InfiniteSlider>
      <InfiniteSlider gap={24} >
        {clients2?.map((client, index) => {
          return (
            <>
              <Image
                key={index}
                width={400}
                height={250}
                src={client?.src}
                alt={client?.alt}
                className={`h-[50px] md:h-[150px] w-auto mb-12 ${index !==3 ? "filter invert brightness-0" : ""}`}
              />
            </>
          )
        })}
      </InfiniteSlider>
    </>
  );
}
