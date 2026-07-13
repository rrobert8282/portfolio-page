import { Github, Linkedin, Mail, Briefcase } from 'lucide-react';

const links = [
  { href: 'https://github.com/rrobert8282', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com/in/rrobert8282/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.upwork.com/freelancers/~0135afb19724a7020d', label: 'Upwork', icon: Briefcase },
  { href: 'mailto:rrobert8282@gmail.com', label: 'Email', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-muted md:flex-row">
        <p>© {new Date().getFullYear()} Robert Reyna</p>
        <div className="flex gap-5">
          {links.map(({ href, label, icon: Icon }) => (
            
            <a
              key={label}
              href={href}
              className="flex items-center gap-1.5 transition-colors hover:text-signal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}