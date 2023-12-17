/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#0C134F',
        secondary: '#1D267D',
        accent: '#5C469C',
        highlight: '#D4ADFC',
      },
    },
  },
  plugins: [],
}