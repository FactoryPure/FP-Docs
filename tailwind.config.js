/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkness: "#05111C",
        darkaccent: "#1D212D",
        accent: "#42EFD0",
        fire: "orange",
        lightgrey: "#eeeeee",
        grey: "#a1a1a1",
        darkgrey: "#4a4a4a",
        blue: "rgb(0, 60, 90)",
        lime: "#60bc1a",
        faint: "rgb(255,255,255,0.05)",
        faintplus: "rgb(255,255,255,0.15)",
        red: "rgb(180,0,0)",
        offwhite: "#EEEFEA",
        lightred: "rgb(255,0,0)"
      },
      width: {
        leftWidth: '216px'
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'bai': ['Bai Jamjuree', 'sans-serif']
      },
      boxShadow: {
        small: "2px 3px 10px rgb(0,0,0,0.25)",
        smaller: "0 0 5px rgb(0,0,0,0.2)",
        inside: "inset 0 0 15px rgb(0,0,0,0.15)",
        hot: "0px 0px 10px rgba(255, 255, 255, 0.25)",
        cool: "0px 0px 15px rgba(66, 239, 222, 0.25)"
      }
    },
  },
  plugins: [],
}