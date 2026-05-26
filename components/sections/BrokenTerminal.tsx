"use client";

import { useState, useEffect, useRef } from "react";

const chars = "!@#$%^&*()_+{}:<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

export default function BrokenTerminal() {
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");
  const [glitchBtn, setGlitchBtn] = useState(false);
  const [scramble, setScramble] = useState("");
  const [pid] = useState(() => Math.floor(Math.random() * 99999));
  const btnRef = useRef<HTMLButtonElement>(null);

  // Scramble effect on placeholder
  useEffect(() => {
    const t = setInterval(() => {
      setScramble(randomChar());
    }, 100);
    return () => clearInterval(t);
  }, []);

  // Button glitch
  useEffect(() => {
    const t = setInterval(() => {
      setGlitchBtn((p) => !p);
    }, 4000 + Math.random() * 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden border-b border-white/10">
      {/* Horizontal glitch artifacts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[-10%] w-[120%] h-px bg-[#00FF66]/10 drift" />
        <div className="absolute top-[45%] left-[-10%] w-[120%] h-px bg-[#FF3333]/15 drift" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[75%] left-[-10%] w-[120%] h-px bg-[#00FF66]/5 drift" style={{ animationDelay: "3s" }} />
      </div>

      <div className="mx-auto min-h-screen max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 px-6 py-24 lg:px-16">
        {/* Left side */}
        <div className="flex flex-col justify-center max-w-lg">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-[#FF3333] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[.2em] text-[#FF3333] corrupt">
              launch_terminal
            </span>
          </div>

          <h2
            className="glitch-text font-display text-[clamp(2rem,5vw,4.5rem)] font-black uppercase leading-[.85] tracking-[-.03em] mb-6"
            data-text="CONTRIBUTE"
          >
            CONTRIBUTE
          </h2>

          <p className="font-mono text-sm leading-relaxed text-white/40 mb-10">
            No premine. No ICO. No dev tax. The anti-farm curve is active from block one.
          </p>

          {/* Stats row with corruption */}
          <div className="space-y-3 border-t border-white/10 pt-6">
            {[
              ["CONTRIBUTORS", "12,847"],
              ["EMISSION", "2.4/BLOCK"],
              ["NEUTRALIZED", "1,247"],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase tracking-[.15em] text-white/25">{l}</span>
                <span className="font-mono text-sm text-white/70">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side — Corrupted terminal */}
        <div className="flex flex-col justify-center">
          <div className="w-full max-w-xl border border-white/10 p-8 lg:p-12 relative overflow-hidden">
            {/* Terminal corruption overlay */}
            <div className="absolute top-0 left-0 w-full h-px bg-[#00FF66]/20 drift" />

            {/* Terminal header */}
            <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-5">
              <div className="flex gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-[#FF3333]" />
                <span className="inline-block h-2 w-2 rounded-full bg-white/20" />
                <span className="inline-block h-2 w-2 rounded-full bg-[#00FF66]" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[.15em] text-white/25">
                ember_launch [CORRUPTED]
              </span>
              <span className="font-mono text-[8px] text-[#FF3333]/60 ml-auto">PID: {Math.floor(Math.random() * 99999)}</span>
            </div>

            {/* Amount field */}
            <div className="mb-6">
              <label className="mb-3 block font-mono text-[10px] uppercase tracking-[.15em] text-white/30">
                contribution_amount {glitchBtn ? `[${randomChar()}${randomChar()}${randomChar()}]` : ""}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder={glitchBtn ? `0.${Math.floor(Math.random() * 99)}` : "0.00"}
                  className="w-full border-0 border-b border-white/15 bg-transparent pb-3 pt-2 font-mono text-2xl text-white outline-none focus:border-[#00FF66] placeholder:text-white/10 transition-none"
                />
                <span className="absolute right-0 bottom-3 font-mono text-xs text-white/25">XMR</span>
              </div>
            </div>

            {/* Wallet field */}
            <div className="mb-4">
              <label className="mb-3 block font-mono text-[10px] uppercase tracking-[.15em] text-white/30">
                wallet_address [REQUIRED]
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                  placeholder={glitchBtn ? `${randomChar()}${randomChar()}...` : "4A..."}
                  className="w-full border-0 border-b border-white/15 bg-transparent pb-3 pt-2 font-mono text-sm text-white outline-none focus:border-[#00FF66] placeholder:text-white/10 transition-none"
                />
                <span className="absolute right-0 bottom-3 font-mono text-[10px] text-white/20">
                  {wallet.length > 0 ? `${wallet.length}_CHARS` : ""}
                </span>
              </div>
            </div>

            {/* Error messages that appear */}
            <div className="mb-6 space-y-1">
              {glitchBtn && (
                <p className="font-mono text-[9px] text-[#FF3333]/60 corrupt">
                  ! ERR: MEMPOOL_CONTENTION — RETRY MAY BE REQUIRED
                </p>
              )}
              <p className="font-mono text-[9px] text-white/10">
                ; nonce: 0x{Math.floor(Math.random() * 0xFFFFFFFF).toString(16).padStart(8, "0")}
              </p>
            </div>

            {/* Blinking cursor */}
            <div className="mb-6 flex items-center gap-2 font-mono text-[11px] text-white/20">
              <span className="inline-block h-4 w-[2px] bg-[#00FF66] animate-pulse" />
              {glitchBtn ? "AWAITING_INPUT_" + randomChar() : "AWAITING_INPUT"}
            </div>

            {/* Main CTA — glitchy button */}
            <button
              ref={btnRef}
              className={`group relative w-full border px-8 py-5 font-display text-lg font-bold uppercase tracking-[.1em] transition-none cursor-pointer ${
                glitchBtn
                  ? "border-[#FF3333] bg-[#FF3333]/10 text-[#FF3333] animate-pulse"
                  : "border-white/15 bg-transparent text-white hover:bg-white hover:text-black"
              }`}
              onMouseEnter={() => glitchBtn && setGlitchBtn(false)}
            >
              <span className="relative">
                {glitchBtn
                  ? `EXECUTE_${randomChar()}${randomChar()}${randomChar()}`
                  : "Execute Contribution"}
              </span>
            </button>

            <p className="mt-6 font-mono text-[9px] leading-relaxed text-white/10 text-center">
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
