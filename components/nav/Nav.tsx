import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-sm font-medium tracking-tight">
          robert reyna
        </Link>
        <nav className="flex items-center gap-6 font-mono text-xs text-muted">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-text">
              {l.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            className="rounded border border-border px-3 py-1.5 text-text transition-colors hover:border-signal hover:text-signal"
          >
            résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
