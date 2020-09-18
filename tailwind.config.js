module.exports = {
  purge: {
    content: [
      './src/components/**/*.jsx',
      './src/components/**/*.js',
      './src/pages/**/*.jsx',
      './src/pages/**/*.js',
    ],
    options: {
      whitelist: ['bg-red-500', 'px-4'],
      whitelistPatternsChildren: [/carousel/, /html/],
    },
  },
  theme: {
    screens: {
      sm: '640px',
      md: '960px',
      lg: '1280px',
      xl: '1600px',
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
      colors: {
        secondaryColor: '#1F2D41',
        themeGray: {
          default: 'EDEFF0',
          100: '#f5f5f5',
          200: '#f2f2f2',
          300: '#e3e3e3',
          400: '#a3a3a3',
          500: '#808080',
          600: '#555555',
          700: '#444444',
          800: '#333333',
        },
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus', 'last'],
    padding: ['responsive', 'hover', 'focus'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
};
