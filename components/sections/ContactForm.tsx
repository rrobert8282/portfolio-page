'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const ENDPOINT = 'https://contact-form-backend-zg2c.onrender.com/submit';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value, // honeypot
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <p className="rounded border border-signal/40 bg-surface p-4 font-mono text-sm text-signal">
        Message sent. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — real users never see or fill this */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px]"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="font-mono text-xs text-muted">
          name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded border border-border bg-surface px-3 py-2 text-text focus:border-signal focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-xs text-muted">
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded border border-border bg-surface px-3 py-2 text-text focus:border-signal focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-xs text-muted">
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded border border-border bg-surface px-3 py-2 text-text focus:border-signal focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded bg-signal px-4 py-2 font-mono text-sm text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === 'sending' ? 'sending…' : 'send message'}
      </button>

      {status === 'error' && (
        <p className="font-mono text-xs text-amber">
          Something went wrong — the service may be waking up (free-tier cold start). Try again
          in a few seconds, or email me directly.
        </p>
      )}
    </form>
  );
}