'use client';

import { useEffect, useState } from 'react';

type Status = 'checking' | 'online' | 'offline';

export default function StatusDot({ healthUrl }: { healthUrl?: string }) {
  const [status, setStatus] = useState<Status>(healthUrl ? 'checking' : 'offline');

  useEffect(() => {
    if (!healthUrl) return;
    let cancelled = false;

    fetch(healthUrl, { mode: 'no-cors' })
      .then(() => !cancelled && setStatus('online'))
      .catch(() => !cancelled && setStatus('offline'));

    return () => {
      cancelled = true;
    };
  }, [healthUrl]);

  const color =
    status === 'online' ? 'bg-signal' : status === 'checking' ? 'bg-muted' : 'bg-amber';
  const label = status === 'online' ? 'online' : status === 'checking' ? 'checking' : 'sleeping';

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${color} ${status === 'online' ? 'animate-pulse' : ''}`} />
      {label}
    </span>
  );
}
