"use client";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { useRef } from "react";

export const ClipPath = () => {
  const ref = useRef<HTMLDivElement>(null);

  const clipPathValue = useMotionValue(100);
  const leftValue = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { left, width } = ref.current.getBoundingClientRect();

      const x = e.clientX - left;
      const percentage = Math.max(0, Math.min(1, x / width));

      clipPathValue.set(100 - percentage * 100);
      leftValue.set(percentage * 100);
    }
  };

  const finalValue = useMotionTemplate`inset(0 ${clipPathValue}% 0 0)`;

  return (
    <div
      className="h-120 w-full flex items-center justify-center relative max-w-2xl mx-auto overflow-hidden rounded-sm shadow-[8px_8px_0px_0px_var(--color-neutral-600)]"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute h-full z-50 w-2 bg-black/10 backdrop-blur-sm"
        style={{
          left: useMotionTemplate`${leftValue}%`,
        }}
      />
      <img
        src="/narrator.webp"
        alt="narrator"
        className="h-full w-full object-cover absolute inset-0"
      />
      <motion.img
        style={{
          clipPath: finalValue,
        }}
        src="/tyler.webp"
        alt="narrator"
        className="h-full w-full object-cover object-top absolute inset-0"
      />
    </div>
  );
};
