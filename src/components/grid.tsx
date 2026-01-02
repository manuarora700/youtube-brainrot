"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Grid = () => {
  const [items, setItems] = useState<Component[]>(COMPONENTS);
  const [active, setActive] = useState<Component | null>(null);

  const sort = (type: "id" | "title" | "description") => {
    console.log("here", type);
    switch (type) {
      case "id": {
        setItems([...items].sort((a, b) => a.id - b.id));
        return;
      }
      case "title": {
        setItems([...items].sort((a, b) => a.title.localeCompare(b.title)));

        return;
      }
      case "description": {
        setItems(
          [...items].sort((a, b) => a.description.localeCompare(b.description))
        );
        console.log("here", items);
        return;
      }
    }
  };
  return (
    <section className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mt-10 mb-4">
        <button
          onClick={() => {
            sort("id");
          }}
          className="border border-neutral-200 cursor-pointer bg-neutral-100 text-neutral-600 px-2 py-1 rounded-md"
        >
          ID
        </button>
        <button
          onClick={() => {
            sort("title");
          }}
          className="border border-neutral-200 cursor-pointer bg-neutral-100 text-neutral-600 px-2 py-1 rounded-md"
        >
          Title
        </button>
        <button
          onClick={() => {
            sort("description");
          }}
          className="border border-neutral-200 cursor-pointer bg-neutral-100 text-neutral-600 px-2 py-1 rounded-md"
        >
          Description
        </button>
      </div>
      {/* active item */}
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => setActive(null)}
          className="fixed inset-0 w-full h-full bg-black/5 backdrop-blur-lg z-50 flex items-center justify-center"
        >
          <motion.div
            layoutId={`component-${active.title}`}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="w-80 h-100 rounded-md bg-white shadow-sm border border-transparent shadow-black/10 ring-1 ring-black/5 p-4 flex flex-col z-100"
          >
            <div className="flex flex-col  flex-1 justify-between">
              <div>
                <motion.div layoutId={`component-image-${active.title}`}>
                  <Image
                    src={active.src}
                    alt={active.title}
                    width={500}
                    height={500}
                    className="w-full  h-40 rounded-sm shadow-lg object-cover"
                  />
                </motion.div>
                <motion.h2
                  layoutId={`component-title-${active.title}`}
                  className="text-lg font-medium mt-2 text-neutral-600 text-shadow-sm text-shadow-black/5"
                >
                  {active.title}
                </motion.h2>
                <motion.p
                  layoutId={`component-description-${active.title}`}
                  className="text-lg text-neutral-500 mt-2"
                >
                  {active.description}
                </motion.p>
              </div>
              <div className="flex flex-wrap gap-2">
                {active.tags.map((tag, index) => (
                  <div
                    key={tag}
                    className="text-xs px-1 py-0.5 rounded-md border border-neutral-100 bg-neutral-50"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {items.map((item, index) => (
          <motion.button
            key={item.title}
            onClick={() => setActive(item)}
            layoutId={`component-${item.title}`}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className={cn(
              "group text-left h-full flex flex-col z-10",
              active?.title === item.title && "z-50"
            )}
          >
            <motion.div
              layoutId={`component-image-${item.title}`}
              className="relative overflow-hidden rounded-sm cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={500}
                className="h-72 w-full rounded-sm object-cover group-hover:scale-105 transition-all duration-200"
              />
            </motion.div>
            <motion.h2
              layoutId={`component-title-${item.title}`}
              className="text-lg font-medium mt-2 text-neutral-600 text-shadow-sm text-shadow-black/5"
            >
              {item.title}
            </motion.h2>
            <motion.p
              layoutId={`component-description-${item.title}`}
              className="text-xs text-neutral-500 mt-2"
            >
              {item.description}
            </motion.p>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

type Component = {
  id: number;
  title: string;
  description: string;
  src: string;
  tags: string[];
};

const COMPONENTS: Component[] = [
  {
    id: 18,
    title: "Canvas Reveal Effect",
    description:
      "dot background that expands on hover, as seen on Clerk's website",
    src: "https://assets.aceternity.com/canvas-reveal-effect.png",
    tags: ["background", "hover", "animation", "dots", "reveal"],
  },
  {
    id: 3,
    title: "3D Animated Pin",
    description:
      "gradient pin that animates on hover, perfect for product links.",
    src: "https://assets.aceternity.com/cloudinary_bkp/3d_pin_sklefs.png",
    tags: ["3d", "animation", "pin", "gradient", "hover", "product"],
  },
  {
    id: 25,
    title: "Code Block",
    description:
      "configurable code block component built on top of react-syntax-highlighter.",
    src: "https://assets.aceternity.com/code-block.webp",
    tags: ["code", "syntax", "highlighting", "block", "developer"],
  },
  {
    id: 11,
    title: "Background Beams",
    description:
      "Multiple background beams that follow a path of SVG, makes a good hero section background.",
    src: "https://assets.aceternity.com/cloudinary_bkp/Background_Beams_ilbyga.png",
    tags: ["background", "beams", "svg", "hero", "animation"],
  },
  {
    id: 7,
    title: "Animated Tooltip",
    description: "cool tooltip that reveals on hover, follows mouse pointer",
    src: "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    tags: ["tooltip", "animation", "hover", "mouse", "ui"],
  },
  {
    id: 22,
    title: "Cards",
    description: "set of cards that can be used for different use cases",
    src: "https://assets.aceternity.com/cards.png",
    tags: ["cards", "ui", "layout", "components"],
  },
  {
    id: 14,
    title: "Background Gradient",
    description:
      "An animated gradient that sits at the background of a card, button or anything.",
    src: "https://assets.aceternity.com/gradient.png",
    tags: ["background", "gradient", "animation", "card", "button"],
  },
  {
    id: 1,
    title: "3D Card Effect",
    description:
      "card perspective effect, hover over the card to elevate card elements.",
    src: "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    tags: ["3d", "card", "perspective", "hover", "elevation"],
  },
  {
    id: 29,
    title: "Cover",
    description:
      "Cover component that wraps any children, providing beams and space effect, hover to reveal speed.",
    src: "https://assets.aceternity.com/container-cover.png",
    tags: ["cover", "wrapper", "beams", "space", "hover", "container"],
  },
  {
    id: 16,
    title: "Background Ripple Effect",
    description: "grid of cells that ripple when clicked.",
    src: "https://assets.aceternity.com/background-ripple-effect.webp",
    tags: ["background", "ripple", "grid", "click", "animation", "cells"],
  },
  {
    id: 5,
    title: "Animated Modal",
    description:
      "customizable, compound modal component with animated transitions",
    src: "https://assets.aceternity.com/animated-modal.png",
    tags: ["modal", "animation", "transitions", "popup", "overlay"],
  },
  {
    id: 30,
    title: "Container Scroll Animation",
    description:
      "scroll animation that rotates in 3d on scroll. Perfect for hero or marketing sections.",
    src: "https://assets.aceternity.com/cloudinary_bkp/Hero_Scroll_xzhqrj.png",
    tags: ["scroll", "animation", "3d", "rotation", "hero", "marketing"],
  },
  {
    id: 19,
    title: "Hover Effect",
    description:
      "Hover over the cards and the effect slides to the currently hovered card.",
    src: "https://assets.aceternity.com/cloudinary_bkp/Hover_Effect_vie10l.png",
    tags: ["hover", "cards", "slide", "animation", "effect"],
  },
  {
    id: 8,
    title: "Apple Cards Carousel",
    description:
      "sleek and minimal carousel implementation, as seen on apple.com",
    src: "https://assets.aceternity.com/apple-cards-carousel.png",
    tags: ["carousel", "cards", "apple", "minimal", "sleek", "slider"],
  },
  {
    id: 12,
    title: "Background Boxes",
    description: "full width background box container that highlights on hover",
    src: "https://assets.aceternity.com/cloudinary_bkp/Background_Boxes_indgdr.png",
    tags: ["background", "boxes", "container", "hover", "highlight"],
  },
  {
    id: 26,
    title: "Colourful Text",
    description:
      "text component with various colours, filter and scale effects.",
    src: "https://assets.aceternity.com/colourful-text.webp",
    tags: ["text", "colors", "filter", "scale", "effects", "typography"],
  },
  {
    id: 4,
    title: "Add Utilities",
    description: "Commonly used utilities for using Aceternity UI",
    src: "https://assets.aceternity.com/cloudinary_bkp/3d_pin_sklefs.png",
    tags: ["utilities", "helpers", "tools", "setup"],
  },
  {
    id: 21,
    title: "Card Stack",
    description:
      "Cards stack on top of each other after some interval. Perfect for showing testimonials.",
    src: "https://assets.aceternity.com/cloudinary_bkp/Card_Stack_bdxdhf.png",
    tags: ["cards", "stack", "testimonials", "interval", "animation"],
  },
  {
    id: 9,
    title: "Aurora Background",
    description:
      "subtle Aurora or Southern Lights background for your website.",
    src: "https://assets.aceternity.com/aurora-background.png",
    tags: ["background", "aurora", "lights", "subtle", "gradient"],
  },
  {
    id: 15,
    title: "Background Lines",
    description:
      "set of svg paths that animate in a wave pattern. Good for hero sections background, as seen on height.app",
    src: "https://assets.aceternity.com/background-lines.webp",
    tags: ["background", "lines", "svg", "wave", "animation", "hero"],
  },
  {
    id: 2,
    title: "3D Marquee",
    description:
      "3D Marquee effect with grid, good for showcasing testimonials and hero sections",
    src: "https://assets.aceternity.com/3d-marquee.webp",
    tags: ["3d", "marquee", "grid", "testimonials", "hero", "showcase"],
  },
  {
    id: 24,
    title: "CLI",
    description: "Installing Aceternity UI with the Shadcn CLI",
    src: "https://assets.aceternity.com/cloudinary_bkp/Hero_Scroll_xzhqrj.png",
    tags: ["cli", "installation", "shadcn", "setup", "tools"],
  },
  {
    id: 17,
    title: "Bento Grid",
    description:
      "skewed grid layout with Title, description and a header component",
    src: "https://assets.aceternity.com/cloudinary_bkp/bento-2.png",
    tags: ["grid", "layout", "bento", "skewed", "header", "title"],
  },
  {
    id: 6,
    title: "Animated Testimonials",
    description: "Minimal testimonials sections with image and quote.",
    src: "https://assets.aceternity.com/animated-testimonials.webp",
    tags: ["testimonials", "animation", "minimal", "image", "quote"],
  },
  {
    id: 28,
    title: "Compare",
    description:
      "comparison component between two images, slide or drag to compare",
    src: "https://assets.aceternity.com/compare.png",
    tags: ["compare", "images", "slide", "drag", "comparison"],
  },
  {
    id: 13,
    title: "Background Gradient Animation",
    description:
      "smooth and elegant background gradient animation that changes the gradient position over time.",
    src: "https://assets.aceternity.com/background-gradient-animation.png",
    tags: ["background", "gradient", "animation", "smooth", "elegant"],
  },
  {
    id: 20,
    title: "Card Spotlight",
    description:
      "card component with a spotlight effect revealing a radial gradient background",
    src: "https://assets.aceternity.com/card-spotlight.png",
    tags: ["card", "spotlight", "radial", "gradient", "effect"],
  },
  {
    id: 10,
    title: "Background Beams With Collision",
    description: "Exploding beams in the background",
    src: "https://assets.aceternity.com/background-beams-with-collision.webp",
    tags: ["background", "beams", "collision", "explosion", "animation"],
  },
  {
    id: 27,
    title: "Comet Card",
    description:
      "perspective, 3D, Tilt card as seen on Perplexity Comet's website.",
    src: "https://assets.aceternity.com/comet-card.webp",
    tags: ["card", "3d", "perspective", "tilt", "comet", "perplexity"],
  },
  {
    id: 23,
    title: "Carousel",
    description: "customizable carousel with microinteractions and slider.",
    src: "https://assets.aceternity.com/carousel.webp",
    tags: ["carousel", "slider", "microinteractions", "customizable"],
  },
];
