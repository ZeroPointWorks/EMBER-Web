"use client";

import { useEffect, useState } from "react";

interface Stat {
  label: string;
  value: string;
  corrupt: boolean;
}

const initial: Stat[] = [
  { label: "WALLETS SCANNED", value: "12,847", corrupt: false },
  { label: "CLUSTERS DETECTED", value: "341", corrupt: false },
  { label: "FARMS NEUTRALIZED", value: "28", corrupt: false },
  { label: "ADDRESSES BLACKLISTED", value: "1,247", corrupt: false },
  { label: "SYBIL CONFIDENCE", value: "94.2%", corrupt: false },
  { label: "CONSENSUS NODES", value: "873", corrupt: false },
];

export default function CorruptDashboard() {
  const [stats, setStats] = useState(initial);

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    stats.forEach((_, i) => {
      const t = setInterval(() => {
        setStats((prev) => {
          const next = [...prev];
          const s = { ...next[i] };
          if (Math.random() < 0.4) {
            // Corrupt the value
            const digits = s.value.replace(/\d/g, () => String(Math.floor(Math.random() * 10)));
            s.value = digits + (s.value.includes("%") ? "%" : "");
            s.corrupt = true;
          } else {
            // Reset to original
            s.value = initial[i].value;
            s.corrupt = false;
          }
          next[i] = s;
          return next;
        });
      }, 2000 + Math.random() * 3000);
      intervals.push(t);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden border-b border-white/10">
      <div className="mx-auto min-h-screen max-w-[1440px] flex flex-col justify-center px-6 py-24 lg:px-16">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-block h-2 w-2 bg-[#FF3333] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[.2em] text-[#FF3333]">
            SYSTEM_TELEMETRY
          </span>
        </div>

        <h2
          className="glitch-text font-display text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[.85] tracking-[-.03em] mb-16"
          data-text="NETWORK STATS"
        >
          NETWORK STATS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-black p-8 relative overflow-hidden ${s.corrupt ? "corrupt" : ""}`}
            >
              {/* Glitch line */}
              {s.corrupt && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[30%] left-0 w-full h-px bg-[#00FF66]/30" />
                  <div className="absolute top-[60%] left-0 w-full h-px bg-[#FF3333]/20" />
                </div>
              )}
              <p className="font-mono text-[10px] uppercase tracking-[.15em] text-white/25 mb-3">
                0x{(i * 0x1000).toString(16).toUpperCase().padStart(4, "0")}
              </p>
              <p className="font-mono text-[13px] text-white/50 mb-4">{s.label}</p>
              <p className={`font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold transition-colors duration-200 ${
                s.corrupt ? "text-[#FF3333]" : "text-[#00FF66]"
              }`}>
                {s.value}
              </p>
              {s.corrupt && (
                <p className="font-mono text-[9px] text-[#FF3333]/60 mt-2">DATA_CORRUPTION — RETRY</p>
              )}
            </div>
          ))}
        </div>

        {/* Glitching progress bar */}
        <div className="mt-12 border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[10px] uppercase tracking-[.15em] text-white/25">MITIGATION PROGRESS</span>
            <span className="font-mono text-[10px] text-[#00FF66] corrupt">94.7%</span>
          </div>
          <div className="h-2 bg-white/5 relative overflow-hidden">
            <div className="h-full bg-[#00FF66] transition-all duration-500" style={{ width: "94.7%" }} />
            <div className="absolute top-0 left-0 w-full h-full" style={{
              background: "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px)"
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
