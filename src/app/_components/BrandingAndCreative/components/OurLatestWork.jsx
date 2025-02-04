import React from "react";

const ourWorkImages = [
  {
    src: "/api/placeholder/435/262",
    alt: "Image 1",
  },
  {
    src: "/api/placeholder/870/262",
    alt: "Image 2",
  },
  {
    src: "/api/placeholder/870/262",
    alt: "Image 3",
  },
  {
    src: "/api/placeholder/435/262",
    alt: "Image 4",
  },
];

const OurLatestWork = () => {
  return (
    <div className="h-fit flex flex-col w-full items-center bg-black">
      <div className="w-full max-w-7xl flex flex-col gap-6 items-center py-40 bg-black">
        <p className="text-6xl text-white">Our Latest works</p>
        <p className="text-gray-500 max-w-96 text-center">
          Expand and win in every market with optimised checkout and payments.
        </p>
      </div>

      {/* Images Section */}
      <div className="w-full px-6 py-12 flex flex-col gap-6">
        {[0, 2].map((rowIndex) => (
          <div key={rowIndex} className="flex gap-6">
            <div
              className={`h-[468px] w-full bg-gray-700 rounded-xl overflow-hidden ${
                rowIndex === 0 ? "w-1/3" : "w-2/3"
              }`}
            >
              <img
                src={ourWorkImages[rowIndex].src}
                alt={ourWorkImages[rowIndex].alt}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div
              className={`h-[468px] bg-gray-700 rounded-xl overflow-hidden ${
                rowIndex === 0 ? "w-2/3" : "w-1/3"
              }`}
            >
              <img
                src={ourWorkImages[rowIndex + 1].src}
                alt={ourWorkImages[rowIndex + 1].alt}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>

      <button className="px-[20px] py-[16px] rounded-xl bg-white">View all works ⟶</button>
    </div>
  );
};

export default OurLatestWork;
