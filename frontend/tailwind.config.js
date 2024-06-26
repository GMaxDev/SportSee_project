/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pure-red": "#ff0101",
        "base-gray": "#FBFBFB",
      },
    },
  },
  plugins: [],
};
