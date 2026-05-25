"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function KineticReveal() {
  const container = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = text.current;
    if (!el) return;
    const chars = [...el.textContent!].map((c) => {
      const s = document.createElement("span");
      s.textContent = c === " " ? "\u00A0" : c;
      s.style.cssText = "display:inline-block;opacity:0;transform:translateY(120px) rotateX(-90deg);filter:blur(20px)";
      el.appendChild(s);
      return s;
    });
    el.textContent = "";
    chars.forEach((s) => el.appendChild(s));

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 0.5,
        onUpdate: (self) => {
          chars.forEach((s, i) => {
            const p = Math.min(1, Math.max(0, (self.progress - i * 0.02) / (1 - i * 0.02)));
            s.style.opacity = String(p);
            s.style.transform = `translateY(${120 * (1 - p)}px) rotateX(${-90 * (1 - p)}deg)`;
            s.style.filter = `blur(${20 * (1 - p)}px)`;
          });
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-screen w-full border-b border-white/10 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[.3em] text-white/30">
          Scroll To Initiate
        </p>
        <h2 ref={text} className="font-display text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[.85] tracking-[-.03em] max-w-[900px] mx-auto">
          PURGE THE PARASITES
        </h2>
        <div className="mt-10 flex items-center justify-center gap-2 font-mono text-[11px] text-white/20">
          <span className="inline-block h-1 w-4 bg-[#00FF66]" />
          KINETIC INTERPOLATION
        </div>
      </div>
    </section>
  );
}
