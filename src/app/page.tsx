import { Hero } from "@/components/demo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <Hero />
    </div>
  );
}
