"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export const Founders = () => {
  const bars = Array.from({ length: 80 }, (_, i) => i + 1);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const barWidth = rect.width / bars.length;
    const barIndex = Math.floor(x / barWidth);
    mouseX.set(barIndex);
    mouseY.set(y / rect.height); // Normalize to 0-1
  };

  const springConfig = {
    damping: 50,
    stiffness: 500,
  };

  const [visible, setVisible] = useState(false);

  return (
    <div className="w-100">
      <div className="h-14 flex items-center justify-between mb-4 border-t border-neutral-200 pt-2">
        {bars.map((bar, index) => (
          <Bar
            key={bar}
            index={index}
            mouseX={mouseX}
            mouseY={mouseY}
            visible={visible}
          />
        ))}
      </div>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <Image
          src="/finta-founders.png"
          alt="founders"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
};

const Bar = ({
  index,
  mouseX,
  mouseY,
  visible,
}: {
  index: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  visible: boolean;
}) => {
  const springConfig = {
    mass: 0.3,
    damping: 15,
    stiffness: 200,
  };

  const translateY = useSpring(
    useTransform(mouseX, (latest) => {
      const distance = Math.abs(index - latest);
      return -distance * 5 + "%";
    })
  );

  const heightTranslateY = useSpring(
    useTransform(mouseY, (latest) => {
      return `${latest * 30}%`;
    }),
    springConfig
  );

  return (
    <div className="w-px h-full bg-neutral-200 relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          className="h-full w-full bg-blue-500 absolute top-0 left-0"
          style={{
            y: useMotionTemplate`calc(${translateY} - ${heightTranslateY})`,
          }}
        ></motion.div>
      </AnimatePresence>
    </div>
  );
};
