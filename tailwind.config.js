/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Colours point at CSS variables (defined in index.css) so light/dark
      // mode is a variable swap, not a second set of classes.
      colors: {
        page: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        brand: 'var(--a1)',
        accent: 'var(--a2)',
        on: 'var(--on)',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'Arial', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"IBM Plex Sans"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 22px var(--glow)',
        'glow-lg': '0 18px 34px var(--glow)',
      },
      keyframes: {
        float: { '50%': { transform: 'translate(24px,-30px) scale(1.08)' } },
        wave: {
          '0%,60%,100%': { transform: 'rotate(0)' },
          '10%,30%': { transform: 'rotate(14deg)' },
          '20%,40%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        blink: { '50%': { opacity: '0' } },
        up: { from: { opacity: '0', transform: 'translateY(22px)' }, to: { opacity: '1', transform: 'none' } },
        pop: { from: { opacity: '0', transform: 'translateY(8px)' } },
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        wave: 'wave 2.4s ease-in-out 1s 2',
        blink: 'blink 1s steps(1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        up: 'up .8s ease forwards',
        pop: 'pop .4s ease',
      },
    },
  },
  plugins: [],
};
