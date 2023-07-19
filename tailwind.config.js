/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1d9bf0',
        'text-twitter-icon': '#E7E9EA',
        'border-twitter': "#36393c",
      },
      spacing: {
        '113': '113px',
      }
    },
  },
  plugins: [],
}

