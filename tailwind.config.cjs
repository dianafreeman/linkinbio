const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: '#5800FF',
      yellow: '#FFC600',
      pink: '#E900FF',
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
