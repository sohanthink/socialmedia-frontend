/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "var(--dark)",
      white: "var(--white)",
      secondary_color: "var(--secondary_color)",
      error: "var(--error)",
      link: "var(--link)",
      gray: "var(--gray)",
    },
    fontFamily: {
      GilroyRegular: ["Gilroy-Regular"],
      Gilroybold: ["Gilroy-bold"],
      GilroyExtrabold: ["Gilroy-extrabold"],
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
