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
    extend: {},
  },
  plugins: [],
}
