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
      'mine-shaft': {
        50: '#f7f7f7',
        100: '#e3e3e3',
        200: '#c8c8c8',
        300: '#a4a4a4',
        400: '#818181',
        500: '#666666',
        600: '#515151',
        700: '#434343',
        800: '#383838',
        900: '#323232',
      },
    },
  },
  plugins: [],
};
