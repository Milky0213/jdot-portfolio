/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/pages/**/*.{js,ts,jsx,tsx}",     // Path to your pages folder
      "./src/app/components/**/*.{js,ts,jsx,tsx}", // Path to your components folder
      "./src/app/styles/**/*.{js,ts,jsx,tsx}",     // Path to your styles folder (if you need to scan for Tailwind usage)
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    plugins: [],
  }
  