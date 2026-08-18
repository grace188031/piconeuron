import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pico': {
          'dark': '#070b26',
          'darker': '#02071b',
          'navy': '#0b102c',
          'slate': '#1e2447',
          'accent': '#8b5cf6',
          'accent-dim': '#7c3aed',
          'accent-light': '#a78bfa',
          'indigo': '#6366f1',
          'green': '#10b981',
          'amber': '#f59e0b',
        }
      },
      borderRadius: {
        DEFAULT: '6px',
        'lg': '10px',
        'xl': '14px',
        '2xl': '18px',
        '3xl': '24px',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-body)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
