import Link from 'next/link'
import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'

export const Navbar = () => {
    const {scrollY} = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latestValue) => {
        console.log(latestValue);
        setScrolled(latestValue > 10);
    })


  return (
    <motion.nav 
    layoutId="navbar"
    style={{
        maxWidth: scrolled ? '55%' : '580px',
    }}
    transition={{
        duration: 0.2,
    }}
    className="max-w-2xl fixed z-30 mx-auto w-full p-1  bg-black rounded-full flex items-center justify-between">
        <motion.div layoutId="navbar-logo">
        <Link href="/" className='font-black text-base text-white font-mono pl-4'>IHuman</Link>
        </motion.div>
        <motion.ul layoutId="navbar-links" className='list-none text-white text-base font-medium tracking-tight flex gap-4 items-center'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Features</Link></li>
            <li><Link href="/">Pricing</Link></li>
            <li><Link href="/">Contact</Link></li>
        </motion.ul>
        <motion.button transition={{
            duration: 0.2,
        }} layoutId="navbar-button" className='px-4 py-3 rounded-full text-sm text-black bg-white cursor-pointer active:scale-95  font-medium'>Book a slot</motion.button>
    </motion.nav>
  )
}
