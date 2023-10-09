/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'ProximaNova': ['ProximaNova', 'arial'],
    },
    screens: {
      'xl': '1400px',
      'xs' : '106px',
    }
  },
  },
  plugins: [],
}

