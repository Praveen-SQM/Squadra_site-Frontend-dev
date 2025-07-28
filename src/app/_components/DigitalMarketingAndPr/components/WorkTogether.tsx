import React from "react";
import {HoverButton} from "../../ITServices/DesktopUi";
import arrowRight from '@/utilities/images/arrow-right.svg'
import righticon from '@/utilities/images/right-arrow.svg'

const WorkTogether = () => {

    return (
        <div className="w-full bg-white flex flex-col items-center py-[72px] gap-[42px]">
            <div className="flex flex-col sm:gap-3 gap-0">
                <p className="font-[SF Pro Text] font-bold text-[16px] sm:text-[22px] leading-[22px] tracking-[-0.04em] text-[#4C6EFF] text-center align-middle uppercase">squadra media pvt</p>
                <p className="#131313font-[SF Pro Text] font-semibold text-[16px] sm:text-[22px] leading-[24.2px] tracking-normal text-[#131313] text-center align-middle">Have a Project in Mind ?</p>
            </div>
            <div className="flex flex-col sm:gap-2 gap-0">
                <p className="font-[SF UI Display] font-bold text-[44px] sm:text-[110px] xl:text-[140px] sm:leading-[148.2px] tracking-[-0.05em] text-[#131313] text-center align-middle uppercase">LET&apos;S <span className="text-[#FBAE17]">WORK</span></p>
                <p className="font-[SF UI Display] font-bold text-[44px] sm:text-[110px] xl:text-[140px] sm:leading-[148.2px] tracking-[-0.05em] text-[#131313] text-center align-middle uppercase">TOGETHER</p>
            </div>
            <HoverButton
                href="/contact-us"
                buttonText="CONTACT US" 
                defaultIcon={arrowRight}
                hoverIcon={righticon}
            />
        </div>
    );
};

export default WorkTogether;
