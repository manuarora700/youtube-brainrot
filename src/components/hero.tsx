"use client";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Source_Serif_4 } from "next/font/google";
import React, { useEffect, useId } from "react";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: "variable",
});

export const Hero = () => {
  const WorksFn = () => {
    const chars = [..."Works"];
    return (
      <>
        {chars.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className={cn(sourceSerif.className, "inline-block")}
            initial={{ fontWeight: 400 }}
            animate={{ fontWeight: [400, 700, 400] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: index * 0.4,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            {char}
          </motion.span>
        ))}
      </>
    );
  };
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden py-20 md:pt-84">
      <Nav />

      <FloatingItems />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <Gradient />
        <Arc />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-4">
        <h1
          className={cn(
            sourceSerif.className,
            "text-8xl font-light text-center tracking-tight text-foreground",
          )}
        >
          A browser that <br /> <span>{WorksFn()}</span> <br /> with you
        </h1>
        <p className="mt-20 max-w-sm text-center text-xl font-normal text-neutral-700">
          Dia surfaces what's next, what's ready, and what you missed, so you
          can focus.
        </p>

        <div className="relative mt-10">
          <button
            type="button"
            className="relative z-20 w-72 rounded-2xl bg-black px-8 py-4 text-lg font-medium text-white shadow-[0px_0px_80px_10px_var(--color-blue-500)]/50"
          >
            Download Dia
          </button>
        </div>
      </div>
    </section>
  );
};

const PARALLAX_STRENGTH_PX = 100;

const FloatingItems = () => {
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const springX = useSpring(targetX, {
    stiffness: 90,
    damping: 18,
    mass: 0.12,
  });
  const springY = useSpring(targetY, {
    stiffness: 90,
    damping: 18,
    mass: 0.12,
  });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      targetX.set(((e.clientX / w) * 2 - 1) * PARALLAX_STRENGTH_PX);
      targetY.set(((e.clientY / h) * 2 - 1) * PARALLAX_STRENGTH_PX);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [targetX, targetY]);

  return (
    <div className="pointer-events-none absolute inset-0 z-50">
      <FloatingCard
        className="top-54 left-44 pointer-events-auto"
        depth={0.1}
        springX={springX}
        springY={springY}
      />
      <FloatingCard
        className="top-54 right-32 pointer-events-auto"
        depth={0.1}
        springX={springX}
        springY={springY}
      />
      <FloatingCard
        className="bottom-40 left-32 pointer-events-auto"
        depth={0.4}
        springX={springX}
        springY={springY}
      />
      <FloatingCard
        className="bottom-40 right-32 pointer-events-auto"
        depth={0.4}
        springX={springX}
        springY={springY}
      />
    </div>
  );
};

const FloatingCard = ({
  className,
  depth,
  springX,
  springY,
}: {
  className: string;
  depth: number;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}) => {
  const id = useId();
  const x = useTransform(springX, (v) => v * depth);
  const y = useTransform(springY, (v) => v * depth);

  return (
    <motion.div
      whileHover="animate"
      initial="initial"
      style={{ x, y }}
      className={cn(
        "absolute overflow-hidden rounded-xl border border-neutral-200 z-50 shadow-lg bg-white/50 backdrop-blur-sm p-6 will-change-transform",
        className,
      )}
      layoutId={`floating-item-${id}`}
    >
      <p className="text-lg text-neutral-800 font-medium">
        Design show and tell{" "}
        <span className="text-neutral-600">in 14 minutes</span>
      </p>
      <motion.div
        className="overflow-hidden"
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
      >
        <div className="pt-2 space-y-4">
          <p className="text-sm text-neutral-600 max-w-60">
            This is a confidential meeting between you and your client.
          </p>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <img
                src="https://assets.aceternity.com/avatars/shadcn.webp"
                alt="shadcn"
                className="size-4 rounded-full"
              />

              <p className="text-xs text-neutral-800 font-medium">Chad cn</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://assets.aceternity.com/avatars/manu.webp"
                alt="shadcn"
                className="size-4 rounded-full"
              />

              <p className="text-xs text-neutral-800 font-medium">Manu Arora</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Gradient = () => {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 scale-102 top-[calc(65vmax+200px)] blur-[40px]  w-[210vmax] h-[210vmax]"
      style={{
        backgroundImage:
          "radial-gradient(100vmax, rgba(0, 0, 0, 0) 54.81%, rgb(255, 172, 227) 60.098%, rgba(255, 241, 172, 0.5) 62.983%, rgb(121, 201, 255) 68.5%, rgb(74, 96, 209) 80%, rgb(80, 146, 199) 90%, rgb(60, 106, 255) 93%, rgb(86, 86, 86) 97%, rgba(0, 0, 0, 0) 100%)",
      }}
    />
  );
};

const Arc = () => {
  return (
    <div className="absolute top-[200px] left-1/2 aspect-square -translate-x-1/2 rounded-full bg-white [clip-path:inset(0_0_33.33%_0)] w-[130vmax]" />
  );
};

const Nav = () => {
  return (
    <nav className="fixed top-8 mx-auto inset-x-0 w-fit gap-4 p-2 bg-white border border-neutral-100 rounded-2xl flex items-center justify-center shadow-lg z-50">
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
