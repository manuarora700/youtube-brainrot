"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

type Card = {
    title: string;
    description: string;
    skeleton: React.ReactNode;
    className: string;
    config: {
        y: number;
        zIndex: number;
    };
};

export const Cards = () => {
    const cards = [
        {
            title: "Working Knowledge",
            description:
                "You have a basic understanding of the topic and can apply it to simple situations.",
            skeleton: <div className="h-50 w-full rounded-xl bg-gradient-to-r from-orange-600 to-orange-600/40"></div>,
            className: "bg-orange-500",
            config: {
                y: -20,
                x: 0,
                rotate: -15,
                zIndex: 2,
            },
        },

        {
            title: "Practical Demonstration",
            description:
                "You can demonstrate the concept in practice with real-world examples.",
            skeleton: <div className="h-50 w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-600/40"></div>,
            className: "bg-blue-500",
            config: {
                y: 20,
                x: 180,
                rotate: 8,
                zIndex: 3,
            },
        },
        {
            title: "Collaborate with AI",
            description:
                "You can effectively work alongside AI tools to enhance your workflow.",
            skeleton: <div className="h-50 w-full rounded-xl bg-gradient-to-r from-green-600 to-green-600/40"></div>,
            className: "bg-green-500",
            config: {
                y: -80,
                x: 360,
                rotate: -5,
                zIndex: 4,
            },
        },
        {
            title: "Means & Methods",
            description:
                "You understand the various approaches and techniques available.",
            skeleton: <div className="h-50 w-full rounded-xl bg-gradient-to-r from-purple-600 to-purple-600/40"></div>,
            className: "bg-purple-500",
            config: {
                y: 20,
                x: 540,
                rotate: 12,
                zIndex: 5,
            },
        },
        {
            title: "Interface Kit",
            description:
                "You have the tools and components needed to build interfaces.",
            skeleton: <div className="h-50 w-full rounded-xl bg-gradient-to-r from-pink-600 to-pink-600/40"></div>,
            className: "bg-pink-500",
            config: {
                y: 20,
                x: 720,
                rotate: -5,
                zIndex: 6,
            },
        },
    ];

    const [active, setActive] = useState<Card | null>(null);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setActive(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const isActive = () => {
        return active?.title;
    };
    return (
        <motion.div ref={ref} className="max-w-5xl mx-auto w-full h-160 relative">

            {cards.map((card, index) => (
                <motion.div key={card.title}>
                    <motion.button
                        initial={{
                            y: 400,
                            x: 0,
                            scale: 0,
                        }}
                        layoutId={card.title}
                        onClick={() => {
                            setActive(card);
                        }}
                        animate={{
                            y: active?.title === card.title ? 0 : (isActive() ? 400 : card.config.y),
                            x: active?.title === card.title ? 320 : (isActive() ? card.config.x * 0.4 + 244 : card.config.x),
                            rotate: active?.title === card.title ? 0 : (isActive() ? 0.2 * card.config.rotate : card.config.rotate),
                            scale: active?.title === card.title ? 1 : (isActive() ? 0.7 : 1),
                            width: active?.title === card.title ? 400 : 320,
                            height: active?.title === card.title ? 500 : 400,
                        }}
                        whileHover={{
                            scale: active?.title === card.title ? 1 : (isActive() ? 0.7 : 1.05),
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                        }}
                        style={{
                            zIndex: active?.config.zIndex,
                            pointerEvents: active?.title === card.title ? "none" : "auto",
                        }}
                        className={cn(
                            "w-80 p-8 absolute inset-0 items-start cursor-pointer  rounded-2xl flex flex-col justify-between overflow-hidden",
                            card.className
                        )}
                    >

                        {card.skeleton}
                        <div>
                            <motion.h2 layoutId={card.title + "title"} className="max-w-40 text-4xl text-left font-regular text-white ">
                                {card.title}
                            </motion.h2>
                            <AnimatePresence>
                                {active?.title === card.title && (
                                    <motion.p
                                        initial={{ opacity: 0, x: 20, y: 20, height: 0 }}
                                        animate={{ opacity: 1, x: 0, y: 0, height: 100 }}
                                        exit={{ opacity: 0, x: 20, y: 20, height: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1, }}
                                        className="text-white/80 text-lg mt-3 text-left"
                                    >
                                        {card.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.button>
                </motion.div>
            ))}
        </motion.div>
    );
};
