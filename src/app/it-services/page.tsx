import React from 'react';
import DesktopUi from '@/app/_components/ITServices/DesktopUi';
import MobileUi from '@/app/_components/ITServices/MobileUi';
import TabUi from '@/app/_components/ITServices/TabUi';

function ITServices() {
  return (
    <div>
      <div className="hidden lg:block">
        <DesktopUi />
      </div>
      <div className="hidden md:block lg:hidden">
        <TabUi />
      </div>
         <div className="block md:hidden max-w-[410px] mx-auto">
        <MobileUi />
      </div>
    </div>
  );
}

export default ITServices;