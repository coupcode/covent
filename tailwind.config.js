/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#E9F3FF9C',
        blueLight: 'rgba(0, 0, 255, 0.5)'
      }
    },
  },
  plugins: [],
}

