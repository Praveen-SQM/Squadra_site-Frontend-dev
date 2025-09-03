"use client";
import React from "react";
import Image from "next/image";
import logoWhite from "../../utilities/icons/Logo-footer.svg";
import itLogocolor from "@/utilities/images/footer-it-logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Mail, Phone, LocateFixed } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  
  return (
    <footer className="bg-black w-full text-gray-400 py-8 px-2 sm:py-12 sm:px-6 lg:py-16 xl:px-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Logo Section */}
        <div className="pb-6 md:pb-6 lg:pb-9">
          <Link href="/" className="inline-block">
            <Image
              src={!pathname.includes("/it-services") ? logoWhite : itLogocolor}
              alt="Squadra"
              className="h-12"
            />
          </Link>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 text-sm sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Section */}
          <div className="space-y-4 col-span-1 sm:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/it-services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="space-y-4 col-span-1 sm:col-span-1 lg:col-span-3">
            <h3 className="text-white text-lg font-medium">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/digital-marketing-and-pr"
                  className="hover:text-white transition-colors"
                >
                  Digital Marketing & PR
                </Link>
              </li>
              <li>
                <Link
                  href="/branding-and-creative"
                  className="hover:text-white transition-colors"
                >
                  Branding & Creative
                </Link>
              </li>
              <li>
                <Link
                  href="/it-services"
                  className="hover:text-white transition-colors"
                >
                  Technology & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/visual-impact"
                  className="hover:text-white transition-colors"
                >
                  Visual Impact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Animation & E-learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-4">
            <h3 className="text-white text-lg font-medium">Get in touch</h3>
            <ul className="space-y-3">
              <li className="flex max-w-xs items-start leading-relaxed">
                <LocateFixed className="mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>
                  1134, 5th Floor, Shreeram Niwas, Opposite Vapour Brewery, 100 Ft
                  Road, Indiranagar, Bengaluru, 560038
                </span>
              </li>
              <li>
                <Link
                  href="tel:+916366726494"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <Phone className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span>+91 6366726494</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@squadramedia.com"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <Mail className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span>info@squadramedia.com</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Tagline Section */}
          <div className="space-y-3 col-span-1 sm:col-span-2 lg:col-span-3">
            <h2 className="text-[#727272] text-[20px] sm:text-[24px] lg:text-[clamp(1.25rem,1.5vw+1rem,2rem)] font-medium leading-[150%] text-center sm:text-left">
              Developing Robust Skills to Strengthen Your{" "}
              <span className="text-[#E79900]">Brand&apos;s Impact.</span>
            </h2>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
            {/* Copyright and Terms */}
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center text-center sm:text-left">
              <div className="text-sm">
                © Copyright Squadra Media Private Limited 2021. All rights reserved
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-6 sm:ml-8">
                <Link
                  href="#"
                  className="text-sm hover:text-white transition-colors whitespace-nowrap"
                >
                  Terms of services
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:text-white transition-colors whitespace-nowrap"
                >
                  Privacy policy
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-end space-x-4 text-white">
              <span className="text-sm text-gray-400 whitespace-nowrap">
                Follow Us
              </span>
              <div className="flex items-center space-x-4">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/_squadra_media_?igsh=MW1lZWJjMW51NXhweA=="
                  className="hover:text-gray-400 transition-colors"
                >
                  <svg 
                    className="transition duration-300 hover:filter hover:invert" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#888888" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </Link>
                
                <Link
                  target="_blank"
                  href="https://youtube.com/@squadramedia5111?si=11QTz6g7FJE8yBBh"
                  className="hover:text-gray-400 transition-colors"
                >
                  <svg 
                    className="transition duration-300 hover:filter hover:invert" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28" 
                    height="28" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#888888" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <path d="m10 15 5-3-5-3z"/>
                  </svg>
                </Link>
                
                <Link
                  target="_blank"
                  href="https://x.com/squadramedia"
                  className="hover:text-gray-400 transition-colors"
                >
                  <svg 
                    className="transition duration-300 hover:filter hover:invert" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="26" 
                    height="26" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#888888" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </Link>
                
                <Link
                  target="_blank"
                  href="https://www.facebook.com/squadramediabangalore"
                  className="hover:text-gray-400 transition-colors"
                >
                  <svg 
                    className="transition duration-300 hover:filter hover:invert" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#888888" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}