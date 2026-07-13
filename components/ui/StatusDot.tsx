'use client';

import { useEffect, useState } from 'react';

type Status = 'checking' | 'online' | 'offline';

const RETRY_INTERVAL_MS = 8000;
const MAX_ATTEMPTS = 8; // ~64s of retrying, covers a typical Render cold start

export default function StatusDot({ healthUrl }: { healthUrl?: string }) {
  const [status, setStatus] = useState<Status>(healthUrl ? 'checking' : 'offline');

  useEffect(() => {
    if (!healthUrl) return;
    let cancelled = false;
    let attempts = 0;

    const ping = () => {
      attempts += 1;
      fetch(healthUrl, { mode: 'no-cors', cache: 'no-store' })
        .then(() => {
          if (!cancelled) setStatus('online');
        })
        .catch(() => {
          if (cancelled) return;
          if (attempts < MAX_ATTEMPTS) {
            setTimeout(ping, RETRY_INTERVAL_MS);
          } else {
            setStatus('offline');
          }
        });
    };

    ping();

    return () => {
      cancelled = true;
    };
  }, [healthUrl]);

  const color =
    status === 'online' ? 'bg-signal' : status === 'checking' ? 'bg-muted' : 'bg-amber';
  const label = status === 'online' ? 'online' : status === 'checking' ? 'waking' : 'sleeping';

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${color} ${status === 'online' ? 'animate-pulse' : ''}`} />
      {label}
    </span>
  );
}