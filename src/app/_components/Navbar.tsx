"use client"; // Add this to ensure the component is rendered client-side

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../utilities/icons/Logo-1.svg";
import logoWhite from "../../utilities/icons/Logo-White.svg";
import callIcon from "../../utilities/icons/Call.svg";
import callIconBlack from "../../utilities/icons/call-icon-black.svg";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
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
  }, []);

  // Handle navigation on click
  const handleNavigation = (path: string) => {
    router.push(path); // This will navigate to the given path
  };

  return (
    <nav
      className={`fixed z-50 w-full p-4 transition-all duration-300 ${
        isScrolled ? "bg-white text-black" : "bg-transparent text-[#D0D0D0]"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div>
          <Image
            src={isScrolled ? logo : logoWhite}
            alt="Logo"
            width={120}
            height={40}
            layout="intrinsic"
          />
        </div>

        <ul className="md:flex hidden font-[500] space-x-8">
          <li
            className="hover:text-white cursor-pointer"
            onClick={() => handleNavigation("/about-us")} // Navigate to About Us page
          >
            About Us
          </li>
          <li
            className="hover:text-white cursor-pointer"
            onClick={() => handleNavigation("/services")} // Navigate to Services page
          >
            Services
          </li>
        </ul>

        <ul className="flex font-[500] space-x-8 md:space-x-8">
          <li
            className="hover:text-white cursor-pointer"
            onClick={() => handleNavigation("/contact-us")} // Navigate to Contact Us page
          >
            Contact Us
          </li>
          <li>
            <Image
              src={isScrolled ? callIconBlack : callIcon}
              alt="Call Icon"
              width={24}
              height={24}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
