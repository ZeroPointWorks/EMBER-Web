"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Farms Isolated", value: 0 },
  { label: "Wallets Blacklisted", value: 0 },
  { label: "Liquidity Fences Armed", value: 1 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [logs, setLogs] = useState<string[]>([
    "[00:00:00] INITIALIZING ANTI-FARM PROTOCOL",
    "[00:00:01] SCANNING NETWORK TOPOLOGY...",
    "[00:00:02] IDENTIFYING CLUSTER PATTERNS...",
  ]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);

    const interval = setInterval(() => {
      setLogs((prev) => {
        const entries = [
          `[${new Date().toLocaleTimeString()}] FARM ISOLATION: ${Math.floor(Math.random() * 100)}%`,
          `[${new Date().toLocaleTimeString()}] SYBIL NODES: ${Math.floor(Math.random() * 50)} TERMINATED`,
          `[${new Date().toLocaleTimeString()}] WALLET ${Array.from({length: 8}, () => Math.random().toString(16)[2]).join("").toUpperCase()} BLACKLISTED`,
          `[${new Date().toLocaleTimeString()}] LIQUIDITY FENCE: ACTIVE`,
          `[${new Date().toLocaleTimeString()}] CLUSTER ANALYSIS: ${Math.floor(Math.random() * 20)} ANOMALIES DETECTED`,
        ];
        const next = [...prev, entries[Math.floor(Math.random() * entries.length)]];
        return next.slice(-8);
      });
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden border-b border-[rgba(255,255,255,0.08)]"
    >
      {/* Breathdivinity backdrop */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(800px circle at center, rgba(0,255,102,0.05) 0%, transparent 70%)",
          transform: `translate(${(mousePos.x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) * 0.02}px, ${(mousePos.y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) * 0.02}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(600px circle at 70% 30%, rgba(0,255,102,0.03) 0%, transparent 60%)",
          transform: `translate(${(mousePos.x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) * -0.015}px, ${(mousePos.y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) * -0.015}px)`,
          transition: "transform 0.15s ease-out",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          background:
            "radial-gradient(400px circle at 20% 80%, rgba(255,51,51,0.04) 0%, transparent 50%)",
        }}
      />

      {/* Separator line */}
      <div className="absolute left-0 right-0 top-1/2 z-10 h-px bg-[rgba(255,255,255,0.06)]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 lg:grid-cols-12">
        {/* Vertical divider */}
        <div className="absolute left-0 top-0 hidden h-full w-px bg-[rgba(255,255,255,0.08)] lg:block" />
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-[rgba(255,255,255,0.08)] lg:block" />

        {/* Left - Hero title */}
        <div className="relative flex items-center justify-center px-6 py-24 lg:col-span-8 lg:px-12">
          <div className="absolute right-0 top-0 hidden h-full w-px bg-[rgba(255,255,255,0.08)] lg:block" />
          <h1 className="font-display text-[12vw] font-black leading-[0.8] tracking-[-0.04em] lg:text-[10vw]">
            ANTI-FARM
            <br />
            <span className="text-toxic">ANTI-SYBIL</span>
            <br />
            ANTI-BOT
          </h1>
        </div>

        {/* Right - Terminal logs */}
        <div className="relative flex flex-col justify-center border-t border-[rgba(255,255,255,0.08)] px-6 py-16 lg:col-span-4 lg:border-t-0 lg:px-10">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-[rgba(255,255,255,0.08)] lg:block" />
          <div className="mb-8 flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-toxic" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-toxic">
              System Active
            </span>
          </div>
          <div className="space-y-3">
            {logs.map((log, i) => (
              <p
                key={i}
                className="font-mono text-[11px] leading-relaxed text-white/50"
              >
                {log}
              </p>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-2 font-mono text-xs text-white/30">
            <span className="inline-block h-3 w-2 bg-crimson animate-pulse" />
            LIVE MONITORING
          </div>
        </div>
      </div>
    </section>
  );
}
