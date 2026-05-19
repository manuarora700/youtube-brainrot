"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Demo = () => {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <img
                src="https://assets.aceternity.com/screenshots/green-dither.webp"
                alt=""
                aria-hidden
                className="absolute inset-0 z-0 h-full w-full object-cover mask-linear-0 mask-linear-from-1% mask-linear-to-50%"
            />
            <AnimationContainer />
            <div className="relative z-20 py-20 md:py-40">
                <div className="mx-auto w-fit bg-blue-100 px-4 py-1 font-mono text-sm uppercase text-blue-500">
                    Watch a 90 second Demo
                </div>
                <h1 className="mx-auto mt-12 max-w-2xl text-center text-5xl font-normal tracking-tight text-neutral-800">
                    AI that Finds High Intent Leads on LinkedIn & Messages them Like You
                    Would
                </h1>
                <p className="mx-auto mt-8 max-w-4xl text-center text-xl font-medium text-neutral-600">
                    The first LinkedIn automation platform for warm outbound. Capture
                    signals, research leads, and book meetings - automatically. Loved by
                    sales teams and GTM agencies.
                </p>
                <div className="mx-auto mt-12 flex max-w-xl items-center justify-center">
                    <input
                        type="text"
                        placeholder="Enter your email here"
                        className="w-96 border border-neutral-200 bg-white px-4 py-2"
                    />
                    <button className="border border-black bg-black px-6 py-2 font-medium text-white">
                        Book a demo
                    </button>
                </div>
            </div>
        </div>
    );
};

const PATHS = [
    { d: "M 0 0 L 0 404.609", transform: "translate(370 0)", dim: 20 },
    {
        d: "M 164 0 L 98.814 0 L 0 83.557 L 0 205",
        transform: "translate(400 110)",
    },
    {
        d: "M 0 0 L 56.317 0 C 93.572 34.834 114.632 53.417 155 84.826 L 155 206",
        transform: "translate(181.152 110)",
    },
    { d: "M 0 0 L 295 0 L 295 81", transform: "translate(0 221)" },
    { d: "M 296 0 L 0 0 L 0 79", transform: "translate(438 221)" },
] as const;

const AnimationContainer = () => {
    return (
        <div className="pointer-events-none absolute inset-x-0 -bottom-20 z-40 mx-auto w-full max-w-[734px]">
            <div className="size-52 mx-auto inset-x-0 absolute -bottom-20 bg-white/20 rounded-md p-2">
                <div className="size-full bg-white"></div></div>
            <Tag className="top-0 inset-x-0 mx-auto">Company page Visits</Tag>
            <Tag className="top-22 -left-4">LinkedIn Followers</Tag>
            <Tag className="top-22 -right-4">Post Engagers</Tag>
            <Tag className="top-50 -right-20">Post Commenters</Tag>
            <Tag className="top-50 -left-20">Post Visitors</Tag>
            <svg viewBox="0 0 734 405" className="h-auto w-fill" fill="none">
                {PATHS.map((path) => (
                    <AnimatedLine key={path.d} {...path} />
                ))}
            </svg>
        </div>
    );
};
const Tag = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <div className={cn("absolute px-4 py-2 bg-linear-to-tr from-white/50 to-transparent border border-white text-neutral-700 backdrop-blur-sm  font-light uppercase font-mono w-60 text-center", className)}>{children}</div>
}

const SEGMENT = 0.1;
const GAP = 1 - SEGMENT;

const AnimatedLine = ({ d, transform }: { d: string; transform: string }) => {
    return (
        <g transform={transform}>
            <path
                d={d}
                stroke="color-mix(in srgb, var(--color-white) 20%, transparent)"
                strokeWidth={3}
            />

            <motion.path
                d={d}
                strokeWidth={1.5}
                stroke="var(--color-white"
                strokeDasharray={`${SEGMENT} ${GAP}`}
                pathLength={1}
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -(SEGMENT + GAP) }}
                transition={{
                    duration: 2.5,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 0.5,
                }}

            ></motion.path>
        </g>
    );
};
