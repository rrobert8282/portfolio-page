import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/nav/Nav';
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

export const metadata: Metadata = {
  title: 'Robert Reyna — Backend & Full-Stack Developer',
  description:
    'Backend-focused developer building APIs, schedulers, and payment-ready services. Currently completing Computer Engineering at UABC.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
