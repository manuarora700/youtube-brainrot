'use client'

import { useRef } from 'react'
import {
    motion,
    useScroll,
    useTransform,
    type MotionValue,
} from 'motion/react'

const COPY =
    'Get the best in class components, blocks and templates for your next SaaS product.'

function ScrollChar({
    char,
    index,
    total,
    scrollYProgress,
}: {
    char: string
    index: number
    total: number
    scrollYProgress: MotionValue<number>
}) {
    const start = index / Math.max(total, 1)
    const end = Math.min(start + 0.12, 1)

    const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
    const y = useTransform(scrollYProgress, [start, end], [14, 0])

    return (
        <motion.span style={{ opacity, y, display: 'inline-block' }}>
            {char === ' ' ? '\u00A0' : char}
        </motion.span>
    )
}

export const ScrollTrigger = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    const chars = [...COPY]
    const total = chars.length

    return (
        <section ref={sectionRef} className="h-[400vh] bg-black">
            <h1 className="sticky top-1/2 inset-x-0 px-4 py-2 text-center text-5xl font-medium max-w-5xl mx-auto tracking-tight text-white">
                {chars.map((char, i) => (
                    <ScrollChar
                        key={`${i}-${char}`}
                        char={char}
                        index={i}
                        total={total}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </h1>
        </section>
    )
}
