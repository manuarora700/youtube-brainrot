"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";

const INITIAL_STACK = [
    {
        title: "Switzerland",
        description: "Mountains, lakes, and chocolate.",
        src: "https://images.unsplash.com/photo-1570161766218-f8488ebb8078?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "India",
        description: "The land of culture.",
        src: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Japan",
        description: "Technology and history.",
        src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Australia",
        description: "Kangaroos, cricket and beaches.",
        src: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Greece",
        description: "Ancient history and beautiful beaches.",
        src: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

type Item = (typeof INITIAL_STACK)[number];

/** Same spring for stack depth + drag release so one motion doesn’t finish before the other. */
const STACK_SPRING = { type: "spring" as const, stiffness: 380, damping: 32 };

/** One card in the stack: only the front card (index 0) sends itself to the back on drag end. */
function StackCard({
    item,
    index,
    total,
    onSendToBack,
}: {
    item: Item;
    index: number;
    total: number;
    onSendToBack?: () => void;
}) {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-150, 150], [-12, 12]);
    const isTop = index === 0;

    return (
        <motion.div
            className={`absolute inset-0 ${isTop ? "cursor-grab touch-none active:cursor-grabbing" : ""}`}
            animate={{
                y: `${-index * 5}%`,
                scale: 1 - index * 0.05,
            }}
            transition={STACK_SPRING}
            style={{
                zIndex: total - index,
                x,
                rotate,
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: -150, right: 150 }}
            dragElastic={0.08}
            onDragEnd={() => {
                if (!isTop || !onSendToBack) return;
                // Reorder now so y/scale spring toward the back together with x → 0 (tilt uses x).
                // Waiting until x finished made the card re-center as the top card, then jump when reordered.
                onSendToBack();
                animate(x, 0, STACK_SPRING);
            }}
        >
            <img
                src={item.src}
                alt={item.title}
                draggable={false}
                className="pointer-events-none h-full min-h-96 w-full select-none rounded-xl object-cover"
            />
            <h2 className=" absolute bottom-8 left-0 text-white text-2xl font-bold m-4 z-20">{item.title}</h2>
            <p className=" absolute bottom-2 left-0 text-white/80 text-sm m-4 z-20 ">{item.description}</p>
            <div className="absolute h-full w-full bg-black/50 rounded-xl mask-t-from-20% inset-0"></div>
        </motion.div>
    );
}

export const Cards = () => {
    const [stack, setStack] = useState(INITIAL_STACK);

    return (
        <div className="relative flex h-96 w-80 items-center justify-center">
            {stack.map((item, index) => (
                <StackCard
                    key={item.title}
                    item={item}
                    index={index}
                    total={stack.length}
                    onSendToBack={
                        index === 0 ? () => setStack((s) => [...s.slice(1), s[0]]) : undefined
                    }
                />
            ))}
        </div>
    );
};
