import { Check } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface StepItem {
  title: string;
  description: string;
  services: string[];
  Image?: string | StaticImport;
  video?: string;
  text?: string;
  bg?: string;
}

interface HowItWorksContainerProps {
  step: StepItem;
  index: number;
}

export default function HowItWorksContainer({
  step,
  index,
}: HowItWorksContainerProps) {
  const isEven = !(index % 2 === 0);
  const isScaled = index === 1 || index === 2 || index === 4;

  const renderBoldBeforeColon = (text: string) => {
    const parts = text.split(":");
    if (parts.length > 1) {
      return (
        <>
          <span className="font-bold text-black">{parts[0]}:</span>
          {parts.slice(1).join(":")}
        </>
      );
    }
    return text;
  };

  return (
    <div
      className={`w-full border md:border-none max-w-[1300px] my-4 md:my-none rounded-lg shadow md:shadow-none p-4 sm:p-8 md:p-12 font-bold text-gray-700 flex items-center ${
        isEven ? "md:pr-[5%]" : "md:pl-[5%]"
      }`}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-[28px]">
        <div
          className={`flex flex-col max-w-[600px] justify-center gap-[10px] lg:gap-[12px] ${
            isEven ? "order-1" : "order-2"
          }`}
        >
          {/* Mobile Image */}
          <div className="md:hidden flex items-center justify-center pt-4  w-full h-[200px]">
            <Image
              src={step.Image || "/api/placeholder/570/530"}
              alt={step.title}
              width={150}
              height={150}
              className={`w-auto lg:w-[100px] h-[200px] object-cover rounded-lg ${
                isScaled ? "scale-[1.7]" : ""
              }`}
            />
          </div>

          <h1 className="text-gray-500 font-bold">{"0" + (index + 1)}</h1>

          {/* Title and Description */}
          <div className="flex flex-col gap-[20px] lg:gap-[28px]">
            <h1
              className={`text-3xl text-[24px] lg:text-[40px] font-bold ${
                step.text ? step.text : "text-gray-900"
              }`}
            >
              {step.title}
            </h1>
            <p
              className={`text-[14px] lg:text-[16px] ${
                step.text ? step.text : "text-gray-600"
              } font-normal max-w-lg`}
            >
              {step.description}
            </p>
          </div>

          {/* Services List */}
          <div>
            {step?.services?.map((item, idx) => (
              <div
                key={idx}
                className={`group cursor-pointer transition-all py-1 duration-200 ${
                  step.text ? step.text : "text-gray-700"
                } border-gray-200 rounded-md`}
              >
                <div className="flex gap-2">
                  <Check color="green" />
                  <span className="text-[14px] lg:text-[16px] font-thin text-gray-600 max-w-lg">
                    {renderBoldBeforeColon(item)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Image */}
        <div
          className={`hidden md:flex w-full justify-center items-center ${
            isEven ? "order-2" : "order-1"
          }`}
        >
          <Image
            src={step.Image || "/api/placeholder/570/530"}
            alt={step.title}
            width={570}
            height={530}
            className={`w-full md:w-[150px] lg:w-[200px] lg:h-[200px] object-cover rounded-lg ${
              isScaled ? "scale-[1.7]" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}
