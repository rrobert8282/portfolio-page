import ContactForm from '@/components/sections/ContactForm';

export default function About() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-3xl font-medium">About</h1>

      <div className="mt-6 space-y-4 text-muted">
        <p>
          I&apos;m a Computer Engineering student at UABC in Mexicali, graduating
          June 2027. I&apos;m focused on full-stack development, with most of my
          current experience in backend systems: API design, data modeling,
          testing, deployment, and the edge cases that only appear once software
          is running in production.
        </p>

        <p>
          I like building practical systems from end to end. My recent work
          includes multi-tenant APIs, authentication, database migrations,
          document generation, spam filtering, and deployed services. I&apos;m
          also comfortable working on frontend interfaces and have built
          embedded-systems projects involving computer vision, microcontrollers,
          sensors, serial communication, and robotics.
        </p>

        <p>
          I&apos;m still early in my career, but I&apos;ve pushed myself beyond
          coursework to understand how reliable software is designed, tested,
          deployed, and maintained. I&apos;m open to full-stack, backend, or
          frontend opportunities, especially remote roles where I can contribute,
          keep learning, and grow into a dependable engineer.
        </p>

        <p>
          I&apos;m a native Spanish speaker and professionally proficient in
          English, so I&apos;m comfortable working and communicating in either
          language.
        </p>
      </div>

      <p className="mb-3 mt-12 font-mono text-xs uppercase tracking-wide text-muted">
        education & credentials
      </p>

      <ul className="space-y-1 text-sm text-text/90">
        <li>Computer Engineering, UABC — expected June 2027</li>
        <li>HackerRank: Python (Basic), SQL (Basic), Problem Solving (Basic)</li>
        <li>Kaggle: Python</li>
      </ul>

      <p className="mb-3 mt-12 font-mono text-xs uppercase tracking-wide text-muted">
        get in touch
      </p>
      <ContactForm />
    </main>
  );
}