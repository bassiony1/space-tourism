/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "spin-slow-once": "spin 10s linear infinite 2s",

        appear: "appear 2s ease-in-out both",
      },

      gridTemplateRows: {
        "6-auto": "repeat(6, minmax(0, auto))",
        "5-auto": "repeat(5, minmax(0, auto))",
      },
      gridTemplateColumns: {
        "2-auto": "repeat(2, minmax(0, auto))",
      },
      colors: {
        primary: "#0B0D17",
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
        20: "20px",
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
  plugins: [],
};
