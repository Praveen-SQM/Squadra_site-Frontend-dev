"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InitialVideoLoader from "./Loader";

export default function ClientLoaderWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("isLoaded", "true");
        }, 4000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && !sessionStorage.getItem("isLoaded") ? (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }} 
                >
                    <InitialVideoLoader />
                </motion.div>
            ) : (
                <div
                    // key="content"
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // exit={{ opacity: 0 }}
                    // transition={{ duration: 0.1, ease: "easeInOut" }} 
                    className="flex flex-col min-h-screen"
                >
                    <Navbar />
                    <main className="bg-white text-gray-800 flex-grow">{children}</main>
                    <Footer />
                </div>
            )}
        </AnimatePresence>
    );
}
