/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        my_teal: "#008080",
        pale_orange: "#ffd9a6",
        light_orange: "#fbb03b",
      },
      fontFamily: {
        sans: ["Bebas Neue", "sans-serif"],
        slab: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
