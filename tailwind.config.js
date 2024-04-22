/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { min: "1535px" },
      xl: { min: "1279px" },
      lg: { min: "1000px" },
      md: { min: "767px" },
      sm: { min: "639px" },
    },
    extend: {
      colors: {
        primary: "#ffdbf6",
        accent: "#FF6481",
        darkAccent: "#cc5067",
        background: "#f5f5f5",
        decoration: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
