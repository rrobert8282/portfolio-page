import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,md,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0E14',
        surface: '#131720',
        surfaceHover: '#1A2029',
        border: '#232A36',
        text: '#E4E7EB',
        muted: '#8B93A1',
        signal: '#2DD4FF',
        amber: '#F5A623',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};

export default config;