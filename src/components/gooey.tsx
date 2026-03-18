"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const GooeyFilter = () => {
    return (
        <svg className="absolute hidden h-0 w-0">
            <defs>
                <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                    <feColorMatrix
                        in="blur"
                        type="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                        result="goo"
                    />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
            </defs>
        </svg>
    );
};

const SearchIcon = () => {
    return (
        <motion.svg
            layoutId="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="size-4"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </motion.svg>
    );
};

const buttonVariants = {
    collapsed: { width: 115, marginLeft: 0 },
    expanded: { width: 200, marginLeft: 50 },
};

const iconBubbleVariants = {
    collapsed: { scale: 0, opacity: 0 },
    expanded: { scale: 1, opacity: 1 },
};

const transition = {
    duration: 0.4,
    type: "spring" as const,
    bounce: 0.25,
};

export interface GooeySearchProps {
    placeholder?: string;
    className?: string;
}

export function GooeySearch({
    placeholder = "Search...",
    className,
}: GooeySearchProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        if (isExpanded) {
            inputRef.current?.focus();
        } else {
            setSearchText("");
        }
    }, [isExpanded]);

    return (
        <div className={cn("relative ", className)}>
            <GooeyFilter />

            <div
                className="relative flex h-10 items-center justify-center"
                style={{ filter: "url(#gooey-filter)" }}
            >
                {/* Main search button/input */}
                <motion.div
                    className="flex h-10 items-center justify-center"
                    variants={buttonVariants}
                    initial="collapsed"
                    animate={isExpanded ? "expanded" : "collapsed"}
                    transition={transition}
                >
                    <button
                        onClick={() => setIsExpanded(true)}
                        className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-4 text-sm font-medium text-white dark:bg-white dark:text-black"
                    >
                        {!isExpanded ? (
                            <>
                                <SearchIcon />
                                {/* <span>Search</span> */}
                            </>
                        ) : (
                            <></>
                        )}
                        <motion.input
                            layoutId="input"
                            ref={inputRef}
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onBlur={() => !searchText && setIsExpanded(false)}
                            disabled={!isExpanded}
                            placeholder={placeholder}
                            className={cn(
                                "h-full w-full bg-transparent text-sm text-white outline-none dark:text-black",
                                isExpanded
                                    ? "placeholder-white/50"
                                    : "pointer-events-none placeholder-white",
                            )}
                        />
                    </button>
                </motion.div>

                {/* Gooey icon bubble that detaches from the left */}
                <motion.div
                    className="absolute top-1/2 left-0 flex size-10 -translate-y-1/2 items-center justify-center"
                    variants={iconBubbleVariants}
                    initial="collapsed"
                    animate={isExpanded ? "expanded" : "collapsed"}
                    transition={transition}
                >
                    <div className="flex size-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                        <SearchIcon />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
