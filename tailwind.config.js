/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
          "base-black": '#373737',
          "base-white": '#FFFFFF',
          "gob-primary": {
            50: '#BFEEFF',
            100: '#A1D2FF',
            150: '#83B6FF',
            200: '#649CFD',
            300: '#4B85F9',
            400: '#4282E0',
            500: '#0F69C4', // base
            600: '#0051A8',
            700: '#003B8D',
            800: '#002673',
            900: '#00135A',
          },
          'jun-soft-green': '#D1FAE5',
          'jun-green': '#ECFDF5',

          success: '#2E7D32',
          "soft-success": '#C8E6C9',
          info: '#1565C0',
          "soft-info": '#BBDEFB',
          error: '#CD1E2C',
          "soft-error": '#FFCDD2',
          warning: '#D84315',
          "soft-warning": '#FFCCBC',
        },
        backgroundColor: {
          "base-black": '#373737',
          "base-white": '#FFFFFF',
          "gob-primary": {
            50: '#BFEEFF',
            100: '#A1D2FF',
            150: '#83B6FF',
            200: '#649CFD',
            300: '#4B85F9',
            400: '#4282E0',
            500: '#0F69C4', // base
            600: '#0051A8',
            700: '#003B8D',
            800: '#002673',
            900: '#00135A',
          },

          success: '#2E7D32',
          "soft-success": '#C8E6C9',
          info: '#1565C0',
          "soft-info": '#BBDEFB',
          error: '#CD1E2C',
          "soft-error": '#FFCDD2',
          warning: '#D84315',
          "soft-warning": '#FFCCBC',
        },
        fontFamily: {
          'gob': ['"Open Sans"', 'sans-serif'],
          'gob-slab': ['"Roboto Slab"', 'sans-serif'],
        },
        fontSize:{
          'body-l': '1.5rem',
          'body-m': '1.18rem',
          'body-s': '1rem',
          'body-xs': '0.875rem',
        }
      },
  },
  plugins: [],
}