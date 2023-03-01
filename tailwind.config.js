/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      background: '#f5f5f5',
      primary: {
        50: '#eff7ff',
        100: '#dcecfd',
        200: '#c1dffc',
        300: '#96ccfa',
        400: '#64aff6',
        500: '#408ff1',
        600: '#2a72e6',
        700: '#2360db',
        800: '#224cab',
        900: '#214287',
      },

      gray: '#E5E0FF',
    },
  },
  plugins: [],
};
