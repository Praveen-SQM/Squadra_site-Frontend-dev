"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = () => {
    const [scope, animate] = useAnimate();

    // Split the text into two lines
    const text = ["Squadra delivers cutting-edge", "solutions for business success."];

    // Process both lines
    const linesArray = text.map(line => line.split(" "));

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: "blur(0px)",
            },
            {
                duration: 0.5,
                delay: stagger(0.2),
            }
        );
    }, [animate]);

    const renderWords = () => {
        return (
            <motion.div
                ref={scope}
                style={{
                    whiteSpace: "normal",
                    overflow: "hidden",
                }}
                className="flex flex-col items-center"
            >
                {linesArray.map((lineWords, lineIdx) => (
                    <div key={lineIdx} className="mb-2">
                        {lineWords.map((word, idx) => {
                            const isHighlighted = word.toLowerCase() === "business" || word.toLowerCase() === "success.";
                            const firstChar = word.charAt(0);
                            const restOfWord = word.slice(1);

                            return (
                                <motion.span
                                    key={word + idx}
                                    className="dark:text-white text-white opacity-0"
                                    style={{
                                        filter: "blur(10px)",
                                        display: "inline",
                                        marginRight: "15px",
                                    }}
                                >
                                    {isHighlighted ? (
                                        <span
                                            style={{
                                                fontFamily: 'SF UI Display, sans-serif',
                                                textDecorationSkipInk: 'none',
                                                textUnderlinePosition: 'from-font',
                                                background: 'linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)',
                                                WebkitBackgroundClip: 'text',
                                                backgroundClip: 'text',
                                                color: 'transparent',
                                            }}
                                        >
                                            <span style={{
                                                fontFamily: 'SF UI Display, sans-serif',
                                                textDecorationSkipInk: 'none',
                                                textUnderlinePosition: 'from-font',
                                                background: 'linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)',
                                                WebkitBackgroundClip: 'text',
                                                backgroundClip: 'text',
                                                color: 'transparent',
                                            }} className="text-[46px]">{firstChar?.toUpperCase()}</span>
                                            {restOfWord}
                                        </span>
                                    ) : (
                                        <span
                                            style={{
                                                fontFamily: 'SF UI Display, sans-serif',
                                                textDecorationSkipInk: 'none',
                                                textUnderlinePosition: 'from-font',
                                            }}
                                        >
                                            {word}
                                        </span>
                                    )}
                                </motion.span>
                            );
                        })}
                    </div>
                ))}
            </motion.div>
        );
    };

    return (
        <p
            className="text-center text-[46px] font-medium leading-[54px] text-white"
            style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
            }}
        >
            {renderWords()}
        </p>
    );
};