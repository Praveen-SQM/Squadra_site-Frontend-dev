'use client';

import { motion } from 'framer-motion';
import { Play, Sparkles, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { useState, useRef } from 'react';

const videos = [
  {
    title: 'The Journey of Crafting Stories',
    description: 'Discover the art of storytelling in corporate learning. This module demonstrates how narrative techniques enhance engagement and knowledge retention.',
    videoUrl: 'https://squadra-media-assets.s3.ap-south-1.amazonaws.com/public/The+Journey+of+Crafting+Stories.mp4', // Place your video in public/videos/
    poster: '/videos/crafting-stories-poster.jpg', // Optional: thumbnail image
    category: 'Creative Skills',
    duration: '2 min',
    gradient: 'from-purple-500 to-pink-500',
    icon: Sparkles,
  },
  {
    title: 'Negotiation Skills',
    description: 'Master the essential techniques of effective negotiation. Interactive scenarios and real-world examples prepare learners for success.',
    videoUrl: 'https://squadra-media-assets.s3.ap-south-1.amazonaws.com/public/negotiation-skills.mov', // Place your video in public/videos/
    poster: '/videos/negotiation-skills-poster.jpg', // Optional: thumbnail image
    category: 'Professional Development',
    duration: '3 min',
    gradient: 'from-blue-500 to-cyan-500',
    icon: Sparkles,
  },
];

function VideoPlayer({ video, index }: { video: typeof videos[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const Icon = video.icon;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
      id='demo'
    >
      <div className="relative rounded-2xl overflow-hidden bg-slate-900/30 border border-slate-800/50 hover:border-slate-700 transition-all duration-300 h-full flex flex-col">
        {/* Video Player Area */}
        <div className="relative aspect-video bg-slate-900 overflow-hidden">
          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${video.gradient} opacity-10 pointer-events-none z-10`}
          />
          
          {/* Native HTML5 Video */}
          <video
            ref={videoRef}
            controlsList="nodownload nofullscreen noremoteplayback"
            className="absolute inset-0 w-full h-full object-cover"
            poster={video.poster}
            preload="metadata" // Only loads metadata initially, not the full video
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            muted={isMuted}
          >
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Custom Video Controls Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered || !isPlaying ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-20 flex items-center justify-center"
          >
            {/* Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className={`w-16 h-16 rounded-full bg-gradient-to-br ${video.gradient} flex items-center justify-center shadow-2xl transition-opacity ${isPlaying && !isHovered ? 'opacity-0' : 'opacity-100'}`}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 text-white" fill="white" />
              ) : (
                <Play className="w-7 h-7 text-white ml-1" fill="white" />
              )}
            </motion.button>
          </motion.div>

          {/* Bottom Controls Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered || !isPlaying ? 1 : 0, y: isHovered || !isPlaying ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/80 to-transparent"
          >
            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${video.gradient} transition-all duration-300`}
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>
              <button
                onClick={handleFullscreen}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r ${video.gradient} text-white shadow-lg`}
            >
              <Icon className="w-3 h-3" />
              {video.category}
            </span>
          </div>

          {/* Duration Badge */}
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-black/70 backdrop-blur-sm text-white border border-white/20">
              {video.duration}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start gap-3 mb-3">
            <div
              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${video.gradient} flex items-center justify-center flex-shrink-0`}
            >
              <Play className="w-5 h-5 text-white" fill="white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                {video.title}
              </h3>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-4 leading-relaxed flex-1">
            {video.description}
          </p>

          {/* Download/View Link */}
          {/* <motion.a
            href={video.videoUrl}
            download
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mt-auto"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Download Video</span>
          </motion.a> */}
        </div>

        {/* Bottom shine effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Experience Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Learning Content
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            See our e-learning modules in action. Each piece is crafted to engage, educate, and inspire lasting change.
          </motion.p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {videos.map((video, index) => (
            <VideoPlayer key={index} video={video} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Want to see more examples of our work? Explore our full portfolio of learning solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#1E7FDC] to-[#008BD3] text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
          >
            View Full Portfolio
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}