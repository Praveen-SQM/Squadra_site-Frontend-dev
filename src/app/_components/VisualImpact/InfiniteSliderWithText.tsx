import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Image from 'next/image';
import serviceImageOne from "@/utilities/images/service-image-one.svg";
import serviceImageTwo from "@/utilities/images/service-image-two.svg";
import serviceImageThree from "@/utilities/images/service-image-three.svg";
import serviceImageFour from "@/utilities/images/service-image-four.svg";
import serviceImageFive from "@/utilities/images/service-image-five.svg";
import serviceImageSix from "@/utilities/images/service-image-six.svg";
import serviceImageEight from "@/utilities/images/service-image-eight.svg";
import serviceImageNine from "@/utilities/images/service-image-nine.svg";
import serviceImageTen from "@/utilities/images/service-image-ten.svg";
import serviceImageEleven from "@/utilities/images/service-image-eleven.svg";
import serviceImageTwelve from "@/utilities/images/service-image-twelve.svg";
import serviceImageThirteen from "@/utilities/images/service-image-thirteen.svg";
import { HoverButton } from '../ITServices/DesktopUi';
import arrowRight from '@/utilities/images/arrow-right.svg';
import righticon from '@/utilities/images/right-arrow.svg';

export function InfiniteSliderWithText() {
  const firstImagesSet = [
    { src: serviceImageTwo, alt: 'Dean blunt - Black Metal 2' },
    { src: serviceImageNine, alt: 'Jungle Jack - JUNGLE DES ILLUSIONS VOL 2' },
    { src: serviceImageTen, alt: 'Yung Lean - Stardust' },
    { src: serviceImageOne, alt: 'Lana Del Rey - Ultraviolence' },
    { src: serviceImageEleven, alt: 'A$AP Rocky - Tailor Swif' },
    { src: serviceImageFive, alt: 'Midnight Miami (feat Konvy) - Nino Paid, Konvy' }
  ];

  const secondImagesSet = [
    { src: serviceImageTwelve, alt: 'DAYS BEFORE RODEO - Travis Scott' },
    { src: serviceImageFour, alt: "You're in My System - TORYONTHEBEAT" },
    { src: serviceImageThirteen, alt: "You can't tell me - People Make the World Go Round" },
    { src: serviceImageThree, alt: 'ye - Kanye West' },
    { src: serviceImageEight, alt: 'Slime Season 3 - Young Thug' },
    { src: serviceImageSix, alt: 'SWAG - 8ruki' }
  ];

  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-[77px]">
      {/* Text on Top */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
        <h1 className="font-semibold xl:text-[100px] xl:leading-[119.34px] lg:text-[62px] lg:leading-[74px] md:text-[62px] md:leading-[74px] sm:text-[62px] sm:leading-[74px] text-[28px] leading-[33.41px] text-white">
          Capturing Your Vision,<br /> Perfecting Every Frame
        </h1>
        <div className="flex justify-center mt-4">
          <HoverButton
            href="/careers"
            buttonText="VIEW PORTFOLIO"
            defaultIcon={arrowRight}
            hoverIcon={righticon}
          />
        </div>
      </div>

      {/* First Slider with Overlay */}
      <div className="relative w-full">
        <InfiniteSlider direction="horizontal" className="opacity-50">
          {firstImagesSet.map((image, index) => (
            <Image
              key={index}
              width={300}
              height={300}
              className="sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] rounded-[20px] object-cover"
              src={image.src}
              alt={image.alt}
            />
          ))}
        </InfiniteSlider>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#13131366] pointer-events-none" />
      </div>

      {/* Second Slider with Overlay */}
      <div className="relative w-full">
        <InfiniteSlider direction="horizontal" reverse className="opacity-50">
          {secondImagesSet.map((image, index) => (
            <Image
              key={index}
              width={300}
              height={300}
              className="sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] rounded-[20px] object-cover"
              src={image.src}
              alt={image.alt}
            />
          ))}
        </InfiniteSlider>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#13131366] pointer-events-none" />
      </div>
    </div>
  );
}











// import { InfiniteSlider } from '@/components/ui/infinite-slider';
// import Image from 'next/image';
// import React from 'react';

// // Local images
// import serviceImageOne from "@/utilities/images/service-image-one.svg";
// import serviceImageTwo from "@/utilities/images/service-image-two.svg";
// import serviceImageThree from "@/utilities/images/service-image-three.svg";
// import serviceImageFour from "@/utilities/images/service-image-four.svg";
// import serviceImageFive from "@/utilities/images/service-image-five.svg";
// import serviceImageSix from "@/utilities/images/service-image-six.svg";
// import serviceImageEight from "@/utilities/images/service-image-eight.svg";
// import serviceImageNine from "@/utilities/images/service-image-nine.svg";
// import serviceImageTen from "@/utilities/images/service-image-ten.svg";
// import serviceImageEleven from "@/utilities/images/service-image-eleven.svg";
// import serviceImageTwelve from "@/utilities/images/service-image-twelve.svg";
// import serviceImageThirteen from "@/utilities/images/service-image-thirteen.svg";

// // TypeScript props
// type Media = {
//   type: 'video' | 'image';
//   src: string;
//   poster?: string;
//   alt?: string;
// };

// type MediaElementProps = {
//   media: Media;
//   className?: string;
// };

// // Separate MediaElement component
// const MediaElement: React.FC<MediaElementProps> = ({ media, className = "" }) => {
//   if (media.type === 'video') {
//     return (
//       <video
//         className={`w-full h-full object-cover ${className}`}
//         autoPlay
//         muted
//         loop
//         playsInline
//         poster={media.poster}
//       >
//         <source src={media.src} type="video/mp4" />
//       </video>
//     );
//   } else {
//     return (
//       <img
//         src={media.src}
//         alt={media.alt || ""}
//         className={`w-full h-full object-cover ${className}`}
//       />
//     );
//   }
// };

// export function InfiniteSliderWithText() {
//   // Unused image sliders (commented for potential future use)
//   const firstImagesSet = [
//     {
//       src: serviceImageTwo,
//       alt: 'Dean blunt - Black Metal 2'
//     },
//     {
//       src: serviceImageNine,
//       alt: 'Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
//     },
//     {
//       src: serviceImageTen,
//       alt: 'Yung Lean - Stardust'
//     },
//     {
//       src: serviceImageOne,
//       alt: 'Lana Del Rey - Ultraviolence'
//     },
//     {
//       src: serviceImageEleven,
//       alt: 'A$AP Rocky - Tailor Swif'
//     },
//     {
//       src: serviceImageFive,
//       alt: 'Midnight Miami (feat Konvy) - Nino Paid, Konvy'
//     }
//   ];

//   const secondImagesSet = [
//     {
//       src: serviceImageTwelve,
//       alt: 'DAYS BEFORE RODEO - Travis Scott'
//     },
//     {
//       src: serviceImageFour,
//       alt: "You're in My System - TORYONTHEBEAT"
//     },
//     {
//       src: serviceImageThirteen,
//       alt: "You can't tell me - People Make the World Go Round"
//     },
//     {
//       src: serviceImageThree,
//       alt: 'ye - Kanye West'
//     },
//     {
//       src: serviceImageEight,
//       alt: 'Slime Season 3 - Young Thug'
//     },
//     {
//       src: serviceImageSix,
//       alt: 'SWAG - 8ruki'
//     }
//   ];

//   const mediaGrid: Media[][] = [
//     [
//       { type: 'video', src: '/videos/video1.mp4', poster: '/images/poster1.jpg' },
//       { type: 'image', src: '/images/woman-blonde.jpg', alt: 'Woman with blonde hair' },
//       { type: 'video', src: '/videos/video2.mp4', poster: '/images/poster2.jpg' },
//       { type: 'image', src: '/images/asian-woman.jpg', alt: 'Asian woman portrait' },
//       { type: 'image', src: '/images/black-white.jpg', alt: 'Black and white photo' }
//     ],
//     [
//       { type: 'image', src: '/images/interior.jpg', alt: 'Interior scene' },
//       { type: 'video', src: '/videos/video3.mp4', poster: '/images/poster3.jpg' },
//       { type: 'image', src: '/images/red-jacket.jpg', alt: 'Red jacket' },
//       { type: 'video', src: '/videos/video4.mp4', poster: '/images/poster4.jpg' },
//       { type: 'image', src: '/images/concert.jpg', alt: 'Concert scene' }
//     ]
//   ];

//   return (
//     <div className="relative min-h-screen bg-black overflow-hidden">
//       {/* Media Grid Background */}
//       <div className="absolute inset-0 grid grid-cols-5 grid-rows-2 gap-1 md:gap-2">
//         {mediaGrid.map((row, rowIndex) =>
//           row.map((media, colIndex) => (
//             <div
//               key={`${rowIndex}-${colIndex}`}
//               className="relative overflow-hidden"
//             >
//               <MediaElement media={media} />
//               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Content Overlay */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-white font-bold leading-tight mb-8 md:mb-12">
//             <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
//               Capturing Your Vision,
//             </span>
//             <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 md:mt-4">
//               Perfecting Every Frame
//             </span>
//           </h1>

//           <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
//             <span className="mr-3">VIEW PORTFOLIO</span>
//             <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full group-hover:bg-black transition-colors duration-300">
//               <svg
//                 className="w-4 h-4 text-black group-hover:text-white transition-colors duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Responsive Layouts */}
//       <div className="absolute inset-0 hidden sm:grid md:hidden grid-cols-3 grid-rows-3 gap-1">
//         {mediaGrid.flat().slice(0, 9).map((media, index) => (
//           <div key={`md-${index}`} className="relative overflow-hidden">
//             <MediaElement media={media} />
//             <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//           </div>
//         ))}
//       </div>

//       <div className="absolute inset-0 grid sm:hidden grid-cols-2 grid-rows-4 gap-1">
//         {mediaGrid.flat().slice(0, 8).map((media, index) => (
//           <div key={`sm-${index}`} className="relative overflow-hidden">
//             <MediaElement media={media} />
//             <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



