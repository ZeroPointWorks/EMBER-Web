"use client";

import { useEffect, useState } from "react";

const resources = [
  { label: "GITHUB", url: "https://github.com/ZeroPointWorks/EMBER-Web" },
  { label: "DISCORD", url: "#" },
  { label: "X / TWITTER", url: "#" },
  { label: "DOCUMENTATION", url: "/docs" },
  { label: "BLOCK EXPLORER", url: "#" },
  { label: "WHITEPAPER", url: "/whitepaper.pdf" },
  { label: "MACOS BUILD", url: "/download/ember-macos-latest.tar.gz" },
  { label: "LINUX BUILD", url: "/download/ember-linux-latest.tar.gz" },
  { label: "WINDOWS BUILD", url: "/download/ember-windows-latest.zip" },
  { label: "SOURCE CODE", url: "https://github.com/ZeroPointWorks/EMBER" },
];

export default function ResourceStream() {
  const [revealed, setRevealed] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx >= resources.length) return;
    const t = setTimeout(() => {
      setRevealed((p) => [...p, resources[idx].label]);
      setIdx((p) => p + 1);
    }, 400);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <section className="w-full border-b border-[rgba(255,255,255,0.08)]">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 py-24 lg:px-12">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-block h-2 w-2 bg-toxic" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-toxic">
            Resource Index
          </span>
        </div>

        <div className="space-y-2">
          {resources.map((r, i) => (
            <p
              key={r.label}
              className={`font-mono text-sm leading-relaxed transition-opacity duration-300 ${
                revealed.includes(r.label)
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <span className="text-white/20">
                [{String(i + 1).padStart(2, "0")}]
              </span>{" "}
              <span className="text-toxic">$</span>{" "}
              <span className="text-white/40">fetch</span>{" "}
              <a
                href={r.url}
                target={r.url.startsWith("http") ? "_blank" : undefined}
                rel={r.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="underline decoration-toxic/30 underline-offset-4 hover:text-toxic transition-colors text-white/70"
              >
                {r.label.toLowerCase()}
              </a>
            </p>
          ))}
        </div>

        {idx < resources.length && (
          <div className="mt-8 flex items-center gap-2 font-mono text-xs text-white/20">
            <span className="inline-block h-4 w-[2px] bg-toxic animate-pulse" />
            STREAMING_RESOURCE_INDEX...
          </div>
        )}

        {idx >= resources.length && (
          <div className="mt-16 border-t border-[rgba(255,255,255,0.08)] pt-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-toxic">
                  <polygon points="12,1 3,23 12,17 21,23" />
                </svg>
                <span className="font-mono text-[11px] text-white/15">
                  EMBER v0.1.0 — MIT License — Built by ZeroPointWorks
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[10px] text-white/10">
                <span>NO PREMINE</span>
                <span className="inline-block h-1 w-1 bg-toxic" />
                <span>NO ICO</span>
                <span className="inline-block h-1 w-1 bg-toxic" />
                <span>FAIR LAUNCH</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
