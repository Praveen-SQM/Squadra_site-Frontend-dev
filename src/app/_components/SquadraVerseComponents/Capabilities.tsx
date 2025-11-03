"use client";

import { motion } from "framer-motion";
import {
  Box,
  Video,
  FileText,
  MousePointerClick,
  Glasses,
  Sparkles,
  Globe,
  Link as LinkIcon,
} from "lucide-react";

const capabilities = [
  {
    icon: Box,
    title: "2D & 3D Animated Learning",
    description:
      "Engaging animated modules that transform complex concepts into visually stunning, memorable learning experiences.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Video,
    title: "Motion Graphics & Visual Explainers",
    description:
      "Dynamic visual storytelling that simplifies intricate processes and captivates learners from start to finish.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: FileText,
    title: "PPT + Voiceover Training",
    description:
      "Professional presentation packages with high-quality voiceovers, perfect for scalable training deployment.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: MousePointerClick,
    title: "Interactive SCORM / xAPI Modules",
    description:
      "Fully interactive, standards-compliant modules with assessments, branching scenarios, and real-time tracking.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Glasses,
    title: "AR / VR Immersive Simulations",
    description:
      "Cutting-edge augmented and virtual reality experiences for hands-on, risk-free skill development.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Rapid Learning",
    description:
      "Accelerated content creation powered by AI, delivering high-quality modules in record time without compromise.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Multilingual Localization",
    description:
      "Professional voiceovers, subtitles, and cultural adaptation for truly global learning deployment.",
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: LinkIcon,
    title: "LMS Integration & Support",
    description:
      "Seamless integration with your existing systems, plus ongoing technical support and content updates.",
    gradient: "from-pink-500 to-rose-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-16 bg-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

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
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Expertise
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We create and deliver full-scale learning ecosystems tailored to
            your goals — combining instructional design, creative excellence,
            and technology.
          </motion.p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative h-full p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden">
                  {/* Hover gradient effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon - More Visible */}
                  <div
                    className={`relative mb-4 w-14 h-14 rounded-xl bg-gradient-to-br ${capability.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-lg font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {capability.title}
                  </h3>
                  <p className="relative text-sm text-gray-400 leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Bottom shine effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
