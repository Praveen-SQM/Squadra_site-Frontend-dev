"use client";
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function VideoPlayer() {
    return (
        <div className="absolute inset-0 h-full w-full">
       <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="https://squadra-media.s3.ap-south-1.amazonaws.com/video.webm"
      />
        </div>
    );
}
