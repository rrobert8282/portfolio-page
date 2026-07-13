import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectSlugs, getProjectContent } from '@/lib/mdx';
import { projects } from '@/lib/projects';
import StatusDot from '@/components/ui/StatusDot';

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-10 font-display text-xl font-medium" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 font-display text-lg font-medium" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-4 leading-relaxed text-text/90" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-text/90" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-signal hover:underline" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-signal" {...props} />
  ),
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  let content;
  try {
    content = getProjectContent(params.slug);
  } catch {
    return notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">case study</p>
        {project.healthUrl && <StatusDot healthUrl={project.healthUrl} />}
      </div>
      <h1 className="mt-2 font-display text-3xl font-medium">{project.name}</h1>
      <ul className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-muted">
        {project.stack.map((s) => (
          <li key={s} className="rounded border border-border px-2 py-0.5">
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-4 font-mono text-xs">
        {project.liveUrl && (
          <a href={project.liveUrl} className="text-signal hover:underline">
            live demo →
          </a>
        )}
        <a href={project.repoUrl} className="text-muted hover:text-text">
          repository →
        </a>
      </div>

      <article className="mt-12">
        <MDXRemote source={content.content} components={mdxComponents} />
      </article>
    </main>
  );
}