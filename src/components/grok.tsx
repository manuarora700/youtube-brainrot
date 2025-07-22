"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, stagger, useAnimate } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";

export const Grok = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute bottom-4 right-4">
      <motion.div
        animate={{
          y: open ? 0 : "92%",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex flex-col items-end justify-end"
      >
        <motion.button
          onClick={() => setOpen(!open)}
          animate={{
            opacity: open ? 0 : 1,
          }}
          transition={{
            opacity: {
              duration: 0.05,
              ease: "easeOut",
            },
          }}
          className="flex items-center justify-center size-12 rounded-2xl border border-neutral-800 shadow-xl cursor-pointer mb-4"
        >
          <GrokIcon />
        </motion.button>

        <ChatWindow open={open} setOpen={setOpen} />
      </motion.div>
    </div>
  );
};

const ChatWindow = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const str = "How can I help you today?";
  const word = str.split(" ");
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: [0, 1],
      },
      {
        duration: 0.01,
        delay: stagger(0.02),
      }
    );
  }, [open]);

  return (
    <motion.div
      ref={scope}
      className="w-100 h-120 shadow-[0px_0px_15px_0px_rgba(101,_119,_134,_0.15),_0px_0px_3px_1px_rgba(101,_119,_134,_0.15)] rounded-2xl p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          <GrokIcon />
          <p className="text-lg font-medium">SuperGrok</p>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="h-6 w-6 flex items-center justify-center cursor-pointer rounded-full hover:bg-gray-100"
        >
          <IconChevronDown className="h-4 w-4" />
        </button>
      </div>
      <div className="text-2xl font-medium text-center mt-12">
        {str.split("").map((char, idx) => {
          return (
            <motion.span
              key={idx}
              className="text-black"
              style={{
                opacity: 0,
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
      <div className="rounded-2xl bg-neutral-100 h-24 mt-10 w-full flex items-center justify-center text-neutral-300">
        some shit
      </div>
    </motion.div>
  );
};
const GrokIcon = () => {
  return (
    <svg viewBox="0 0 33 32" aria-hidden="true" className="h-6 w-6">
      <g>
        <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path>
      </g>
    </svg>
  );
};
