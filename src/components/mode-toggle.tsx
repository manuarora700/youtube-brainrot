"use client";
import React from 'react'

export const ModeToggle = () => {
    const SunIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2" />
            <path d="M12 21v2" />
            <path d="M4.22 4.22l1.42 1.42" />
            <path d="M18.36 18.36l1.42 1.42" />
            <path d="M1 12h2" />
            <path d="M21 12h2" />
            <path d="M4.22 19.78l1.42-1.42" />
            <path d="M18.36 5.64l1.42-1.42" />
        </svg>
    );

    const MoonIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        </svg>
    );
    return (
        <button
            onClick={() => {
                document.documentElement.classList.toggle("dark");
            }}
            className="size-4 rounded-full absolute top-4 right-4">
            <SunIcon className="hidden dark:block" />
            <MoonIcon className="block dark:hidden" />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
