/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'logo-spin': 'App-logo-spin infinite 20s linear',
      },
      keyframes: {
        'App-logo-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
