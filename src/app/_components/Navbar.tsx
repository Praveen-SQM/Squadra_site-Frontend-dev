"use client"; // Add this to ensure the component is rendered client-side

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../utilities/icons/Logo-1.svg";
import logoWhite from "../../utilities/icons/Logo-White.svg";
import callIcon from "../../utilities/icons/Call.svg";
import callIconBlack from "../../utilities/icons/call-icon-black.svg";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname =usePathname()
console.log(pathname,"pthname")
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
  }, []);

  // Handle navigation on click
  const handleNavigation = (path: string) => {
    router.push(path); // This will navigate to the given path
  };
 const primaryColor = "#FBAE17";
  return (
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
        <Link              href={"/"} 
>
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
            className="hover:text-[#FBAE17] cursor-pointer"
            onClick={() => handleNavigation("/services")} // Navigate to Services page
          >
            Services
          </li>
        </ul>

        <ul className="flex font-[500] space-x-8 md:space-x-8">
          <li
              className={`cursor-pointer ${
          pathname.includes("/contact-us") ? `text-[${primaryColor}]` : "hover:text-[#FBAE17]"
        }`}
            onClick={() => handleNavigation("/contact-us")} // Navigate to Contact Us page
          >
            Contact Us
          </li>
          <li>
            <Image
              src={pathname.includes("/contact-us") ? callIconBlack : isScrolled ? callIconBlack : callIcon}
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
