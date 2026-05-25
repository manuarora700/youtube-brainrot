"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type HeroCard = {
    activeSrc: string;
    left: string;
    showIdleSwap?: boolean;
    className?: string;
};

const HERO_CARDS: HeroCard[] = [
    { activeSrc: "/1.jpg", left: "left-[32px]" },
    { activeSrc: "/2.jpg", left: "left-[64px]" },
    { activeSrc: "/3.jpg", left: "left-[96px]" },
    { activeSrc: "/4.jpg", left: "left-[128px]" },
    {
        activeSrc: "/5.jpg",
        left: "left-[160px]",
        showIdleSwap: false,
        className: "transition-opacity duration-300",
    },
];



export const Hero = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div>
            <h1
                className={cn(
                    "text-5xl font-bold tracking-tight absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
                    "bg-clip-text text-transparent py-4",
                    hoveredIndex !== null
                        ? "bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_60%,rgba(255,255,255,0.2)_80%,white_100%)]"
                        : "bg-[linear-gradient(to_right,white,white)]"
                )}
            >
                Inspired by the pros. Made for you.
            </h1>
            <div className="relative flex h-120 w-96 mask-b-from-10%">
                <Image
                    src="/main.jpg"
                    alt="Hero"
                    width={1000}
                    height={1000}
                    className="absolute inset-y-0 left-0 h-120 w-40 object-contain"
                />

                {HERO_CARDS.map((card, index) => {
                    const shouldShift = hoveredIndex !== null && index > hoveredIndex;
                    const shiftAmount = shouldShift ? 60 : 0;
                    return (
                        <div
                            key={card.activeSrc}
                            className={`group absolute -bottom-2 ${card.left} z-20 h-120 w-40 transition-transform duration-300 ease-out ${card.className ?? ""}`}
                            style={{
                                transform: shouldShift
                                    ? `translateX(${shiftAmount}px)`
                                    : undefined,
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {card.showIdleSwap !== false ? (
                                <>
                                    <Image
                                        src={card.activeSrc}
                                        alt="Hero"
                                        width={1000}
                                        height={1000}
                                        className="absolute inset-0 aspect-9/16 h-full w-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                    <Image
                                        src="/idle.jpg"
                                        alt="Hero idle"
                                        width={1000}
                                        height={1000}
                                        className="absolute inset-0 aspect-9/16 h-full w-full object-contain opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <div className="h-full w-4  absolute top-8 left-2 bg-black blur-md z-50" />
                                </>
                            ) : (
                                <Image
                                    src={card.activeSrc}
                                    alt="Hero"
                                    width={1000}
                                    height={1000}
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
