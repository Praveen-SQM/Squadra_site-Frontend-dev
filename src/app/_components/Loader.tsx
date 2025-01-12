'use client';
import React, { useEffect, useState } from 'react';

const InitialVideoLoader: React.FC = () => {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

  useEffect(() => {

    setIsVideoPlayed(true);


  }, []);

  const handleVideoEnd = () => {
    setIsVideoPlayed(false);
  };

  if (!isVideoPlayed) {
    return null;
  }

  return (
    <div className="initial-video-loader min-h-screen flex items-center justify-center">
      <video
        autoPlay
        muted
        playsInline
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
        preload="auto"
        onEnded={handleVideoEnd}
      >
        <source
          src="https://squadra-media.s3.ap-south-1.amazonaws.com/Saurabh+Ubale%27s+Video+-+Jan+12%2C+2025-VEED+%28online-video-cutter.com%29.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default InitialVideoLoader;
