import React from "react";

export const Responsive = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center gap-10">
      <div className="h-40 w-40 rounded-2xl bg-neutral-200" />
      <div className="h-40 w-40 rounded-2xl bg-red-200" />
      <div className="h-40 w-40 rounded-2xl bg-blue-200" />
    </div>
  );
};
