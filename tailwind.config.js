/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#666666',
        accent: '#2d7d7d',
        background: '#fafafa',
        'dark-bg': '#0f0f0f',
        'dark-text': '#e5e5e5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'readable': '65ch',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

