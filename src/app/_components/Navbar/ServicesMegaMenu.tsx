// // components/ServicesMegaMenu.tsx

// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { SERVICES } from "./constants"; // Define SERVICES constant in a separate file

// const ServicesMegaMenu = ({
//   isServicesHovered,
//   setIsServicesHovered,
//   setIsScrolled,
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// }: any) => {
//   return (
//     <AnimatePresence>
//       {isServicesHovered && (
//         <motion.div
//           initial={{ opacity: 0, y: -20, scale: 0.98, x: "-50%" }}
//           animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
//           exit={{ opacity: 0, y: -10, scale: 0.98, x: "-50%" }}
//           transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
//           style={{
//             position: "fixed",
//             top: "4rem",
//             left: "50%",
//             width: "100vw",
//             height: "100vh",
//             maxWidth: "100vw",
//             transform: "translateX(-50%)",
//           }}
//           className="bg-white text-black shadow-xl z-50"
//         >
//           <div className="container mx-auto p-8">
//             <div className="flex justify-center mb-4">
//               <div className="w-[20%] pr-0">
//                 <h2 className="text-3xl lg:text-4xl font-light leading-tight">
//                   Developing
//                   <br />
//                   Robust
//                   <br />
//                   Skills to
//                   <br />
//                   Strengthen
//                   <br />
//                   Your
//                   <br />
//                   <span className="text-[#FBAE17]">Brand&apos;s</span>
//                   <br />
//                   Impact.
//                 </h2>
//               </div>
//               <div className="w-2/3 grid grid-cols-4 gap-8">
//                 {SERVICES.map((service, index) => (
//                   <div key={index}>
//                     <h3 className="font-bold mb-4">
//                       <Link
//                         href={service.link}
//                         className=" cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#FBAE17] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
//                         onClick={() => {
//                           setIsServicesHovered(false);
//                           setIsScrolled(false);
//                         }}
//                       >
//                         {service.title}
//                       </Link>
//                     </h3>
//                     <ul className="space-y-2 text-sm text-gray-600">
//                       {service.items.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="ml-20 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#FBAE17] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
//               <Link
//                 href="/our-services"
//                 className="flex items-center text-black"
//                 onClick={() => {
//                   setIsServicesHovered(false);
//                   setIsScrolled(false);
//                 }}
//               >
//                 Go to overview <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ServicesMegaMenu;

// components/ServicesMegaMenu.tsx
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight  } from "lucide-react";
import ServicesMegaMenu_gif from "@/utilities/images/ServicesMegaMenu_video.gif";
import Image from "next/image";

// Services data structure based on the image - 2 columns, 3 rows
const SERVICES = [
  [
    {
      title: "Developing Robust Skills to Strengthen Your Brand's Impact.",
      link: "/services/overview",
      items: [],
      isMainHeading: true,
    },
    {
      title: "Visual Impact",
      link: "/visual-impact",
      items: [
        "Commercial Photography | Corporate Films | Promotional Videos",
        "Course Management | System | Event & Product Photography",
        "Cinematic Visuals",
      ],
    },
    {
      title: "Animation & E-learning",
      link: "/animation-and-e-learning",
      items: [
        "2D/3D Animation | Explainer Videos | E-learning Modules",
        "Motion Graphics | Interactive Learning Solutions",
      ],
    },
  ],
  [
    {
      title: "Technology & Development",
      link: "/it-services",
      items: [
        "Web & Mobile | App Development | E-commerce Solutions",
        "AI & Machine Learning | Cloud Solutions | DevOps & Cybersecurity",
        "Quality Assurance & Testing",
      ],
    },
    {
      title: "Branding & Creative",
      link: "/branding-and-creative",
      items: [
        "Brand Strategy & Consulting | Logo Design & Brand Identity | Graphic Design |",
        "2D/3D Visualisation | Brand Collateral | Industrial Product Design",
      ],
    },
    {
      title: "Digital Marketing & PR",
      link: "/digital-marketing-and-pr",
      items: [
        "Social Media Management | SEO & SEM | Performance Marketing",
        "Content Marketing | Public Relations (PR) | Marketing Automation Data & Analytics",
      ],
    },
  ],
];

const ServicesMegaMenu = ({
  isServicesHovered,
  setIsServicesHovered,
  setIsScrolled,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  return (
    <AnimatePresence>
      {isServicesHovered && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98, x: "-50%" }}
          animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
          exit={{ opacity: 0, y: -10, scale: 0.98, x: "-50%" }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed",
            top: "4rem",
            left: "50%",
            width: "100vw",
            height: "504px",
            maxWidth: "100vw",
            transform: "translateX(-50%)",
          }}
          className="bg-black text-white shadow-xl z-50 overflow-hidden"
        >
          {/* Background Video */}
         <div className="absolute inset-0 z-0">
  <Image
    src={ServicesMegaMenu_gif}
    alt="Background animation"
    fill
    className="object-cover opacity-30"
    priority
  />

  {/* Overlay with blur and subtle black tint */}
  <div className="absolute inset-0 bg-[#00000005] backdrop-blur-[10px]"></div>
</div>

          {/* Content */}
          <div className="relative z-10 container px-32 py-12 h-full">
            <div className="flex h-full">
              {/* Right side - Services grid - 2 columns */}
              <div className="w-full flex justify-start">
                <div className="grid grid-cols-2 gap-x-24 gap-y-12 max-w-8xl">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {SERVICES[0].map((service, index) => (
                      <div key={index} className="space-y-3">
                        <h3
                          className={`flex items-center group ${
                            service.isMainHeading
                              ? "text-[28px] pb-4 font-semibold leading-[150%] tracking-[0%]"
                              : "text-[16px] font-medium leading-[150%] tracking-[0%] text-white"
                          }`}
                          style={{
                            fontFamily:
                              "SF UI Display, -apple-system, BlinkMacSystemFont, sans-serif",
                          }}
                        >
                          {service.isMainHeading ? (
                            // Non-clickable main heading without Link or transitions
                            <span className="w-fit block">
                              Developing Robust Skills to
                              <br />
                              Strengthen Your{" "}
                              <span className="text-[#FBAE17]">
                                Brand&apos;s
                              </span>{" "}
                              Impact.
                            </span>
                          ) : (
                            // Clickable service items with Link and transitions
                            <Link
                              href={service.link}
                              className="cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#FBAE17] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                              onClick={() => {
                                setIsServicesHovered(false);
                                setIsScrolled(false);
                              }}
                            >
                              {service.title}
                            </Link>
                          )}
                          {!service.isMainHeading && (
                            <ArrowUpRight className="ml-2 h-6 w-6 text-[#FFFFFF]" />
                          )}
                        </h3>
                        {service.items.length > 0 && (
                          <div className="space-y-1">
                            {service.items.map((item, i) => (
                              <p
                                key={i}
                                className="text-[13px] font-medium leading-[150%] tracking-[0%] text-gray-300"
                                style={{
                                  fontFamily:
                                    "SF UI Display, -apple-system, BlinkMacSystemFont, sans-serif",
                                }}
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-12">
                    {SERVICES[1].map((service, index) => (
                      <div key={index} className="space-y-3">
                        <h3
                          className="text-[16px] font-medium leading-[150%] tracking-[0%]  text-white flex items-center group"
                          style={{
                            fontFamily:
                              "SF UI Display, -apple-system, BlinkMacSystemFont, sans-serif",
                          }}
                        >
                          <Link
                            href={service.link}
                            className="cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#FBAE17] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                            onClick={() => {
                              setIsServicesHovered(false);
                              setIsScrolled(false);
                            }}
                          >
                            {service.title}
                          </Link>
                          <ArrowUpRight  className="ml-2 h-6 w-6 text-[#FFFFFF]" />
                        </h3>
                        <div className="space-y-1">
                          {service.items.map((item, i) => (
                            <p
                              key={i}
                              className="text-[13px] font-medium leading-[150%] tracking-[0%] text-gray-300"
                              style={{
                                fontFamily:
                                  "SF UI Display, -apple-system, BlinkMacSystemFont, sans-serif",
                              }}
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicesMegaMenu;