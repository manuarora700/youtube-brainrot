"use client";
import { motion } from "motion/react";
import React from "react";

export default function MacbookIllustraiton() {
    return (
        <motion.div
            whileHover="animate"
            initial="initial"
            className="max-w-2xl w-full mx-auto h-96"
        >
            <div className="w-60 mx-auto perspective-distant">
                {/* lid */}

                <motion.div
                    variants={{
                        initial: {
                            rotateX: -50,
                        },
                        animate: {
                            rotateX: 20,
                        },
                    }}
                    style={{
                        transformOrigin: 'bottom',
                    }}

                    transition={{
                        duration: 0.9,
                        ease: [0.9, 0.01, 0, 1.03],
                    }}
                    className="w-[90%] mx-auto rounded-tl-xl rounded-tr-xl shadow-sm shadow-black/10 ring-1 ring-black/10 h-40 p-1 bg-neutral-700 dark:shadow-white/10 dark:ring-white/10 relative"
                >
                    <motion.div
                        variants={{
                            initial: {
                                opacity: 1,
                            },
                            animate: {
                                opacity: 0,
                            }
                        }}
                        className="absolute inset-0 h-full w-full">
                        <div className="w-10 h-20 absolute left-0 bg-conic from-transparent via-white/50 to-white/50 blur-xl transform rotate-30 -translate-x-2 top-10 "></div>


                        <div className="w-10 h-30 absolute right-0 bg-conic from-white/50 via-white/50 to-transparent transform -rotate-30 translate-x-2 blur-xl z-50"></div>

                        <div className="w-full h-10 absolute inset-x-0 bg-white blur-2xl top-20"></div>
                    </motion.div>

                    <div
                        className="h-full w-full bg-white  rounded-tl-[10px] rounded-tr-[10px] p-[2px]">
                        <motion.img
                            variants={{
                                initial: {
                                    opacity: 0,
                                    filter: `blur(20px)`,
                                },
                                animate: {
                                    opacity: 1,
                                    filter: `blur(0px)`,
                                },
                            }}
                            transition={{
                                duration: 0.9,
                                ease: [0.9, 0.01, 0, 1.03],
                                delay: 0.3,
                            }}

                            src="https://assets.aceternity.com/components/multi-illustration-bento.webp"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </motion.div>

                {/* base */}
                <div className="w-full h-3 bg-linear-to-b from-neutral-50 dark:from-neutral-900 to-neutral-300 dark:to-neutral-700 rounded-br-xl rounded-bl-xl rounded-tr-sm rounded-tl-sm shadow-[0px_1px_0px_0px_var(--color-neutral-300)_inset] dark:shadow-[0px_1px_0px_0px_var(--color-neutral-700)_inset] relative">
                    <div className="absolute inset-x-0 top-0 bg-neutral-300 dark:bg-neutral-700 mx-auto w-10 rounded-bl-md rounded-br-md h-2 shadow-[0px_-1px_0px_0px_var(--color-neutral-100)_inset,1px_0px_5px_0px_var(--color-neutral-500)_inset] dark:shadow-[0px_-1px_0px_0px_var(--color-neutral-900)_inset,1px_0px_2px_0px_var(--color-neutral-500)_inset]" />
                </div>
            </div>
        </motion.div>
    );
}
