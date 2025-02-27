
import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import serviceImageOne from "@/utilities/images/service-image-one.svg";
import serviceImageTwo from "@/utilities/images/service-image-two.svg";
import serviceImageThree from "@/utilities/images/service-image-three.svg";
import serviceImageFour from "@/utilities/images/service-image-four.svg";
import serviceImageFive from "@/utilities/images/service-image-five.svg";
import serviceImageSix from "@/utilities/images/service-image-six.svg";
import serviceImageSeven from "@/utilities/images/service-image-seven.svg";
import serviceImageEight from "@/utilities/images/service-image-eight.svg";

const cardStyles = [
  {
    bg: "bg-blue-500",
    text: "1",
    image:serviceImageOne
  },
  {
    bg: "bg-red-500",
    text: "2",
    image:serviceImageTwo
  },
  {
    bg: "bg-green-500",
    text: "3",
    image:serviceImageThree
  },
  {
    bg: "bg-purple-500",
    text: "4",
    image:serviceImageFour
  },
  {
    bg: "bg-purple-500",
    text: "5",
    image:serviceImageFive
  },
  {
    bg: "bg-purple-500",
    text: "6",
    image:serviceImageSix
  },
  {
    bg: "bg-purple-500",
    text: "7",
    image:serviceImageSeven
  },
  {
    bg: "bg-purple-500",
    text: "8",
    image:serviceImageEight
  },
];

const Card = ({ index }:{index:number}) => {
  const style = cardStyles[index % 8];

  return (
    <div
      className={`flex-shrink-0 overflow-hidden ${style.bg} transition-transform duration-300 hover:scale-95`}
    >
      <div className="relative w-[180px] h-[180px] md:w-[388px] md:h-[369px]">
        <Image
          src={style.image}
          alt={`Card ${index + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

const CardSet = () => {
  return (
    <>
      {cardStyles.map((_, index) => (
        <Card key={index} index={index} />
      ))}
    </>
  );
};

const ServicesCarousel = () => {
  return (
    <div className="flex flex-col gap-6 w-full bg-white">
      <div className="w-full space-y-4">
        <InfiniteSlider
          duration={25}
          durationOnHover={50}
          gap={16}
          direction="horizontal"
        >
          <CardSet />
        </InfiniteSlider>
      </div>
    </div>
  );
};

export default ServicesCarousel;
