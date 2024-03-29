const colors = require('tailwindcss/colors.js');

// Generated via https://www.tailwindshades.com
const AQUAMARINE_CUSTOM = {
  DEFAULT: '#6BEEFF',
  50: '#FFFFFF',
  100: '#FFFFFF',
  200: '#E5F9FF',
  300: '#BDF1FF',
  400: '#94EEFF',
  500: '#6BEEFF',
  600: '#42F1FF',
  700: '#1AF9FF',
  800: '#00F0EB',
  900: '#00C7BA',
};
const DARK_BLUE_CUSTOM = {
  DEFAULT: '#0300BD',
  50: '#9375FF',
  100: '#8061FF',
  200: '#5638FF',
  300: '#290FFF',
  400: '#0E00E6',
  500: '#0300BD',
  600: '#000494',
  700: '#00086B',
  800: '#000842',
  900: '#00041A',
};
const PURPLE_CUSTOM = {
  DEFAULT: '#B442FF',
  50: '#FEFAFF',
  100: '#FCE5FF',
  200: '#F2BDFF',
  300: '#E294FF',
  400: '#CE6BFF',
  500: '#B442FF',
  600: '#941AFF',
  700: '#7000F0',
  800: '#5000C7',
  900: '#35009E',
};

const PINK_CUSTOM = {
  DEFAULT: '#FF42CD',
  50: '#FFFAFC',
  100: '#FFE5F1',
  200: '#FFBDE0',
  300: '#FF94D4',
  400: '#FF6BCE',
  500: '#FF42CD',
  600: '#FF1AD1',
  700: '#F000D0',
  800: '#C700BA',
  900: '#9E009E',
};
const YELLOW_CUSTOM = {
  DEFAULT: '#FFD86B',
  50: '#FFFFFF',
  100: '#FFFFFF',
  200: '#FFFDE5',
  300: '#FFF6BD',
  400: '#FFEA94',
  500: '#FFD86B',
  600: '#FFC042',
  700: '#FFA31A',
  800: '#F08000',
  900: '#C75D00',
};
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  content: [],
  theme: {
    colors: {
      ...colors,
      gray: colors.slate,
      green: colors.emerald,
      lightblue: AQUAMARINE_CUSTOM,
      darkblue: DARK_BLUE_CUSTOM,
      purple: PURPLE_CUSTOM,
      pink: PINK_CUSTOM,
      yellow: YELLOW_CUSTOM,
    },
    extend: {
      fontFamily: {
        computer: ['VT323', 'monospace'],
        exp: ['Exo 2', 'sans-serif'],
        'sans-serif': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
