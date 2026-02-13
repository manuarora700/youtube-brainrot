import { Cards } from "@/components/cards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[140vh] bg-gray-100 w-full flex items-center justify-center">
      <Cards />
    </div>
  );
}
