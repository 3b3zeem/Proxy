import Clients from "@/Components/Clients";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Reels from "@/Components/Reels";
import Services from "@/Components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Reels />
      <Clients />
      <Services />
    </div>
  );
}
