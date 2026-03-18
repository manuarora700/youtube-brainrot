import { Demo } from "@/components/demo";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-neutral-900">
      {/* <ModeToggle /> */}
      <Demo />
    </div>
  );
}
