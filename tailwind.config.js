/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#140e7a',
          secondary: '#33a6e0',
          accent: '#77a7d6',
          neutral: '#131420',
          'base-100': '#343e46',
          info: '#4b8fd8',
          success: '#4ae3b8',
          warning: '#efd471',
          error: '#e9755d',
        },
      },
    ],
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
