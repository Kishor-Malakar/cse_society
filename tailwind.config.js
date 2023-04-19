/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js,jsx,tsx,css}",
    "./src/**/*.{html,js,jsx,tsx,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar'),],
}
