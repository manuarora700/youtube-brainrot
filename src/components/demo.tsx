"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
export const Demo = () => {
    const items = [
        {
            title: "Innovation",
            description: "Beautiful and durable,\nby design.",
            image: "/images/1.jpg",
        },
        {
            title: "Cutting-Edge Cameras",
            description: "Picture your best\nphotos and videos.",
            image: "/images/2.jpg",
        },
        {
            title: "Chip and Battery Life",
            description: "Fast that lasts.",
            image: "/images/3.jpg",
        },
        {
            title: "iOS and Apple Intelligence",
            description: "New look. Even more magic.",
            image: "/images/4.jpg",
        },
        {
            title: "Environment",
            description: "Designed with the earth in mind.",
            image: "/images/5.jpg",
        },
        {
            title: "Privacy",
            description: "Your data.\nJust where you want it.",
            image: "/images/6.jpg",
        },
        {
            title: "Peace of Mind",
            description: "Helpful features.\nJust in case.",
            image: "/images/7.jpg",
        },
    ];

    const startEndInset =
        "pl-[max(1rem,calc((100vw-72rem)/2+1rem))] " +
        "pr-[max(1rem,calc((100vw-72rem)/2+1rem))] " +
        "scroll-pl-[max(1rem,calc((100vw-72rem)/2+1rem))] ";

    const CARD_TRANSITION = {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
    };

    const MODAL_TRANSITION = {
        type: "spring" as const,
        stiffness: 50,
        damping: 15,
    };

    const [open, setOpen] = useState(false);

    return (
        <section className="w-full overflow-hidden py-32 relative">
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={MODAL_TRANSITION}
                        className="fixed bg-black/50 inset-0 size-full z-50 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ ...MODAL_TRANSITION, delay: 0.2 }}
                            className="relative w-[70vw] mt-20 shadow-2xl h-[200vh] overflow-y-auto bg-white mx-auto rounded-3xl p-20">
                            <button
                                onClick={() => setOpen(false)}
                                className="size-12 z-20 flex items-center justify-center absolute top-6 right-6 rotate-45 bg-black rounded-full cursor-pointer"
                            >
                                <Icon className="stroke-white fill-white" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-5xl font-semibold tracking-tight mb-12">
                    Get to know your iPhone.
                </h2>
            </div>

            <div
                className={`flex gap-4 overflow-x-auto py-12 [scrollbar-width:none] snap-x snap-mandatory ${startEndInset}`}
            >
                {items.map((item, index) => (
                    <motion.button
                        onClick={() => setOpen(true)}
                        whileHover={{ scale: 1.02 }}
                        transition={CARD_TRANSITION}
                        key={item.title}
                        className="rounded-3xl snap-start flex items-start justify-start text-left relative p-10 h-180 w-100 shrink-0 overflow-hidden cursor-pointer"
                    >
                        <div className="size-12 z-20 flex items-center justify-center absolute right-4 bottom-4 rounded-full bg-white">
                            <Icon className="size-12" />
                        </div>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 size-full object-cover"
                        />
                        <div className="relative z-10 flex flex-col gap-3">
                            <h2 className="text-base font-medium text-white">{item.title}</h2>
                            <p className="text-3xl font-bold text-white/80 text-balance">
                                {item.description}
                            </p>
                        </div>
                    </motion.button>
                ))}
            </div>
        </section>
    );
};

const Icon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
            <path d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z"></path>
        </svg>
    );
};
