"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

let interval: NodeJS.Timeout;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  image: StaticImageData;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-80 w-[304px] sm:h-[280px] sm:w-[240px] xl:h-80 xl:w-[384px]">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bottom-[-20px] right-[-20px] sm:bottom-[-24px] sm:right-[-28px] md:bottom-[-28px] md:right-[-16px] lg:bottom-[-30px] lg:right-[-40px] dark:bg-black bg-white h-[320px] w-[304px] sm:h-[280px] sm:w-[240px] md:h-[320px] md:w-[280px] xl:h-80 xl:w-[384px] rounded-3xl shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="w-full h-full">
            <Image
              unoptimized
              src={card.image}
              alt={card.name}
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-3xl 3xl:min-w-[600px] 3xl:min-h-[400px]"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
