"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";

export const Like = () => {
  const [count, setCount] = useState(10);
  const [direction, setDirection] = useState(-1);

  const handleClick = () => {
    if (direction === -1) {
      setCount((prev) => prev + 1);
      setDirection(1);
    } else {
      setCount((prev) => prev - 1);
      setDirection(-1);
    }
  };

  return (
    <button
      className="flex items-center gap-1 group cursor-pointer"
      onClick={handleClick}
    >
      <Heart direction={direction} />
      <Counter count={count} direction={direction} />
    </button>
  );
};

const Counter = ({
  count,
  direction,
}: {
  count: number;
  direction: number;
}) => {
  return (
    <div className="text-8xl text-neutral-500 relative overflow-hidden group-hover:text-pink-500">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={count}
          initial={{ y: direction >= 0 ? 100 : -100 }}
          animate={{
            y: 0,
          }}
          exit={{ y: direction >= 0 ? 100 : -100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-40"
        >
          {count}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Heart = ({ direction }: { direction: number }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    handleAnimation();
  }, [direction]);

  const handleAnimation = () => {
    if (direction === 1) {
      animate(
        "svg",
        {
          scale: [0, 1.2, 1],
          fill: "var(--color-pink-500)",
          stroke: "var(--color-pink-500)",
        },
        { duration: 0.4, ease: "easeOut" }
      );
    } else if (direction === -1) {
      animate(
        "svg",
        { fill: "transparent", stroke: "var(--color-neutral-500)" },
        { duration: 0.3 }
      );
    } else {
      return;
    }
  };

  return (
    <div
      ref={scope}
      className="h-44 w-44 rounded-full flex items-center justify-center group-hover:bg-pink-500/20 relative"
    >
      {direction === 1 && <Sparkles />}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-40 w-40 text-neutral-500 group-hover:text-pink-500"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </motion.svg>
    </div>
  );
};

const Sparkles = () => {
  const sparkles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    angle: Math.random() * Math.PI * 2,
    distance: Math.random() * 100 + 100,
    size: Math.random() * 4 + 2,
    color: [
      "var(--color-indigo-500)",
      "var(--color-pink-500)",
      "var(--color-purple-500)",
      "var(--color-rose-500)",
    ][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="absolute">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 0,
          }}
          animate={{
            x: Math.cos(sparkle.angle) * sparkle.distance,
            y: Math.sin(sparkle.angle) * sparkle.distance,
            opacity: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: sparkle.color,
          }}
          className="absolute inset-0 h-2 w-2"
        />
      ))}
    </div>
  );
};
