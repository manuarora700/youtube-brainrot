import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen justify-center bg-neutral-900">
      <Hero />
    </div>
  );
}
