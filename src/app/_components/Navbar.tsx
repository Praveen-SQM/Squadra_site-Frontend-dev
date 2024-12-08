"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../utilities/icons/Logo-1.svg";
import logoWhite from "../../utilities/icons/Logo-White.svg";
import callIcon from "../../utilities/icons/Call.svg";
import callIconBlack from "../../utilities/icons/call-icon-black.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { ContactPopover } from "./_contactUsComponents/ContactPopover";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/contact-us")) return;
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // const handleNavigation = (path: string) => {
  //   router.push(path);
  //   setIsSidebarOpen(false);
  // };

  const primaryColor = "#FBAE17";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

   const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState<number| null>(null);

  const services = [
    {
      title: "Branding & Creative",
      items: [
        "Brand Strategy & Consulting",
        "Logo Design & Brand Identity",
        "Graphic Design",
        "2D/3D Visualisation",
        "Brand Collateral",
        "Industrial Product Design",
      ],
    },
    {
      title: "Digital Marketing & PR",
      items: [
        "Social Media Management",
        "SEO & SEM",
        "Performance Marketing",
        "Content Marketing",
        "Public Relations (PR)",
        "Marketing Automation",
        "Data & Analytics",
      ],
    },
    {
      title: "Visual Impact",
      items: [
        "Commercial Photography",
        "Corporate Films",
        "Promotional Videos",
        "Event & Product Photography",
        "Cinematic Visuals",
      ],
    },
    {
      title: "Technology & Development",
      items: [
        "Web & Mobile App Development",
        "E-commerce Solutions",
        "AI & Machine Learning",
        "Cloud Solutions",
        "DevOps & Cybersecurity",
        "Quality Assurance & Testing",
      ],
    },
  ];

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleSubmenu = (index: number) =>
    setActiveService(activeService === index ? null : index);


  return (
    <>
      <nav
        className={`fixed z-50 w-full p-4 md:px-32 transition-all duration-300 ${
          pathname.includes("/contact-us")
            ? "bg-white shadow-md text-black"
            : isScrolled
            ? "bg-white text-black"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={pathname.includes("/contact-us") ? logo : isScrolled ? logo : logoWhite}
              alt="Logo"
              width={120}
              height={40}
              layout="intrinsic"
            />
          </Link>

          <ul className="md:flex hidden font-[500] space-x-8">
            <Link
              className={`cursor-pointer ${
                pathname.includes("/about-us") ? `text-[${primaryColor}]` : "hover:text-[#FBAE17]"
              }`}
              href={"/about-us"}
            >
              About Us
            </Link>
            <li
              className="relative hover:text-[#FBAE17] cursor-pointer"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              Services
              
              {/* Services Mega Menu */}
              <div 
                className={`absolute top-50 -left-14 w-screen transform ${
                  isServicesHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                } transition-all duration-300 bg-white text-black shadow-xl -ml-[40rem]`}
                style={{ width: '90vw', maxWidth: '1400px' }}
              >
                <div className="p-12 flex flex-col">
                  <div className="flex mb-4">
                    {/* Left Column - Heading */}
                    <div className="w-[25%] pr-0">
                      <h2 className="text-4xl font-light leading-tight">
                        Developing<br />
                        Robust<br />
                        Skills to<br />
                        Strengthen<br />
                        Your<br />
                        <span className="text-[#FBAE17]">Brand&apos;s</span><br />
                        Impact.
                      </h2>
                    </div>

                    {/* Right Columns - Services */}
                    <div className="w-2/3 grid grid-cols-4 gap-8">
                      {/* Branding & Creative */}
                      <div>
                        <h3 className="font-semibold mb-4">Branding & Creative</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>Brand Strategy & Consulting</li>
                          <li>Logo Design & Brand Identity</li>
                          <li>Graphic Design</li>
                          <li>2D/3D Visualisation</li>
                          <li>Brand Collateral</li>
                          <li>Industrial Product Design</li>
                        </ul>
                      </div>

                      {/* Digital Marketing & PR */}
                      <div>
                        <h3 className="font-semibold mb-4">Digital Marketing & PR</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>Social Media Management</li>
                          <li>SEO & SEM</li>
                          <li>Performance Marketing</li>
                          <li>Content Marketing</li>
                          <li>Public Relations (PR)</li>
                          <li>Marketing Automation</li>
                          <li>Data & Analytics</li>
                        </ul>
                      </div>

                      {/* Visual Impact */}
                      <div>
                        <h3 className="font-semibold mb-4">Visual Impact</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>Commercial Photography</li>
                          <li>Corporate Films</li>
                          <li>Promotional Videos</li>
                          <li>Course Management System</li>
                          <li>Event & Product Photography</li>
                          <li>Cinematic Visuals</li>
                        </ul>
                      </div>

                      {/* Animation & E-learning */}
                      <div>
                        <h3 className="font-semibold mb-4">Animation & E-learning</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>2D/3D Animation</li>
                          <li>Explainer Videos</li>
                          <li>E-learning Modules</li>
                          <li>Motion Graphics</li>
                          <li>Interactive Learning Solutions</li>
                        </ul>
                      </div>
                        <div className="">
                    <h3 className="font-bold mb-4">Technology & Development</h3>
                   <ul className="space-y-2 text-sm text-gray-600">
                      <li>Web & Mobile App Development</li>
                      <li>E-commerce Solutions</li>
                      <li>AI & Machine Learning</li>
                      <li>Cloud Solutions</li>
                      <li>DevOps & Cybersecurity</li>
                      <li>Quality Assurance & Testing</li>
                    </ul>
                  </div>
                    </div>
                  </div>

                  {/* Technology & Development Section */}
                

                  {/* Go to overview link */}
                  <div className="text-start">
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-gray-900 hover:underline"
                    >
                      Go to overview <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <ul className="flex font-[500] space-x-8 md:space-x-8">
            <ContactPopover/>
            {/* <li
              className={`hidden md:block cursor-pointer ${
                pathname.includes("/contact-us") ? `text-[${primaryColor}]` : "hover:text-[#FBAE17]"
              }`}
              onClick={() => handleNavigation("/contact-us")}
            >
              Contact Us
            </li> */}
            
            <li>
              <Image
                src={pathname.includes("/contact-us") ? callIconBlack : isScrolled ? callIconBlack : callIcon}
                alt="Call Icon"
                width={24}
                height={24}
              />
            </li>
            {/* Hamburger menu icon for mobile and tablet */}
            <button
              className="md:hidden"
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
        <div
      className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="relative h-full">
        <div className="p-6">
           <Image
              src={logo}
              alt="Logo"
              width={120}
              height={40}
              layout="intrinsic"
            />
        </div>
        <button
          className="absolute top-4 right-4 p-2"
          onClick={toggleSidebar}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="pt-4 px-6">
          <ul className="space-y-0">
            <li>
              <Link
                href="/about-us"
                className={`block py-4 text-base ${
                  pathname.includes("/about-us")
                    ? `text-[${primaryColor}]`
                    : "text-black"
                } border-b border-gray-200`}
                onClick={toggleSidebar}
              >
                About Us
              </Link>
            </li>
            <li>
              {/* Services Menu */}
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
               className={`transition-transform duration-500 ${
    isServicesOpen
      ? "max-h-[1000px] opacity-100 scale-100"
      : "max-h-0 opacity-0 scale-95"
  } overflow-hidden`}
              >
                <ul className="pl-4 space-y-0">
                  {services.map((service, index) => (
                    <li key={index}>
                      <div
                        className="py-3 text-base transition-all duration-500 text-black flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSubmenu(index)}
                      >
                        <span>{service.title}</span>
                        {activeService === index ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </div>
                      <div
                        className={`overflow-hidden transition-max-height duration-500 ${
                          activeService === index ? "max-h-[1000px]" : "max-h-0"
                        }`}
                      >
                        <ul className="pl-4 text-sm text-gray-600">
                          {service.items.map((item, i) => (
                            <li
                              key={i}
                              className="py-2 border-b border-gray-200"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`block py-4 text-base ${
                  pathname.includes("/contact-us")
                    ? `text-[${primaryColor}]`
                    : "text-black"
                } border-b border-gray-200`}
                onClick={toggleSidebar}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Navbar;

