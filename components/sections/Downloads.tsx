export default function Downloads() {
  return (
    <section className="relative w-full border-b border-[rgba(255,255,255,0.08)]">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 py-24 lg:px-12">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-block h-2 w-2 bg-toxic" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-toxic">
            Downloads
          </span>
        </div>

        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.85] tracking-[-0.03em] text-white mb-6">
          GET THE
          <br />
          <span className="text-crimson">TOOLS</span>
        </h2>

        <p className="font-mono text-sm leading-relaxed text-white/40 max-w-lg mb-16">
          Run a node. Mine EMBER. Help destroy the farm economy. All builds are
          signed and verified.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              platform: "macOS",
              arch: "Apple Silicon & Intel",
              file: "ember-macos-latest.tar.gz",
            },
            {
              platform: "Linux",
              arch: "Ubuntu 22.04+, Debian 12+",
              file: "ember-linux-latest.tar.gz",
            },
            {
              platform: "Windows",
              arch: "Windows 10+ (64-bit)",
              file: "ember-windows-latest.zip",
            },
          ].map((build) => (
            <a
              key={build.platform}
              href={`/download/${build.file}`}
              className="group block border border-[rgba(255,255,255,0.1)] p-8 no-underline transition-all hover:border-toxic"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 bg-white/30 group-hover:bg-toxic transition-colors" />
                <span className="font-display text-base font-bold uppercase tracking-[0.1em] text-white group-hover:text-toxic transition-colors">
                  {build.platform}
                </span>
              </div>
              <p className="mb-6 font-mono text-xs leading-relaxed text-white/30">
                {build.arch}
              </p>
              <span className="inline-block border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50 transition-all group-hover:border-toxic group-hover:bg-toxic group-hover:text-black">
                Download
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 border-t border-[rgba(255,255,255,0.08)] pt-6">
          <p className="font-mono text-[11px] text-white/20">
            &gt; Build from source:{" "}
            <span className="text-white/40">
              git clone https://github.com/ZeroPointWorks/EMBER.git
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
