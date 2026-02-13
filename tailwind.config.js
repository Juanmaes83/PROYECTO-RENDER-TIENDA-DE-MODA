/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        renderRed: '#FF2A00',
        inkBlack: '#0A0A0A',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        ui: ['"Inter Tight"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
