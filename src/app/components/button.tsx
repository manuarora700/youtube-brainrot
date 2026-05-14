"use client";
import { motion } from "motion/react";
import React, { useRef, useState } from "react";

export const Button = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement>(null);
    const STRENGTH = 0.3;
    const MAX_DISTANCE = 20;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const { clientX, clientY } = e;

        let x = (clientX - (left + width / 2)) * STRENGTH;
        let y = (clientY - (top + height / 2)) * STRENGTH;

        const distance = Math.hypot(x, y);
        if (distance > MAX_DISTANCE) {
            const scale = MAX_DISTANCE / distance;
            x *= scale;
            y *= scale;
        }

        setPosition({ x, y });
    };
    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const hasMoved = position.x !== 0 || position.y !== 0;
    return (
        <div
            className="border border-dashed rounded-lg transition-colors duration-500 [--show-color:var(--color-blue-500)] dark:[--show-color:var(--color-blue-600)]"
            style={{
                borderColor: hasMoved ? "var(--show-color)" : "transparent",
                backgroundColor: hasMoved ? "color-mix(in srgb, var(--show-color) 10%, transparent)" : "transparent",

            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                ref={ref}
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            >
                <button className="bg-linear-to-b relative from-blue-500 to-blue-700 text-white font-medium rounded-lg px-4 py-2">
                    Button
                </button>
            </motion.div>
        </div>
    );
};
