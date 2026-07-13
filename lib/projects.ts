export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: 'featured' | 'service';
  stack: string[];
  liveUrl?: string;
  repoUrl: string;
  healthUrl?: string; // pinged by StatusDot for the live "systems online" signal
};

export const projects: Project[] = [
  {
    slug: 'booking-scheduler',
    name: 'Appointment Scheduler API',
    tagline: 'Timezone-aware booking engine with Postgres-level double-booking prevention.',
    role: 'featured',
    stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Render', 'Neon'],
    liveUrl: 'https://booking-scheduler-5dct.onrender.com/docs',
    repoUrl: 'https://github.com/rrobert8282/booking-scheduler',
    healthUrl: 'https://booking-scheduler-5dct.onrender.com/health',
  },
  {
    slug: 'invoice-generator',
    name: 'Invoice Generator API',
    tagline: 'Multi-tenant invoicing with PDF generation, JWT auth, and 57 passing tests.',
    role: 'featured',
    stack: ['FastAPI', 'WeasyPrint', 'Alembic', 'PostgreSQL', 'JWT'],
    liveUrl: 'https://invoice-generator-6bl0.onrender.com/docs',
    repoUrl: 'https://github.com/rrobert8282/invoice-generator',
    healthUrl: 'https://invoice-generator-6bl0.onrender.com/health',
  },
  {
    slug: 'contact-form-backend',
    name: 'Contact Form Backend',
    tagline: 'Spam-filtered contact form API — the same service powering this site.',
    role: 'service',
    stack: ['FastAPI', 'Spam filtering', 'Render'],
    liveUrl: 'https://contact-form-backend-zg2c.onrender.com/docs',
    repoUrl: 'https://github.com/rrobert8282/contact-form-backend', 
    healthUrl: 'https://contact-form-backend-zg2c.onrender.com/health',
  },
  {
    slug: 'task-manager',
    name: 'Task Manager (Gamified)',
    tagline: 'Full-stack task platform with real-time sync and a mix-and-match reward store.',
    role: 'service',
    stack: ['FastAPI', 'React', 'Vite', 'WebSockets', 'Vercel'],
    repoUrl: 'https://github.com/rrobert8282/task-manager',
    liveUrl: 'https://task-manager-ten-umber.vercel.app',
    healthUrl: 'https://task-manager-ey7c.onrender.com/docs',
  },
];
