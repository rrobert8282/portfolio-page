import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/lib/projects';

export default function Projects() {
  const featured = projects.filter((p) => p.role === 'featured');
  const services = projects.filter((p) => p.role === 'service');

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-display text-3xl font-medium">Projects</h1>
      <p className="mt-2 max-w-lg text-muted">
        Backend systems first — each one solves a specific technical problem, deployed and
        running, not just committed.
      </p>

      <p className="mb-6 mt-12 font-mono text-xs uppercase tracking-wide text-muted">featured</p>
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <p className="mb-6 mt-12 font-mono text-xs uppercase tracking-wide text-muted">
        other services
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}
