export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-[#000000]">
      <div className="mx-auto flex items-center justify-between px-6 py-4 max-w-[1440px] lg:px-12">
        <a href="/" className="flex items-center gap-3 no-underline">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-toxic">
            <polygon points="12,2 4,22 12,16 20,22" />
          </svg>
          <span className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white">
            EMBER
          </span>
        </a>

        <nav className="flex items-center gap-6">
          <a
            href="https://github.com/ZeroPointWorks/EMBER-Web"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/40 no-underline transition-colors hover:text-toxic"
          >
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/40 no-underline transition-colors hover:text-toxic"
          >
            Discord
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/40 no-underline transition-colors hover:text-toxic"
          >
            X
          </a>
          <a
            href="/docs"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/40 no-underline transition-colors hover:text-toxic"
          >
            Docs
          </a>
          <a
            href="#"
            className="border border-toxic px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white no-underline transition-colors hover:bg-toxic hover:text-black"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}
