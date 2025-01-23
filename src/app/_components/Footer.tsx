"use client";
import React from "react";
import Image from "next/image";
import logoWhite from "../../utilities/icons/Logo-footer.svg";
import call from "../../utilities/icons/call-footer.svg";
import mail from "../../utilities/icons/email-footer.svg";
import navigation from "../../utilities/icons/location_on-footer.svg";
import Facebook from "../../utilities/icons/facebook.svg"
import Instagram from "../../utilities/icons/instagram.svg"
import Linkedin from "../../utilities/icons/linkedin.svg"
import Youtube from "../../utilities/icons/Youtube.svg"
import itLogocolor from '@/utilities/images/footer-it-logo.svg'
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {

  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <footer
    className="bg-black w-full text-white py-16 sm:px-6 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 px-[12px] gap-8">
          <div>
            <Image
              src={!pathname.includes("/it-services") ? logoWhite:itLogocolor}
              alt="Logo"
              width={120}
              height={40}
              layout="intrinsic"
            />
             <p className="text-[28px] mt-4 w-[100px] font-[300]">
                Smart Solutions For Your{" "}
                <strong className="font-[300] text-[#FBAE17]">Brand</strong>{" "}
              </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="flex flex-col space-y-5 pt-4 text-[#888888]">
              <li className="hover:text-white cursor-pointer">
                Digital Marketing & PR
              </li>
              <li className="hover:text-white cursor-pointer">
                Branding & Creative
              </li>
              <Link href='/it-services' className="hover:text-white cursor-pointer">
                Technology & Development
              </Link>
              <li className="hover:text-white cursor-pointer">Visual Impact</li>
              <li className="hover:text-white cursor-pointer">
                Animation & E-learning
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className=" flex flex-col space-y-5 pt-4 text-[#888888]">
              <Link href="/about-us" className="hover:text-white cursor-pointer">About</Link>
              {/* <li className="hover:text-white cursor-pointer">Services</li> */}
              {/* <li className="hover:text-white cursor-pointer">Works</li> */}
              <Link href='/careers' className="hover:text-white cursor-pointer">Careers</Link>
              <Link href='/contact-us' className="hover:text-white cursor-pointer">Contact</Link>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-5 gap-2 text-[#888888]">
              <div className="flex flex-column items-start">
                <Image
                  src={call}
                  alt="Phone"
                  width={24}
                  height={24}
                  className=""
                />
                <span>+91 96068 27607</span>
              </div>
              <div className="flex flex-column items-start gap-2 ">
                <Image
                  src={mail}
                  alt="Email"
                  width={24}
                  height={24}
                  className=""
                />
                <span className="text-wrap break-all w-full">bd@squadramedia.com</span>

              </div>
              <div className="flex flex-column items-start  gap-2 w-full">
                <Image
                  src={navigation}
                  alt="Location"
                  width={24}
                  height={24}
                  className=""
                />
                <span className="text-wrap break-all w-full">
                  1134, 5th Floor, Shreeram Niwas, Opposite Vapour Brewery, 100
                  Ft Road, Indiranagar, Bengaluru, 560038
                </span>
              </div>
            </div>
          </div>
        </div>



        <div className=" border-t flex flex-col lg:flex-row md:flex-col  items-center gap-4 justify-between border-gray-600 mt-8 pt-6 text-center md:text-left">
          <div className="flex flex-row gap-8  items-center">
            <p>Follow Us</p>
            <div className="flex flex-row items-center gap-8">
              <Link target="_blank"
                href="https://www.instagram.com/_squadra_media_?igsh=MW1lZWJjMW51NXhweA=="
              >
                <Image src={Instagram}
                  height={24}
                  width={24}
                  className="text-gray-400 hover:text-white cursor-pointer" alt={"Instagram"} />
              </Link>
              <Link target="_blank" href="https://youtube.com/@squadramedia5111?si=11QTz6g7FJE8yBBh">
                <Image
                  src={Youtube}
                  height={24}
                  width={24}
                  className="text-gray-400 hover:text-white cursor-pointer" alt={"Youtube"} />
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/company/squadra-media-bangalore">
                <Image src={Linkedin}
                  height={24}
                  width={24}
                  className="text-gray-400 hover:text-white cursor-pointer" alt={"Linkedin"} />
              </Link>
              <Link target="_blank" href='https://www.facebook.com/squadramediabangalore'
              >
                <Image
                  alt={"facebook"}
                  src={Facebook}
                  height={24}
                  width={24}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <div className="">
            <p className="text-gray-400 mb-4  md:mb-0">
              &copy; Copyright Squadra Media Private Limited 2021. All rights
              reserved.
            </p>

          </div>
          <div>
            <div className="space-x-6 mb-4  md:mb-0">
              <a
                href="/terms"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;