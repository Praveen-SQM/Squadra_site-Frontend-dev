// components/MobileSidebar.tsx

import Link from "next/link";
import { X, ChevronRight, ChevronDown } from "lucide-react";
import { SERVICES } from "./constants";
import { useState } from "react";
import Image from "next/image";
import logo from "@/utilities/images/itLogoColoured.svg";
import itLogocolor from "@/utilities/images/itLogoColoured.svg";
import {PRIMARY_COLOR} from "./constants";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MobileSidebar = ({ isOpen, onClose, pathname }: any) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  const toggleServices = () => setIsServicesOpen((prev) => !prev);
  const toggleSubmenu = (index: number): void => setActiveService((prev) => (prev === index ? null : index));


  return (
    <div className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="relative h-full flex flex-col">
        <button className="absolute top-4 right-4 p-2" onClick={onClose}>
          <X className="h-6 w-6" color="black" />
        </button>

        <div className="p-6">
          {pathname.includes("/it-services") ? (
            <Image src={itLogocolor || "/placeholder.svg"} alt="Logo" width={120} height={40} layout="intrinsic" />
          ) : (
            <div>
              <Image src={logo || "/placeholder.svg"} alt="Logo" width={120} height={40} layout="intrinsic" />
            </div>
          )}
        </div>

        <div className="pt-4 px-6 flex-grow overflow-y-auto">
          <ul className="space-y-0">
            <li>
              <Link
                href="/about-us"
                className={`block py-4 text-base ${pathname.includes("/about-us") ? `text-[${PRIMARY_COLOR}]` : "text-black"} border-b border-gray-200`}
                onClick={onClose}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className={`block py-4 text-base ${pathname.includes("/careers") ? `text-[${PRIMARY_COLOR}]` : "text-black"} border-b border-gray-200`}
                onClick={onClose}
              >
                Careers
              </Link>
            </li>

            {/* Services Menu */}
            <li>
              <div
                className="py-4 text-base text-black border-b border-gray-200 flex justify-between items-center cursor-pointer"
                onClick={toggleServices}
              >
                <span>Services</span>
                {isServicesOpen ? (
                  <ChevronDown className="h-5 w-5" />
                ) : (
                  <ChevronRight className="h-5 w-5" />
                )}
              </div>

              <div
                className={`transition-transform duration-500 ${isServicesOpen ? "max-h-[1000px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"} overflow-hidden`}
              >
                <ul className="pl-4 space-y-0">
                  {SERVICES.map((service, index) => (
                    <li key={index}>
                      <div
                        className="py-3 text-base transition-all duration-500 text-black flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSubmenu(index)}
                      >
                        <Link onClick={onClose} href={service.link}>{service.title}</Link>
                      </div>
                      <div
                        className={`overflow-hidden transition-max-height duration-500 ${activeService === index ? "max-h-[1000px]" : "max-h-0"}`}
                      >
                        {/* <ul className="pl-4 text-sm text-gray-600">
                          {service.items.map((item, i) => (
                            <li key={i} className="py-2 border-b border-gray-200">
                              {item}
                            </li>
                          ))}
                        </ul> */}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/how-it-works"
                className={`block py-4 text-base ${pathname.includes("/how-it-works") ? `text-[${PRIMARY_COLOR}]` : "text-black"} border-b border-gray-200`}
                onClick={onClose}
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="/clients"
                className={`block py-4 text-base ${pathname.includes("/clients") ? `text-[${PRIMARY_COLOR}]` : "text-black"} border-b border-gray-200`}
                onClick={onClose}
              >
                Clients
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Button */}
        <div className="p-6">
          <Link
            href="/contact-us"
            className="flex items-center justify-center w-full py-3 px-4 text-white bg-black hover:bg-gray-800 transition-colors duration-300"
            onClick={onClose}
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
