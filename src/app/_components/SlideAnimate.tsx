"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
    "Media", 
    "Tech",
    "Digital marketing",
    "Animation",
    "Brands",
    "Animations"
]

const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
}

export default function TextSlideUp({ isScroll }: { isScroll: boolean } ) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
        }, 2000) // Change text every 3 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="pl-2 pt-2 rounded-lg flex items-center justify-center h-12  overflow-hidden">
            <p className={`text-${isScroll ? 'black' : 'white'} font-semibold text-lg`} >.</p>
            <AnimatePresence mode="wait">
                <motion.div style={{
                    fontFamily: 'Sofia Pro, sans-serif',
                    fontWeight:700,
                    color: isScroll ? '#08115b' : 'white'
                }}
                    key={currentIndex}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        y: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className={`text-center text-${isScroll ? 'black' : 'white'} text-sm font-semibold`}
                >
                    {messages[currentIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

