"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fragments = [
  "DECLARATION:",
  "THE FARM ECONOMY IS A PARASITE.",
  "IT EXTRACTS. IT CENTRALIZES. IT DESTROYS.",
  "EMBER REWRITES THE INCENTIVE LAYER.",
  "EVERY CPU GETS EQUAL REWARD.",
  "ECONOMIES OF SCALE ARE MATHEMATICALLY ELIMINATED.",
  "THIS IS NOT AN UPGRADE.",
  "THIS IS A PURGE.",
];

export default function ManifestoGlitch() {
  const container = useRef<HTMLDivElement>(null);
  const lines = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const valid = lines.current.filter(Boolean);
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 0.5,
        onUpdate: (self) => {
          valid.forEach((el, i) => {
            const p = Math.min(1, Math.max(0, (self.progress - i * 0.08) / (1 - i * 0.08)));
            el!.style.opacity = String(p);
            el!.style.transform = `translateX(${(1 - p) * 60}px)`;
            el!.style.filter = `blur(${(1 - p) * 6}px)`;
          });
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full overflow-hidden border-b border-white/10">
      {/* Glitch artifacts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-[110%] h-px bg-[#00FF66]/20 drift" />
        <div className="absolute top-[60%] left-[-5%] w-[110%] h-px bg-[#FF3333]/10 drift" style={{ animationDelay: "2s" }} />
      </div>

      <div className="mx-auto min-h-screen max-w-[1440px] flex flex-col justify-center px-6 py-24 lg:px-16">
        <p className="font-mono text-[10px] uppercase tracking-[.3em] text-white/20 mb-12 corrupt">
          &lt;scroll_to_initiate_purge/&gt;
        </p>

        <div className="space-y-6 max-w-4xl ml-0 lg:ml-[15%]">
          {fragments.map((f, i) => (
            <p
              key={i}
              ref={(el) => { lines.current[i] = el; }}
              className={`font-display text-[clamp(1.2rem,3.5vw,3rem)] font-black uppercase leading-[1] tracking-[-.02em] opacity-0 ${
                i === 0 ? "text-[#FF3333] text-sm font-mono tracking-[.15em]" : "text-white"
              }`}
              style={{ transform: "translateX(60px)", filter: "blur(6px)" }}
            >
              {i === 0 ? (
                f
              ) : (
                <span className="glitch-text" data-text={f}>
                  {f}
                </span>
              )}
            </p>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-6 max-w-2xl">
          <p className="font-mono text-[10px] text-white/15 leading-relaxed">
            ; CRC_CHECK: 0x{(Math.random() * 0xFFFFFFFF).toString(16).toUpperCase().slice(0, 8)}<br />
            ; SIG: ZeroPointWorks<br />
            ; VERIFIED: {(new Date()).toISOString().split("T")[0]}
          </p>
        </div>
      </div>
    </section>
  );
}
