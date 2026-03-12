"use client";
import { cn } from '@/lib/utils';
import React, { useRef } from 'react';
import { motion, MotionValue, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react';

const SPRING_CONFIG = {
    stiffness: 300,
    damping: 30,
}

export const Landing = () => {
    return (
        <div className="h-[400vh] p-20 bg-gray-100">
            <div className="max-w-5xl mx-auto bg-white h-full w-full" />
            <div className="fixed inset-0 h-full w-full">
                <Bars />
            </div>
        </div>
    );
};

const Bars = () => {
    const bars = Array.from({ length: 50 }, (_, index) => index);
    const mouseY = useMotionValue(Infinity);

    const barsHeight = bars.length * 1 + (bars.length - 1) * 12;

    const { scrollYProgress } = useScroll();

    const translate = useSpring(useTransform(scrollYProgress, [0, 1], [0, barsHeight]), { ...SPRING_CONFIG });

    return (
        <motion.div
            onMouseMove={e => mouseY.set(e.clientY)}
            onMouseLeave={() => mouseY.set(Infinity)}
            className="flex flex-col gap-3 absolute top-1/2 -translate-y-1/2 w-fit"
        >
            {bars.map((bar, idx) => (
                <Bar mouseY={mouseY} key={`bar-${idx}`} isLarger={idx % 5 === 0} />
            ))}
            <motion.div
                style={{
                    y: translate,
                }}
                className="h-px w-screen bg-orange-400 absolute top-0 left-0" />
        </motion.div>
    );
};

const Bar = ({
    mouseY,
    isLarger,
}: {
    mouseY: MotionValue<number>;
    isLarger: boolean;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseY, val => {
        const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
        return val - bounds.y - bounds.height / 2;
    });

    const width = useSpring(useTransform(distance, [-50, 0, 50], isLarger ? [50, 130, 50] : [40, 100, 40]), { ...SPRING_CONFIG });

    return (
        <motion.div
            ref={ref}

            style={{ width }}
            className={cn(
                'h-px w-20 bg-neutral-300',
                isLarger && 'bg-neutral-600'
            )}
        />
    );
};