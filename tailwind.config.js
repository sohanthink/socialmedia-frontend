/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "var(--dark)",
      white: "var(--white)",
      secondary_color: "var(--secondary_color)",
      error: "var(--error)",
    },
    fontFamily: {
      GilroyRegular: ["Gilroy-Regular"],
      Gilroybold: ["Gilroy-bold"],
    },
    extend: {
      screens: {
        xs: "320px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
