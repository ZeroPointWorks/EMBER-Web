"use client";

import { useEffect, useState } from "react";

const baseStats = [
  { label: "WALLETS SCANNED", value: "12,847" },
  { label: "CLUSTERS DETECTED", value: "341" },
  { label: "FARMS NEUTRALIZED", value: "28" },
  { label: "ADDRESSES BLACKLISTED", value: "1,247" },
  { label: "SYBIL CONFIDENCE", value: "94.2%" },
  { label: "CONSENSUS NODES", value: "873" },
];

export default function CorruptDashboard() {
  const [corrupted, setCorrupted] = useState<Set<number>>(new Set());

  useEffect(() => {
    const intervals = baseStats.map((_, i) =>
      setInterval(() => {
        setCorrupted((prev) => {
          const next = new Set(prev);
          if (Math.random() < 0.5) {
            next.add(i);
          } else {
            next.delete(i);
          }
          return next;
        });
      }, 8000 + Math.random() * 6000)
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden border-b border-white/10">
      <div className="mx-auto min-h-screen max-w-[1440px] flex flex-col justify-center px-6 py-24 lg:px-16">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-block h-2 w-2 bg-[#FF3333] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[.2em] text-[#FF3333]">
            NETWORK TELEMETRY
          </span>
        </div>

        <h2
          className="glitch-text font-display text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[.85] tracking-[-.03em] mb-16"
          data-text="NETWORK STATS"
        >
          NETWORK STATS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {baseStats.map((s, i) => {
            const isCorrupt = corrupted.has(i);
            return (
              <div key={s.label} className="bg-black p-8 relative">
                <p className="font-mono text-xs uppercase tracking-[.15em] text-white/50 mb-4">
                  {isCorrupt ? `0x${(i * 0x1000).toString(16).toUpperCase()}` : s.label}
                </p>
                <p className={`font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold transition-colors duration-700 ${
                  isCorrupt ? "text-[#FF3333]" : "text-[#00FF66]"
                }`}>
                  {isCorrupt
                    ? s.value.replace(/\d/g, () => String(Math.floor(Math.random() * 10)))
                    : s.value}
                </p>
                {isCorrupt && (
                  <p className="font-mono text-[10px] text-[#FF3333]/60 mt-2 corrupt">
                    CORRUPTED — RETRY
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs uppercase tracking-[.15em] text-white/30">MITIGATION PROGRESS</span>
            <span className="font-mono text-xs text-[#00FF66]">94.7%</span>
          </div>
          <div className="h-2 bg-white/5 relative overflow-hidden">
            <div className="h-full w-[94.7%] bg-[#00FF66] transition-all duration-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}
