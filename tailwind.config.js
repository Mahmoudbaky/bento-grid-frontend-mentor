/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        CustomFont: ["CustomFont", "sans-serif"], // Custom font with fallback
      },
    },
  },
  plugins: [],
};
