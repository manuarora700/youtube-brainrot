"use client";
import React from 'react'
import { Navbar } from './navbar'
import Link from 'next/link'
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <motion.div 
    initial={{
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        opacity: 0.6,
    }}
    animate={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        opacity: 1,
    }}
    transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: 0.2,
    }}
    className="rounded-[30px] relative bg-white overflow-hidden pt-4 pb-32 flex items-center justify-start flex-col min-h-screen max-w-480  mx-auto">
        <Navbar />


        <div className="absolute inset-0  opacity-80"
        style={{
            background: `
                radial-gradient(ellipse 80% 50% at 20% 20%, var(--color-gray-100), transparent),
                radial-gradient(ellipse 60% 40% at 80% 30%, var(--color-gray-100), transparent),
                radial-gradient(ellipse 70% 50% at 30% 80%, var(--color-fuchsia-500), transparent),
                radial-gradient(ellipse 60% 45% at 70% 85%, var(--color-pink-500), transparent),
                radial-gradient(ellipse 50% 40% at 50% 90%, var(--color-rose-500), transparent),
                linear-gradient(to bottom, var(--color-gray-100) 0%, var(--color-gray-200) 30%, var(--color-fuchsia-400) 70%, var(--color-rose-600) 100%)
            `,
        }}
        ></div>
        <div
        className={cn(
          "absolute inset-0 opacity-20",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
          "[mask-image:linear-gradient(to_top,white,transparent,transparent)]"
        
        )}
      />

        <div className="mt-32 flex flex-col items-center justify-center relative z-20">
            <motion.div initial={{
                filter: 'blur(10px)',
                opacity: 0.5,
            }}
                animate={{
                    filter: 'blur(0px)',
                    opacity: 1,
                }}
                transition={{
                    duration: 0.2,
                    delay: 0.4,
                }}
            >
                <Link href="/changelog" className='mx-auto w-fit text-xs shadow-sm shadow-black/10 ring-1 ring-black/10 rounded-full px-2 py-1 text-neutral-600 bg-white'>
                    Changelog 24 - Voice agents are generally available &rarr;
                </Link>
            </motion.div>

            <motion.h1 
                initial={{
                    filter: 'blur(10px)',
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.2,
                    delay: 0.5,
                }}
            className='text-7xl max-w-5xl mx-auto leading-20 mt-10 font-bold tracking-tighter text-center'>Empower the next set <br /> of productivity with Agents that <br /> work all the time.</motion.h1>

            <motion.p 
            
            initial={{
                filter: 'blur(10px)',
                opacity: 0,
                y: 10,
            }}
            animate={{
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.2,
                delay: 0.6,
            }}
            className="max-w-xl mx-auto text-xl mt-12 text-neutral-500 text-center">
                Unlock your full potential with AI-powered agents that streamline workflows, and keep your business running 24/7.
            </motion.p>

            <motion.div 
             initial={{
                filter: 'blur(10px)',
                opacity: 0,
                y: 10,
            }}
            animate={{
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.2,
                delay: 0.6,
            }}
            className="flex items-center gap-4 mt-12">
                <button className="px-4 py-2 w-60 rounded-full bg-black text-white active:scale-95 transition-all duration-300 font-medium cursor-pointer">Get started</button>
                <button className="px-4 py-2 w-60 rounded-full bg-gray-100 text-black active:scale-95 transition-all duration-300 font-medium cursor-pointer">Read Documentation</button>
            </motion.div>
            
        </div>
        <div className="relative z-20 h-120 mt-12 w-full">
        <motion.div 
        
        initial={{
            filter: 'blur(10px)',
            opacity: 0,
            y: 10,
        }}
        animate={{
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 0.2,
            delay: 0.7,
        }}
        className="absolute inset-x-0 rounded-[28px]  mt-12 max-w-7xl mx-auto p-4 shadow-black/5 shadow-sm ring-1 ring-black/5 bg-gray-100/50">
                <Image alt="Hero Image of the product" src="https://assets.aceternity.com/screenshots/4.jpg" height={1980} width={1020} className='w-full object-cover rounded-3xl border border-neutral-300' />
            </motion.div>
            </div>
    </motion.div>
  )
}

