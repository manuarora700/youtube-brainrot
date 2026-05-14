"use client";
import { MotionValue, useScroll, motion, useTransform } from "motion/react";
import React, { useRef } from "react";

const COPY =
    "Get the best in class components, blocks and templates for your next SaaS product.";

export const ScrollDemo = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const chars = [...COPY];
    const total = chars.length;

    return (
        <section ref={sectionRef} className="h-[400vh] bg-black">
            <h1 className="sticky top-1/2 inset-x-0 text-white text-center text-5xl tracking-tight font-medium max-w-5xl mx-auto -translate-y-1/2">
                {chars.map((char, i) => (
                    <ScrollChar
                        key={`${i}-${char}`}
                        char={char}
                        index={i}
                        total={total}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </h1>
        </section>
    );
};

const WAVE_FACTOR = 0.12

const ScrollChar = ({
    char,
    index,
    total,
    scrollYProgress,
}: {
    char: string;
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
}) => {


    const start = index / Math.max(total, 1);
    const end = Math.min(start + WAVE_FACTOR, 1);
    const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
    const y = useTransform(scrollYProgress, [start, end], [14, 1]);

    return (
        <motion.span style={{ opacity, y, display: "inline-block" }}>
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
};
