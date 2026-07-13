import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <p className="font-mono text-xs text-amber">404</p>
      <h1 className="mt-4 font-display text-2xl font-medium">Route not found.</h1>
      <p className="mt-2 text-muted">
        Unlike the services in the systems panel, this page isn&apos;t actually running.
      </p>
      <Link
        href="/"
        className="mt-8 rounded bg-signal px-4 py-2 font-mono text-sm text-bg transition-opacity hover:opacity-90"
      >
        back to home
      </Link>
    </main>
  );
}