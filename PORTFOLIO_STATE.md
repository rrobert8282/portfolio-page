# Portfolio — State

## Decided (do not re-litigate)
- Stack: Next.js 14 (App Router) + TypeScript + Tailwind, Vercel deploy
- No component library — hand-built UI
- Animation: Framer Motion, used sparingly
- Content: MDX per project in /content/projects
- Design tokens: see tailwind.config.ts (bg #0B0E14, signal #3DDC97, amber #F5A623)
- Fonts: Space Grotesk (display) / Inter (body) / JetBrains Mono (data, stack tags)
- Signature element: live status dots pinging real deployed health endpoints
- Flagship project: Booking Scheduler. Secondary featured: Invoice Generator.
- Nav: Home · Projects · About · Résumé

## Open
- [ ] Real MDX compilation — currently rendering raw MDX text as <pre>. Swap in
      next-mdx-remote or @next/mdx's compiled output.
- [ ] Résumé PDF not yet placed at /public/resume.pdf
- [ ] About page copy — personal background section is a TODO stub
- [ ] Contact form + spam-filter API wiring not yet built
- [ ] health endpoints on invoice-generator / contact-form-backend need confirming (guessed /health)

## Handoff-ready for ChatGPT (pattern already set, low architectural risk)
- Write case-study MDX content for invoice-generator, contact-form-backend, task-manager
  using booking-scheduler.mdx as the template
- Draft About page personal-background paragraph (plain, active voice, no filler)
- Alt text / metadata for any screenshots added later
- Minor Tailwind spacing/copy tweaks within existing components

## Bring back to Claude
- Any new component pattern (first instance of anything)
- Contact form → spam-filter API integration (touches a live backend)
- MDX rendering pipeline swap
- Deployment/env config decisions
