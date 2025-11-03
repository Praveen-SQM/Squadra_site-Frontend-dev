'use client';

import { motion } from 'framer-motion';
import {
  Layers,
  Award,
  Zap,
  Globe2,
  Handshake,
  CheckCircle2,
} from 'lucide-react';

const reasons = [
  {
    icon: Layers,
    title: 'End-to-End Capability',
    description:
      'From research and scripting to deployment — everything handled in-house.',
    features: [
      'Complete content lifecycle management',
      'No third-party dependencies',
      'Single point of accountability',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'Consistent Quality at Scale',
    description:
      'Standardized learning experiences across multiple modules and languages.',
    features: [
      'Global quality standards',
      'Rigorous QA processes',
      'Brand consistency across modules',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Faster Turnaround',
    description:
      'AI-driven workflows that accelerate delivery without compromising quality.',
    features: [
      'Rapid content development',
      'Automated workflow optimization',
      'Quick iteration cycles',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Globe2,
    title: 'Global Accessibility',
    description:
      'Multi-language voiceovers and subtitles for international teams.',
    features: [
      '40+ languages supported',
      'Cultural adaptation & localization',
      'Native speaker voiceover talent',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnership',
    description:
      'We stay involved — supporting updates, new modules, and continuous improvement.',
    features: [
      'Ongoing support & maintenance',
      'Content updates & refreshes',
      'Long-term learning strategy',
    ],
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

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
            Why Leading Corporates{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Choose Us
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We act as your extended learning partner — not just a content vendor
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative w-full ${index === reasons.length - 1 ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto' : 'max-w-2xl'}`}
              >
                <div className="relative h-full p-8 bg-slate-950/50 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Content container */}
                  <div className="relative flex flex-col sm:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} p-0.5`}
                      >
                        <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                        </div>
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {reason.description}
                      </p>

                      {/* Features list */}
                      <ul className="space-y-2">
                        {reason.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2
                              className={`w-5 h-5 flex-shrink-0 mt-0.5 text-transparent bg-clip-text bg-gradient-to-br ${reason.gradient}`}
                            />
                            <span className="text-sm text-gray-300">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom shine */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative p-8 sm:p-12 bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-3xl border border-purple-500/20 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          
          <div className="relative text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Learning?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join industry leaders who trust Squadraverse for their enterprise learning needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-purple-500/50"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}