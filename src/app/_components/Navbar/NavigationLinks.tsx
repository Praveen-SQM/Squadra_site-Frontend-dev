import Link from "next/link";
import { PRIMARY_COLOR } from "./constants";
import ServicesMegaMenu from "./ServicesMegaMenu";

const NavigationLinks = ({
  isServicesHovered,
  setIsServicesHovered,
  setIsScrolled,
  pathname,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
  return (
    <ul className="xl:flex hidden font-[500] space-x-8">
      <Link
        className={`cursor-pointer py-5 ${
          pathname.includes("/about-us")
            ? `text-[${PRIMARY_COLOR}]`
            : "hover:text-[${PRIMARY_COLOR}]"
        }`}
        href="/about-us"
      >
        About Us
      </Link>

      <Link
        className={`cursor-pointer py-5 ${
          pathname.includes("/careers")
            ? `text-[${PRIMARY_COLOR}]`
            : "hover:text-[${PRIMARY_COLOR}]"
        }`}
        href="/careers"
      >
        Careers
      </Link>

      {/* Services Link with hover */}
      <div
        onMouseEnter={() => setIsServicesHovered(true)}
        onMouseLeave={() => setIsServicesHovered(false)}
        className="relative py-5"
      >
        <Link
          className={`cursor-pointer ${
            pathname.includes("/our-services")
              ? `text-[${PRIMARY_COLOR}]`
              : "hover:text-[${PRIMARY_COLOR}]"
          }`}
          href="/our-services"
        >
          Services
        </Link>

        {/* Mega menu for services on hover */}
        <ServicesMegaMenu
          isServicesHovered={isServicesHovered}
          setIsServicesHovered={setIsServicesHovered}
          setIsScrolled={setIsScrolled}
        />
      </div>

      <Link
        className={`cursor-pointer py-5 ${
          pathname.includes("/clients")
            ? `text-[${PRIMARY_COLOR}]`
            : "hover:text-[${PRIMARY_COLOR}]"
        }`}
        href="/clients"
      >
        Clients
      </Link>

      <Link
        className={`cursor-pointer py-5 ${
          pathname.includes("/how-it-works")
            ? `text-[${PRIMARY_COLOR}]`
            : "hover:text-[${PRIMARY_COLOR}]"
        }`}
        href="/how-it-works"
      >
        How It Works
      </Link>
    </ul>
  );
};

export default NavigationLinks;
