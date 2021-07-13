module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cs-black": "#010b13",
        "cs-orange": "#ff5317",
        "cs-navy": "#483c78",
        "cs-gray": "#e6e0d3",
        "cs-pink": "#FF0066",
        "cs-ebony": "#282c35",
      }
    },
    fontFamily: {
      Damion: ["Damion, cursive"],
      PTSerif: ["PT Serif, serif"],
      RobotoSlab: ["Roboto Slab, serif"],
      Signika: ["Signika Negative, sans-serif"],
      Ubuntu: ["Ubuntu, sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
