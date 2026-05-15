"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { Source_Serif_4 } from "next/font/google";
import React, { useEffect, useId } from "react";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: "variable",
});

export const HeroDemo = () => {
  const workFn = () => {
    const chars = [..."Works"];
    return (
      <>
        {chars.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial={{ fontWeight: 400 }}
            animate={{ fontWeight: [400, 700, 400] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: index * 0.2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className={cn(
              "inline-block tracking-tighter text-black",
              sourceSerif.className,
            )}
          >
            {char}
          </motion.span>
        ))}
      </>
    );
  };
  return (
    <section className="h-screen overflow-hidden w-full pt-84">
      <Nav />
      <FloatingItems />
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Gradient />
        <Arc />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center ">
        <h1
          className={cn(
            "text-8xl text-center tracking-tight py-2 text-neutral-700",
          )}
        >
          A browser that <br /> {workFn()} <br /> with you
        </h1>
        <p className="text-center max-w-sm mx-auto mt-16 text-neutral-500 text-xl font-medium">
          Dia surfaces what's next, what's ready, and what you missed, so you
          can focus.
        </p>
        <button className="w-72 cursor-pointer px-4 py-4 rounded-2xl bg-black text-white text-lg font-medium mt-8 shadow-[0px_0px_80px_0px_var(--color-blue-200),0px_1px_0px_0px_var(--color-neutral-500)_inset]">
          Download Dia
        </button>
      </div>
    </section>
  );
};

const CONFIG = {
  stiffness: 90,
  damping: 18,
  mass: 0.12,
};

const PARALLAX_STRENGTH_FACTOR = 40;
const FloatingItems = () => {
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  const springX = useSpring(targetX, CONFIG);
  const springY = useSpring(targetY, CONFIG);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;

      const xSet = ((e.clientX / width) * 2 - 1) * PARALLAX_STRENGTH_FACTOR;
      const ySet = ((e.clientY / height) * 2 - 1) * PARALLAX_STRENGTH_FACTOR;

      targetX.set(xSet);
      targetY.set(ySet);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [targetX, targetY]);

  return (
    <div className="absolute inset-0 z-50 ">
      <FloatingCard
        depth={0.1}
        springX={springX}
        springY={springY}
        className="top-80 right-60"
      />
      <FloatingCard
        springX={springX}
        depth={0.1}
        springY={springY}
        className="top-72 left-32"
      />
      <FloatingCard
        springX={springX}
        depth={0.4}
        springY={springY}
        className="bottom-40 right-32"
      />
      <FloatingCard
        springX={springX}
        depth={0.4}
        springY={springY}
        className="bottom-40 left-32"
      />
    </div>
  );
};

const FloatingCard = ({
  className,
  springX,
  depth = 1,
  springY,
}: {
  className?: string;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  depth: number;
}) => {
  const id = useId();

  const valueX = useTransform(springX, (v) => v * depth);
  const valueY = useTransform(springY, (v) => v * depth);
  return (
    <motion.div
      layoutId={`floating-item-${id}`}
      whileHover="animate"
      initial="initial"
      style={{ x: valueX, y: valueY }}
      className={cn(
        "absolute  p-6 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg shadow-black/5 border border-neutral-200 z-100 will-change-transform",
        className,
      )}
    >
      <p className="text-lg text-neutral-800 font-medium">
        Design show and tell in{" "}
        <span className="text-neutral-400">14 minutes</span>
      </p>
      <motion.div
        variants={{
          initial: {
            height: 0,
            opacity: 0,
          },
          animate: {
            height: "auto",
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className="overflow-hidden"
      >
        <p className="text-sm max-w-60 text-neutral-400 mt-2">
          {" "}
          This is a confidential meeting between you and your client.
        </p>
        <div className="flex flex-col items-start gap-2 mt-2">
          <div className="flex gap-2 items-center">
            <img
              src="https://assets.aceternity.com/avatars/shadcn.webp"
              className="size-4 rounded-full"
            />
            <p className="text-xs text-neutral-400">Chad cn</p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="https://assets.aceternity.com/avatars/manu.webp"
              className="size-4 rounded-full"
            />
            <p className="text-xs text-neutral-400">Manu Arora</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Arc = () => {
  return (
    <div className="absolute top-[200px] left-1/2 aspect-square -translate-x-1/2 rounded-full bg-white w-[130vmax]"></div>
  );
};

const Gradient = () => {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 scale-102 top-[calc(65vmax+200px)] blur-[40px] w-[210vmax] h-[210vmax]"
      style={{
        backgroundImage:
          "radial-gradient(100vmax, rgba(0, 0, 0, 0) 54.81%, rgb(255, 172, 227) 60.098%, rgba(255, 241, 172, 0.5) 62.983%, rgb(121, 201, 255) 68.5%, rgb(74, 96, 209) 80%, rgb(80, 146, 199) 90%, rgb(60, 106, 255) 93%, rgb(86, 86, 86) 97%, rgba(0, 0, 0, 0) 100%)",
      }}
    ></div>
  );
};

const Nav = () => {
  return (
    <nav className="flex items-center justify-center gap-4 fixed inset-x-0 w-fit top-8 p-2 rounded-2xl bg-white border border-neutral-200 shadow-lg z-50 mx-auto">
      <Logo />
      <a href="#" className="text-base font-medium text-neutral-700">
        What's new
      </a>
      <a href="#" className="text-base font-medium text-neutral-700">
        Security
      </a>
      <a href="#" className="text-base font-medium text-neutral-700 mr-4">
        Introducing Reports
      </a>
    </nav>
  );
};

const Logo = () => {
  return (
    <svg
      className="size-10"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5801 35.7943C17.4786 34.5305 20.7394 33.5261 24 33.569C27.2606 33.5261 30.5214 34.5305 33.4199 35.7943C34.3559 36.2024 35.4837 36.0092 36.0536 35.162C37.9073 32.4065 38.9174 29.228 38.7105 25.8191C38.2623 18.4987 32.3584 12.5394 25.0435 12.0359C24.6932 12.0118 24.3452 12 24 12C23.6548 12 23.3068 12.0118 22.9565 12.0359C15.6416 12.5394 9.73766 18.4987 9.28947 25.8191C9.08257 29.228 10.0927 32.4065 11.9464 35.162C12.5163 36.0092 13.6441 36.2024 14.5801 35.7943Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
