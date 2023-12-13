/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '0.9rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        bangers: 'Bangers',
        quicksand: 'Quicksand',
        robotoCondensed: 'Roboto Condensed'
      },
      colors: {
        primary: '#d1411e',
        secondary: '#ffa323',
        tertiary: '#331812',
        black: '#231714',
        orange: '#FF7A30',
      },
      backgroundImage: {
        pattern: 'url(/src/assets/pattern.png)'
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

