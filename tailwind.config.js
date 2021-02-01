const defaultSans = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const defaultSerif = [
  "Georgia",
  "Cambria",
  '"Times New Roman"',
  "Times",
  "serif",
];


module.exports = {
  purge: {
    mode: "all",
    content: [
      "./components/**/*.{js,ts,jsx,tsx,css}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: { deep: [/blur$/] },
    },
  },
  darkMode: "class",
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        "neon-orange": "#f92300",
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
      fontSize: {
        "7xl": "4.5rem",
      },
      spacing: {
        14: "3.375rem",
      },
      borderWidth:{
        3: '3px',
      },
      container: {
        center: true,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
            },
            "ol > li::before": {
              color: theme("colors.gray.700"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.700"),
            },
            a: {
              color: theme("colors.neon-orange"),
            },
          },
        },

        dark: {
          css: {
            color: theme("colors.gray.100"),
            blockquote: {
              borderLeftColor: theme("colors.gray.300"),
            },
            "ol > li::before": {
              color: theme("colors.gray.300"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.300"),
            },
            a: {
              color: theme("colors.yellow.500"),
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            h4: {
              color: theme("colors.gray.100"),
            },
            h5: {
              color: theme("colors.gray.100"),
            },
            h6: {
              color: theme("colors.gray.100"),
            },
            strong: {
              color: theme("colors.gray.100"),
            },
            code: {
              color: theme("colors.gray.100"),
            },
            figcaption: {
              color: theme("colors.gray.100"),
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
      }),
    },
    fontFamily: {
      display: ["Open Sans", ...defaultSans],
      body: ["Merriweather", ...defaultSerif],
      roboto: ['Roboto', 'sans-serif'],
      arial: ['Arial', 'sans-serif'],
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus', 'last'],
    padding: ['responsive', 'hover', 'focus'],
  },
  plugins: [require("@tailwindcss/typography")],
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
};
