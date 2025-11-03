'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(true);
//   const { scrollY } = useScroll();

  // Show/hide based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50"
    >
      {/* Main Button */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group relative w-16 h-16 bg-gradient-to-br from-[#1E7FDC] to-[#0DB8D3] rounded-full shadow-2xl shadow-blue-500/50 flex items-center justify-center overflow-hidden border-2 border-white/30 hover:border-white/50 transition-all"
        aria-label="Contact Us"
      >
        {/* Animated background on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0DB8D3] to-[#1E7FDC]"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        <Send className="w-6 h-6 text-white relative z-10 group-hover:rotate-45 transition-transform duration-300" />

        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-blue-400/50 animate-ping" />
      </motion.button>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div className="bg-slate-900/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl border border-white/10 whitespace-nowrap">
          <p className="text-white text-sm font-semibold">Start Your Project</p>
        </div>
        {/* Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2">
          <div className="w-2 h-2 bg-slate-900/95 rotate-45 border-r border-t border-white/10" />
        </div>
      </motion.div>
    </motion.div>
  );
}