/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily:{
         bevietnam: ['"Be Vietnam Pro"', 'sans-serif'],
       },
        keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        fade: 'fadeInOut 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
