import BootSequence from "@/components/sections/BootSequence";
import ManifestoGlitch from "@/components/sections/ManifestoGlitch";
import CorruptDashboard from "@/components/sections/CorruptDashboard";
import BrokenTerminal from "@/components/sections/BrokenTerminal";

export default function Home() {
  return (
    <main className="crt screen-shake">
      <BootSequence />
      <ManifestoGlitch />
      <CorruptDashboard />
      <BrokenTerminal />
    </main>
  );
}
