const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1240px',
      '2xl': '1500px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '0',
      },
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: {
        50: '#EDF7EF',
        100: '#D7ECDA',
        500: '#3C7D46',
      },
      secondary: {
        50: '#FFF7EB',
        100: '#FFEDD3',
        500: '#E49A49',
      },
      tertiary: {
        50: '#EFF2F4',
        100: '#DBE1E6',
        500: '#465668',
      },
      red: {
        50: '#F6DDDF',
        500: '#C31C27',
      },
      blue: {
        50: '#E6F4FF',
        500: '#0394FC',
      },
      orange: {
        50: '##FFF1E8',
        500: '#DD7437',
      },
      yellow: {
        50: '#FDF3DF',
        500: '#F2AC29',
      },
      gray: {
        50: '#F0F0F0',
        100: '#D1D1D1',
        300: '#A3A3A3w',
        500: '#767676',
        700: '#484848',
        900: '#1A1A1A',
      },
      dark: {
        1: '#2C2926',
        2: '#4A4745',
      },
      light: '#F6F5F4',
      outline: {
        1: '#D1D1D1',
        2: '#E6E6E6',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
