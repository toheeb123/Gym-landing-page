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
  // Extended the underline color
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline": {
          textDecoration: "underline",
          "text-decoration-color": "#D7FB00",
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};
