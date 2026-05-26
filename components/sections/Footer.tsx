export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#00FF66]">
              <polygon points="12,1 3,23 12,17 21,23" />
            </svg>
            <span className="font-mono text-xs text-white/20">
              EMBER v0.1.0 — MIT License — ZeroPointWorks
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px] text-white/15">
            <span>NO PREMINE</span>
            <span className="inline-block h-1 w-1 bg-[#00FF66]" />
            <span>NO ICO</span>
            <span className="inline-block h-1 w-1 bg-[#00FF66]" />
            <span>FAIR LAUNCH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
