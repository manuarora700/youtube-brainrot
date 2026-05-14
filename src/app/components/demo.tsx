"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const STRENGTH = 0.8;
export const Button = () => {
    const ref = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const { clientX, clientY } = e;

        const x = (clientX - (left + width / 2)) * STRENGTH;
        const y = (clientY - (top + height / 2)) * STRENGTH;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const hasMoved = position.x !== 0 || position.y !== 0;
    return (
        <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            className="border border-dashed [--show-color:var(--color-blue-500)] rounded-lg transition-colors duration-150"

            style={{
                borderColor: hasMoved ? "var(--show-color)" : "transparent",
                backgroundColor: "color-mix(in srgb, var(--show-color) 40%, transparent)"
            }}
        >
            <motion.div
                ref={ref}
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.3 }}
            >
                <button className="bg-linear-to-b from-blue-500 to-blue-700 text-white font-medium px-4 py-2 rounded-[7px] active:scale-98 transition-all duration-150 cursor-pointer text-shadow-md">
                    Subscribe NOW
                </button>
            </motion.div>
        </div>
    );
};
