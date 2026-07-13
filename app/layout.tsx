import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/nav/Footer';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '700'],
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const siteUrl = 'https://YOUR-VERCEL-URL.vercel.app'; // update once deployed

export const metadata: Metadata = {
  title: 'Robert Reyna — Backend & Full-Stack Developer',
  description:
    'Backend-focused developer building APIs, schedulers, and payment-ready services. Currently completing Computer Engineering at UABC.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Robert Reyna — Backend & Full-Stack Developer',
    description:
      'Backend-focused developer building APIs, schedulers, and payment-ready services.',
    url: siteUrl,
    siteName: 'Robert Reyna',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robert Reyna — Backend & Full-Stack Developer',
    description:
      'Backend-focused developer building APIs, schedulers, and payment-ready services.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <AnimatedBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Nav />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}