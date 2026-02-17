import InteractiveAddress from "@/components/interactive-address";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <InteractiveAddress />
    </div>
  );
}
