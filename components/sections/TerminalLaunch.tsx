"use client";

import { useState } from "react";

export default function TerminalLaunch() {
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");

  return (
    <section className="w-full border-b border-white/10">
      <div className="mx-auto min-h-screen max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 px-6 py-24 lg:px-16">
        <div className="flex flex-col justify-center max-w-lg">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-[#FF3333]" />
            <span className="font-mono text-xs uppercase tracking-[.2em] text-[#FF3333]">
              launch_terminal
            </span>
          </div>

          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[.85] tracking-[-.03em] mb-6">
            CONTRIBUTE
            <br />
            <span className="text-[#00FF66]">TO THE</span>
            <br />
            PROTOCOL
          </h2>

          <p className="font-mono text-sm leading-relaxed text-white/40 mb-10">
            No premine. No ICO. No dev tax. Anti-farm reward curve active from block one.
          </p>

          <div className="space-y-3 border-t border-white/10 pt-6">
            {[
              ["CONTRIBUTORS", "12,847"],
              ["EMISSION", "2.4 EMBER/BLOCK"],
              ["NEUTRALIZED", "1,247"],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between">
                <span className="font-mono text-xs uppercase tracking-[.15em] text-white/25">{l}</span>
                <span className="font-mono text-sm text-white/60">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="w-full max-w-xl border border-white/10 p-8 lg:p-12">
            <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-5">
              <div className="flex gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-[#FF3333]" />
                <span className="inline-block h-2 w-2 rounded-full bg-white/20" />
                <span className="inline-block h-2 w-2 rounded-full bg-[#00FF66]" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[.15em] text-white/25">
                ember_launch
              </span>
            </div>

            <div className="mb-8">
              <label className="mb-3 block font-mono text-xs uppercase tracking-[.15em] text-white/30">
                Contribution Amount (XMR)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full border-0 border-b border-white/15 bg-transparent pb-3 pt-2 font-mono text-2xl text-white outline-none focus:border-[#00FF66] placeholder:text-white/10"
                />
                <span className="absolute right-0 bottom-3 font-mono text-xs text-white/25">XMR</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="mb-3 block font-mono text-xs uppercase tracking-[.15em] text-white/30">
                Wallet Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                  placeholder="4A..."
                  className="w-full border-0 border-b border-white/15 bg-transparent pb-3 pt-2 font-mono text-sm text-white outline-none focus:border-[#00FF66] placeholder:text-white/10"
                />
                <span className="absolute right-0 bottom-3 font-mono text-[10px] text-white/20">
                  {wallet.length > 0 ? `${wallet.length} CHARS` : ""}
                </span>
              </div>
            </div>

            <div className="mb-8 flex items-center gap-2 font-mono text-xs text-white/20">
              <span className="inline-block h-4 w-[2px] bg-[#00FF66] animate-pulse" />
              AWAITING INPUT
            </div>

            <button className="w-full border border-white/15 bg-transparent px-8 py-5 font-display text-lg font-bold uppercase tracking-[.1em] text-white hover:bg-white hover:text-black active:translate-y-[2px] cursor-pointer">
              Execute Contribution
            </button>

            <p className="mt-6 font-mono text-[10px] text-white/15 text-center leading-relaxed">
              By contributing you agree to the anti-farm protocol.
              <br />
              No premine. No ICO. No dev tax.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
