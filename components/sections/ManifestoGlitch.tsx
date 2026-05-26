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
  "ECONOMIES OF SCALE ARE ELIMINATED.",
  "THIS IS NOT AN UPGRADE.",
  "THIS IS A PURGE.",
];

export default function ManifestoGlitch() {
  const container = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const valid = lineRefs.current.filter(Boolean);
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 0.5,
        onUpdate: (self) => {
          valid.forEach((el, i) => {
            const p = Math.min(1, Math.max(0, (self.progress - i * 0.08) / (1 - i * 0.08)));
            el!.style.opacity = String(p);
            el!.style.transform = `translateX(${(1 - p) * 40}px)`;
            el!.style.filter = `blur(${(1 - p) * 4}px)`;
          });
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full overflow-hidden border-b border-white/10">
      <div className="glitch-line" style={{ top: "25%" }} />
      <div className="glitch-line" style={{ top: "55%", background: "rgba(255,51,51,0.2)", animationDelay: "5s" }} />

      <div className="mx-auto min-h-screen max-w-[1440px] flex flex-col justify-center px-6 py-24 lg:px-16">
        <p className="font-mono text-xs uppercase tracking-[.3em] text-white/20 mb-16">
          &lt; scroll_to_purge /&gt;
        </p>

        <div className="space-y-8 max-w-4xl ml-0 lg:ml-[15%]">
          {fragments.map((f, i) => (
            <p
              key={i}
              ref={(el) => { lineRefs.current[i] = el; }}
              className={`font-black uppercase leading-[1.1] tracking-[-.02em] opacity-0 ${
                i === 0 ? "text-[#FF3333] text-sm font-mono tracking-[.15em]" : "text-white"
              }`}
              style={{ fontSize: i === 0 ? "14px" : "clamp(1.2rem,3.5vw,3rem)" }}
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

        <div className="mt-24 border-t border-white/10 pt-6 max-w-lg">
          <p className="font-mono text-xs text-white/15 leading-relaxed">
            ; SIG: ZeroPointWorks<br />
            ; STATUS: VERIFIED
          </p>
        </div>
      </div>
    </section>
  );
}
