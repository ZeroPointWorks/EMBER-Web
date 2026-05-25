"use client";

import { useEffect, useState } from "react";

const links = [
  ["GITHUB", "https://github.com/ZeroPointWorks/EMBER-Web"],
  ["X", "#"],
  ["DISCORD", "#"],
  ["DOCS", "/docs"],
];

export default function Hero() {
  const [logs, setLogs] = useState([
    "[00:00:00] EMBER v0.1.0 ANTI-FARM PROTOCOL",
    "[00:00:01] REWARD CURVE: ASYMPTOTIC ACTIVE",
    "[00:00:02] FARM_ECONOMY => TARGET LOCKED",
  ]);

  useEffect(() => {
    const t = setInterval(() => {
      setLogs((p) => {
        const next = [
          ...p,
          [
            `[${new Date().toLocaleTimeString()}] FARMS ISOLATED: ${Math.floor(Math.random() * 100)}%`,
            `[${new Date().toLocaleTimeString()}] WALLETS BLACKLISTED: ${Math.floor(Math.random() * 1000)}`,
            `[${new Date().toLocaleTimeString()}] SYBIL NODES: ${Math.floor(Math.random() * 50)} TERMINATED`,
          ][Math.floor(Math.random() * 3)],
        ];
        return next.slice(-8);
      });
    }, 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_center,rgba(0,255,102,0.04),transparent_70%)]" />
      <div className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 lg:grid-cols-12">
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/10 lg:block" />

        <div className="relative flex items-center px-6 py-24 lg:col-span-8 lg:px-16">
          <div className="absolute right-0 top-0 hidden h-full w-px bg-white/10 lg:block" />
          <div>
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.15em] text-white/20">
              EMBER v0.1.0 TESTNET
            </p>
            <h1 className="font-display text-[11vw] font-black leading-[.75] tracking-[-.04em]">
              ANTI-FARM
              <br />
              <span className="text-[#00FF66]">ANTI-SYBIL</span>
              <br />
              ANTI-BOT
            </h1>
          </div>
        </div>

        <div className="relative flex flex-col justify-center border-t border-white/10 px-6 py-16 lg:col-span-4 lg:border-t-0 lg:px-10">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 lg:block" />
          <div className="mb-6 flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-[#00FF66]" />
            <span className="font-mono text-[11px] uppercase tracking-[.2em] text-[#00FF66]">
              Kernel Active
            </span>
          </div>
          <div className="space-y-2.5">
            {logs.map((l, i) => (
              <p key={i} className="font-mono text-[11px] leading-relaxed text-white/50">
                {l}
              </p>
            ))}
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 space-y-2.5">
            {links.map(([label, href]) => (
              <p key={label} className="font-mono text-[11px] leading-relaxed">
                <span className="text-white/30">$ CONNECT</span>{" "}
                <a
                  href={href as string}
                  target={(href as string).startsWith("http") ? "_blank" : undefined}
                  rel={(href as string).startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-white/50 underline decoration-white/20 underline-offset-2 hover:text-[#00FF66] transition-colors"
                >
                  {label as string}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
