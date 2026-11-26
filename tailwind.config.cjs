/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        theme: {
          primary: 'var(--theme-primary)',
          'primary-dark': 'var(--theme-primary-dark)',
          'primary-hover': 'var(--theme-primary-hover)',
          'primary-light': 'var(--theme-primary-light)',
          accent: 'var(--theme-accent)',
          secondary: 'var(--theme-secondary)',
          surface: 'var(--theme-surface)',
          'surface-alt': 'var(--theme-surface-alt)',
          'card-border': 'var(--theme-card-border)',
        },
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        secondary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        temple: {
          dark: '#1c1613',
          darker: '#120e0c',
          sreekovil: '#2a1e17',
          gold: '#dfa037',
          brass: '#b8860b',
          copper: '#b85d34',
          sandal: '#fcf8ee',
          cream: '#fffdfa',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Source Sans Pro"', 'system-ui', 'sans-serif'],
        malayalam: ['"Gayathri"', '"Manjari"', '"Anek Malayalam"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
