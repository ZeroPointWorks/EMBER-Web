"use client";

import { useEffect, useState } from "react";

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
      const t = setTimeout(() => setError("WARNING: FARM CLUSTER DETECTED — MITIGATION ACTIVE"), 1200);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setDisplayed((p) => [...p, bootLines[bootIndex]]);
      setBootIndex((p) => p + 1);
    }, 400 + Math.random() * 800);
    return () => clearTimeout(t);
  }, [bootIndex]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden border-b border-white/10">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 py-24 lg:px-16">
        <div className="mb-12 flex items-center gap-4">
          <svg viewBox="0 0 24 24" className="h-10 w-10 fill-[#00FF66]">
            <polygon points="12,1 3,23 12,17 21,23" />
          </svg>
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-white/20">
            EMBER v0.1.0
          </span>
        </div>

        <h1
          className="glitch-text font-display text-[clamp(3rem,14vw,10rem)] font-black uppercase leading-[.75] tracking-[-.05em] mb-10"
          data-text="ANTI-FARM PROTOCOL"
        >
          ANTI-FARM PROTOCOL
        </h1>

        <div className="space-y-1.5 max-w-2xl">
          {displayed.map((l, i) => (
            <p key={i} className="font-mono text-sm leading-relaxed text-white/50">
              <span className="text-[#00FF66]/60">$</span> {l}
            </p>
          ))}
          {bootIndex < bootLines.length && (
            <p className="font-mono text-sm text-[#00FF66]">
              <span className="inline-block h-3 w-2 bg-[#00FF66] animate-pulse mr-2" />
              BOOT_SEQUENCE...
            </p>
          )}
          {error && (
            <p className="font-mono text-sm leading-relaxed text-[#FF3333] mt-4">
              ! {error}
            </p>
          )}
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 max-w-lg">
          <p className="font-mono text-xs text-white/15 mb-3">; RESOURCES:</p>
          <div className="space-y-1.5">
            {[
              ["GITHUB", "https://github.com/ZeroPointWorks/EMBER-Web"],
              ["X / TWITTER", "#"],
              ["DISCORD", "#"],
              ["DOCS", "/docs"],
              ["EXPLORER", "#"],
            ].map(([label, href]) => (
              <p key={label} className="font-mono text-xs">
                <span className="text-white/20">$</span>{" "}
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-white/40 underline decoration-white/10 underline-offset-2 hover:text-[#00FF66] transition-colors"
                >
                  {label}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
