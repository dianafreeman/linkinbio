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
      red: colors.red,
      purple: '#5800ff',
      yellow: '#ffc600',
      pink: '#e900ff',
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
