import Hero from "@/components/sections/Hero";
import KineticReveal from "@/components/sections/KineticReveal";
import SystemLock from "@/components/sections/SystemLock";
import TerminalLaunch from "@/components/sections/TerminalLaunch";
import ResourceStream from "@/components/sections/ResourceStream";

export default function Home() {
  return (
    <main>
      <Hero />
      <KineticReveal />
      <SystemLock />
      <TerminalLaunch />
      <ResourceStream />
    </main>
  );
}
