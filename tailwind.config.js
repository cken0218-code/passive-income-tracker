/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D0D',
        secondary: '#1A1A1A',
        card: '#1F1F1F',
        'accent-green': '#00FF88',
        'accent-red': '#FF4444',
        'accent-blue': '#4F9CF9',
        'accent-purple': '#A855F7',
        'accent-yellow': '#FFB800',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
