import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import location from "@/utilities/images/image 58.svg";
import Image from "next/image";

export default function Locations() {
  return (
    <div className="w-full bg-[#FFFFFF] px-6 py-12 xl:px-[124px] md:px-[20px] lg:py-[80px]">
      <div className="max-w-[1350px] mx-auto">
        <h1 className="text-4xl sm:text-3xl md:text-5xl font-normal mb-4 lg:mb-[50px] sm:mb-[40px]">
          Our Locations
        </h1>

        <div className="flex items-start lg:gap-[27px] md:gap-[12px] gap-[12px] lg:flex-row md:flex-row sm:flex-col flex-col">
          {/* Location 1 */}
          <div className="flex flex-col lg:gap-[32px] md:gap-[16px] sm:gap-4 gap-4 group">
            <div className="xl:w-[380px] xl:h-[380px] lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] sm:h-[230px] sm:w-[230px] relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Image
                src={location}
                alt="Bangalore Location 1"
                width={380}
                height={380}
                className="xl:w-[380px] xl:h-[380px] lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] sm:h-[230px] sm:w-[230px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            <div className="flex flex-col lg:gap-6 sm:gap-4">
              <p className="font-medium lg:text-[24.9px] md:text-[18px] leading-[27.38px] text-[#131313]">
                Bangalore, India - HAL 2nd Stage
              </p>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center mt-1">
                  <MapPin className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <p className="font-normal lg:text-[16px] lg:leading-6 md:text-[14px] md:leading-[19px] text-[#6D6D6D] lg:max-w-[380px] md:max-w-[230px]">
                    5th Floor, No. 1134, Shreeram Niwas, 100 Feet Rd, HAL 2nd
                    Stage, Bengaluru, Karnataka 560038
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location 2 */}
          <div className="flex flex-col lg:gap-[32px] md:gap-[16px] sm:gap-4 gap-4 group">
            <div className="xl:w-[380px] xl:h-[380px] lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] sm:h-[230px] sm:w-[230px] relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Image
                src={
                  "https://squadra-media.s3.ap-south-1.amazonaws.com/DSC_3720+2+(1).webp"
                }
                alt="Bangalore Location 2"
                width={380}
                height={380}
                className="xl:w-[380px] xl:h-[380px] lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] sm:h-[230px] sm:w-[230px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            <div className="flex flex-col lg:gap-6 sm:gap-4">
              <p className="font-medium lg:text-[24.9px] md:text-[18px] leading-[27.38px] text-[#131313]">
                Bangalore, India - Indiranagar
              </p>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center mt-1">
                  <MapPin className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <p className="font-normal lg:text-[16px] lg:leading-6 md:text-[14px] md:leading-[19px] text-[#6D6D6D] lg:max-w-[380px] md:max-w-[230px]">
                    532, 16th Cross, 2nd Main Rd, Binnamangala, Indiranagar,
                    Bengaluru, Karnataka 560038
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="flex py-12 lg:gap-[4px] sm:gap-[4px] gap-[2px] items-center lg:mt-[50px] md:mt-[40px] mt-[32px]">
          <div className="py-6 lg:w-[594px] sm:w-[355px] w-[170px] bg-[#FAFAFA] flex items-center justify-center rounded-lg">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E79900] rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <p className="font-normal lg:text-[20px] lg:leading-[26px] sm:text-[20px] sm:leading-[26px] text-[14px] leading-[16.94px] text-[#6D6D6D]">
                  General Enquiry
                </p>
              </div>
              <a
                href="tel:+917898487331"
                className="font-semibold lg:text-[32px] lg:leading-[38.73px] md:text-[28px] md:leading-[33.89px] text-[12px] leading-[17px] text-[#3D3D3D] hover:text-[#E79900] transition-colors duration-200"
              >
                +91 78984 87331
              </a>
            </div>
          </div>

          <div className="py-6 lg:w-[594px] sm:w-[355px] w-[170px] bg-[#FAFAFA] flex items-center justify-center rounded-lg">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E79900] rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <p className="font-normal lg:text-[20px] lg:leading-[26px] sm:text-[20px] sm:leading-[26px] text-[14px] leading-[16.94px] text-[#6D6D6D]">
                  HR Enquiry
                </p>
              </div>
              <a
                href="mailto:hr@squadramedia.com"
                className="font-semibold lg:text-[32px] lg:leading-[38.73px] md:text-[28px] md:leading-[33.89px] text-[12px] leading-[17px] text-[#3D3D3D] hover:text-[#E79900] transition-colors duration-200 break-all"
              >
                hr@squadramedia.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
