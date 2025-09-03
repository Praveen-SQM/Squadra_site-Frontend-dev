import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
        "Commercial Photography | Corporate Films | Promotional Videos | Course Management | System | Event & Product Photography | Cinematic Visuals",
      ],
    },
    {
      title: "Animation & E-learning",
      link: "/animation-and-e-learning",
      items: [
        "2D/3D Animation | Explainer Videos | E-learning Modules | Motion Graphics | Interactive Learning Solutions",
      ],
    },
  ],
  [
    {
      title: "Technology & Development",
      link: "/it-services",
      items: [
        "Web & Mobile | App Development | E-commerce Solutions | AI & Machine Learning | Cloud Solutions | DevOps & Cybersecurity | Quality Assurance & Testing",
      ],
    },
    {
      title: "Branding & Creative",
      link: "/branding-and-creative",
      items: [
        "Brand Strategy & Consulting | Logo Design & Brand Identity | Graphic Design | 2D/3D Visualization | Brand Collateral | Industrial Product Design",
      ],
    },
    {
      title: "Digital Marketing & PR",
      link: "/digital-marketing-and-pr",
      items: [
        "Social Media Management | SEO & SEM | Performance Marketing | Content Marketing | Public Relations (PR) | Marketing Automation Data & Analytics",
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
          className="fixed top-20 left-1/2 w-screen max-w-[1100px] -translate-x-1/2 shadow-xl z-50 overflow-hidden bg-black"
        >
          <div className="absolute inset-0 bg-black" />

          {/* Shine effect - bottom left corner */}
          <div
            className="absolute bottom-0 left-0 w-full h-80 pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(ellipse 800px 400px at bottom left, rgba(251, 174, 23, 0.4) 0%, rgba(59, 130, 246, 0.3) 30%, rgba(29, 78, 216, 0.2) 50%, transparent 80%)",
              filter: "blur(2px)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 container px-20 py-12 h-full">
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
                            <span className="w-fit block text-white">
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
                              className="cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#FBAE17] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#FBAE17] transition-colors duration-300"
                              onClick={() => {
                                setIsServicesHovered(false);
                                setIsScrolled(false);
                              }}
                            >
                              {service.title}
                            </Link>
                          )}
                          {!service.isMainHeading && (
                            <ArrowUpRight className="ml-2 h-6 w-6 text-[#FFFFFF] group-hover:text-[#FBAE17] transition-all duration-300 group-hover:rotate-45" />
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
                          className="text-[16px] font-medium leading-[150%] tracking-[0%] text-white flex items-center group"
                          style={{
                            fontFamily:
                              "SF UI Display, -apple-system, BlinkMacSystemFont, sans-serif",
                          }}
                        >
                          <Link
                            href={service.link}
                            className="cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#FBAE17] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-[#FBAE17] transition-colors duration-300"
                            onClick={() => {
                              setIsServicesHovered(false);
                              setIsScrolled(false);
                            }}
                          >
                            {service.title}
                          </Link>
                          <ArrowUpRight className="ml-2 h-6 w-6 text-[#FFFFFF] group-hover:text-[#FBAE17] transition-colors duration-300" />
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
