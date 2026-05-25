"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
export const Hero = () => {
    const HERO_CARDS = [
        {
            activeSrc: "/1.jpg",
            left: "left-[32px]",
        },
        {
            activeSrc: "/2.jpg",
            left: "left-[64px]",
        },
        {
            activeSrc: "/3.jpg",
            left: "left-[96px]",
        },
        {
            activeSrc: "/4.jpg",
            left: "left-[128px]",
        },
        {
            activeSrc: "/5.jpg",
            left: "left-[160px]",
            showIdleSwap: false,
            className: "transition-opacity duration-300",
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const isHovered = hoveredIndex !== null;
    return (
        <div>
            <motion.h1
                key="solid"
                animate={{
                    opacity: isHovered ? 1 : 0,
                }}
                className={cn(
                    "text-5xl font-bold tracking-tight absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50",
                    "bg-clip-text text-transparent py-4 transition-all duration-500",
                    "bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_60%,rgba(255,255,255,0.2)_80%,white_100%)]",
                )}
            >
                Inspired by the pros. Made for you.
            </motion.h1>
            <motion.h1
                key="gradient"
                animate={{
                    opacity: isHovered ? 0 : 1,
                }}
                className={cn(
                    "text-5xl font-bold tracking-tight absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50",
                    "bg-clip-text text-transparent py-4 transition-all duration-500",
                    "bg-[linear-gradient(to_right,white,white)]",
                )}
            >
                Inspired by the pros. Made for you.
            </motion.h1>

            <div className="h-120 w-96 relative mask-b-from-10%">
                <Image
                    width={1000}
                    height={1000}
                    src="/main.jpg"
                    alt="hero main image"
                    className="absolute inset-y-0 left-0 h-120 w-40 object-contain"
                />

                {HERO_CARDS.map((card, index) => {
                    // something
                    const shouldShift = hoveredIndex !== null && index > hoveredIndex;

                    const shiftAmount = shouldShift ? 60 : 0;

                    return (
                        <div
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            key={card.activeSrc}
                            className={`group absolute -bottom-2 z-20 h-120 w-40 ease-out transition-all duration-300 ${card.left}`}
                            style={{
                                transform: shouldShift
                                    ? `translateX(${shiftAmount}px)`
                                    : undefined,
                            }}
                        >
                            {card.showIdleSwap !== false ? (
                                <>
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={card.activeSrc}
                                        alt="thumbnail"
                                        className="absolute inset-0 h-full w-full aspect-9/16 object-contain  opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:duration-200 z-30"
                                    />
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src="/idle.jpg"
                                        alt="thumbnail"
                                        className="absolute inset-0 h-full w-full aspect-9/16 object-contain  opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                                    />
                                    <div className="h-full z-50 w-4 absolute top-6 left-2 bg-black blur-md" />
                                </>
                            ) : (
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={card.activeSrc}
                                    alt="thumbnail"
                                    className="absolute inset-0 aspect-9/16 h-full w-full object-contain transition-opacity duration-300"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
