// components/Navbar.tsx

import Link from "next/link";
import { useState, useEffect, useMemo, useCallback } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import MobileSidebar from "./MobileSidebar";
import { Menu } from "lucide-react";
import { ContactPopover } from "../_contactUsComponents/ContactPopover";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const pathname = usePathname();

  const shouldShowWhiteBg = useMemo(
    () =>
      pathname === "" ||
      pathname === "/contact-us" ||
      pathname === "/our-services" ||
      pathname === "/branding-and-creative" ||
      pathname === "/openings" ||
      pathname === "/direct-apply" ||
      pathname === "/privacy-policy" ||
      pathname === "/visual-impact" ||
      pathname === "/animation-and-e-learning" ||
      pathname === "/clients" ||
      pathname === "/digital-marketing-and-pr" ||
      pathname.startsWith("/job-details/"),
    [pathname]
  );

  const handleScroll = useCallback(() => {
    if (shouldShowWhiteBg) return;
    setIsScrolled(window.scrollY > 50);
  }, [shouldShowWhiteBg]);

  useEffect(() => {
    if (shouldShowWhiteBg) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, shouldShowWhiteBg]);

  const navBackground = useMemo(() => {
    return shouldShowWhiteBg || isScrolled
      ? "bg-white text-black"
      : "bg-transparent text-white";
  }, [shouldShowWhiteBg, isScrolled]);

  return (
    <nav
      className={`fixed z-50 w-full p-2 sm:px-2 lg:px-12 xl:px-32  transition-all duration-300 ${navBackground}`}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Logo
          shouldShowWhiteBg={shouldShowWhiteBg}
          isScrolled={isScrolled}
          isSidebarOpen={isSidebarOpen}
          pathname={pathname}
        />
        <div className="flex items-center justify-center">
          <NavigationLinks
            isServicesHovered={isServicesHovered}
            setIsServicesHovered={setIsServicesHovered}
            setIsScrolled={setIsScrolled}
            isScrolled={isScrolled}
            pathname={pathname}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>
        <div className="xl:flex hidden font-[500] space-x-8">
          <ContactPopover isScrolled={isScrolled} />
          <Link
            className={` cursor-pointer py-2 px-[12px] my-3 rounded-[4px] bg-[#06135B] text-white ${
              pathname.includes("/clients") ? `` : ""
            }`}
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>
        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            aria-label="Open mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        pathname={pathname}
      />
    </nav>
  );
};

export default Navbar;
