/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./speakers/**/*.html",
    "./scripts/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d8ccde",
          200: "#b199bd",
          300: "#8b679d",
          400: "#64347c",
          500: "#3d015b",
          600: "#310149",
          700: "#250137",
          800: "#180024",
          900: "#0c0012"
        },

        secondary: {
          100: "#ccfdf0",
          200: "#9afbe2",
          300: "#67fad3",
          400: "#35f8c5",
          500: "#02f6b6",
          600: "#02c592",
          700: "#01946d",
          800: "#016249",
          900: "#003124"
        },

        fire: {
          100: "#ffdbcc",
          200: "#ffb79a",
          300: "#fe9467",
          400: "#fe7035",
          500: "#fe4c02",
          600: "#cb3d02",
          700: "#982e01",
          800: "#661e01",
          900: "#330f00"
        },
      }
    },
  },
  plugins: [],
}



