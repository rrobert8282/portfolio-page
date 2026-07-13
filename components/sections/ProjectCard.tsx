import Link from 'next/link';
import StatusDot from '@/components/ui/StatusDot';
import type { Project } from '@/lib/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border border-border bg-surface p-6 transition-colors hover:border-signal/50 hover:bg-surfaceHover"
    >
      <div className="flex items-start justify-between">
        <h3 className="font-display text-lg font-medium">{project.name}</h3>
        {project.healthUrl && <StatusDot healthUrl={project.healthUrl} />}
      </div>
      <p className="mt-2 text-sm text-muted">{project.tagline}</p>
      <ul className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-muted">
        {project.stack.map((s) => (
          <li key={s} className="rounded border border-border px-2 py-0.5">
            {s}
          </li>
        ))}
      </ul>
      <span className="mt-5 inline-block font-mono text-xs text-signal opacity-0 transition-opacity group-hover:opacity-100">
        view case study →
      </span>
    </Link>
  );
}
