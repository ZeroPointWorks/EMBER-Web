"use client";

import { useEffect, useState } from "react";

const bootLines = [
  "EMBER v0.1.0 — ANTI-FARM PROTOCOL",
  "REWARD CURVE: ASYMPTOTIC ACTIVE",
  "FARM ECONOMY: TARGET LOCKED",
  "SYBIL FILTER: DEPLOYED",
  "MEMPOOL: 1,247 PENDING",
  "CONSENSUS: 94.2% VERIFIED",
];

export default function Hero() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i >= bootLines.length) return;
    const t = setTimeout(() => {
      setDisplayed((p) => [...p, bootLines[i]]);
      setI((p) => p + 1);
    }, 500);
    return () => clearTimeout(t);
  }, [i]);

  return (
    <section className="relative min-h-screen w-full border-b border-white/10">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 py-24 lg:px-16">
        <div className="mb-10 flex items-center gap-4">
          <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[#00FF66]">
            <polygon points="12,1 3,23 12,17 21,23" />
          </svg>
          <span className="font-mono text-xs uppercase tracking-[.2em] text-white/30">
            EMBER v0.1.0 TESTNET
          </span>
        </div>

        <h1 className="font-display text-[clamp(3rem,12vw,9rem)] font-black uppercase leading-[.75] tracking-[-.05em] mb-10">
          ANTI-FARM
          <br />
          <span className="text-[#00FF66]">ANTI-SYBIL</span>
          <br />
          ANTI-BOT
        </h1>

        <div className="max-w-lg space-y-1.5 mb-16">
          {displayed.map((l, n) => (
            <p key={n} className="font-mono text-sm leading-relaxed text-white/50">
              <span className="text-[#00FF66]/50">$</span> {l}
            </p>
          ))}
          {i < bootLines.length && (
            <p className="font-mono text-sm text-[#00FF66]">
              <span className="inline-block h-3 w-2 bg-[#00FF66] animate-pulse mr-2" />
              BOOT_SEQUENCE...
            </p>
          )}
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="font-mono text-xs text-white/20 mb-3">$ RESOURCES</p>
          <div className="flex flex-wrap gap-6">
            {[
              ["GITHUB", "https://github.com/ZeroPointWorks/EMBER-Web"],
              ["X", "#"],
              ["DISCORD", "#"],
              ["DOCS", "/docs"],
              ["EXPLORER", "#"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-sm text-white/40 underline decoration-white/10 underline-offset-4 hover:text-[#00FF66] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
