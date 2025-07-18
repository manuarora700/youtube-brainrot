import { Like } from "@/components/like";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Like />
    </div>
  );
}
