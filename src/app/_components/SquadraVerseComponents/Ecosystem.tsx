'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  GraduationCap,
  Server,
  Film,
  ArrowRight,
  CircleDot,
} from 'lucide-react';

const ecosystemParts = [
  {
    icon: Sparkles,
    name: 'Squadra Media',
    description: 'Strategy, Branding & Digital Communication',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Brand Strategy',
      'Digital Marketing',
      'Creative Direction',
      'Content Strategy',
    ],
  },
  {
    icon: GraduationCap,
    name: 'Squadraverse',
    description: 'E-Learning Solutions & Content Creation',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Interactive Modules',
      'AR/VR Training',
      'Multilingual Content',
      'LMS Integration',
    ],
    highlight: true,
  },
  {
    icon: Server,
    name: 'Squadra IT',
    description: 'LMS Platforms, Integrations & Automation',
    color: 'from-green-500 to-emerald-500',
    features: [
      'Custom LMS Development',
      'API Integrations',
      'Workflow Automation',
      'Technical Support',
    ],
  },
  {
    icon: Film,
    name: 'Squadra Production',
    description: 'Film & Motion for Training & Corporate Storytelling',
    color: 'from-orange-500 to-red-500',
    features: [
      'Video Production',
      'Motion Graphics',
      'Corporate Films',
      'Documentary Style',
    ],
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-full blur-3xl" />

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
            Powered by the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Squadra Ecosystem
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Squadraverse is part of Squadra Media&apos;s integrated ecosystem,
            combining creativity, technology, and production excellence
          </motion.p>
        </motion.div>

        {/* Ecosystem visualization */}
        <div className="mb-16">
          {/* Desktop: 2x2 Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ecosystemParts.map((part, index) => {
              const Icon = part.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div
                    className={`relative p-8 ${
                      part.highlight
                        ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50'
                        : 'bg-slate-950/50 border border-slate-800'
                    } backdrop-blur-sm rounded-3xl hover:border-slate-700 transition-all duration-300 overflow-hidden`}
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${part.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    {/* Highlight badge */}
                    {part.highlight && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
                          You are here
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${part.color} flex items-center justify-center`}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="relative text-2xl font-bold text-white mb-2">
                      {part.name}
                    </h3>
                    <p className="relative text-sm text-gray-400 mb-6">
                      {part.description}
                    </p>

                    {/* Features */}
                    <ul className="relative space-y-2">
                      {part.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <CircleDot className="w-3 h-3 text-purple-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom shine */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile/Tablet: Single column */}
          <div className="lg:hidden space-y-6">
            {ecosystemParts.map((part, index) => {
              const Icon = part.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className={`relative p-6 ${
                      part.highlight
                        ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50'
                        : 'bg-slate-950/50 border border-slate-800'
                    } backdrop-blur-sm rounded-2xl overflow-hidden`}
                  >
                    {/* Highlight badge */}
                    {part.highlight && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
                          You are here
                        </span>
                      </div>
                    )}

                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${part.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {part.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-3">
                          {part.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {part.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-slate-800/50 text-xs text-gray-300 rounded-md"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto p-8 bg-slate-950/50 backdrop-blur-sm rounded-3xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              360° Learning Transformation
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              You gain the collective strength of our entire ecosystem — from
              concept to platform, seamlessly aligned with your business goals.
              Strategy, content creation, technology, and production excellence,
              all working together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg shadow-purple-500/50 inline-flex items-center gap-2"
            >
              Discover the Ecosystem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}