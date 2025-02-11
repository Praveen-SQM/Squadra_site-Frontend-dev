// components/Logo.tsx

import Image from "next/image";
import Link from "next/link";
import itLogo from "@/utilities/images/it-logo.svg";
import itLogocolor from "@/utilities/images/itLogoColoured.svg";
import TextSlideUp from "./SlideAnimate";

const Logo = ({
  isScrolled,
  isSidebarOpen,
  shouldShowWhiteBg,
  pathname,
}: any) => {
  return (
    <div className="w-[260px] flex items-center">
      <Link href="/">
        <Image
          src={shouldShowWhiteBg || isScrolled ? itLogocolor : itLogo}
          alt="Logo"
          width={120}
          height={40}
          layout="intrinsic"
        />
      </Link>
      {!pathname.includes("/it-services") && (
        <TextSlideUp isScroll={isScrolled} isSidebarOpen={isSidebarOpen} />
      )}
    </div>
  );
};

export default Logo;
