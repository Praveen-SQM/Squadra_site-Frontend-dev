
'use client';
import React, { useEffect, useState } from 'react';
import video from '/public/initial-video.mp4';
const InitialVideoLoader: React.FC = () => {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

  useEffect(() => {
    const videoPlayed = localStorage.getItem('videoPlayed');
    if (!videoPlayed) {
      setIsVideoPlayed(true);
    //   localStorage.setItem('videoPlayed', 'true');
    }
  }, []);

  if (!isVideoPlayed) {
    return null;
  }

  return (
    <div className="initial-video-loader min-h-screen flex items-center justify-center">
      <video 
        autoPlay 
        muted 
        playsInline 
        width="50%" 
        height="50%" 
        onEnded={() => setIsVideoPlayed(false)}
        className="video"
      >
        <source src={"https://squadra-media.s3.ap-south-1.amazonaws.com/Saurabh+Ubale%27s+Video+-+Jan+12%2C+2025-VEED+%28online-video-cutter.com%29.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default InitialVideoLoader;


