/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        flicker: 'flicker 1.5s infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.985' },
        },
      },
      fontFamily: {
        pda: ['"VT323"', 'monospace'], 
      },
    },
  },
  plugins: [],
}
