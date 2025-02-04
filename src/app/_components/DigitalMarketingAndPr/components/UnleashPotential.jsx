import { Lightbulb } from "lucide-react";
import React from "react";

const UnleashPotential = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* First Section with Text */}
      <div className="bg-black text-center py-20">
        <div className="w-[902px] mx-auto">
          <h1 className="text-white text-[72px] font-[400]">
            Unleashing the Full Potential of Your Brand.
          </h1>
          <p className="text-white text-[18px] mt-4">
            We don’t just run campaigns; we build connections between your brand
            and your audience.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="py-20 w-full max-w-[1400px]">
        <div className="lg:flex justify-between w-full">
          {/* Image 1 */}
          <div className="relative lg:w-1/2 h-[800px] bg-gray-700 m-4 rounded-lg">
            <img
              src="your-image-url-2.jpg"
              alt="Image 2"
              className="w-full h-full"
            />
            <div className="absolute p-8 pt-24 top-0 left-0 w-full h-full flex flex-col justify-between items-center">
              <h2 className="text-white text-[36px] uppercase max-w-[376px] text-center">
                Your Brand in the Spotlight
              </h2>
              <button className="px-6 py-3 bg-white rounded-lg max-w-36">
                Contact us
              </button>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative lg:w-1/2 h-[800px] bg-gray-700 m-4 rounded-lg">
            <img
              src="your-image-url-2.jpg"
              alt="Image 2"
              className="w-full h-full"
            />
            <div className="absolute p-8 pt-24 top-0 left-0 w-full h-full flex flex-col justify-between items-center">
              <h2 className="text-white text-[36px] uppercase max-w-[376px] text-center">
                Where PR Meets Digital Power.
              </h2>
              <button className="px-6 py-3 bg-white rounded-lg max-w-36">
                Contact us
              </button>
            </div>
          </div>
        </div>

        {/* Image 3 (Bottom Image) */}
        <div className="relative h-[800px] bg-gray-700 m-4 rounded-lg">
          <img
            src="your-image-url-3.jpg"
            alt="Image 3"
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full md:flex flex-col justify-between p-8">
            <div className="transparent">.</div>
            <div className="flex flex-col gap-10 mb-8">
              <h2 className="text-white text-[36px] uppercase max-w-[620px]">
                Amplify Your Voice, Dominate the Digital.
              </h2>
              <button className="px-6 py-3 bg-white rounded-lg max-w-36">
                Contact us
              </button>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-3 py-2 bg-white bg-opacity-20 rounded text-white font-[300] flex gap-2">
                <Lightbulb /> Digital Marketing
              </button>
              <button className="px-3 py-2 bg-white bg-opacity-20 rounded text-white font-[300] flex gap-2">
                <Lightbulb /> Digital Marketing
              </button>
              <button className="px-3 py-2 bg-white bg-opacity-20 rounded text-white font-[300] flex gap-2">
                <Lightbulb /> Digital Marketing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnleashPotential;
