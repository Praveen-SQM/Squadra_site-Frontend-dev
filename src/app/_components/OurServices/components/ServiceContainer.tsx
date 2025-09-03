import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ServicesContainer({ service, index }: any) {
  const isEven = index % 2 === 0;

  return (
    <div className="w-full min-h-screen flex items-center py-12 md:py-16 lg:py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col items-start gap-8 lg:gap-8 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* Title and Description */}
          <div className="flex flex-col gap-6 lg:gap-6">
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight ${
                service.text ? service.text : "text-gray-900"
              }`}
            >
              {service?.title}
            </h1>
            <p
              className={`${
                service.text ? service.text : "text-gray-600"
              } font-normal text-sm sm:text-base md:text-lg leading-relaxed max-w-lg`}
            >
              {service?.description}
            </p>
          </div>

          {/* Video for mobile view */}
          <div className="md:hidden w-full flex justify-center">
            <Image
              src={service?.image}
              alt={service?.title}
              width={570}
              height={335}
              className="w-full h-[280px] sm:h-[335px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Service List */}
          <div className="w-full md:max-w-[280px] lg:max-w-[320px]">
            {service?.list?.map((item: string, idx: number) => (
              <div
                key={idx}
                className={`cursor-pointer py-3 sm:py-3 transition-colors duration-200 border-b last:border-b-0 ${
                  service.text ? service.text : "text-gray-700"
                } hover:text-gray-100 text-xs sm:text-sm md:text-base break-words border-gray-200`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link className="mt-4" href={`/${service?.link}`}>
            <Button
              variant="outline"
              className="group bg-white shadow-sm border-gray-300 min-w-[240px] sm:min-w-[260px] min-h-[52px] sm:min-h-[56px] font-normal text-xs sm:text-sm flex items-center justify-center hover:bg-blue-950 hover:text-white hover:border-blue-950 transition-all duration-300"
            >
              VIEW ALL
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Video for desktop view */}
        <div
          className={`hidden md:flex w-full justify-center items-center ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Image
            src={service?.image}
            alt={service?.title}
            width={570}
            height={530}
            className="w-full lg:w-[570px] h-[400px] md:h-[480px] lg:h-[530px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
