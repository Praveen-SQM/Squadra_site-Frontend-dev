import React from 'react';
import DesktopUi from '@/app/_components/BrandingAndCreative/DesktopUi';
import MobileUi from '@/app/_components/BrandingAndCreative/MobileUi';
import TabUi from '@/app/_components/BrandingAndCreative/TabUi';
function BrandingAndCreative() {
  return (
    <div className='min-h-screen max-w-full bg-black mx-auto overflow-x-hidden'>
      <div className="hidden lg:block w-full mx-auto overflow-x-hidden">
        <DesktopUi />
      </div>
      <div className="hidden sm:block lg:hidden w-full mx-auto overflow-x-hidden">
        <DesktopUi />
      </div>
      <div className="block sm:hidden w-full max-w-[410px] mx-auto overflow-x-hidden">
        <DesktopUi />
      </div>
    </div>
  );
}
export default BrandingAndCreative;