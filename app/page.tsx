import Clients from "@/Components/Clients";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Reels from "@/Components/Reels";
import Services from "@/Components/Services";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home | Proxy",
  description: "Proxy Company",
};

export default function Home() {
  return (
    <div className="relative pt-15">
      <Image
        src="/home.webp"
        alt="Work Background"
        fill
        priority
        className="object-cover md:object-[center_18%] object-[18%_center] -z-10"
      />

      <div className="relative">
        <Hero />
        <Projects />
        <Reels />
        <Clients />
        <Services />
      </div>
    </div>
  );
}
