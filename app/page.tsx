import Clients from "@/Components/Clients";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Reels from "@/Components/Reels";
import Services from "@/Components/Services";
import Image from "next/image";

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
