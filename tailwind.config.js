/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      white: "#FFF",
      black: "#000",
      "transparent-dark": "rgba(38, 43, 60, 0.89)",
      "transparent-light": "rgba(243, 243, 243, 0.89)",
      "key-light": "#D3D6DA",
      "key-dark": "#565F7E",
      blue: "#262B3C",
      green: "#6AAA64",
      yellow: "#CEB02C",
      "gray-dark": "#3C4150",
      gray: "#939B9F",
      "gray-light": "#D3D6DA",
      "gray-extra-light": "#E5E5E5",
      bar: "#F3F3F3",
      "bar-light": "rgba(218, 220, 224, 0.03)",
    },
  },
  plugins: [],
};
