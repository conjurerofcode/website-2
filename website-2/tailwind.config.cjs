/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: "#DDDBCB",
        persian: "#1B998B",
        moss: "#345511",
      },
      spacing: {
        "min-full-1000": "min(1000px, 100%)",
        "min-full-800": "min600px, 100%)",
        "min-full-600": "min(600px, 100%)",
        "min-full-400": "min(400px, 100%)",
        "min-full-200": "min(200px, 100%)",
        "min-half-1000": "min(1000px, 50%)",
        "min-half-800": "min600px, 50%)",
        "min-half-600": "min(600px, 50%)",
        "min-half-400": "min(400px, 50%)",
        "min-half-200": "min(200px, 50%)",
      },
      fontSize: {
        "clamp-sm": "clamp(1rem, 1.5vw, 1.25rem)",
        "clamp-md": "clamp(1.25rem, 1.75vw, 1.5rem)",
        "clamp-lg": "clamp(1.5rem, 2vw, 2rem)",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
