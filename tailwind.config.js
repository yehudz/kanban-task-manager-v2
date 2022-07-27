/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#635FC7',
      'purple-light': '#A8A4FF',
      'black': '#000112',
      'midnight': '#20212C',
      'grey': '#2B2C37',
      'grey-700': '#3E3F4E',
      'grey-400': '#828FA3',
      'grey-200': '#E4EBFA',
      'grey-100': '#F4F7FD',
      'red': '#EA5555',
      'red-light': '#FF9898'
    },
  },
  plugins: [],
}
