/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ includes all components/pages in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
