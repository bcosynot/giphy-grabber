/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      arial: ["Arial", "sans-serif"],
    },
    fontSize: {
      xs: ["12px", "12px"],
      sm: ["14px", "20px"],
      base: ["16px", "16px"],
      lg: ["20px", "28px"],
      xl: ["28px", "34px"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};
