"use client";

import { useEffect, useRef, useState } from "react";

const resourceHints = [
  "RESOURCE: GITHUB -> https://github.com/ZeroPointWorks",
  "RESOURCE: DISCORD -> https://discord.gg/ember",
  "RESOURCE: X -> https://x.com/ember_coin",
  "RESOURCE: DOCS -> /docs",
  "RESOURCE: EXPLORER -> https://explorer.emberchain.xyz",
  "RESOURCE: WHITEPAPER -> /whitepaper.pdf",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [logs, setLogs] = useState<string[]>([
    "[00:00:00] BOOT_SEQUENCE: ANTI-FARM PROTOCOL v0.1.0",
    "[00:00:01] KERNEL: EMBER ASYMPTOTIC REWARD CURVE",
    "[00:00:02] STATUS: FARM_ECONOMY => TARGET_LOCKED",
  ]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);

    const interval = setInterval(() => {
      setLogs((prev) => {
        const ops = [
          `[${new Date().toLocaleTimeString()}] FARM ISOLATION: ${Math.floor(Math.random() * 100)}%`,
          `[${new Date().toLocaleTimeString()}] SYBIL_NODES: ${Math.floor(Math.random() * 50)} TERMINATED`,
          `[${new Date().toLocaleTimeString()}] WALLET_${Array.from({length: 6}, () => Math.random().toString(16)[2]).join("").toUpperCase()}: BLACKLISTED`,
          `[${new Date().toLocaleTimeString()}] MEMPOOL: ${Math.floor(Math.random() * 100)} PENDING TX`,
          `[${new Date().toLocaleTimeString()}] CONSENSUS: ${(Math.random() * 100).toFixed(1)}% NODES SYNCED`,
          resourceHints[Math.floor(Math.random() * resourceHints.length)],
        ];
        const next = [...prev, ops[Math.floor(Math.random() * ops.length)]];
        return next.slice(-10);
      });
    }, 2200);

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
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(800px circle at center, rgba(0,255,102,0.05) 0%, transparent 70%)",
          transform: `translate(${(mousePos.x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) * 0.02}px, ${(mousePos.y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) * 0.02}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(600px circle at 70% 30%, rgba(0,255,102,0.03) 0%, transparent 60%)",
          transform: `translate(${(mousePos.x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) * -0.015}px, ${(mousePos.y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) * -0.015}px)`,
          transition: "transform 0.15s ease-out",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          background: "radial-gradient(400px circle at 20% 80%, rgba(255,51,51,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="absolute left-0 right-0 top-1/2 z-10 h-px bg-[rgba(255,255,255,0.06)]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 lg:grid-cols-12">
        <div className="absolute left-0 top-0 hidden h-full w-px bg-[rgba(255,255,255,0.08)] lg:block" />
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-[rgba(255,255,255,0.08)] lg:block" />

        {/* Left - Hero title */}
        <div className="relative flex items-center justify-center px-6 py-24 lg:col-span-8 lg:px-12">
          <div className="absolute right-0 top-0 hidden h-full w-px bg-[rgba(255,255,255,0.08)] lg:block" />
          <div>
            <div className="mb-6 flex items-center gap-4">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-toxic">
                <polygon points="12,1 3,23 12,17 21,23" />
              </svg>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/20">
                EMBER v0.1.0 TESTNET
              </span>
            </div>
            <h1 className="font-display text-[12vw] font-black leading-[0.8] tracking-[-0.04em] lg:text-[10vw]">
              ANTI-FARM
              <br />
              <span className="text-toxic">ANTI-SYBIL</span>
              <br />
              ANTI-BOT
            </h1>
          </div>
        </div>

        {/* Right - Terminal logs */}
        <div className="relative flex flex-col justify-center border-t border-[rgba(255,255,255,0.08)] px-6 py-16 lg:col-span-4 lg:border-t-0 lg:px-10">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-[rgba(255,255,255,0.08)] lg:block" />
          <div className="mb-8 flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-toxic" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-toxic">
              Kernel Active
            </span>
          </div>
          <div className="space-y-3">
            {logs.map((log, i) => {
              const isResource = log.startsWith("RESOURCE:");
              return (
                <p
                  key={i}
                  className={`font-mono text-[11px] leading-relaxed ${
                    isResource ? "text-toxic/70" : "text-white/50"
                  }`}
                >
                  {isResource ? (
                    <>
                      {log.split(" -> ")[0]}{" -> "}
                      <a
                        href={log.split(" -> ")[1]}
                        target={
                          log.split(" -> ")[1].startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          log.split(" -> ")[1].startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="underline decoration-toxic/30 underline-offset-2 hover:text-toxic transition-colors"
                      >
                        {log.split(" -> ")[1]}
                      </a>
                    </>
                  ) : (
                    log
                  )}
                </p>
              );
            })}
          </div>
          <div className="mt-8 flex items-center gap-2 font-mono text-xs text-white/30">
            <span className="inline-block h-3 w-2 bg-crimson animate-pulse" />
            LIVE_MONITORING — RESOURCES STREAM IN RANDOMLY
          </div>
        </div>
      </div>
    </section>
  );
}
