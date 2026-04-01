import { cn } from "@/lib/utils";
import React from "react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden [--pattern:var(--color-neutral-300)] bg-gray-100">
            <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center mx-auto relative">
                <HorizontalScale className="absolute  top-0 w-screen mx-auto" />
                <HorizontalScale className="absolute  bottom-0 w-screen mx-auto" />
                <VerticalScale className="absolute left-0 h-screen mx-auto" />
                <VerticalScale className="absolute right-0 h-screen mx-auto" />
                <div className="p-10 size-full">
                    <div className="relative h-full w-full  flex flex-col shadow-2xl">
                        <Lines className="mask-b-from-10% absolute top-0 inset-x-0" />
                        <img src="https://assets.aceternity.com/components/mountains-snow.webp" className="absolute inset-0 w-full h-full object-cover mask-b-from-10% mask-b-to-80% mask-t-from-50%" />
                        <div className="flex flex-col justify-between flex-1  z-20">
                            <div className="py-8">
                                <nav className="flex justify-between items-center w-full  relative px-8 py-4">
                                    <div className="flex items-center gap-8">
                                        <span className="font-bold text-xl tracking-tighter text-shadow-lg text-shadow-blue-500/10 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-800">Clonely</span>
                                        <a href="#" className="text-neutral-700 text-xs">Features</a>
                                        <a href="#" className="text-neutral-700 text-xs">Pricing</a>
                                        <a href="#" className="text-neutral-700 text-xs">Blog</a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <a href="#" className="px-2 py-2 text-xs rounded-md  text-neutral-700 font-semibold   transition">Docs</a>
                                        <button className="px-4 py-2 text-xs rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Sign Up</button>
                                    </div>
                                </nav>
                            </div>
                            <div className="px-8 py-12">
                                <h1 className="tracking-tighter font-medium text-7xl max-w-4xl">The only AI capable of deep cloning voice.</h1>
                                <p className="tracking-tighter text-neutral-500 text-2xl max-w-2xl mt-8">Pass in a URL, and Deepclone AI wil clone the voice of the person in the video. Try for free, no credit card required.</p>
                                <div className="flex items-center gap-2 mt-8">
                                    <button className="px-4 py-2 rounded-md bg-gradient-to-t from-blue-600 to-blue-500 text-white text-shadow-md">Try for free today</button>
                                    <button className="px-4 py-2 rounded-md bg-gradient-to-t  text-black text-shadow-md text-shadow-black/2">Read documentation</button>
                                </div>
                            </div>
                        </div>


                        <Lines className="mask-t-from-10% absolute bottom-0 inset-x-0" />
                    </div>
                </div>
            </div>
        </section>
    );


}

const Lines = ({ className }: { className: string }) => {
    return <div className={cn("h-14 w-full bg-[repeating-linear-gradient(to_bottom,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_0.5rem)] ", className)}></div>
}
const HorizontalScale = ({ className }: { className: string }) => {
    return (
        <div
            className={cn(
                "h-10 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-y border-[var(--pattern)]",
                className,
            )}
        />
    );
};

const VerticalScale = ({ className }: { className: string }) => {
    return (
        <div
            className={cn(
                "h-full w-10 bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-x border-[var(--pattern)]",
                className,
            )}
        />
    );
};
