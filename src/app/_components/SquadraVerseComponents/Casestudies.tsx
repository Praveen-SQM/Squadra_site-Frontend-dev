'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    client: 'Maritime Client',
    industry: 'Shipping & Maritime',
    challenge: 'Global Crew Training Standardization',
    solution: '60-module offline e-learning suite for global crew training',
    results: [
      { metric: '70%', label: 'Increase in Engagement', icon: TrendingUp },
      { metric: '5,000+', label: 'Crew Members Trained', icon: Users },
      { metric: '40%', label: 'Faster Onboarding', icon: Clock },
    ],
    description:
      'Developed a comprehensive offline learning platform for maritime crews across 20+ vessels, ensuring consistent training delivery in low-connectivity environments.',
    gradient: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/5',
  },
  {
    client: 'University Network',
    industry: 'Education',
    challenge: 'Faculty-Student Engagement',
    solution: 'Blended faculty-student learning programs with interactive modules',
    results: [
      { metric: '55%', label: 'Higher Completion', icon: TrendingUp },
      { metric: '12,000+', label: 'Active Learners', icon: Users },
      { metric: '30%', label: 'Time Saved', icon: Clock },
    ],
    description:
      'Created engaging blended learning experiences combining live sessions with on-demand modules, resulting in dramatically improved student outcomes.',
    gradient: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/5',
  },
  {
    client: 'Tech Enterprise',
    industry: 'IT & Technology',
    challenge: 'Global Compliance Rollout',
    solution: 'Multilingual compliance training across 15 regions',
    results: [
      { metric: '40%', label: 'Faster Implementation', icon: TrendingUp },
      { metric: '25,000+', label: 'Employees Certified', icon: Users },
      { metric: '95%', label: 'Completion Rate', icon: Clock },
    ],
    description:
      'Delivered compliance training in 12 languages with cultural adaptation, ensuring consistent understanding across diverse global teams.',
    gradient: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/5',
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

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
            Proven{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Results
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We&apos;ve helped forward-thinking organizations transform how they
            educate their people
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              <div
                className={`relative h-full p-8 ${study.bgColor} backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative">
                  {/* Industry tag */}
                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${study.gradient} text-white`}
                    >
                      {study.industry}
                    </span>
                  </div>

                  {/* Client name */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {study.client}
                  </h3>

                  {/* Challenge */}
                  <p className="text-sm text-purple-400 font-semibold mb-4">
                    {study.challenge}
                  </p>

                  {/* Solution */}
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Results metrics */}
                  <div className="space-y-4 mb-6">
                    {study.results.map((result, idx) => {
                      const Icon = result.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${study.gradient} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">
                              {result.metric}
                            </div>
                            <div className="text-xs text-gray-400">
                              {result.label}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Learn more link */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Bottom shine */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg mb-6">
            See how we can deliver similar results for your organization
          </p>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-colors"
          >
            Explore All Case Studies
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}