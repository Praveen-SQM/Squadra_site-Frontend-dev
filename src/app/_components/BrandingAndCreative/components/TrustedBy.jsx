import React from "react";

const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-center">
      {/* "Trusted By" text with a gap of 62px below */}
      <h1 className="text-2xl font-bold mb-[62px]">Trusted By</h1>

      {/* Logos container with flex and opacity */}
      <div className="flex gap-5">
        <img src="logo1.png" alt="Logo 1" className="w-42 h-24 bg-gray-700 rounded-lg opacity-50" />
        <img src="logo2.png" alt="Logo 2" className="w-42 h-24 bg-gray-700 rounded-lg opacity-50" />
        <img src="logo3.png" alt="Logo 3" className="w-42 h-24 bg-gray-700 rounded-lg opacity-50" />
        <img src="logo4.png" alt="Logo 4" className="w-42 h-24 bg-gray-700 rounded-lg opacity-50" />
        <img src="logo5.png" alt="Logo 5" className="w-42 h-24 bg-gray-700 rounded-lg opacity-50" />
      </div>
    </div>
  );
};

export default TrustedBy;