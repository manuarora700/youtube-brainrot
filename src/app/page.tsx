import { Grid } from "@/components/grid";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ClipPath } from "./clip-path";

export default function Home() {
  return (
    <div className="flex py-40 justify-center min-h-screen">
      <ClipPath />
    </div>
  );
}
