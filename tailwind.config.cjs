/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        impact: ["Anton", "sans-serif"],
      },

      colors: {
        primary: "#D7FB00",
      },

      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
};
