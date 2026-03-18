import { GooeySearch } from "@/components/gooey";
import { GooeyFilter } from "@/components/gooey-filter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center py-20">
      <GooeyFilter />
    </div>
  );
}
