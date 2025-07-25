import React from "react";

export const Hero = () => {
  return (
    <div className="font-paaji my-40 flex w-full flex-col items-center justify-center">
      <h1 className="max-w-2xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <p className="mx-auto mt-10 max-w-3xl text-center text-xl text-neutral-500 selection:bg-white">
        Say goodbye to the <span className="text-primary">outdated</span>{" "}
        financial tools. Every small business owner, regardless of the
        background, can now manage their{" "}
        <span className="text-primary">business</span> like a pro. Simple.
        Intuitive. And never boring.
      </p>

      <div className="mt-paaji-relaxed flex w-full max-w-lg justify-center">
        <input
          type="text"
          className="focus:ring-primary mr-4 flex-1 rounded-xl border border-neutral-600 px-4 text-white transition duration-200 placeholder:text-neutral-500 focus:ring-1 focus:outline-none"
          placeholder="Enter your email"
        />
        <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
          <div className="via-primary absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent to-transparent"></div>
          Join Waitlist
        </button>
      </div>
    </div>
  );
};
