/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{jsx,js,tsx}',
    './components/**/*.{jsx,js,tsx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["var(--font-exo2)", "sans-serif"],
      //   orbitron: ["var(--font-orbitron)", "sans-serif", ],
      // },
    },
  },
  plugins: [
    // require ('@tailwindcss/typography')
  ],
}
