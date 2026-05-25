export default function Footer() {
  const links = [
    { label: "GitHub", href: "https://github.com/ZeroPointWorks/EMBER-Web" },
    { label: "Discord", href: "#" },
    { label: "X / Twitter", href: "#" },
    { label: "Docs", href: "/docs" },
    { label: "Explorer", href: "#" },
    { label: "Whitepaper", href: "/whitepaper.pdf" },
  ];

  return (
    <footer className="w-full border-t border-[rgba(255,255,255,0.08)]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 no-underline transition-colors hover:text-toxic"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="border-t border-[rgba(255,255,255,0.08)] pt-6">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-toxic">
                <polygon points="12,2 4,22 12,16 20,22" />
              </svg>
              <span className="font-mono text-[11px] text-white/15">
                MIT License 2024 — Built by ZeroPointWorks
              </span>
            </div>
            <div className="flex items-center gap-4 font-mono text-[10px] text-white/10">
              <span>EMBER v0.1.0</span>
              <span className="inline-block h-1 w-1 bg-toxic rounded-full" />
              <span>No Premine</span>
              <span className="inline-block h-1 w-1 bg-toxic rounded-full" />
              <span>No ICO</span>
              <span className="inline-block h-1 w-1 bg-toxic rounded-full" />
              <span>Fair Launch</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
