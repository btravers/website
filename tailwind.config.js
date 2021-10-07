module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-800": '#2B2D42',
        "primary-400": '#676B9C',
        "primary-200": '#E1E1EB',
        "secondary": '#EF233C',
        "neutral": '#8D99AE',
      },
      screens: {
        "print": {
          "raw": "print",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
