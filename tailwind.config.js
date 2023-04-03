/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#0E1116",
      },
      backgroundColor: {
        primary: "#0E1116",
        secondary: "#F8F8F8",
        twitter: "#1DA1F2",
      },
      fontFamily: {
        primary: "Inter,Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif",
      },
      screens: {
        xs: "475px",
      },
      animation: {
        "wave-hand": "wave-hand 1.5s infinite",
      },
      keyframes: {
        "wave-hand": {
          "0%, 100%": {
            transform: "rotate(30deg)",
          },
          "50%": {
            transform: "rotate(-10deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
