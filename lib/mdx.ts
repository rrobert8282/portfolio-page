import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content/projects');

export function getProjectSlugs() {
  return fs.readdirSync(CONTENT_DIR).map((f) => f.replace(/\.mdx$/, ''));
}

export function getProjectContent(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}
