import Link from 'next/link';
import StatusDot from '@/components/ui/StatusDot';
import { projects } from '@/lib/projects';

export default function Hero() {
  const featured = projects.filter((p) => p.healthUrl);

  return (
    <section className="mx-auto grid max-w-5xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
      <div>
        <p className="font-mono text-xs text-signal">backend & full-stack developer</p>
        <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          I build APIs that hold up under real
          <br className="hidden md:block" /> constraints — auth, concurrency, data isolation.
        </h1>
        <p className="mt-6 max-w-md text-muted">
          Computer Engineering student at UABC, graduating June 2027. I design and ship backend
          systems end to end — schema, auth, deployment — and I write about the decisions behind
          them.
        </p>
        <div className="mt-8 flex gap-4 font-mono text-sm">
          <Link
            href="/projects"
            className="rounded bg-signal px-4 py-2 text-bg transition-opacity hover:opacity-90"
          >
            view projects
          </Link>
          <a
            href="https://github.com/rrobert8282"
            className="rounded border border-border px-4 py-2 transition-colors hover:border-signal hover:text-signal"
          >
            github
          </a>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-5">
        <p className="mb-4 font-mono text-xs uppercase tracking-wide text-muted">
          systems — live
        </p>
        <ul className="space-y-3">
          {featured.map((p) => (
            <li key={p.slug} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
              <span className="font-mono text-sm text-text">{p.name}</span>
              <StatusDot healthUrl={p.healthUrl} />
            </li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-[11px] text-muted">
          pinged on load · free-tier services sleep after inactivity
        </p>
      </div>
    </section>
  );
}
