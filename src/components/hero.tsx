"use client";
import { motion } from "motion/react";

const WAVE_BAR_COUNT = 32;

const WaveformMarquee = () => {
  const bars = Array.from({ length: WAVE_BAR_COUNT }, (_, index) => index);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        className="flex h-full w-max items-center gap-1.5 px-3"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      >
        {[...bars, ...bars].map((index, key) => (
          <motion.span
            key={key}
            className="block w-1.5 shrink-0 rounded-full bg-black"
            animate={{
              height: ["20%", `${30 + (index % 8) * 7}%`, "50%", "20%"],
            }}
            transition={{
              duration: 0.35 + (index % 4) * 0.1,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.05,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative flex h-full min-h-screen w-full items-center justify-center overflow-hidden bg-[#FDFCF0] px-6 py-16">
      <HeroAnimation />
      <Content />

      <div className="absolute left-1/2 bottom-28 z-30 flex -translate-x-1/2 flex-col items-center gap-3">
        <div className="flex h-20 w-84 items-center overflow-hidden rounded-full border-2 border-black bg-white shadow-sm">
          <WaveformMarquee />
        </div>
      </div>
    </section>
  );
};


export const Content = () => {
  return <div className="relative z-10 flex max-w-2xl flex-col items-center text-center pb-32">
    <h1 className="font-baskervville text-5xl leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
      <span className="text-[#8A8A8A]">Say it.</span>{" "}
      <span className="text-[#1A1A1A]">It&apos;s done.</span>
    </h1>

    <p className="mt-6 max-w-xl text-base leading-relaxed text-[#1A1A1A] sm:text-lg">
      The words land in any app, exactly where your cursor is, cleanly. The
      brief written on the walk back. The reply ready before your hand
      reached the keyboard.
    </p>

    <div className="mt-8 flex flex-col items-center gap-3">
      <button className="rounded-lg bg-[#D9CCF5] px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-opacity hover:opacity-90 border border-black ">
        <span className="mr-1">&#63743;</span> Download for macOS
      </button>
      <p className="text-xs text-[#8A8A8A]">
        Available on Mac, Windows, iPhone, and Android
      </p>
    </div>
  </div>

}

const LEFT_TEXT =
  "Umm, hope your week has started well…I was talking to Cheyene earlier but reception was really bad and I think their going to handle the first part of the project, but I\u2019m not totally sure. Also, I told the team the the new timeline should be ready by Friday, although it\u2019s probably going to slip. There\u2019s been a lot of back and forth and honestly the the whole thing\u2019s been kind of chaotic, like nobody really knows what\u2019s going on so can you check in with them and see if the notes from yesterday\u2019s meeting were sent out, or if they\u2019re still waiting. I think Cheyene mentioned it but didn\u2019t confirm, and now I\u2019m a little lost.";

const RIGHT_TEXT =
  "Hope your week is off to a good start. I was talking to Cheyene earlier, but the reception was really bad. I think they\u2019re going to handle the first part of the project, but I\u2019m not totally sure. I also told the team the new timeline should be ready by Friday \u2014 although it might slip. There\u2019s been a lot of back and forth, and honestly, the whole thing has been a bit chaotic. It feels like nobody really knows what\u2019s going on. Can you check in with them and see if the notes from yesterday\u2019s meeting were sent out, or if they\u2019re still waiting? I think Cheyene mentioned it, but didn\u2019t confirm \u2014 and now I\u2019m a little lost!";

export const HeroAnimation = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-0 top-1/2 w-[min(58vw,720px)] overflow-hidden -translate-y-[45%]">
        <svg
          id="hero-svg"
          className="h-auto w-[1200px] scale-150 -translate-x-72 -translate-y-20"
          viewBox="0 0 1048 594"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="first-curve"
            className="fill-transparent stroke-white"
            d="M0.597656 50.924805C17.4612 143.2965 97.8522 293.141 284.508 353.548C440.828 399.056 583.839 294.067 500.618 184.7492C417.397 75.4309 238.217 282.098 499.258 441.668C551.913 477.802 817.468 561.26 1046.43 565.235"
          />
          <text x="0" className="text-[15px]">
            <textPath
              id="marquee-text-first"
              href="#first-curve"
              className="fill-[#1A1A1A] font-normal opacity-40 [baseline-shift:-20%]"
            >
              {LEFT_TEXT}
            </textPath>
            <animate
              id="marquee-anim-first"
              attributeName="x"
              dur="25s"
              values="-2000;0"
              repeatCount="indefinite"
            />
          </text>
        </svg>
      </div>

      <div className="absolute top-32 -right-40 w-[min(62vw,780px)]">
        <svg
          className="h-auto w-[1200px] scale-120"
          viewBox="0 0 1024 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="second-curve"
            className="stroke-[#1A1A1A] stroke-[30]"
            d="M2.04309 563.872C111.592 558.268 316.491 554.016 517.963 490.064C703.017 431.323 875.319 444.531 1021.88 453.216"
          />
          <text x="-2000" className="text-[15px]">
            <textPath
              id="marquee-text-second"
              href="#second-curve"
              className="fill-white font-semibold [baseline-shift:-30%]"
            >
              {RIGHT_TEXT}
            </textPath>
            <animate
              id="marquee-anim-second"
              attributeName="x"
              dur="25s"
              values="-2000;0"
              repeatCount="indefinite"
            />
          </text>
        </svg>
      </div>
    </div>
  );
};
