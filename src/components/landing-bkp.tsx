"use client";
import { motion, MotionValue, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react';
import React, { useRef } from 'react'

const SPRING_CONFIG = {
    stiffness: 300,
    damping: 30,
}

export const Landing = () => {
    return (
        <div className="h-[400vh] p-20 bg-gray-100">
            <div className="max-w-5xl mx-auto bg-white h-full" />
            <div className="fixed inset-0 h-full w-full">
                <Bars />
            </div>
        </div>
    )
}


const Bars = () => {
    const bars = new Array(50).fill(0).map((_, index) => index);
    let mouseY = useMotionValue(Infinity);

    const barsHeight = bars.length * 1 + (bars.length - 1) * 8; // 50 bars (1px each) + 49 gaps (8px each)
    const { scrollYProgress } = useScroll();

    const translate = useSpring(useTransform(scrollYProgress, [0, 1], [0, barsHeight]), {
        ...SPRING_CONFIG,
    });

    return (
        <motion.div
            onMouseMove={(e) => mouseY.set(e.clientY)}
            onMouseLeave={() => mouseY.set(Infinity)}
            className="flex flex-col gap-2 absolute top-1/2 -translate-y-1/2 left-0 w-fit">
            {bars.map((bar) => (
                <Bar key={bar} mouseY={mouseY} isLarger={bar % 5 === 0} />
            ))}
            <motion.div
                style={{
                    y: translate,
                }}
                className="h-px w-screen bg-orange-400 absolute top-0 left-0" />
        </motion.div>
    )
}

const Bar = ({ mouseY, isLarger }: { mouseY: MotionValue<number>, isLarger: boolean }) => {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseY, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 }
        return val - bounds.y - bounds.height / 2
    });

    let widthTransform = useSpring(
        useTransform(distance, [-50, 0, 50], isLarger ? [50, 120, 50] : [40, 100, 40]),
        { ...SPRING_CONFIG }
    );

    return <motion.div ref={ref} className={`bg-neutral-300 h-px w-10 ${isLarger ? 'bg-neutral-900' : ''}`} style={{ width: widthTransform }} />
}