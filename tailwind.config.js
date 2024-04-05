// import { tailwindKeyframes } from './src/data/tailwindKeyframes'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '290px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      colors: {
        // main colors
        max: '#363537',
        min: '#FFFFFF',
        accent: '#F5593D',
        // text colors
        med: '#3C4858',
        light: '#9DA3AD',
        // sub colors
        subRed: '#E91E63',
        subBlue: '#00BCD4',
        subYellow: '#DD9933',
        subGreen: '#81D742',
        subPurple: '#8224E3',
      },
    },
  },
  plugins: [],
}
