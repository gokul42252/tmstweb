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
          primary: 'rgb(var(--color-amber-500-rgb) / <alpha-value>)',
          'primary-dark': 'rgb(var(--color-amber-800-rgb) / <alpha-value>)',
          'primary-hover': 'rgb(var(--color-amber-600-rgb) / <alpha-value>)',
          'primary-light': 'rgb(var(--color-amber-400-rgb) / <alpha-value>)',
          accent: 'rgb(var(--color-amber-300-rgb) / <alpha-value>)',
          secondary: 'rgb(var(--color-amber-200-rgb) / <alpha-value>)',
          surface: 'rgb(var(--color-amber-50-rgb) / <alpha-value>)',
          'surface-alt': 'rgb(var(--color-amber-100-rgb) / <alpha-value>)',
          'card-border': 'rgb(var(--color-amber-500-rgb) / 0.22)',
        },
        // Dynamically theme-aware amber scale mapping to active Dopely theme
        amber: {
          50: 'rgb(var(--color-amber-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-amber-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-amber-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-amber-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-amber-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-amber-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-amber-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-amber-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-amber-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-amber-900-rgb) / <alpha-value>)',
          950: 'rgb(var(--color-amber-950-rgb) / <alpha-value>)',
        },
        primary: {
          50: 'rgb(var(--color-amber-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-amber-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-amber-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-amber-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-amber-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-amber-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-amber-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-amber-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-amber-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-amber-900-rgb) / <alpha-value>)',
          950: 'rgb(var(--color-amber-950-rgb) / <alpha-value>)',
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
