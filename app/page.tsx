import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Dashboard from "@/components/sections/Dashboard";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Dashboard />
      <Footer />
    </main>
  );
}
