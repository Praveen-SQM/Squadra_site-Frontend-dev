"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Ship,
  Factory,
  Laptop,
  HeartPulse,
  GraduationCap,
  Coffee,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Ship,
    title: "Shipping & Maritime",
    description: "Operational, Safety & Technical Training",
    details:
      "Comprehensive training modules for crew operations, safety protocols, and technical maintenance in the maritime industry.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Factory,
    title: "Manufacturing & Logistics",
    description: "Process, Induction & Equipment Learning",
    details:
      "Streamline workforce onboarding and equipment training with interactive modules for complex manufacturing processes.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Laptop,
    title: "IT & Technology",
    description: "Compliance, Product & Skill Development",
    details:
      "Keep your tech teams ahead with compliance training, product knowledge modules, and cutting-edge skill development.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Procedures, Equipment, Patient Care",
    details:
      "Critical training for medical procedures, equipment operation, and patient care standards with precision and clarity.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: GraduationCap,
    title: "Education & Government",
    description: "Curriculum & Workforce Upskilling",
    details:
      "Scalable learning solutions for educational institutions and government workforce development programs.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Coffee,
    title: "Hospitality & Retail",
    description: "Service, Behavior & Sales Excellence",
    details:
      "Elevate customer experience through training in service excellence, behavioral standards, and sales techniques.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
  },
];

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <section
      id="industries"
      ref={containerRef}
      className="py-16 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <motion.div style={{ opacity, scale }} className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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
              Industries We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Serve
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Our solutions adapt to the unique learning needs of every sector
            </motion.p>
          </motion.div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          {/* Scrollable cards */}
          <div className="overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8">
            <div className="flex gap-6 pb-8 min-w-max">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group flex-shrink-0 w-80 sm:w-96"
                  >
                    <div className="relative h-full p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden">
                      {/* Background gradient on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />

                      {/* Icon */}
                      <div
                        className={`relative mb-6 w-16 h-16 rounded-2xl ${industry.bgColor} flex items-center justify-center`}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} p-2`}
                        >
                          <Icon
                            className="w-full h-full text-white"
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="relative text-2xl font-bold text-white mb-3">
                        {industry.title}
                      </h3>
                      <p className="relative text-sm font-semibold text-purple-400 mb-4">
                        {industry.description}
                      </p>
                      <p className="relative text-sm text-gray-400 leading-relaxed mb-6">
                        {industry.details}
                      </p>

                      {/* Learn more link */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative flex items-center gap-2 text-sm text-purple-400 group-hover:text-purple-300 transition-colors"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.div>

                      {/* Bottom shine effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 px-4"
        >
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            Whatever your industry, we design learning that your people{" "}
            <span className="text-white font-semibold">understand</span>,{" "}
            <span className="text-white font-semibold">remember</span>, and{" "}
            <span className="text-white font-semibold">apply in real life</span>
            .
          </p>
        </motion.div>
      </motion.div>

      {/* Custom scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
