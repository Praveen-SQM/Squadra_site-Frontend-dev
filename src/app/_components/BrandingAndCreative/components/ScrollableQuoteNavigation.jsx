'use client';

import { useState, useEffect, useRef } from 'react';

const ScrollableNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const sectionRef = useRef(null);
  
  const words = [
    "Building",
    "Amazing",
    "Digital",
    "Experiences",
    "Together"
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (!sectionRef.current || !isVisible) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const sectionTop = rect.top;
      const scrollProgress = -sectionTop / (sectionHeight - window.innerHeight);
      
      const wordIndex = Math.min(
        Math.max(Math.floor(scrollProgress * words.length), 0),
        words.length - 1
      );
      
      setCurrentWordIndex(wordIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const getWordStyles = (index) => {
    if (index === currentWordIndex) {
      return 'opacity-100 translate-y-0 text-blue-600 scale-110';
    }
    
    const distance = Math.abs(index - currentWordIndex);
    const opacity = Math.max(0.1, 1 - (distance * 0.35));
    const scale = Math.max(75, 100 - (distance * 10));
    
    if (index < currentWordIndex) {
      return `opacity-${Math.floor(opacity * 100)} -translate-y-${distance * 12} text-gray-400 scale-${scale}`;
    }
    
    return `opacity-${Math.floor(opacity * 100)} translate-y-${distance * 12} text-gray-400 scale-${scale}`;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative h-[150vh] bg-gradient-to-b from-white to-gray-50"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative h-96 w-full max-w-4xl mx-auto">
          {words.map((word, index) => (
            <div
              key={word}
              className={`absolute w-full text-center text-6xl font-bold
                transition-all duration-700 ease-out
                ${getWordStyles(index)}`}
              style={{
                transformOrigin: 'center center',
                willChange: 'transform, opacity'
              }}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollableNavigation;