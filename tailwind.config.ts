import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50:  '#e8f4ff',
          100: '#c3dffe',
          200: '#90c4fd',
          300: '#5aa7fb',
          400: '#2d8ef8',
          500: '#0a6fe8',
          600: '#0055c4',
          700: '#003fa0',
          800: '#002d7a',
          900: '#001d52',
        },
        'accent': {
          400: '#00d4aa',
          500: '#00b894',
          600: '#009e7f',
        },
        'dark': {
          900: '#05080f',
          800: '#0a0f1e',
          700: '#0f162d',
          600: '#161e3a',
          500: '#1e2847',
        }
      },
      fontFamily: {
        sans: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(10,111,232,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,111,232,0.05) 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(10,111,232,0.3) 0%, transparent 70%)',
        'card-glow': 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(10,111,232,0.15) 0%, transparent 60%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}

export default config
