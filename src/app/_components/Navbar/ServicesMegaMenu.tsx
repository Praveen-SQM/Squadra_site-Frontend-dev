// components/ServicesMegaMenu.tsx

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "./constants"; // Define SERVICES constant in a separate file

const ServicesMegaMenu = ({
  isServicesHovered,
  setIsServicesHovered,
  setIsScrolled,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
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
            height: "100vh",
            maxWidth: "100vw",
            transform: "translateX(-50%)",
          }}
          className="bg-white text-black shadow-xl z-50"
        >
          <div className="container mx-auto p-8">
            <div className="flex justify-center mb-4">
              <div className="w-[20%] pr-0">
                <h2 className="text-3xl lg:text-4xl font-light leading-tight">
                  Developing
                  <br />
                  Robust
                  <br />
                  Skills to
                  <br />
                  Strengthen
                  <br />
                  Your
                  <br />
                  <span className="text-[#FBAE17]">Brand&apos;s</span>
                  <br />
                  Impact.
                </h2>
              </div>
              <div className="w-2/3 grid grid-cols-4 gap-8">
                {SERVICES.map((service, index) => (
                  <div key={index}>
                    <h3 className="font-bold mb-4">
                      <Link
                        href={service.link}
                        className=" cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#FBAE17] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                        onClick={() => {
                          setIsServicesHovered(false);
                          setIsScrolled(false);
                        }}
                      >
                        {service.title}
                      </Link>
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="ml-20 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#FBAE17] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
              <Link
                href="/our-services"
                className="flex items-center text-black"
                onClick={() => {
                  setIsServicesHovered(false);
                  setIsScrolled(false);
                }}
              >
                Go to overview <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicesMegaMenu;
