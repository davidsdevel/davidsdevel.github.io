/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'main-1': '#001122',
        'main-2': '#004BA8',
        'main-3': '#4A525A',
        'accent-1': '#e65806',
        'black-1': '#07070A',
        'black-2': '#24272B',
        'black-3': '#3f3d56',
        "lettercms-1": "#5f4dee",
        "lettercms-2": "#362e6f",
        "curso-purple": "#7c3aed"
      }
    },
  },
  plugins: [],
}