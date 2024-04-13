/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#FF6481",
        background: "#f5f5f5",
        decoration: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
