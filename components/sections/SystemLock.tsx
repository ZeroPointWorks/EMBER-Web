"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type State = "analysis" | "execution" | "connect";

const pages: Record<State, { title: string; desc: string; lines: string[] }> = {
  analysis: {
    title: "SYBIL HONEY-POT ANALYSIS",
    desc: "Cluster detection algorithms identify coordinated wallet groups. Each node is mapped, traced, and flagged for isolation.",
    lines: [
      "WALLETS SCANNED: 12,847",
      "CLUSTERS FOUND: 341",
      "SYBIL CONFIDENCE: 94.2%",
      "FARMS DETECTED: 28",
    ],
  },
  execution: {
    title: "EXECUTION PHASE",
    desc: "Isolation vectors deployed. Cluster addresses blacklisted from reward distribution.",
    lines: [
      "ADDRESSES BLACKLISTED: 1,247",
      "LIQUIDITY FENCES: ARMED",
      "CONTRACT STATE: FINALIZED",
      "OUTCOME: IRREVERSIBLE",
    ],
  },
  connect: {
    title: "WALLET CONNECTION REQUIRED",
    desc: "Node cleared. Connect to initialize mining privileges and join the anti-farm consensus layer.",
    lines: [
      "NODE STATUS: AUTHENTICATED",
      "CONSENSUS: VERIFIED",
      "REWARD TRACK: ACTIVE",
      "READY: CONNECT WALLET",
    ],
  },
};

export default function SystemLock() {
  const trigger = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>("analysis");
  const ref = useRef<State>("analysis");

  useEffect(() => {
    const el = trigger.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
        onUpdate: (s) => {
          const p = s.progress;
          let next: State;
          if (p < 0.33) next = "analysis";
          else if (p < 0.66) next = "execution";
          else next = "connect";
          if (next !== ref.current) {
            ref.current = next;
            setState(next);
          }
        },
      });
    }, trigger);
    return () => ctx.revert();
  }, []);

  const c = pages[state];

  return (
    <div ref={trigger} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 left-0 flex h-screen w-full items-center overflow-hidden border-b border-white/10">
        <div className="mx-auto grid h-full w-full max-w-[1440px] grid-cols-1 lg:grid-cols-12">
          <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/10 lg:block" />

          <div className="relative flex flex-col justify-center px-6 py-16 lg:col-span-6 lg:px-16">
            <div className="absolute right-0 top-0 hidden h-full w-px bg-white/10 lg:block" />
            <div className="mb-3 flex items-center gap-2">
              <span className={`inline-block h-2 w-2 transition-colors ${state === "analysis" ? "bg-white/50" : state === "execution" ? "bg-[#00FF66]" : "bg-[#FF3333]"}`} />
              <span className="font-mono text-[10px] uppercase tracking-[.2em] text-white/30">
                STATE {state === "analysis" ? "1/3" : state === "execution" ? "2/3" : "3/3"}
              </span>
            </div>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold uppercase leading-[.9] tracking-[-.02em] text-white mb-4">
              {c.title}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-white/40 max-w-md">
              {c.desc}
            </p>
          </div>

          <div className="relative flex flex-col justify-center px-6 py-16 lg:col-span-6 lg:px-16">
            {state === "analysis" && (
              <div className="relative h-64 w-full border border-white/10 p-6">
                <svg viewBox="0 0 400 300" className="h-full w-full opacity-40">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <line key={i} x1="0" y1={i * 33} x2="400" y2={i * 33} stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                  ))}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <line key={i} x1={i * 36} y1="0" x2={i * 36} y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                  ))}
                  {[[80,80],[90,85],[75,95],[250,180],[260,175],[245,190],[310,60],[320,50],[315,70],[180,220],[190,215]].map(([x,y],i) => (
                    <circle key={i} cx={x} cy={y} r="3" fill="rgba(255,255,255,0.3)" />
                  ))}
                  <circle cx="82" cy="85" r="20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="252" cy="180" r="20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="315" cy="60" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
                <p className="absolute bottom-3 left-3 font-mono text-[10px] text-white/20">CLUSTER_TOPOLOGY</p>
              </div>
            )}
            {state === "execution" && (
              <div className="relative h-64 w-full border border-[#00FF66]/30 overflow-hidden flex items-center justify-center p-6">
                <svg viewBox="0 0 400 300" className="h-full w-full opacity-60">
                  <line x1="40" y1="40" x2="360" y2="40" stroke="#00FF66" strokeWidth="1" />
                  <line x1="40" y1="150" x2="360" y2="150" stroke="#00FF66" strokeWidth="1" />
                  <line x1="40" y1="260" x2="360" y2="260" stroke="#00FF66" strokeWidth="1" />
                  <line x1="100" y1="20" x2="100" y2="280" stroke="#00FF66" strokeWidth="1" />
                  <line x1="200" y1="20" x2="200" y2="280" stroke="#00FF66" strokeWidth="1" />
                  <line x1="300" y1="20" x2="300" y2="280" stroke="#00FF66" strokeWidth="1" />
                  <polygon points="200,130 188,155 212,155" fill="#00FF66" opacity="0.6" />
                  <polygon points="200,170 188,145 212,145" fill="#00FF66" opacity="0.6" />
                </svg>
                <p className="absolute bottom-3 left-3 font-mono text-[10px] text-[#00FF66]/40">CONTRACTING_VECTORS</p>
              </div>
            )}
            {state === "connect" && (
              <div className="relative h-64 w-full flex items-center justify-center">
                <div className="w-full max-w-xs border border-white/15 p-8" style={{ boxShadow: "8px 8px 0 #00FF66" }}>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="inline-block h-2 w-2 bg-[#00FF66] animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#00FF66]">Wallet Required</span>
                  </div>
                  <p className="mb-6 font-mono text-xs leading-relaxed text-white/40">Identity cleared. Connect to initialize mining privileges.</p>
                  <button className="w-full border border-[#00FF66] bg-[#00FF66] px-6 py-3 font-mono text-xs font-bold uppercase tracking-[.15em] text-black active:translate-y-[2px] hover:bg-white transition-none cursor-pointer">
                    Connect Wallet
                  </button>
                </div>
              </div>
            )}
            <div className="mt-6 space-y-1.5">
              {c.lines.map((l, i) => (
                <p key={i} className={`font-mono text-[11px] transition-colors ${state === "execution" ? "text-[#00FF66]/60" : state === "connect" ? "text-[#FF3333]/60" : "text-white/40"}`}>
                  {`> ${l}`}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
