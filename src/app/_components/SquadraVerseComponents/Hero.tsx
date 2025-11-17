"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import squadraVerseLogo from "../../../utilities/images/SquadraVerse_logo.png";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#193546] via-[#0DB8D3] via-40% via-[#1B7FDC] via-65% to-[#065B98] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
        {/* Purple wave texture behind the text */}
        <motion.div
          className="absolute right-[-24%] md:right-1/4 md:top-[10%] top-[15%] -translate-y-1/2 w-[700px] h-[700px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
        >
          {/* Main purple wave gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-purple-500/30 to-pink-500/25 rounded-[50%] blur-3xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)] [-webkit-transform:translateZ(0)]"
            animate={
              isMobile
                ? { opacity: 1 }
                : {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }
            }
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: isMobile ? "opacity" : "transform, opacity" }}
          />
          {/* Secondary purple glow */}
          <motion.div
            className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-purple-500/35 to-transparent rounded-full blur-2xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)] [-webkit-transform:translateZ(0)]"
            animate={
              isMobile
                ? { opacity: 0.4 }
                : {
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: isMobile ? "opacity" : "transform, opacity" }}
          />
          {/* Tertiary accent */}
          <motion.div
            className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-gradient-to-tl from-pink-500/30 via-purple-600/25 to-transparent rounded-full blur-3xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)] [-webkit-transform:translateZ(0)]"
            animate={
              isMobile
                ? { opacity: 0.3 }
                : {
                    scale: [1.1, 1.25, 1.1],
                    opacity: [0.25, 0.4, 0.25],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: isMobile ? "opacity" : "transform, opacity" }}
          />
        </motion.div>

        {/* Subtle animated orbs for depth - less prominent to show gradient */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0DB8D3]/20 rounded-full blur-3xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)] [-webkit-transform:translateZ(0)]"
          animate={
            isMobile
              ? { opacity: 0.25 }
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.3, 0.2],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: isMobile ? "opacity" : "transform, opacity" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-[450px] h-[450px] bg-[#1B7FDC]/20 rounded-full blur-3xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)] [-webkit-transform:translateZ(0)]"
          animate={
            isMobile
              ? { opacity: 0.28 }
              : {
                  scale: [1.1, 1.25, 1.1],
                  opacity: [0.2, 0.35, 0.2],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: isMobile ? "opacity" : "transform, opacity" }}
        />

        {/* Subtle overlay for smooth blending */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#193546]/20 via-transparent to-[#065B98]/20 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]" />
      </div>

      {/* Main content - Monitor optimization only (1920px+) */}
      <div className="relative z-10 w-full max-w-7xl min-[1920px]:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 min-[1920px]:px-20 text-center">
        {/* Brand tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sm:mb-6 mb-3"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm min-[1920px]:text-base text-cyan-300 border border-cyan-500/30 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
            An E-Learning Powerhouse by Squadra Media
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex justify-center"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="relative w-64 h-[55px] sm:w-80 sm:h-40 md:w-96 md:h-20 min-[1920px]:w-[450px] min-[1920px]:h-24 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
            <Image
              src={squadraVerseLogo}
              alt="SquadraVerse Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl min-[1920px]:text-7xl font-bold text-white mb-4 sm:mb-6 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
          style={{ willChange: "transform, opacity" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
          >
            Transform Learning
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-xl md:text-2xl min-[1920px]:text-3xl text-gray-300 mb-8 sm:mb-12 max-w-3xl min-[1920px]:max-w-5xl mx-auto [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
          style={{ willChange: "transform, opacity" }}
        >
          Transforming corporate learning into intelligent, engaging, and
          high-impact experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 min-[1920px]:gap-6 justify-center items-center"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="group relative px-8 py-2 sm:py-4 min-[1920px]:px-10 min-[1920px]:py-5 bg-gradient-to-r from-[#1E7FDC] to-[#0DB8D3] text-white rounded-full font-semibold text-lg min-[1920px]:text-xl shadow-2xl shadow-blue-500/60 overflow-hidden cursor-pointer border-2 border-white/30 hover:border-white/50 transition-all [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)] [-webkit-transform:translateZ(0)]"
            style={{ willChange: "transform" }}
          >
            <span className="relative z-10 flex items-center gap-2 drop-shadow-lg">
              Start Your E-Learning Project
              <ArrowRight className="w-5 h-5 min-[1920px]:w-6 min-[1920px]:h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#0DB8D3] to-[#1E7FDC] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const demoSection = document.getElementById("demo");
              demoSection?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="group px-8 py-2 sm:py-4 min-[1920px]:px-10 min-[1920px]:py-5 bg-slate-800/60 backdrop-blur-md text-white rounded-full font-semibold text-lg min-[1920px]:text-xl border-2 border-white/40 hover:bg-slate-700/70 hover:border-white/60 transition-all shadow-xl cursor-pointer [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)] [-webkit-transform:translateZ(0)]"
            style={{ willChange: "transform" }}
          >
            <span className="flex items-center gap-2 drop-shadow-lg">
              <Play className="w-5 h-5 min-[1920px]:w-6 min-[1920px]:h-6" />
              Watch Demo
            </span>
          </motion.button>
        </motion.div>

        {/* Stats or social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 sm:mt-16 min-[1920px]:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 min-[1920px]:gap-12 max-w-4xl min-[1920px]:max-w-6xl mx-auto"
          style={{ willChange: "opacity" }}
        >
          {[
            { value: "500+", label: "Learning Modules Created" },
            { value: "50+", label: "Global Clients" },
            { value: "20+", label: "Industries Served" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="text-3xl sm:text-4xl min-[1920px]:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm min-[1920px]:text-base text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
