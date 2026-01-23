"use client";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const navLinks = [
    { label: "Templates", href: "#templates" },
    { label: "Components", href: "#components" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "#docs" },
];

export const Navbar = () => {
    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50  "
            initial={{
                filter: "brightness(0.2)",
            }}
            animate={{
                filter: [
                    "brightness(0.2)",
                    "brightness(0.5)",
                    "brightness(0.3)",
                    "brightness(0.7)",
                    "brightness(0.4)",
                    "brightness(0.8)",
                    "brightness(1)",
                ],
            }}
            transition={{ duration: 2, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto px-12 py-4">
                <div className="flex items-center gap-12">
                    {/* Logo and Name */}
                    <Link href="/" className="flex items-center gap-2">
                        {/* Aceternity Logo - Lightning bolt style */}
                        <Image src="https://ui.aceternity.com/logo.png" alt="Aceternity" width={24} height={24} className="filter invert" />
                        <span className="text-white font-semibold text-lg">Aceternity</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-neutral-400 hover:text-white transition-colors text-sm"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};
