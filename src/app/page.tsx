import { Cards } from "@/components/cards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[140vh] w-full flex items-center justify-center">
      <Cards />
    </div>
  );
}
