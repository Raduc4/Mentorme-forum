const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: [".75rem", "1rem"],
      "4.5xl": ["2.5rem", "3.75rem"],
      h2: ["2rem", "3rem"],
      span: ["1rem", "1.5rem"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      pink: "#E83484",
      blue: {
        title: "#002E5D",
        restBlue: "#23385C",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
