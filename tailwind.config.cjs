const twcolors = require('tailwindcss/colors');
const colors = require('./src/config/themeColors.cjs')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: twcolors.black,
      white: twcolors.white,
      gray: twcolors.slate,
      green: twcolors.emerald,
      purple: colors.purple,
      yellow: colors.yellow,
      pink: colors.pink,
    },
    extend: {
      fontFamily: {
        computer: ['VT323', 'monospace'],
        'sans-serif': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
