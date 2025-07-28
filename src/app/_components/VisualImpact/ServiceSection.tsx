import Image from "next/image";

interface ServiceSectionProps {
  category: string;
  title: string;
  description: string;
  image: string; // should be a string path like "/images/xyz.jpg"
  maxParagraphWidth?: string;
  isReversed?: boolean;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  category,
  title,
  description,
  image,
  maxParagraphWidth = "max-w-md",
  isReversed = false,
}) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000A8] backdrop-blur-[54px] z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6 sm:px-12">
        <div
          className={`w-full max-w-7xl flex flex-col lg:flex-row ${
            isReversed ? "lg:flex-row-reverse" : ""
          } items-center gap-12`}
        >
          <div className="text-white text-center lg:text-left max-w-xl">
            {/* Category */}
            <div className="border-t border-b border-[#D1D1D1] text-[#D1D1D1] text-sm tracking-widest uppercase inline-block py-1 px-3 mb-6">
              {category}
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className={`text-gray-300 text-lg ${maxParagraphWidth} mb-8`}>
              {description}
            </p>

            {/* CTA */}
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-black hover:text-white border-2 border-white transition-all duration-300 ease-in-out">
              <span className="mr-3">GET A QUOTE</span>
              <div className="flex items-center justify-center w-8 h-8 bg-black group-hover:bg-white rounded-full transition-colors duration-300">
                <svg
                  className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
