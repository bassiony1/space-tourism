/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d2d3d8",
          200: "#a5a6b0",
          300: "#787a89",
          400: "#4b4d61",
          500: "#1e213a",
          600: "#181a2e",
          700: "#121423",
          800: "#0c0d17",
          900: "#06070c",
        },
        secondary: {
          100: "#f6f7fe",
          200: "#eceffd",
          300: "#e3e6fb",
          400: "#d9defa",
          500: "#d0d6f9",
          600: "#a6abc7",
          700: "#7d8095",
          800: "#535664",
          900: "#2a2b32",
        },
      },
      fontSize: {
        14: "14px",
        16: "16px",
        18: "18px",
        28: "28px",
        32: "32px",
        56: "56px",
        100: "100px",
        150: "150px",
      },
      fontFamily: {
        Bellefair: ["Bellefair", "serif"],
        Barlow: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [
    
  ],
};
