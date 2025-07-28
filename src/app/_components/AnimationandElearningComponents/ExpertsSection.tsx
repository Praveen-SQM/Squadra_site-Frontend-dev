'use client'
import React from "react";
import gamificationImage from "../../../utilities/images/gamification.webp"
import technicalTeamImage from "../../../utilities/images/technical-team.svg"
import subjectMatter from "../../../utilities/images/subject-matter.jpg"
import visualDesigner from "../../../utilities/images/visual-designer.webp"
import contentDeveloperImage from "../../../utilities/images/content-developer.svg"
import InstructionalDeveloperImage from "@/utilities/images/Instructional-designer.jpg"
import Image, { StaticImageData } from "next/image";

const ImageWithTextRowComponent = ({ cardImage, imageClass, text, description }: { cardImage: StaticImageData, imageClass: string, text: string, description: string }) => {
    return (
        <div className="flex sm:flex-row flex-col items-center sm:gap-0 gap-1">
            <div className="w-[310px] h-[252px] sm:w-[375px] sm:h-[255px] xl:w-[600px] xl:h-[440px] 3xl:w-[800px] 3xl:h-[586.7px] rounded-[16px] sm:rounded-[17.4px] xl:rounded-[30px] 3xl:rounded-[40px] bg-[#F4F5FF] flex items-center justify-center">
                <div className={`${imageClass} p-2.5 bg-white rounded-[24px]`}>
                    <Image src={cardImage} width={366} height={261} alt="Instructional developer" className="w-full h-full object-cover rounded-[6px]" />
                </div>
            </div>
            <div className="w-[310px] h-[149px] sm:w-[375px] sm:h-[255px] xl:w-[600px] xl:h-[440px] 3xl:w-[800px] 3xl:h-[586.7px] rounded-[16px] sm:rounded-[17.4px] xl:rounded-[30px] 3xl:rounded-[40px] bg-[#FAFAFA] flex items-center justify-center">
                <div className="flex px-3 flex-col gap-3 sm:gap-2 xl:gap-4 3xl:gap-[21px] max-w-[319px] sm:max-w-[327px] xl:max-w-[480px] 3xl:max-w-[640px]">
                    <p style={{ fontFamily: "'Manrope', sans-serif" }} className="font-bold text-[18px] leading-[24.6px] sm:text-[16px] sm:leading-[22px] xl:text-[24px] xl:leading-[32.8px] 3xl:text-[32px] 3xl:leading-[43.7px] text-[#1D1A27]">{text}</p>
                    <p style={{ fontFamily: "'Manrope', sans-serif" }} className="font-normal text-[14px] leading-[22px] sm:text-[14px] sm:leading-[19px] xl:text-[15px] xl:leading-[22px] 3xl:text-[18px] 3xl:leading-[28px] text-[#4A4852]">{description}</p>
                </div>
            </div>
        </div>
    )
}

const ImageWithTextColumnComponent = ({ cardImage, imageClass, text, description }: { cardImage: StaticImageData, imageClass: string, text: string, description: string }) => {
    return (
        <div className="flex flex-col items-center sm:gap-0 gap-1">
            <div className="w-[310px] h-[209px] sm:w-full sm:h-[208px] xl:w-[590px] xl:h-[360px] 3xl:w-[786.7px] 3xl:h-[480px] rounded-[17.4px] xl:rounded-[30px] 3xl:rounded-[40px] bg-[#F4F5FF] flex items-center justify-center">
                <div className={`${imageClass}`}>
                    <Image src={cardImage} width={366} height={261} alt="Instructional developer" className="w-full h-full object-contain" />
                </div>
            </div>
            <div className="w-[310px] h-[125px] sm:w-[369px] sm:h-[135px] xl:w-[590px] xl:h-[233px] 3xl:w-[786.7px] 3xl:h-[311px] rounded-[16px] sm:rounded-[17.4px] xl:rounded-[30px] 3xl:rounded-[40px] bg-[#FAFAFA] flex items-center justify-center">
                <div className="flex px-3  flex-col gap-3 sm:gap-2 xl:gap-4 3xl:gap-[21px] max-w-[319px] sm:max-w-[327px] xl:max-w-[480px] 3xl:max-w-[640px]">
                    <p style={{ fontFamily: "'Manrope', sans-serif" }} className="font-bold text-[18px] leading-[24.6px] sm:text-[16px] sm:leading-[22px] xl:text-[24px] xl:leading-[32.8px] 3xl:text-[32px] 3xl:leading-[43.7px] text-[#1D1A27]">{text}</p>
                    <p style={{ fontFamily: "'Manrope', sans-serif" }} className="font-normal text-[14px] leading-[22px] sm:text-[14px] sm:leading-[19px] xl:text-[15px] xl:leading-[22px] 3xl:text-[18px] 3xl:leading-[28px] text-[#4A4852]">{description}</p>
                </div>
            </div>
        </div>
    )
}

const ExpertsSection = () => {
    return (
        <div className="w-full px-4 sm:px-0 py-[42px] xl:py-[72px] 3xl:py-[96px] flex flex-col items-center gap-[44px] sm:gap-[44px] xl:gap-[76px] 3xl:gap-[101px]">
            <div className="flex flex-col items-center gap-3 sm:gap-[7px] xl:gap-3 3xl:gap-4">
                <p  style={{ fontFamily: "'Manrope', sans-serif" }} className="font-bold text-[24px] leading-[32.8px] sm:text-[28px] sm:leading-[38.3px] xl:text-[42px] xl:leading-[57.4px] 3xl:text-[56px] 3xl:leading-[76.5px] text-[#1D1A27] text-center sm:text-start">
                    Meet the Experts Behind <span style={{
                        background: "linear-gradient(89.86deg, #EE3CD1 6.14%, #635BFF 84.43%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "bold",
                    }}>Our Success</span>
                </p>
                <p  className="font-normal text-[14px] leading-[24px] sm:text-[14px] sm:leading-[19px] xl:text-[16px] xl:leading-6 3xl:text-[21px] 3xl:leading-8 text-[#4A4852] text-center max-w-full sm:max-w-[508px] xl:max-w-[514px] 3xl:max-w-[686px]">
                    With a mix of technical and creative experts, we ensure the best outcomes for every project.
                </p>
            </div>
            <div className="flex flex-col gap-5 sm:gap-[11.6px] xl:gap-5 3xl:gap-[26.7px]">
                <ImageWithTextRowComponent cardImage={InstructionalDeveloperImage} imageClass="w-[209px] h-[149px] sm:w-[226px] sm:h-[151px] xl:w-[366px] xl:h-[261px] 3xl:w-[487.7px] 3xl:h-[348px]" text="Instructional Designers" description="Specialists in structuring learning objectives, creating impactful content, and ensuring it is pedagogically sound and aligned with learning theories." />
                <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-[11.6px] xl:gap-5 3xl:gap-[26.7px]">
                    <ImageWithTextColumnComponent cardImage={contentDeveloperImage} imageClass="w-[299px] h-[186px] sm:w-[298px] sm:h-[185px] xl:w-[515px] xl:h-[310px] 3xl:w-[686.7px] 3xl:h-[426.7px]" text="Content Developers" description="Experts in multimedia creation, including videos, animations, and interactive modules, with skills in gamification and simulations." />
                    <ImageWithTextColumnComponent cardImage={visualDesigner} imageClass="w-[300px] h-[186px] sm:w-[299px] sm:h-[185px] xl:w-[517px] xl:h-[310px] 3xl:w-[689px] 3xl:h-[426.7px]" text="Visual Designers" description="Experts in multimedia creation, including videos, animations, and interactive modules, with skills in gamification and simulations." />
                </div>
                <ImageWithTextRowComponent cardImage={subjectMatter} imageClass="w-[231px] h-[174px] sm:w-[219px] sm:h-[165px] xl:w-[379px] xl:h-[285px] 3xl:w-[505px] 3xl:h-[380px]" text="Subject Matter Experts" description="Specialists in structuring learning objectives and creating impactful content, ensuring it is pedagogically sound and aligned with learning theories." />
                <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-[11.6px] xl:gap-5 3xl:gap-[26.7px]">
                    <ImageWithTextColumnComponent cardImage={technicalTeamImage} imageClass="w-[271px] h-[169px] sm:w-[298px] sm:h-[185px] xl:w-[515px] xl:h-[310px] 3xl:w-[687px] 3xl:h-[427px]" text="Technical Team" description="Developers specializing in LMS deployment, integration, and customization, providing ongoing operational support." />
                    <ImageWithTextColumnComponent cardImage={gamificationImage} imageClass="w-[300px] h-[186px] sm:w-[299px] sm:h-[185px] xl:w-[517px] xl:h-[310px] 3xl:w-[689px] 3xl:h-[427px]" text="Gamification Specialists" description="Experts in designing interactive learning experiences to boost engagement and retention." />
                </div>
            </div>
        </div>
    );
};

export default ExpertsSection;
