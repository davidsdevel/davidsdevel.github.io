/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'main-1': '#3E78B2',
        'main-2': '#004BA8',
        'main-3': '#4A525A',
        'black-1': '#07070A',
        'black-2': '#24272B',
        'black-3': '#3f3d56'
      }
    },
  },
  plugins: [],
}