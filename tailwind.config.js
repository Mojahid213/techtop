const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xxs': '320px',
      'xss': '380px',
      'xs': '425px',
      ...defaultTheme.screens,
    },
    extend: {
      width: {
        '102': '28rem',
        '108': '32rem'
      },
      colors: {
        "cs-black": "#010b13",
        "cs-orange": "#ff5317",
        "cs-navy": "#483c78",
        "cs-gray": "#e6e0d3",
        "cs-pink": "#FF0066",
        "cs-ebony": "#282c35",
      }
    },
    container: {
      center: true,
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
    extend: {
      ringWidth: ['hover', 'active'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
