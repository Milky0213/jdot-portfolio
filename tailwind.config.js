/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",        // all app-level files
    "./src/components/**/*.{js,ts,jsx,tsx}", // <-- this fixes Navbar not being detected
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#080827',
      },
    },
  },
  plugins: [],
}
