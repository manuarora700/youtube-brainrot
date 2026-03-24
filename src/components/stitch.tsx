"use client";
import React from 'react'
import { motion } from "motion/react";

export const Stitch = () => {
    return (
        <div>
            <motion.svg
                whileHover="animate"
                initial="initial"
                className="isometric-cube w-full h-full overflow-visible" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(200, 220)">
                    <g className="cube-structure">
                        <path d="M 0 0 L -130 -75 L -130 100 L 0 175 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeLinejoin="round" strokeWidth="1.5"></path>
                        <path d="M 0 0 L 130 -75 L 130 100 L 0 175 Z" fill="#F1F5F9" stroke="#E2E8F0" strokeLinejoin="round" strokeWidth="1.5"></path>
                        <path d="M 0 0 L 130 -75 L 0 -150 L -130 -75 Z" fill="white" stroke="#E2E8F0" strokeLinejoin="round" strokeWidth="1.5"></path>

                        {/* Top path */}
                        <motion.path
                            variants={{
                                animate: {
                                    y: -40,
                                },
                                initial: {
                                    y: 0,
                                }
                            }}
                            transition={{
                                duration: 0.2,
                                ease: 'easeInOut',
                            }}
                            d="M 0 -30 L 80 -75 L 0 -120 L -80 -75 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1"></motion.path>
                        <path d="M -130 100 L 0 175 L 130 100" fill="none" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="1.5"></path>
                    </g>
                </g>
            </motion.svg>
        </div>
    )
}
