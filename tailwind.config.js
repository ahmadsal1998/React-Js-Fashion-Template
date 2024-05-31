/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1526px'
    },
    fontFamily: {
      volkhov: ['Volkhov', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        content: '#484848',
        black: '#000',
        white: '#fff',
        secondary: '#838383',
        border: '#9D9D9D',
        gray: '#8A8A8A',
        stars: '#FCA120',
        background: '#E0E0E0',
        table: '#DEE2E6'
      }
    },
  },
  plugins: [],
}