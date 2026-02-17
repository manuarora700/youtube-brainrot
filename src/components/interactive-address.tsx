"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Globe, Mail, User, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

type HighlightType = "name" | "website" | "email" | "instagram" | null;

interface TextSegmentProps {
    children: React.ReactNode;
    isActive: boolean;
    isBlurred: boolean;
    segmentRef: React.RefObject<HTMLSpanElement>;
}

const TextSegment = ({
    children,
    isActive,
    isBlurred,
    segmentRef,
}: TextSegmentProps) => {
    return (
        <motion.span
            ref={segmentRef as React.RefObject<HTMLSpanElement>}
            animate={{
                filter: isBlurred ? "blur(4px)" : "blur(0px)",
                opacity: isActive ? 1 : 0.5,
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
            className={cn(
                "tracking-tight",
                isActive ? "text-neutral-900" : "text-neutral-400",
            )}
        >
            {children}
        </motion.span>
    );
};

function AnimatedDashedBox({
    width,
    x,
    visible,
    label,
}: {
    width: number;
    x: number;
    visible?: boolean;
    label?: string;
}) {

    const paddingX = 6;
    const boxWidth = Math.max(width + paddingX * 2, 40);
    const boxHeight = 16;

    const path = `
    M 0 0
    L 0 ${boxHeight}
    L ${boxWidth} ${boxHeight}
    L ${boxWidth} 0
    `;
    return (
        <motion.div
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
            initial={{ opacity: 0, x: x - paddingX }}
            animate={{
                opacity: visible ? 1 : 0,
                x: x - paddingX,
            }}
            className="pointer-events-none absolute top-full left-0 mt-4 flex flex-col items-start"
            layoutId="dashed-box-whatever"
        >
            <motion.svg
                width={boxWidth}
                height={boxHeight + 2}
                viewBox={`0 0 ${boxWidth} ${boxHeight + 2}`}
                fill="none"
                className="overflow-visible"
            >
                <motion.path
                    d={path}
                    stroke="var(--color-neutral-300)"
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    strokeDasharray="4 4"
                    initial={{
                        strokeDashoffset: 0,
                    }}
                    animate={{
                        strokeDashoffset: [0, -16],
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />
            </motion.svg>
            <div className="relative mt-1 h-4 min-w-16 overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={label}
                        className="absolute left-0 text-xs font-medium whitespace-nowrap text-neutral-500 dark:text-neutral-400"
                        initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {label}
                    </motion.span>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default function InteractiveAddress({
    email = "manu@aceternity.com",
}: {
    email?: string;
}) {
    const icons = [
        { type: "name" as HighlightType, label: "Name", Icon: User },
        { type: "website" as HighlightType, label: "Website", Icon: Globe },
        { type: "email" as HighlightType, label: "Email", Icon: Mail },
        { type: "instagram" as HighlightType, label: "Instagram", Icon: Instagram },
    ];

    const [highlight, setHighlight] = useState<HighlightType>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const atRef = useRef<HTMLDivElement>(null);
    const domainRef = useRef<HTMLDivElement>(null);
    const extRef = useRef<HTMLDivElement>(null);

    const [emailName, emailDomain] = email.split("@"); // emailName -> manu, emailDomain -> aceternity.com
    const domainParts = emailDomain.split("."); // domainParts -> [aceternity, com]
    const domainName = domainParts[0];
    const domainExt = domainParts.slice(1).join("."); // domainExt -> com

    const [boxPosition, setBoxPosition] = useState({ x: 0, width: 0 });

    useEffect(() => {
        if (!containerRef.current || !highlight) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        let startX = Infinity;
        let endX = 0;

        const getSegmentRefs = () => {
            switch (highlight) {
                case "name": {
                    return [nameRef];
                }
                case "website": {
                    return [domainRef, extRef];
                }
                case "instagram": {
                    return [atRef, domainRef];
                }
                case "email": {
                    return [nameRef, atRef, domainRef, extRef];
                }
                default: {
                    return [];
                }
            }
        };

        const refs = getSegmentRefs();

        refs.forEach((ref) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const relativeX = rect.left - containerRect.left;
                startX = Math.min(startX, relativeX);
                endX = Math.max(endX, relativeX + rect.width);
            }
        });

        if (startX !== Infinity) {
            //  Yaha pe we have to maintain a state for the box
            setBoxPosition({
                x: startX,
                width: endX - startX,
            });
        }
    }, [highlight]);

    const getSegmentStates = () => {
        switch (highlight) {
            case "name": {
                return {
                    name: { active: true, blurred: false },
                    at: { active: false, blurred: true },
                    domain: { active: false, blurred: true },
                    ext: { active: false, blurred: true },
                    label: "Name",
                };
            }
            case "website": {
                return {
                    name: { active: false, blurred: true },
                    at: { active: false, blurred: true },
                    domain: { active: true, blurred: false },
                    ext: { active: true, blurred: false },
                    label: "Website",
                };
            }
            case "instagram": {
                return {
                    name: { active: false, blurred: true },
                    at: { active: true, blurred: false },
                    domain: { active: true, blurred: false },
                    ext: { active: false, blurred: true },
                    label: "Instagram",
                };
            }
            case "email": {
                return {
                    name: { active: true, blurred: false },
                    at: { active: true, blurred: false },
                    domain: { active: true, blurred: false },
                    ext: { active: true, blurred: false },
                    label: "Email",
                };
            }

            default: {
                return {
                    name: { active: false, blurred: false },
                    at: { active: false, blurred: false },
                    domain: { active: false, blurred: false },
                    ext: { active: false, blurred: false },
                    label: "",
                };
            }
        }
    };

    const segmentStates = getSegmentStates();

    return (
        <div className="flex flex-col items-center justify-center gap-8 p-8">
            {/* Main address display -- shit that moves */}

            <div className="relative flex min-h-28 flex-col items-center">
                <div
                    ref={containerRef}
                    className="relative flex items-center justify-center text-3xl font-medium tracking-tight md:text-4xl"
                >
                    <TextSegment
                        isActive={segmentStates.name.active}
                        isBlurred={segmentStates.name.blurred}
                        segmentRef={nameRef as React.RefObject<HTMLSpanElement>}
                    >
                        {emailName}
                    </TextSegment>
                    <TextSegment
                        isActive={segmentStates.at.active}
                        isBlurred={segmentStates.at.blurred}
                        segmentRef={atRef as React.RefObject<HTMLSpanElement>}
                    >
                        @
                    </TextSegment>
                    <TextSegment
                        isActive={segmentStates.domain.active}
                        isBlurred={segmentStates.domain.blurred}
                        segmentRef={domainRef as React.RefObject<HTMLSpanElement>}
                    >
                        {domainName}
                    </TextSegment>
                    <TextSegment
                        isActive={segmentStates.ext.active}
                        isBlurred={segmentStates.ext.blurred}
                        segmentRef={extRef as React.RefObject<HTMLSpanElement>}
                    >
                        .{domainExt}
                    </TextSegment>

                    <AnimatedDashedBox
                        width={boxPosition.width}
                        x={boxPosition.x}
                        visible={highlight !== null}
                        label={segmentStates.label}
                    />
                </div>
            </div>

            {/* Icons container / row */}

            <div className="mt-4 flex items-center">
                {icons.map(({ type, Icon }) => (
                    <motion.button
                        key={type}
                        onMouseEnter={() => setHighlight(type)}
                        onMouseLeave={() => setHighlight(null)}
                        className="relative rounded-lg p-2 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Icon
                            className="size-5 transition-colors duration-150"
                            strokeWidth={1.5}
                        ></Icon>
                        <AnimatePresence>
                            {highlight === type && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-0 -z-10 rounded-lg bg-neutral-500/10"
                                ></motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
