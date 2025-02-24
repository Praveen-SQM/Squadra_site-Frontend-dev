import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Image from 'next/image';
import serviceImageOne from "@/utilities/images/service-image-one.svg";
import serviceImageTwo from "@/utilities/images/service-image-two.svg";
import serviceImageThree from "@/utilities/images/service-image-three.svg";
import serviceImageFour from "@/utilities/images/service-image-four.svg";
import serviceImageFive from "@/utilities/images/service-image-five.svg";
import serviceImageSix from "@/utilities/images/service-image-six.svg";
import serviceImageSeven from "@/utilities/images/service-image-seven.svg";
import serviceImageEight from "@/utilities/images/service-image-eight.svg";
import serviceImageNine from "@/utilities/images/service-image-nine.svg";
import serviceImageTen from "@/utilities/images/service-image-ten.svg";
import serviceImageEleven from "@/utilities/images/service-image-eleven.svg";
import serviceImageTwelve from "@/utilities/images/service-image-twelve.svg";
import serviceImageThirteen from "@/utilities/images/service-image-thirteen.svg";

export function InfiniteSliderWithText() {

    const firstImagesSet = [
        {
            src: serviceImageTwo,
            alt: 'Dean blunt - Black Metal 2'
        },
        {
            src: serviceImageNine,
            alt: 'Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
        },
        {
            src: serviceImageTen,
            alt: 'Yung Lean - Stardust'
        },
        {
            src: serviceImageOne,
            alt: 'Lana Del Rey - Ultraviolence'
        },
        {
            src: serviceImageEleven,
            alt: 'A$AP Rocky - Tailor Swif'
        },
        {
            src: serviceImageFive,
            alt: 'Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        }
    ]

    const secondImagesSet = [
        {
            src: serviceImageTwelve,
            alt: 'DAYS BEFORE RODEO - Travis Scott'
        },
        {
            src: serviceImageFour,
            alt: "You're in My System - TORYONTHEBEAT"
        },
        {
            src: serviceImageThirteen,
            alt: "You can't tell me - People Make the World Go Round"
        },
        {
            src: serviceImageThree,
            alt: 'ye - Kanye West'
        },
        {
            src: serviceImageEight,
            alt: 'Slime Season 3 - Young Thug'
        },
        {
            src: serviceImageSix,
            alt: 'SWAG - 8ruki'
        }
    ]

    return (
        <div className="relative w-full flex flex-col items-center justify-center gap-[77px]">
            {/* Text on Top */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
                <h1 className="font-semibold xl:text-[100px] xl:leading-[119.34px] lg:text-[62px] lg:leading-[74px] md:text-[62px] md:leading-[74px] sm:text-[62px] sm:leading-[74px] text-[28px] leading-[33.41px] text-[#FFFFFF]">Capturing Your Vision,<br/> Perfecting Every Frame</h1>
            </div>

            {/* First Infinite Slider with Reduced Opacity */}
            <InfiniteSlider direction="horizontal" className="opacity-50">
                {firstImagesSet?.map((image, index) => (
                    <Image
                        key={index}
                        width={300}
                        height={300}
                        className="sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] rounded-[20px] object-cover"
                        src={image?.src}
                        alt={image?.alt}
                    />
                ))}
            </InfiniteSlider>

            {/* Second Infinite Slider with Reduced Opacity */}
            <InfiniteSlider direction="horizontal" reverse className="opacity-50">
                {secondImagesSet?.map((image, index) => (
                    <Image
                        key={index}
                        width={300}
                        height={300}
                        className="sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] rounded-[20px] object-cover"
                        src={image?.src}
                        alt={image?.alt}
                    />
                ))}
            </InfiniteSlider>
        </div>

    );
}
