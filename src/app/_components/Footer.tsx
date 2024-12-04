"use client";
import React from "react";
import Image from "next/image";
import logoWhite from "../../utilities/icons/Logo-footer.svg";
import call from "../../utilities/icons/call-footer.svg";
import mail from "../../utilities/icons/email-footer.svg";
import navigation from "../../utilities/icons/location_on-footer.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Image
              src={logoWhite}
              alt="Logo"
              width={120}
              height={40}
              layout="intrinsic"
            />
            <p className="text-[28px] mt-4 w-[100px] font-[300]">
              Start Building a Solid{" "}
              <strong className="font-[300] text-[#FBAE17]">Brand</strong>{" "}
              Today!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-5 pt-4 text-[#888888]">
              <li className="hover:text-white cursor-pointer">
                Digital Marketing & PR
              </li>
              <li className="hover:text-white cursor-pointer">
                Branding & Creative
              </li>
              <li className="hover:text-white cursor-pointer">
                Technology & Development
              </li>
              <li className="hover:text-white cursor-pointer">Visual Impact</li>
              <li className="hover:text-white cursor-pointer">
                Animation & E-learning
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-5 pt-4 text-[#888888]">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Works</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-5 text-[#888888]">
              <p className="flex">
                <Image
                  src={call}
                  alt="Phone"
                  width={24}
                  height={24}
                  className="pr-[10px]"
                />
                +91 7204701593
              </p>
              <p className="flex flex-wrap overflow-hidden">
                <Image
                  src={mail}
                  alt="Email"
                  width={24}
                  height={24}
                  className="mr-[10px] max-w-full"
                />
                info@squadramedia.com
              </p>
              <p className="flex">
                <Image
                  src={navigation}
                  alt="Location"
                  width={24}
                  height={24}
                  className="h-[24px] pr-[10px]"
                />
                <span>
                  1134, 5th Floor, Shreeram Niwas, Opposite Vapour Brewery, 100
                  Ft Road, Indiranagar, Bengaluru, 560038
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t flex flex-col md:flex-row items-center justify-between border-gray-600 mt-8 pt-6 text-center md:text-left px-4 sm:px-6">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; Copyright Squadra Media Private Limited 2021. All rights
            reserved.
          </p>

          <div className="space-x-6 mb-4 md:mb-0">
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

          <div className="flex items-center space-x-4">
            <div className="space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
