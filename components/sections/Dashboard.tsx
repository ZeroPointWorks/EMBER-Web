const stats = [
  { label: "WALLETS SCANNED", value: "12,847" },
  { label: "CLUSTERS DETECTED", value: "341" },
  { label: "FARMS NEUTRALIZED", value: "28" },
  { label: "ADDRESSES BLACKLISTED", value: "1,247" },
  { label: "SYBIL CONFIDENCE", value: "94.2%" },
  { label: "CONSENSUS NODES", value: "873" },
];

export default function Dashboard() {
  return (
    <section className="w-full border-b border-white/10">
      <div className="mx-auto min-h-screen max-w-[1440px] flex flex-col justify-center px-6 py-24 lg:px-16">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-block h-2 w-2 bg-[#00FF66]" />
          <span className="font-mono text-xs uppercase tracking-[.2em] text-[#00FF66]">
            NETWORK TELEMETRY
          </span>
        </div>

        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[.85] tracking-[-.03em] mb-16">
          NETWORK STATS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-black p-8">
              <p className="font-mono text-xs uppercase tracking-[.15em] text-white/40 mb-4">
                {s.label}
              </p>
              <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#00FF66]">
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs uppercase tracking-[.15em] text-white/30">MITIGATION PROGRESS</span>
            <span className="font-mono text-xs text-[#00FF66]">94.7%</span>
          </div>
          <div className="h-2 bg-white/5">
            <div className="h-full w-[94.7%] bg-[#00FF66]" />
          </div>
        </div>
      </div>
    </section>
  );
}
