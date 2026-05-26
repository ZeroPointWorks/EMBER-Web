"use client";

import { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}:<>?";

function corrupt(str: string, rate = 0.15) {
  return [...str]
    .map((c) => (Math.random() < rate ? chars[Math.floor(Math.random() * chars.length)] : c))
    .join("");
}

const bootLines = [
  "SYS_INIT: LOADING ANTI-FARM KERNEL...",
  "SYS_INIT: REWARD_CURVE => ASYMPTOTIC",
  "SYS_INIT: FARM_ECONOMY => TARGET_ACQUIRED",
  "SYS_INIT: DEPLOYING SYBIL_FILTER...",
  "SYS_INIT: CONTRACT_WRITE => 0x7F3A...B9C2",
  "SYS_INIT: MEMPOOL => 1,247 PENDING",
  "SYS_INIT: CONSENSUS => 94.2% VERIFIED",
  "SYS_INIT: PROTOCOL => ARMED",
];

export default function BootSequence() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [bootIndex, setBootIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (bootIndex >= bootLines.length) {
      const t = setTimeout(() => setError("CRITICAL: FARM_CLUSTER_DETECTED — MITIGATION ACTIVE"), 800);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setDisplayed((p) => [...p, bootLines[bootIndex]]);
      setBootIndex((p) => p + 1);
    }, 300 + Math.random() * 600);
    return () => clearTimeout(t);
  }, [bootIndex]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden border-b border-white/10">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 py-24 lg:px-16">
        <div className="mb-12 flex items-center gap-4">
          <svg viewBox="0 0 24 24" className="h-10 w-10 fill-[#00FF66] corrupt">
            <polygon points="12,1 3,23 12,17 21,23" />
          </svg>
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-white/20 drift">
            [EMBER v0.1.0] — PROTOCOL_ACTIVE
          </span>
        </div>

        <h1
          className="glitch-text font-display text-[clamp(3rem,14vw,10rem)] font-black uppercase leading-[.75] tracking-[-.05em] mb-8"
          data-text="ANTI-FARM PROTOCOL"
        >
          ANTI-FARM PROTOCOL
        </h1>

        <div className="space-y-1.5 max-w-2xl">
          {displayed.map((l, i) => (
            <p
              key={i}
              className="font-mono text-[12px] leading-relaxed text-white/50"
              style={{ animation: i === displayed.length - 1 ? "text-flicker 3s infinite" : "none" }}
            >
              <span className="text-[#00FF66]/60">$</span> {corrupt(l, i === displayed.length - 1 ? 0.08 : 0)}
            </p>
          ))}
          {bootIndex < bootLines.length && (
            <p className="font-mono text-[12px] text-[#00FF66]">
              <span className="inline-block h-3 w-2 bg-[#00FF66] animate-pulse mr-2" />
              BOOT_SEQUENCE...
            </p>
          )}
          {error && (
            <p className="font-mono text-sm leading-relaxed text-[#FF3333] corrupt mt-4">
              ! {error}
            </p>
          )}
        </div>

        {/* Hidden links embedded as corrupted hex data */}
        <div className="mt-16 border-t border-white/10 pt-6 space-y-1 opacity-40 hover:opacity-100 transition-opacity">
          <p className="font-mono text-[10px] text-white/15">; RESOURCE_TABLE:</p>
          {[
            ["GITHUB", "https://github.com/ZeroPointWorks/EMBER-Web"],
            ["X", "#"],
            ["DISCORD", "#"],
            ["DOCS", "/docs"],
          ].map(([label, href]) => (
            <p key={label} className="font-mono text-[10px]">
              <span className="text-white/20">0x{(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0").toUpperCase()}</span>{" "}
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-white/30 underline decoration-white/10 underline-offset-2 hover:text-[#00FF66] transition-colors"
              >
                {label}
              </a>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
