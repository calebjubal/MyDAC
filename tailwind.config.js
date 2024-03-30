/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-100': '#121212',
        'gold-100':'#FAA432',
        'darkGreen':'#0D9B4D'
      },
    },
  },
  plugins: [],
}
