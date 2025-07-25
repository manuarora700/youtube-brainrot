"use client";
import React from "react";
import {
  IconBrandGoogle,
  IconBrandApple,
  IconBrandMeta,
  IconBrandAmazon,
  IconBrandMessenger,
  IconBrandNetflix,
  IconBrandSpotify,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export const Marquee = () => {
  const logos = [
    {
      name: "Google",
      icon: <IconBrandGoogle className="size-10 text-neutral-400" />,
      speed: 5,
      delay: 0,
      repeatDelay: 5,
    },
    {
      name: "Apple",
      icon: <IconBrandApple className="size-10 text-neutral-400" />,
      speed: 7,
      delay: 1,
      repeatDelay: 0.5,
    },
    {
      name: "Meta",
      icon: <IconBrandMeta className="size-10 text-neutral-400" />,
      speed: 8,
      delay: 4,
      repeatDelay: 2,
    },
    {
      name: "Amazon",
      icon: <IconBrandAmazon className="size-10 text-neutral-400" />,
      speed: 15,
      delay: 6,
      repeatDelay: 0.8,
    },
    {
      name: "Messenger",
      icon: <IconBrandMessenger className="size-10 text-neutral-400" />,
      speed: 9,
      delay: 1,
      repeatDelay: 1.5,
    },
    {
      name: "Netflix",
      icon: <IconBrandNetflix className="size-10 text-neutral-400" />,
      speed: 11,
      delay: 3,
      repeatDelay: 0.7,
    },
    {
      name: "Spotify",
      icon: <IconBrandSpotify className="size-10 text-neutral-400" />,
      speed: 13,
      delay: 5,
      repeatDelay: 1.2,
    },
    {
      name: "Twitter",
      icon: <IconBrandTwitter className="size-10 text-neutral-400" />,
      speed: 7,
      delay: 7,
      repeatDelay: 2.5,
    },
    {
      name: "Instagram",
      icon: <IconBrandInstagram className="size-10 text-neutral-400" />,
      speed: 14,
      delay: 1.5,
      repeatDelay: 0.3,
    },
    {
      name: "LinkedIn",
      icon: <IconBrandLinkedin className="size-10 text-neutral-400" />,
      speed: 2,
      delay: 3.5,
      repeatDelay: 1.8,
    },
  ];
  return (
    <div
      className="w-full h-100 max-w-5xl p-10 flex flex-col justify-center relative mx-auto border-r border-b border-neutral-200 overflow-hidden perspective-distant transform-3d"
      style={{
        backgroundImage: `
        linear-gradient(var(--color-neutral-200) 1px, transparent 1px),
        linear-gradient(to right, var(--color-neutral-200) 1px, transparent 1px)
      `,
        backgroundSize: "80px 80px",
      }}
    >
      <h1 className="font-bold text-5xl tracking-tighter relative z-20">
        Triangle Company OSS Pack
      </h1>
      <p className="text-neutral-500 text-lg max-w-2xl mt-4 relative z-20">
        The essential open-source toolkit, from Vercel. Get started with the
        best OSS tools and services for your projects.
      </p>
      <button className="bg-black text-white px-4 py-3 font-medium text-sm rounded-full w-fit mt-4 flex items-center gap-2">
        <IconBrandGithub className="size-4" />
        Sign in to claim
      </button>
      <motion.div
        className="h-full w-full absolute inset-0 max-w-2xl ml-auto flex flex-col justify-evenly [mask-image:linear-gradient(to_right,transparent,black_20%,black_30%,transparent)]"
        style={{
          rotateY: -50,
        }}
      >
        <div className="relative h-1/4">
          {logos.slice(0, 3).map((logo, index) => (
            <IconContainer
              key={logo.name + index}
              speed={logo.speed}
              delay={logo.delay}
              repeatDelay={logo.repeatDelay}
              index={index}
            >
              {logo.icon}
            </IconContainer>
          ))}
        </div>

        <div className="relative h-1/4">
          {logos.slice(3, 5).map((logo, index) => (
            <IconContainer
              key={logo.name + index}
              speed={logo.speed}
              delay={logo.delay}
              repeatDelay={logo.repeatDelay}
              index={index}
            >
              {logo.icon}
            </IconContainer>
          ))}
        </div>

        <div className="relative h-1/4">
          {logos.slice(6, 8).map((logo, index) => (
            <IconContainer
              key={logo.name + index}
              speed={logo.speed}
              delay={logo.delay}
              repeatDelay={logo.repeatDelay}
              index={index}
            >
              {logo.icon}
            </IconContainer>
          ))}
        </div>

        <div className="relative h-1/4">
          {logos.slice(9, 11).map((logo, index) => (
            <IconContainer
              key={logo.name + index}
              speed={logo.speed}
              delay={logo.delay}
              repeatDelay={logo.repeatDelay}
              index={index}
            >
              {logo.icon}
            </IconContainer>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const IconContainer = ({
  children,
  speed = 10,
  delay = 0,
  repeatDelay = 0,
  index = 0,
}: {
  children: React.ReactNode;
  speed?: number;
  delay?: number;
  repeatDelay?: number;
  index?: number;
}) => {
  return (
    <motion.div
      className="size-14 rounded-lg shadow-md bg-white border border-neutral-200 flex items-center justify-center absolute top-1/2 -translate-y-1/2"
      initial={{ left: "100%" }}
      animate={{ left: "-20%" }}
      style={{
        translateZ: index * 500,
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
        repeatDelay: repeatDelay,
      }}
    >
      {children}
    </motion.div>
  );
};
