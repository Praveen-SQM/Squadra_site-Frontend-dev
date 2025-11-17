"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Server,
  Film,
  ArrowRight,
} from "lucide-react";

const ecosystemParts = [
  {
    icon: Sparkles,
    name: "Squadra Media",
    description: "Strategy, Branding & Digital Communication",
    color: "from-purple-500 to-pink-500",
    features: [
      "Brand Strategy",
      "Digital Marketing",
      "Creative Direction",
      "Content Strategy",
    ],
  },
  {
    icon: GraduationCap,
    name: "Squadraverse",
    description: "E-Learning Solutions & Content Creation",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Interactive Modules",
      "AR/VR Training",
      "Multilingual Content",
      "LMS Integration",
    ],
    highlight: true,
  },
  {
    icon: Server,
    name: "Squadra IT",
    description: "LMS Platforms, Integrations & Automation",
    color: "from-green-500 to-emerald-500",
    features: [
      "Custom LMS Development",
      "API Integrations",
      "Workflow Automation",
      "Technical Support",
    ],
  },
  {
    icon: Film,
    name: "Squadra Production",
    description: "Film & Motion for Training & Corporate Storytelling",
    color: "from-orange-500 to-red-500",
    features: [
      "Video Production",
      "Motion Graphics",
      "Corporate Films",
      "Documentary Style",
    ],
  },
];

// Filter to only show 3 satellite nodes (excluding Squadraverse which is center)
const satelliteNodes = ecosystemParts.filter((part) => !part.highlight);

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="py-24 min-[1920px]:py-32 bg-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Central glow - more subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl min-[1920px]:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 min-[1920px]:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 min-[1920px]:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl min-[1920px]:text-6xl font-bold text-white mb-4"
          >
            Powered by the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Squadra Ecosystem
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl min-[1920px]:text-2xl text-gray-400 max-w-3xl min-[1920px]:max-w-4xl mx-auto"
          >
            Squadraverse is part of Squadra Media&apos;s integrated ecosystem,
            combining creativity, technology, and production excellence
          </motion.p>
        </motion.div>

        {/* Orbital/Circular Layout - Desktop */}
        <div className="hidden lg:block relative w-full max-w-5xl mx-auto mb-20 min-[1920px]:mb-24">
          {/* Container with fixed aspect ratio for perfect centering */}
          <div className="relative w-full" style={{ paddingBottom: "75%" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Orbital circle - perfectly centered using viewBox */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid meet"
              >
                <motion.circle
                  cx="400"
                  cy="300"
                  r="220"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Central Hub - Absolutely centered */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="absolute z-20"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="relative">
                  {/* Pulsing rings - subtle */}
                  <div
                    className="absolute inset-0 w-48 h-48 min-[1920px]:w-56 min-[1920px]:h-56 rounded-full border border-purple-500/10 animate-pulse"
                    style={{ animationDuration: "3s" }}
                  />
                  <div
                    className="absolute inset-0 w-48 h-48 min-[1920px]:w-56 min-[1920px]:h-56 rounded-full border border-pink-500/10 animate-pulse"
                    style={{ animationDuration: "4s", animationDelay: "1.5s" }}
                  />

                  {/* Central circle - medium size */}
                  <div className="relative w-48 h-48 min-[1920px]:w-56 min-[1920px]:h-56 rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 p-[2px] shadow-2xl shadow-purple-500/30">
                    <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-6 min-[1920px]:p-8">
                      <GraduationCap
                        className="w-12 h-12 min-[1920px]:w-14 min-[1920px]:h-14 text-white mb-3"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-xl min-[1920px]:text-2xl font-bold text-white text-center mb-1">
                        Squadraverse
                      </h3>
                      <span className="text-xs min-[1920px]:text-sm text-purple-400 text-center font-medium">
                        E-Learning Hub
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Satellite nodes - Positioned relative to center */}
              {[
                { part: satelliteNodes[0], angle: -90, name: "top" }, // Squadra Media - Top
                { part: satelliteNodes[2], angle: 210, name: "left" }, // Squadra Production - Bottom Left
                { part: satelliteNodes[1], angle: -30, name: "right" }, // Squadra IT - Top Right
              ].map(({ part, angle, name }, index) => {
                const Icon = part.icon;
                const radius = 220;
                const angleRad = (angle * Math.PI) / 180;

                // Calculate position relative to center (50%, 50%)
                const centerX = 50;
                const centerY = 50;

                // Scale radius to percentage
                const radiusPercent = (radius / 800) * 100;

                const x = centerX + radiusPercent * Math.cos(angleRad);
                const y = centerY + radiusPercent * Math.sin(angleRad);

                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute z-10"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="group cursor-pointer">
                      {/* Node circle - medium size, balanced */}
                      <div
                        className={`relative w-32 h-32 min-[1920px]:w-40 min-[1920px]:h-40 rounded-full bg-gradient-to-br ${part.color} p-[2px] shadow-xl`}
                      >
                        {/* Glow effect - subtle */}
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${part.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                        />

                        <div className="relative w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-4 min-[1920px]:p-5">
                          <Icon
                            className="w-8 h-8 min-[1920px]:w-10 min-[1920px]:h-10 text-white mb-2"
                            strokeWidth={1.5}
                          />
                          <span className="text-xs min-[1920px]:text-sm font-semibold text-white text-center leading-tight">
                            {part.name}
                          </span>
                        </div>
                      </div>

                      {/* Hover tooltip - smart positioning */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute w-64 min-[1920px]:w-80 p-4 min-[1920px]:p-5 bg-slate-950/98 backdrop-blur-md rounded-xl border border-slate-800 shadow-2xl pointer-events-none z-30 ${
                          angle === -90
                            ? "top-full left-1/2 -translate-x-1/2 mt-3"
                            : angle > 0 && angle < 180
                            ? "right-full top-1/2 -translate-y-1/2 mr-3"
                            : "left-full top-1/2 -translate-y-1/2 ml-3"
                        }`}
                      >
                        {/* Tooltip arrow */}
                        <div
                          className={`absolute w-2 h-2 bg-slate-950 border-slate-800 transform rotate-45 ${
                            angle === -90
                              ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t border-l"
                              : angle > 0 && angle < 180
                              ? "right-0 top-1/2 translate-x-1/2 -translate-y-1/2 border-r border-t"
                              : "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 border-l border-b"
                          }`}
                        />

                        <h4 className="text-sm min-[1920px]:text-base font-bold text-white mb-1.5">
                          {part.name}
                        </h4>
                        <p className="text-xs min-[1920px]:text-sm text-gray-400 mb-3 leading-relaxed">
                          {part.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {part.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs min-[1920px]:text-sm px-2 py-1 bg-slate-800/80 text-gray-300 rounded border border-slate-700/50"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Flow with Connectors */}
        <div className="lg:hidden space-y-6 mb-16">
          {ecosystemParts.map((part, index) => {
            const Icon = part.icon;
            const isCenter = part.highlight;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < ecosystemParts.length - 1 && (
                  <div className="absolute left-10 top-16 w-0.5 h-10 bg-gradient-to-b from-purple-500/40 to-transparent" />
                )}

                <div
                  className={`flex items-start gap-4 ${
                    isCenter
                      ? "bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-4 rounded-xl border border-purple-500/30"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`relative flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br ${part.color} p-[2px] shadow-lg`}
                  >
                    {isCenter && (
                      <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-purple-500 text-white text-xs font-bold rounded-full">
                        Hub
                      </div>
                    )}
                    <div className="w-full h-full rounded-[10px] bg-slate-900 flex flex-col items-center justify-center">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {part.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2.5 leading-relaxed">
                      {part.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {part.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-slate-800/60 text-gray-300 rounded border border-slate-700/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-4xl min-[1920px]:max-w-5xl mx-auto relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pink-500/10 rounded-full blur-2xl" />

            <div className="relative p-8 sm:p-10 min-[1920px]:p-12 backdrop-blur-sm rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950/90 to-slate-900/90">
              <div className="inline-block mb-3">
                <div className="px-4 py-1.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full">
                  <span className="text-sm min-[1920px]:text-base font-semibold text-purple-400">
                    360° Learning Transformation
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl min-[1920px]:text-4xl font-bold text-white mb-3 min-[1920px]:mb-4">
                Collective Strength of Our Ecosystem
              </h3>
              <p className="text-gray-400 min-[1920px]:text-lg mb-6 min-[1920px]:mb-8 leading-relaxed max-w-2xl min-[1920px]:max-w-3xl mx-auto">
                You gain the collective strength of our entire ecosystem — from
                concept to platform, seamlessly aligned with your business
                goals. Strategy, content creation, technology, and production
                excellence, all working together.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="group px-8 py-3.5 min-[1920px]:px-10 min-[1920px]:py-4 min-[1920px]:text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-all inline-flex items-center gap-2"
              >
                Discover the Ecosystem
                <ArrowRight className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
