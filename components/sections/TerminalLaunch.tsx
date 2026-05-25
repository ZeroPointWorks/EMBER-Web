"use client";

import { useState } from "react";

export default function TerminalLaunch() {
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");

  return (
    <section className="relative w-full border-b border-[rgba(255,255,255,0.08)]">
      <div className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 lg:grid-cols-12">
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-[rgba(255,255,255,0.08)] lg:block" />

        {/* Left — Instructions / info */}
        <div className="relative flex flex-col justify-center px-6 py-16 lg:col-span-5 lg:px-12">
          <div className="absolute right-0 top-0 hidden h-full w-px bg-[rgba(255,255,255,0.08)] lg:block" />

          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-crimson animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-crimson">
              Launch Terminal
            </span>
          </div>

          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.85] tracking-[-0.03em] text-white mb-6">
            CONTRIBUTE
            <br />
            <span className="text-toxic">TO THE</span>
            <br />
            PROTOCOL
          </h2>

          <p className="font-mono text-sm leading-relaxed text-white/40 max-w-sm mb-8">
            No premine. No ICO. No dev tax. Fair distribution through direct
            contribution. The anti-farm reward curve is active from block one.
          </p>

          {/* Stats */}
          <div className="space-y-3 border-t border-[rgba(255,255,255,0.08)] pt-6">
            {[
              ["TOTAL CONTRIBUTORS", "12,847"],
              ["CURRENT EMISSION", "2.4 EMBER/BLOCK"],
              ["FARMS NEUTRALIZED", "1,247"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/25">
                  {label}
                </span>
                <span className="font-mono text-sm text-white/70">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Terminal form */}
        <div className="relative flex flex-col justify-center px-6 py-16 lg:col-span-7 lg:px-16">
          <div className="w-full max-w-lg border border-[rgba(255,255,255,0.1)] p-8 lg:p-12">
            {/* Terminal header */}
            <div className="mb-8 flex items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-4">
              <div className="flex gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-crimson" />
                <span className="inline-block h-2 w-2 rounded-full bg-white/20" />
                <span className="inline-block h-2 w-2 rounded-full bg-toxic" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/25">
                ember_launch_terminal — v0.1.0
              </span>
            </div>

            {/* Amount field */}
            <div className="mb-6">
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
                Contribution Amount (XMR)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full border-0 border-b border-[rgba(255,255,255,0.15)] bg-transparent pb-3 pt-2 font-mono text-2xl text-white outline-none transition-colors focus:border-toxic placeholder:text-white/10"
                />
                <span className="absolute right-0 bottom-3 font-mono text-xs text-white/25">
                  XMR
                </span>
              </div>
            </div>

            {/* Wallet field */}
            <div className="mb-8">
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
                Wallet Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                  placeholder="4A..."
                  className="w-full border-0 border-b border-[rgba(255,255,255,0.15)] bg-transparent pb-3 pt-2 font-mono text-sm text-white outline-none transition-colors focus:border-toxic placeholder:text-white/10"
                />
                <span className="absolute right-0 bottom-3 font-mono text-[10px] text-white/20">
                  {wallet.length > 0 ? `${wallet.length} chars` : ""}
                </span>
              </div>
            </div>

            {/* Simulated cursor blink */}
            <div className="mb-8 flex items-center gap-2 font-mono text-[11px] text-white/20">
              <span className="inline-block h-4 w-[2px] bg-toxic animate-pulse" />
              AWAITING INPUT — ENTER AMOUNT & ADDRESS
            </div>

            {/* Main CTA */}
            <button
              type="button"
              className="group relative w-full border border-white/15 bg-transparent px-8 py-5 font-display text-lg font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white hover:text-black active:translate-y-[2px]"
            >
              <span className="relative z-10 transition-colors group-hover:text-black">
                Execute Contribution
              </span>
            </button>

            <p className="mt-4 font-mono text-[10px] leading-relaxed text-white/15 text-center">
              By contributing you agree to the anti-farm consensus protocol.
              <br />
              No premine. No ICO. No dev tax.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
