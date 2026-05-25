"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function KineticReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const chars = el.textContent?.split("") ?? [];
    el.textContent = "";
    const spans = chars.map((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(120px) rotateX(-90deg)";
      span.style.filter = "blur(20px)";
      el.appendChild(span);
      return span;
    });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          spans.forEach((span, i) => {
            const staggerOffset = i * 0.02;
            const p = Math.min(1, Math.max(0, (progress - staggerOffset) / (1 - staggerOffset)));
            span.style.opacity = String(p);
            span.style.transform = `translateY(${120 * (1 - p)}px) rotateX(${-90 * (1 - p)}deg)`;
            span.style.filter = `blur(${20 * (1 - p)}px)`;
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden border-b border-[rgba(255,255,255,0.08)]"
    >
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center px-6 py-24">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-white/30">
          Scroll to initiate
        </p>
        <h2
          ref={textRef}
          className="font-display text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.03em] text-center max-w-[900px]"
        >
          PURGE THE PARASITES
        </h2>
        <div className="mt-12 flex items-center gap-2 font-mono text-xs text-white/20">
          <span className="inline-block h-1 w-4 bg-toxic" />
          KINETIC INTERPOLATION ACTIVE
        </div>
      </div>
    </section>
  );
}
