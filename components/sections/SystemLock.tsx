"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SystemState = "analysis" | "execution" | "connect";

const stateContent: Record<
  SystemState,
  { title: string; desc: string; lines: string[] }
> = {
  analysis: {
    title: "SYBIL HONEY-POT ANALYSIS",
    desc: "Cluster detection algorithms identify coordinated wallet groups. Each node is mapped, traced, and flagged for isolation.",
    lines: [
      "SCANNING: 12,847 WALLETS",
      "CLUSTERS IDENTIFIED: 341",
      "SYBIL CONFIDENCE: 94.2%",
      "FARMS DETECTED: 28",
      "PROTOCOL: ENGAGED",
    ],
  },
  execution: {
    title: "EXECUTION PHASE — ACTIVE",
    desc: "Isolation vectors deployed. Cluster addresses are being permanently blacklisted from the reward distribution mechanism.",
    lines: [
      "EXECUTING: WALLET ISOLATION",
      "BLACKLISTED: 1,247 ADDRESSES",
      "LIQUIDITY FENCES: ARMED",
      "CONTRACT: FINALIZED",
      "STATE: IRREVERSIBLE",
    ],
  },
  connect: {
    title: "WALLET CONNECTION REQUIRED",
    desc: "Your node has been cleared. Connect to initialize mining privileges and contribute to the anti-farm consensus layer.",
    lines: [
      "NODE STATUS: AUTHENTICATED",
      "CONSENSUS: VERIFIED",
      "REWARD TRACK: ACTIVE",
      "FARM STATUS: NEUTRALIZED",
      "READY: CONNECT WALLET",
    ],
  },
};

export default function SystemLock() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [currentState, setCurrentState] = useState<SystemState>("analysis");
  const stateRef = useRef<SystemState>("analysis");

  useEffect(() => {
    const el = pinRef.current;
    const section = sectionRef.current;
    if (!el || !section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        pin: el,
        pinSpacing: true,
        start: "top top",
        end: "+=400%",
        scrub: 0.5,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        onUpdate: (self) => {
          const progress = self.progress;
          let newState: SystemState;
          if (progress < 0.25) {
            newState = "analysis";
          } else if (progress < 0.50) {
            newState = "execution";
          } else {
            newState = "connect";
          }
          if (newState !== stateRef.current) {
            stateRef.current = newState;
            setCurrentState(newState);
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const content = stateContent[currentState];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "400vh" }}
    >
      <div
        ref={pinRef}
        className="flex h-screen w-full items-center"
        style={{ zIndex: 0 }}
      >
        <div className="mx-auto grid h-full w-full max-w-[1440px] grid-cols-1 lg:grid-cols-12">
          {/* Vertical dividers */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px bg-[rgba(255,255,255,0.08)] lg:block" />

          {/* Left panel — Copy */}
          <div className="relative flex flex-col justify-center px-6 py-16 lg:col-span-6 lg:px-12">
            <div className="absolute right-0 top-0 hidden h-full w-px bg-[rgba(255,255,255,0.08)] lg:block" />
            <div className="mb-4 flex items-center gap-3">
              <span
                className={`inline-block h-2 w-2 transition-colors duration-500 ${
                  currentState === "analysis"
                    ? "bg-white/50"
                    : currentState === "execution"
                      ? "bg-toxic"
                      : "bg-crimson"
                }`}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
                System State {currentState === "analysis" ? "1/3" : currentState === "execution" ? "2/3" : "3/3"}
              </span>
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-white mb-6">
              {content.title}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-white/40 max-w-md">
              {content.desc}
            </p>
          </div>

          {/* Right panel — Visual state */}
          <div className="relative flex flex-col justify-center px-6 py-16 lg:col-span-6 lg:px-12">
            {/* State 1: Cluster grid wireframe */}
            {currentState === "analysis" && (
              <div className="relative h-64 w-full border border-[rgba(255,255,255,0.08)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 400 300"
                    className="h-full w-full opacity-40"
                  >
                    {/* Grid lines */}
                    {Array.from({ length: 10 }).map((_, i) => (
                      <line
                        key={`h-${i}`}
                        x1="0"
                        y1={i * 33}
                        x2="400"
                        y2={i * 33}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="0.5"
                      />
                    ))}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <line
                        key={`v-${i}`}
                        x1={i * 36}
                        y1="0"
                        x2={i * 36}
                        y2="300"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="0.5"
                      />
                    ))}
                    {/* Cluster dots */}
                    {[
                      [80, 80],
                      [90, 85],
                      [75, 95],
                      [85, 70],
                      [70, 90],
                      [250, 180],
                      [260, 175],
                      [245, 190],
                      [255, 170],
                      [240, 185],
                      [310, 60],
                      [320, 50],
                      [315, 70],
                      [180, 220],
                      [190, 215],
                      [175, 230],
                    ].map(([cx, cy], i) => (
                      <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r="3"
                        fill="rgba(255,255,255,0.3)"
                      />
                    ))}
                    {/* Cluster rings */}
                    <circle
                      cx="80"
                      cy="82"
                      r="20"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                    <circle
                      cx="252"
                      cy="180"
                      r="20"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                    <circle
                      cx="315"
                      cy="60"
                      r="15"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-3 left-3 font-mono text-[10px] text-white/20">
                  CLUSTER TOPOLOGY — {content.lines.length} NODES
                </div>
              </div>
            )}

            {/* State 2: Toxic green contraction */}
            {currentState === "execution" && (
              <div className="relative h-64 w-full border border-toxic/30 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 300" className="h-full w-full opacity-60">
                    {/* Contracting lines */}
                    <line
                      x1="50"
                      y1="50"
                      x2="350"
                      y2="50"
                      stroke="#00FF66"
                      strokeWidth="1"
                    />
                    <line
                      x1="50"
                      y1="150"
                      x2="350"
                      y2="150"
                      stroke="#00FF66"
                      strokeWidth="1"
                    />
                    <line
                      x1="50"
                      y1="250"
                      x2="350"
                      y2="250"
                      stroke="#00FF66"
                      strokeWidth="1"
                    />
                    <line
                      x1="100"
                      y1="30"
                      x2="100"
                      y2="270"
                      stroke="#00FF66"
                      strokeWidth="1"
                    />
                    <line
                      x1="200"
                      y1="30"
                      x2="200"
                      y2="270"
                      stroke="#00FF66"
                      strokeWidth="1"
                    />
                    <line
                      x1="300"
                      y1="30"
                      x2="300"
                      y2="270"
                      stroke="#00FF66"
                      strokeWidth="1"
                    />
                    {/* Collapse arrows */}
                    <polygon
                      points="200,130 190,150 210,150"
                      fill="#00FF66"
                      opacity="0.6"
                    />
                    <polygon
                      points="200,170 190,150 210,150"
                      fill="#00FF66"
                      opacity="0.6"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-3 left-3 font-mono text-[10px] text-toxic/40">
                  CONTRACTING VECTORS — ACTIVE
                </div>
              </div>
            )}

            {/* State 3: Brutalist wallet connect */}
            {currentState === "connect" && (
              <div className="relative h-64 w-full flex items-center justify-center">
                <div
                  className="w-full max-w-xs border border-[rgba(255,255,255,0.15)] p-8"
                  style={{ boxShadow: "8px 8px 0px 0px #00FF66" }}
                >
                  <div className="mb-6 flex items-center gap-2">
                    <span className="inline-block h-2 w-2 bg-toxic animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-toxic">
                      Wallet Required
                    </span>
                  </div>
                  <p className="mb-6 font-mono text-xs leading-relaxed text-white/40">
                    Your identity is cleared. Connect to initialize mining
                    privileges.
                  </p>
                  <button
                    type="button"
                    className="w-full border border-toxic bg-toxic px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-black transition-all active:translate-y-[2px] hover:bg-white"
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            )}

            {/* Terminal data */}
            <div className="mt-6 space-y-1.5">
              {content.lines.map((line, i) => (
                <p
                  key={i}
                  className={`font-mono text-[11px] transition-all duration-500 ${
                    currentState === "execution"
                      ? "text-toxic/60"
                      : currentState === "connect"
                        ? "text-crimson/60"
                        : "text-white/40"
                  }`}
                >
                  &gt; {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
