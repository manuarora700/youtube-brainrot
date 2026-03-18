"use client";
import React, { useEffect, useRef, useState } from 'react'
import { motion, SVGMotionProps } from 'motion/react';

const SVGFilter = () => {
    return <svg className="absolute hidden h-0 w-0">
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
}

export const GooeyFilter = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchText, setSearchText] = useState('');

    const buttonVariants = {
        collapsed: {
            width: 115,
            marginLeft: 0
        },
        expanded: {
            width: 200,
            marginLeft: 50,
        },
    }

    const iconBubbleVariants = {
        collapsed: { scale: 0, opacity: 0 },
        expanded: { scale: 1, opacity: 1 },
    }

    const TRANSITION = {
        duration: 1,
        type: "spring" as const,
        bounce: 0.25,
    }
    useEffect(() => {
        if (isExpanded) {
            inputRef.current?.focus();
        } else {
            setSearchText("");
        }
    }, [isExpanded]);
    return (
        <div className="relative flex items-center justify-center">
            <SVGFilter />
            <div
                style={{
                    filter: 'url(#gooey-filter)'
                }}

                className="relative flex h-10 items-center justify-center">

                <motion.div
                    variants={buttonVariants}
                    initial="collapsed"
                    animate={isExpanded ? 'expanded' : 'collapsed'}
                    transition={TRANSITION}
                    className="h-10 flex items-center justify-center">


                    <button
                        onClick={() => setIsExpanded(true)}
                        className="h-10 w-full cursor-pointer items-center justify-center flex gap-2 rounded-full bg-black text-white font-medium px-4">
                        {!isExpanded && <SearchIcon className="size-4" />}

                        <motion.input
                            layoutId="input"
                            ref={inputRef}
                            type="text"
                            value={searchText}
                            onBlur={() => !searchText && setIsExpanded(false)}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Search..."
                            className="h-full w-full bg-transparent text-sm placeholder-white/50 outline-none" />
                    </button>

                </motion.div>

                <motion.div
                    variants={iconBubbleVariants}
                    initial="collapsed"
                    animate={isExpanded ? "expanded" : 'collapsed'}
                    transition={TRANSITION}
                    className="absolute top-1/2 left-0 size-10 bg-black -translate-y-1/2 items-center justify-center flex rounded-full">
                    <SearchIcon className="size-4 text-white" />

                </motion.div>

            </div>

        </div >
    )
}


const SearchIcon = (props: SVGMotionProps<SVGSVGElement>) => {
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
            {...props}
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </motion.svg>
    );
};
