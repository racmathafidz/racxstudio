const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        'theme-purple': '#6610f2',
        'dark-theme-purple': '#520dc2',
        'theme-blue': '#152C5B'
      }
    },
  },
  variants: {
    extend: {
      padding: ['hover']
    },
  },
  plugins: [],
}
