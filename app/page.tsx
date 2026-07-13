import Hero from '@/components/sections/Hero';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/lib/projects';

export default function Home() {
  const featured = projects.filter((p) => p.role === 'featured');

  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <p className="mb-6 font-mono text-xs uppercase tracking-wide text-muted">featured work</p>
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
