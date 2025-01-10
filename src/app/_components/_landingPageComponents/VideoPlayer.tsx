'use client';

export default function VideoPlayer() {
    return (
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/api/video"
      />
    );
}
