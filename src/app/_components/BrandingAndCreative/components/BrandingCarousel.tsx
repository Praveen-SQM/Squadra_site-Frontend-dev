
import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import brandSliderOne from "@/utilities/images/brandSlider-1.svg";
import brandSliderTwo from "@/utilities/images/brandSlider-2.svg";
import brandSliderThree from "@/utilities/images/brandSlider-3.svg";
import brandSliderFour from "@/utilities/images/brandSlider-4.svg";
import brandSliderFive from "@/utilities/images/brandSlider-5.svg";
import brandSliderSix from "@/utilities/images/brandSlider-6.svg";
import brandSliderSeven from "@/utilities/images/brandSlider-7.svg";
import brandSliderEight from "@/utilities/images/brandSlider-8.svg";
import brandSliderNine from "@/utilities/images/brandSlider-9.svg";
import brandSliderTen from "@/utilities/images/brandSlider-10.svg";
import brandSliderEleven from "@/utilities/images/brandSlider-11.svg";
import brandSliderTwelve from "@/utilities/images/brandSlider-12.svg";
import brandSliderThirteen from "@/utilities/images/brandSlider-13.svg";
import brandSliderFourteen from "@/utilities/images/brandSlider-14.svg";
import brandSliderFifteen from "@/utilities/images/brandSlider-15.svg";
import brandSliderSixteen from "@/utilities/images/brandSlider-16.svg";
import brandSliderSeventeen from "@/utilities/images/brandSlider-17.svg";
import brandSliderEighteen from "@/utilities/images/brandSlider-18.svg";
import brandSliderNineteen from "@/utilities/images/brandSlider-19.svg";
import brandSliderTwenty from "@/utilities/images/brandSlider-20.svg";
import brandSliderTwentyOne from "@/utilities/images/brandSlider-21.svg";
import brandSliderTwentyTwo from "@/utilities/images/brandSlider-22.svg";
import brandSliderTwentyThree from "@/utilities/images/brandSlider-23.svg";
import brandSliderTwentyFour from "@/utilities/images/brandSlider-24.svg";
import brandSliderTwentyFive from "@/utilities/images/brandSlider-25.svg";
import brandSliderTwentySix from "@/utilities/images/brandSlider-26.svg";
import brandSliderTwentySeven from "@/utilities/images/brandSlider-27.svg";
import brandSliderTwentyEight from "@/utilities/images/brandSlider-28.svg";
import brandSliderTwentyNine from "@/utilities/images/brandSlider-29.svg";
import brandSliderThirty from "@/utilities/images/brandSlider-30.svg";

const cardStyles = [
  {
    bg: "bg-blue-500",
    text: "1",
    image:brandSliderOne,
  },
  {
    bg: "bg-red-500",
    text: "2",
    image:brandSliderTwo,
  },
  {
    bg: "bg-green-500",
    text: "3",
    image:brandSliderThree,
  },
  {
    bg: "bg-purple-500",
    text: "4",
    image:brandSliderFour,
  },
  {
    bg: "bg-purple-500",
    text: "5",
    image:brandSliderFive,
  },
  {
    bg: "bg-purple-500",
    text: "6",
    image:brandSliderSix,
  },
  {
    bg: "bg-purple-500",
    text: "7",
    image:brandSliderSeven,
  },
  {
    bg: "bg-purple-500",
    text: "8",
    image:brandSliderEight,
  },
  {
    bg: "bg-purple-500",
    text: "9",
    image:brandSliderNine,
  },
  {
    bg: "bg-purple-500",
    text: "10",
    image:brandSliderTen,
  },
  {
    bg: "bg-purple-500",
    text: "11",
    image:brandSliderEleven,
  },
  {
    bg: "bg-purple-500",
    text: "12",
    image:brandSliderTwelve,
  },
  {
    bg: "bg-purple-500",
    text: "13",
    image:brandSliderThirteen,
  },
  {
    bg: "bg-purple-500",
    text: "14",
    image:brandSliderFourteen,
  },
  {
    bg: "bg-purple-500",
    text: "15",
    image:brandSliderFifteen,
  }
];

const cardStyles2 = [
  {
    bg: "bg-blue-500",
    text: "16",
    image:brandSliderSixteen,
  },
  {
    bg: "bg-red-500",
    text: "17",
    image:brandSliderSeventeen,
  },
  {
    bg: "bg-green-500",
    text: "18",
    image:brandSliderEighteen,
  },
  {
    bg: "bg-purple-500",
    text: "19",
    image:brandSliderNineteen,
  },
  {
    bg: "bg-purple-500",
    text: "20",
    image:brandSliderTwenty,
  },
  {
    bg: "bg-purple-500",
    text: "21",
    image:brandSliderTwentyOne,
  },
  {
    bg: "bg-purple-500",
    text: "22",
    image:brandSliderTwentyTwo,
  },
  {
    bg: "bg-purple-500",
    text: "23",
    image:brandSliderTwentyThree,
  },
  {
    bg: "bg-purple-500",
    text: "24",
    image:brandSliderTwentyFour,
  },
  {
    bg: "bg-purple-500",
    text: "25",
    image:brandSliderTwentyFive,
  },
  {
    bg: "bg-purple-500",
    text: "26",
    image:brandSliderTwentySix,
  },
  {
    bg: "bg-purple-500",
    text: "27",
    image:brandSliderTwentySeven,
  },      
  {
    bg: "bg-purple-500",
    text: "28",
    image:brandSliderTwentyEight,
  },
  {
    bg: "bg-purple-500",
    text: "29",
    image:brandSliderTwentyNine,
  },
  {
    bg: "bg-purple-500",
    text: "30",
    image:brandSliderThirty,
  }
];

const Card = ({ index,card }: { index: number,card:any }) => {
  const style = cardStyles[index % 4];

  return (
    <div
      className={`flex-shrink-0 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-95`}
    >
      <div className="relative w-[230px] h-[130px] md:w-[435px] md:h-[262px]">
        <Image
          src={card?.image}
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
      {cardStyles.map((card, index) => (
        <Card key={index} index={index} card={card}/>
      ))}
    </>
  );
};

const CardSetSecond = () => {
  return (
    <>
      {cardStyles2?.map((card, index) => (
        <Card key={index} index={index} card={card}/>
      ))}
    </>
  );
};

const BrandingCarousel = () => {
  return (
    <div className="flex flex-col gap-6 w-full bg-black py-8">
      <div className="w-full space-y-6">
        <InfiniteSlider
          duration={50}
          durationOnHover={100}
          gap={16}
          direction="horizontal"
        >
          <CardSet />
        </InfiniteSlider>

        <InfiniteSlider
          duration={50}
          durationOnHover={100}
          gap={16}
          direction="horizontal"
          reverse
        >
          <CardSetSecond />
        </InfiniteSlider>
      </div>
    </div>
  );
};

export default BrandingCarousel;
