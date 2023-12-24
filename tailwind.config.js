/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'intro': '#fb923c',
        'skills': '#22c55e',
        'projects': '#0ea5e9',
        'contact': '#facc15',
      },
      transitionDuration: {
        'DEFAULT': '250ms'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      },
      keyframes: {
        'pulse': {
          '0%': { opacity: '0.2' },
          '100%': { opacity: '0.9' },
        }
      },
      spacing: {
        '26': '6.5rem'
      },
      cursor: {
        'pointer': 'url("/src/assets/images/cursor-pointer2.png"), auto'
      }
    },


    fontFamily: {
      'Ubuntu': 'Ubuntu',
    },
    container: {
      padding: {
        DEFAULT: '14px',
        'lg': '24px',
        'xl': '32px'
      }
    },
  },
  plugins: [],
}

