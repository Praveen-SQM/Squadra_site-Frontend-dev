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

  return (
    <InfiniteSlider className="pt-4" gap={24} reverse>
      {clients.map((client, index) => {
        return (
         <>
            <Image
            key={index}
              width={250}
              height={120}
              src={client?.src}
              alt={client?.alt}
              className={`h-[50px] md:h-[120px] w-auto ${index !==3 ? "filter invert brightness-0" : ""}`}
            />
            </>
        )
      })}
      {/* <Image
        width={250}
        height={120}
        src={clientVIDA}
        alt="Client Vida"
        className="h-[50px] md:h-[120px] w-auto filter invert brightness-0"
      />
      <Image
        width={250}
        height={120}
        src="https://s3-alpha-sig.figma.com/img/8d69/b212/ad096b2541d6b15b3d4d46466c1d3ab0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OxQ1Pn-uNyL7QXHEUrt9EoH7qW-KXoEhyXFaqxG1EpBsdF0iKF7KASqiutGiK~fKZmbWuwPtB-HZ-0iPDypEWOrm6TxTqYDJFzEZMEsX~-AOXquYzRY3lR4CEv-1fDSL7cEcysBXZCzqUuOlDFg294~oW18mV1kPzqa2-q82EI87HjSzfV7CwQNESkY9H61qGvxXgmym-ZEUsoMx6AvdrN9csuHsJaD9FiPtzbQqOABxOjJc4~lG9ukrgUtNJKZIKFx2rZVX0mnz5pMw-FpAwB6ymGVOvA2Hje2ti099-yszoBCesUGqKdheEGcV~xFiF345AGCv-atdAGyHG-zt3A__"
        alt="Chrome logo"
        className="h-[50px] md:h-[120px] w-auto"
      />
      <Image
        width={250}
        height={120}
        src="https://s3-alpha-sig.figma.com/img/8825/a748/33cbce05b271be6c607b07a4a8f2e4bf?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iMrvs1w~GTRXrAvm168VvjAw0t2bTQ90~l6z9WI9Qh8SjMdZ9~FAxUmIfQW5lVYVJbXk7JWLLVh06wth8x9RTn8vAC7JxixBVE1RJNzDlEd-oo-xjJT5Nhe9X4ZnDLk29mr~oILCq8s83Xyj5N-1uEgtQF5nj-5ltx-h2x5fucg7EOosnp5lAKlI~sZIMhubWiyFU7qIpcwVbaJ2yGTtp2WMnMqcrsvQkNRZV2-mwWK3IdI1GSk37TiEXj3LER4QuRZHAVTswiIEYDujIM5Iim6nW29JbJaa3NElAtl77LhKV1EQ4RCxFJSr~MsCz17~9-OwRCX4fqsWPQxh2T4Zqw__"
        alt="Strava logo"
        className="h-[50px] md:h-[120px] w-auto"
      />
      <Image
        width={250}
        height={120}
        src="https://s3-alpha-sig.figma.com/img/becd/2455/1a3b8dbaf367154b48b52c3368d6f1dd?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TPKEygCR4pb-fW6To18TCBrwY4HliXh5OmaCvFT5s910NOPsvnTEdNVW1Qzxow6gTA-SVgzn3fXPlJ5GiuNa6obIYl3c7DwDe2tBAS3V5QeqoPkIKGAsMZBoRf7vIqFiODN9RKepROMIdacHN82fJIp9o6hQZKnVMumr9Rb8MNck1cT2hHEA1~m6DH1SEF3TLPD8f456-RMOOYbT8K-3ZEiUgHUZfqXNX6YH~Q4y-hl0nwBq-KADuWp-sVzx-tsIZ3FwP8cVNkN0fW2rOQ~AKU89QDq4UKXCb7PWmECfR9gqktSMKlfyIUbNYsyfVjXg~Ave9IUicSj9JjWOSCGoJA__"
        alt="Nintendo logo"
        className="h-[50px] md:h-[120px] w-auto"
      />
      <Image
        width={250}
        height={120}
        src="https://s3-alpha-sig.figma.com/img/fa11/155e/b3faf63dab37018a89d432579dfed3b5?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bxaY~YOdVo8AQMQgCbWjof7YMDpiPfSLD~TO-57uME0bnQRI1jSyTAFwSbOaRQHC84T5n150YQDAj8BdHC-X9etQhX5v~uYEP897hR41ekaYR1iRyyC8v5Tt7CDoALTm4GKEOKk6TEqywIFOnfYfn9uEBz683nYY7AjzQRnojHA4-NqIJZQEV9KAspr~PKyYiUMSiixrQsxhCAlfO0WzqZdFoNBt~rY2WHOvYJKDLWDWeja3BeZk2kjK8sIwPqR5tfXIRnzrtSfiAJvIhrUtt2qEzNcSFSiWcRhyfmZBQA2TI4xs0gqUiSgxSnkbtLEklUFPQfjoUUuR-pCRpGN-dQ__"
        alt="Jquery logo"
        className="h-[50px] md:h-[120px] w-auto"
      />
      <Image
        width={250}
        height={120}
        src="https://s3-alpha-sig.figma.com/img/5953/36f0/f3b8e8f69a0d8851a5ae3a6a44191111?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MrEtDfz4rHxEqvZLwoZMHLwrhS~599zJhEeKQkQfLzShXLUvE2igMQhCovkibZH0B-LpkQTnO1weSDdJ9SEXCSyeWMyWUK6Z1nmBEdwiTjPwtTMDAuq4ntY8KYFfxXrqIGEeMuCNkqEkIuCMC1nvJ20P2AVTYTPF9pDIHuPuT6zGX4iZXV0LfeJIzhlAxOOYSL4UjKvQSf9sH05A5t84GX9rly5uAmsUXpO5TxC6IP-rTqMo~ukqg3EGVIAAT6e9Oitzs6HE65yH2nyKXwVj04l~hxwcjdtT4O8o1TepzsP3vonV6DKC7R53m0xyO1aW8ew0HZ0o1Ic5uWPsXFrGXQ__"
        alt="Prada logo"
        className="h-[50px] md:h-[120px] w-auto"
      /> */}
    </InfiniteSlider>
  );
}
