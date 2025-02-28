import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Image from 'next/image';
import SliderImageOne from "@/utilities/images/slider-image-1.png"
import SliderImageTwo from "@/utilities/images/slider-image-2.png"
import SliderImageThree from "@/utilities/images/slider-image-3.png"
import SliderImageFour from "@/utilities/images/slider-image-4.png"
import SliderImageFive from "@/utilities/images/slider-image-5.png"
import SliderImageSix from "@/utilities/images/slider-image-6.png"
import SliderImageSeven from "@/utilities/images/slider-image-7.png"
import SliderImageEight from "@/utilities/images/slider-image-8.png"
import SliderImageNine from "@/utilities/images/slider-image-9.png"
import SliderImageTen from "@/utilities/images/slider-image-10.png"
import SliderImageEleven from "@/utilities/images/slider-image-11.png"
import SliderImageTwelve from "@/utilities/images/slider-image-12.png"
import SliderImageThirteen from "@/utilities/images/slider-image-13.png"
import SliderImageFourteen from "@/utilities/images/slider-image-14.png"

export function InfiniteSliderVertical() {

    const firstImagesSet = [
        {
            src: SliderImageOne,
            alt: 'Dean blunt - Black Metal 2'
        },
        {
            src: SliderImageTwo,
            alt: 'Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
        },
        {
            src: SliderImageThree,
            alt: 'Yung Lean - Stardust'
        },
        {
            src: SliderImageFour,
            alt: 'Lana Del Rey - Ultraviolence'
        },
        {
            src: SliderImageFive,
            alt: 'A$AP Rocky - Tailor Swif'
        },
        {
            src: SliderImageSix,
            alt: 'Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        },
        {
            src: SliderImageSeven,
            alt: 'Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        }
    ]

    const secondImagesSet = [
        {
            src: SliderImageEight,
            alt: 'DAYS BEFORE RODEO - Travis Scott'
        },
        {
            src: SliderImageNine,
            alt: "You're in My System - TORYONTHEBEAT"
        },
        {
            src: SliderImageTen,
            alt: "You can't tell me - People Make the World Go Round"
        },
        {
            src: SliderImageEleven,
            alt: 'ye - Kanye West'
        },
        {
            src: SliderImageTwelve,
            alt: 'Slime Season 3 - Young Thug'
        },
        {
            src: SliderImageThirteen,
            alt: 'SWAG - 8ruki'
        },
        {
            src: SliderImageFourteen,
            alt: 'SWAG - 8ruki'
        }
    ]

    return (
        <div className='space-x-4 flex flex-col gap-14'>
            <InfiniteSlider direction='horizontal'>
                {firstImagesSet?.map((image, index) => {
                    return (
                        <Image key={index} width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] xl:w-[500px] xl:h-[384px] sm:w-[375px] sm:h-[288px] object-cover'
                            src={image?.src}
                            alt={image?.alt}
                        />
                    )
                })}
            </InfiniteSlider>

            <InfiniteSlider direction='horizontal' reverse>
                {secondImagesSet?.map((image, index) => {
                    return (
                        <Image key={index} width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] xl:w-[500px] xl:h-[384px] sm:w-[375px] sm:h-[288px] object-cover'
                            src={image?.src}
                            alt={image?.alt}
                        />
                    )
                })}
            </InfiniteSlider>
        </div>
    );
}
