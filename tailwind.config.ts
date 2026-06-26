import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'arctic-powder': '#F1F6F4',
        'mystic-mint': '#D9E8E2',
        forsythia: '#FFC801',
        'deep-saffron': '#FF9932',
        nocturnal: '#114C5A',
        'oceanic-noir': '#172B36',
      },
      fontFamily: {
        display: ['var(--font-display)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
