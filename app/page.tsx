import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import KineticReveal from "@/components/sections/KineticReveal";
import SystemLock from "@/components/sections/SystemLock";
import TerminalLaunch from "@/components/sections/TerminalLaunch";
import Downloads from "@/components/sections/Downloads";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="pt-[60px]">
        <Hero />
        <KineticReveal />
        <SystemLock />
        <TerminalLaunch />
        <Downloads />
        <Footer />
      </div>
    </main>
  );
}
