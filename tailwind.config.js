/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paser: {
          emerald: "#0F5132",
          gold: "#D4AF37",
          river: "#1E3A8A",
        },
      },
    },
  },
  plugins: [],
};
