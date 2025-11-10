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
          className="text-center mb-20"
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

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line - vertical on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50 lg:hidden" />
          
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative mb-16 lg:mb-24 last:mb-0 ${
                  isEven ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'
                } lg:w-[calc(50%+40px)]`}
              >
                {/* Desktop connecting line */}
                <div className={`hidden lg:block absolute top-8 w-20 h-0.5 ${
                  isEven ? '-right-20' : '-left-20'
                }`}>
                  <div className={`h-full bg-gradient-to-r ${
                    isEven 
                      ? 'from-transparent to-purple-500/50' 
                      : 'from-purple-500/50 to-transparent'
                  }`} />
                </div>

                {/* Content container */}
                <div className="flex gap-6 items-start ml-20 lg:ml-0">
                  {/* Icon - Mobile: beside timeline, Desktop: alternating sides */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`absolute left-0 lg:relative lg:left-auto flex-shrink-0 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} p-1 shadow-lg`}>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.gradient} blur-xl opacity-50`} />
                      <div className="relative w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    
                    {/* Step number */}
                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br ${reason.gradient} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Text content */}
                  <div className={`flex-1 ${isEven ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}>
                    <motion.h3
                      whileHover={{ x: isEven ? -5 : 5 }}
                      className="text-2xl sm:text-3xl font-bold text-white mb-3"
                    >
                      {reason.title}
                    </motion.h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed text-base sm:text-lg">
                      {reason.description}
                    </p>

                    {/* Features list */}
                    <div className={`space-y-3 ${isEven ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                      {reason.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                          whileHover={{ x: isEven ? -5 : 5 }}
                          className={`flex items-start gap-3 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                        >
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${reason.gradient} p-0.5`}>
                            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            </div>
                          </div>
                          <span className="text-sm sm:text-base text-gray-300 leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative pulse dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className={`hidden lg:block absolute top-6 w-3 h-3 rounded-full bg-gradient-to-br ${reason.gradient} ${
                    isEven ? '-right-[82px]' : '-left-[82px]'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${reason.gradient} animate-ping opacity-75`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - Animated border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative mt-20 max-w-4xl mx-auto"
        >
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] animate-gradient">
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Learning?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join industry leaders who trust Squadraverse for their enterprise learning needs
              </p>
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
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow"
              >
                Schedule a Consultation
              </motion.button>
            </div>
          </div>

          {/* Animated gradient border effect */}
          <style jsx>{`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-gradient {
              animation: gradient 3s ease infinite;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}